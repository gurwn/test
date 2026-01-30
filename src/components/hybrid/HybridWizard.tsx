"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS, HAIRSTYLES, FEMALE_QUESTIONS, FEMALE_HAIRSTYLES } from '@/lib/survey/data';
import { recommendStyle } from '@/lib/survey/logic';
import { QuestionId } from '@/lib/survey/types';
import { FaceShape } from '@/lib/faceAnalysis';
import { ChevronRight, Camera, Check, RefreshCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResultCard from '@/components/survey/ResultCard';
import { useLanguage } from '@/contexts/LanguageContext';
import SubscriptionModal from '@/components/payment/SubscriptionModal';
import GoogleAdSense from '@/components/ads/GoogleAdSense';

type AnalysisResult = {
    shape: FaceShape;
    confidence: number;
    scores: Record<FaceShape, number>;
    image: string;
};

const SHAPE_LABELS: Record<FaceShape, string> = {
    oval: '계란형',
    round: '둥근형',
    square: '각형',
    long: '긴형',
    heart: '하트형',
    diamond: '다이아몬드형',
    triangle: '삼각형',
};

export default function HybridWizard() {
    const { t } = useLanguage();
    const [step, setStep] = useState(0); // 0:Gender, 1:Photo, 2:ManualSelect, 3-5:Survey, 6:Result
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [showPremiumModal, setShowPremiumModal] = useState(false);

    // Analysis State
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [previewImg, setPreviewImg] = useState<string | null>(null);

    // Survey State
    const [answers, setAnswers] = useState<Record<QuestionId, string>>({
        forehead: '', vibe: '', maintenance: ''
    });
    const [finalStyleId, setFinalStyleId] = useState<string | null>(null);

    // Active Data based on Gender
    const activeQuestions = gender === 'male' ? QUESTIONS : FEMALE_QUESTIONS;
    const activeData = gender === 'male' ? HAIRSTYLES : FEMALE_HAIRSTYLES;

    // Load MediaPipe
    useEffect(() => {
        import('@/lib/faceAnalysis').then(({ FaceAnalysisService }) => {
            FaceAnalysisService.initialize().catch(console.error);
        });
    }, []);

    const startAnalysis = async (imageUrl: string) => {
        setPreviewImg(imageUrl);
        setIsAnalyzing(true);

        try {
            const img = new Image();
            img.src = imageUrl;
            await img.decode();

            const { FaceAnalysisService } = await import('@/lib/faceAnalysis');

            // STATABILITY FIX: Reset previous instance to prevent caching
            FaceAnalysisService.reset();

            const result = await FaceAnalysisService.analyze(img);

            // Draw Visuals
            if (canvasRef.current && result.landmarks) {
                const cvs = canvasRef.current;
                cvs.width = img.naturalWidth;
                cvs.height = img.naturalHeight;
                const ctx = cvs.getContext('2d');
                if (ctx) {
                    ctx.clearRect(0, 0, cvs.width, cvs.height);
                    ctx.fillStyle = '#6366f1';
                    result.landmarks.forEach((p: any) => {
                        ctx.beginPath();
                        ctx.arc(p.x * cvs.width, p.y * cvs.height, 2, 0, 2 * Math.PI);
                        ctx.fill();
                    });
                }
            }

            setTimeout(() => {
                setAnalysisResult({
                    shape: result.shape,
                    confidence: result.confidence,
                    scores: result.scores,
                    image: imageUrl
                });
                setIsAnalyzing(false);
                setStep(3); // Skip manual step, go to Q1
            }, 2000);
        } catch (e) {
            console.error(e);
            setIsAnalyzing(false);
            alert("얼굴 분석 실패. 사진을 확인해주세요.");
        }
    };

    const handleSurveyAnswer = (value: string) => {
        const qIndex = step - 3;
        const currentQ = activeQuestions[qIndex];

        const newAnswers = { ...answers, [currentQ.id]: value };
        setAnswers(newAnswers);

        if (step < 5) { // 3 -> 4 -> 5
            setStep(step + 1);
        } else {
            // Done -> Recommend
            const styleId = recommendStyle(
                newAnswers.forehead,
                newAnswers.vibe,
                newAnswers.maintenance,
                analysisResult?.shape,
                gender
            );
            setFinalStyleId(styleId);
            setStep(6);
        }
    };

    // 1. Gender Step
    if (step === 0) {
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-center">{t('selectGender')}</h2>
                <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => { setGender('male'); setStep(1); }} className="p-8 border-2 border-border hover:border-indigo-500 rounded-2xl bg-secondary/50 hover:bg-indigo-500/10 transition-all group">
                        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">👨</div>
                        <div className="font-bold text-lg text-foreground">{t('male')}</div>
                    </button>
                    <button onClick={() => { setGender('female'); setStep(1); }} className="p-8 border-2 border-border hover:border-pink-500 rounded-2xl bg-secondary/50 hover:bg-pink-500/10 transition-all group">
                        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">👩</div>
                        <div className="font-bold text-lg text-foreground">{t('female')}</div>
                    </button>
                </div>
            </div>
        );
    }

    // 2. Photo Step
    if (step === 1) {
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 text-center">
                <h2 className="text-2xl font-bold">{t('featureFace')}</h2>
                <p className="text-muted-foreground">{t('uploadGuide')}</p>

                {isAnalyzing ? (
                    <div className="relative max-w-xs mx-auto aspect-[3/4] rounded-xl overflow-hidden border-2 border-indigo-500 shadow-2xl">
                        <img src={previewImg!} className="w-full h-full object-cover opacity-50" alt="Preview" />
                        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/70 px-4 py-2 rounded-full text-white font-bold animate-pulse">
                                {t('analyzing')}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="max-w-xs mx-auto relative aspect-[3/4] bg-secondary/50 rounded-xl border-dashed border-2 border-border hover:border-indigo-500 transition-colors flex flex-col items-center justify-center cursor-pointer group">
                            <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => {
                                const f = e.target.files?.[0];
                                if (f) {
                                    const r = new FileReader();
                                    r.onload = () => startAnalysis(r.result as string);
                                    r.readAsDataURL(f);
                                }
                            }} />
                            <Camera className="w-12 h-12 mb-4 opacity-50 group-hover:text-indigo-500 transition-colors text-foreground" />
                            <span className="font-medium text-foreground">{t('uploadPhoto')}</span>
                        </div>

                        <div className="text-sm text-muted-foreground">{t('or')}</div>

                        <Button
                            variant="outline"
                            onClick={() => setStep(2)}
                            className="w-full max-w-xs border-border hover:bg-secondary"
                        >
                            {t('selfCheckBtn')}
                        </Button>
                    </div>
                )}

                {/* AD UNIT */}
                <GoogleAdSense slot="1234567890" />
            </div>
        );
    }

    // 3. Manual Face Shape Step (Step 2)
    if (step === 2) {
        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 w-full max-w-md">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>Self Check</span>
                    <span>1 / 4 ({t('featureFace')})</span>
                </div>

                <h2 className="text-2xl font-bold mb-2">{t('selfCheckTitle')}</h2>
                <p className="text-sm text-muted-foreground mb-6">{t('selfCheckDesc')}</p>

                <div className="grid grid-cols-2 gap-3">
                    {['oval', 'round', 'square', 'long', 'heart', 'diamond', 'triangle'].map((shape) => (
                        <button
                            key={shape}
                            onClick={() => {
                                setAnalysisResult({
                                    shape: shape as FaceShape,
                                    confidence: 1.0,
                                    scores: { oval: 0, round: 0, square: 0, long: 0, heart: 0, diamond: 0, triangle: 0, [shape]: 100 } as any,
                                    image: '' // No image
                                });
                                setStep(3); // Go to Q1
                            }}
                            className="p-4 bg-secondary/50 hover:bg-secondary border border-border rounded-xl transition-all text-left group"
                        >
                            <div className="font-bold mb-1 group-hover:text-indigo-400 text-lg text-foreground">{t('shape_' + shape)}</div>
                            <div className="text-xs text-muted-foreground">
                                {t(`desc_${shape}`)}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // 4. Survey Steps (3, 4, 5)
    if (step >= 3 && step <= 5) {
        const qIndex = step - 3;
        const q = activeQuestions[qIndex];

        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 w-full max-w-md">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>{gender === 'male' ? t('styleCheck') : t('myStyleCheck')}</span>
                    <span>{qIndex + 1 + (step === 2 ? 1 : 1)} / {activeQuestions.length + 1}</span>
                </div>

                <h2 className="text-2xl font-bold mb-8">{q.title}</h2>

                <div className="grid gap-3">
                    {q.options.map(opt => (
                        <button
                            key={opt.value}
                            onClick={() => handleSurveyAnswer(opt.value)}
                            className="w-full p-4 text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                        >
                            <div className="font-bold text-lg mb-1 group-hover:text-indigo-400 transition-colors">{opt.label}</div>
                            <div className="text-sm text-muted-foreground">{opt.description}</div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    // 5. Final Result
    if (step === 6 && finalStyleId) {
        const styleData = activeData[finalStyleId];

        // Sort scores
        const sortedScores = analysisResult ? Object.entries(analysisResult.scores)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3) : [];

        if (!styleData) return <div>Error: Style data not found ({finalStyleId})</div>;

        return (
            <div className="animate-in zoom-in fade-in duration-500 w-full max-w-md pb-20">
                <ResultCard
                    styleData={styleData}
                    onReset={() => window.location.reload()}
                />

                {/* AI Analysis Breakdown */}
                {analysisResult && analysisResult.image && (
                    <div className="mt-6 space-y-4">
                        <div className="relative overflow-hidden rounded-xl border border-indigo-500/30 p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-pulse" />
                            <Button
                                onClick={() => setShowPremiumModal(true)}
                                className="w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-lg shadow-lg shadow-indigo-500/20"
                            >
                                <Sparkles className="w-5 h-5 mr-2 animate-spin-slow" />
                                {t('simulateOnMyFace')}
                            </Button>
                        </div>

                        <div className="p-5 bg-black/40 border border-white/10 rounded-xl">
                            <h3 className="text-lg font-bold mb-4 flex items-center">
                                <span className="bg-indigo-500 w-2 h-2 rounded-full mr-2" />
                                {t('aiAnalysisResult')}
                            </h3>

                            <div className="flex items-center justify-between mb-4">
                                <span className="text-muted-foreground">{t('mainShape')}</span>
                                <span className="text-indigo-400 font-bold uppercase text-lg">
                                    {t(analysisResult.shape)}
                                </span>
                            </div>

                            <div className="space-y-3">
                                {sortedScores.map(([shape, score]) => (
                                    <div key={shape} className="space-y-1">
                                        <div className="flex justify-between text-xs text-zinc-400">
                                            <span>{t(shape)}</span>
                                            <span>{score.toFixed(1)}%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${score}%` }}
                                                className="h-full bg-indigo-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-zinc-500 leading-relaxed">
                                {t('resultDesc')}
                                <span className="text-indigo-400 font-bold mx-1">{styleData.nameKo.split('(')[0]}</span>
                                {t('resultDescEnd')}
                            </div>
                        </div>
                    </div>
                )}

                {/* Manual Check Result Display (Simple Version) */}
                {analysisResult && !analysisResult.image && (
                    <div className="mt-6 p-5 bg-black/40 border border-white/10 rounded-xl">
                        <h3 className="text-lg font-bold mb-4 flex items-center">
                            <span className="bg-indigo-500 w-2 h-2 rounded-full mr-2" />
                            {t('manualResult')}
                        </h3>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">{t('selectedShape')}</span>
                            <span className="text-indigo-400 font-bold uppercase text-lg">
                                {t(analysisResult.shape)}
                            </span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-zinc-500 leading-relaxed">
                            {t('manualDesc')}
                        </div>
                    </div>
                )}

                {/* AD UNIT - Result Page (Bottom) */}
                <GoogleAdSense slot="1234567890" />

                <SubscriptionModal isOpen={showPremiumModal} onClose={() => setShowPremiumModal(false)} />
            </div>
        );
    }

    return null;
}
