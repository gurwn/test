'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Camera, Check, Sparkles, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { UserProfile, Gender } from '@/lib/types';
import { useLanguage } from '@/contexts/LanguageContext';

// Simple Flow: Gender -> Upload -> Analysis
const STEPS = [1, 2, 3];

export default function AnalysisWizard() {
    const router = useRouter();
    const { t } = useLanguage();
    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    // Form State
    const [profile, setProfile] = useState<UserProfile>({
        gender: 'male',
        images: { front: '', side: '', back: '' },
        faceShape: 'oval',
        hairCondition: {
            length: 'medium',
            thickness: 'normal',
            texture: 'straight',
            sideVolume: false,
            thinning: false,
        },
        preferences: {
            vibe: ['trendy'], // Default
            stylingDifficulty: 'medium',
            lengthGoal: 'keep',
        },
    });

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        } else {
            router.back();
        }
    };

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [previewImg, setPreviewImg] = useState<string | null>(null);

    // Initialize Service on Mount
    useEffect(() => {
        import('@/lib/faceAnalysis').then(({ FaceAnalysisService }) => {
            FaceAnalysisService.initialize().catch(console.error);
        });
    }, []);

    const drawVisuals = (landmarks: any[], ctx: CanvasRenderingContext2D, width: number, height: number) => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#6366f1'; // Indigo-500
        ctx.strokeStyle = '#818cf8'; // Indigo-400
        ctx.lineWidth = 2;

        // Draw Key Points (Dots)
        const keyIndices = [10, 152, 234, 454, 132, 361]; // Forehead, Chin, Cheeks, Jaws
        landmarks.forEach((p, i) => {
            // Draw all points as small dots for techy feel
            if (i % 2 === 0) {
                const x = p.x * width;
                const y = p.y * height;
                ctx.beginPath();
                ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.fill();
            }
        });

        // Highlight Key Metric Points (Larger)
        keyIndices.forEach(i => {
            const p = landmarks[i];
            const x = p.x * width;
            const y = p.y * height;

            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = '#4f46e5';
            ctx.fill();
            ctx.stroke();
        });

        // Connect Jawline (132 -> ... -> 152 -> ... -> 361)
        // Note: Mesh indices are complex, simplifying connecting logic for visual effect
        // We will draw lines between key measurement points
        ctx.beginPath();
        const p132 = landmarks[132];
        const p152 = landmarks[152];
        const p361 = landmarks[361];

        ctx.moveTo(p132.x * width, p132.y * height);
        ctx.lineTo(p152.x * width, p152.y * height);
        ctx.lineTo(p361.x * width, p361.y * height);
        ctx.stroke();
    };

    const startAnalysis = async (imageUrl: string) => {
        setPreviewImg(imageUrl);
        setIsLoading(true);
        // Start fake progress for UX
        let p = 0;
        const interval = setInterval(() => {
            p = Math.min(p + 10, 90);
            setProgress(p);
        }, 100);

        try {
            // 1. Load Image
            const img = new Image();
            img.src = imageUrl;
            await img.decode();

            // 2. Real Analysis
            const { FaceAnalysisService } = await import('@/lib/faceAnalysis');
            const result = await FaceAnalysisService.analyze(img);

            clearInterval(interval);
            setProgress(100);

            // 3. Visual Feedback (Draw Mesh)
            if (canvasRef.current && result.landmarks) {
                const cvs = canvasRef.current;
                cvs.width = img.naturalWidth;
                cvs.height = img.naturalHeight;
                const ctx = cvs.getContext('2d');
                if (ctx) {
                    drawVisuals(result.landmarks, ctx, cvs.width, cvs.height);
                }
            }

            // 4. Save & Redirect (Delay to show visuals)
            setTimeout(() => {
                const finalProfile = {
                    ...profile,
                    images: { ...profile.images, front: imageUrl },
                    faceShape: result.shape, // Real Data!
                    // hairCondition: ... (Still mock or future analysis)
                };

                localStorage.setItem('hairfit_user_profile', JSON.stringify(finalProfile));
                router.push('/result');
            }, 2500); // 2.5s delay to let user see the analysis

        } catch (e) {
            console.error("Analysis failed", e);
            clearInterval(interval);
            alert("얼굴을 찾을 수 없습니다. 다시 시도해주세요.");
            setIsLoading(false);
            setProgress(0);
            setPreviewImg(null);
        }
    };


    // --- Render Steps ---
    const renderStepContent = () => {
        switch (currentStep) {
            case 0: // Gender
                return (
                    <div className="space-y-6 animate-in-fade">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold">성별을 선택해주세요</h2>
                            <p className="text-muted-foreground">성별에 따라 추천 스타일이 달라집니다.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div
                                onClick={() => {
                                    setProfile({ ...profile, gender: 'male' });
                                    setCurrentStep(1);
                                }}
                                className={`cursor-pointer p-6 rounded-2xl border-2 flex flex-col items-center gap-4 transition-all ${profile.gender === 'male'
                                    ? 'border-indigo-500 bg-indigo-500/10'
                                    : 'border-white/10 hover:bg-white/5'
                                    }`}
                            >
                                <div className="text-4xl">👨</div>
                                <span className="font-semibold text-lg">{t('male')}</span>
                            </div>
                            <div
                                onClick={() => {
                                    setProfile({ ...profile, gender: 'female' });
                                    setCurrentStep(1);
                                }}
                                className={`cursor-pointer p-6 rounded-2xl border-2 flex flex-col items-center gap-4 transition-all ${profile.gender === 'female'
                                    ? 'border-pink-500 bg-pink-500/10'
                                    : 'border-white/10 hover:bg-white/5'
                                    }`}
                            >
                                <div className="text-4xl">👩</div>
                                <span className="font-semibold text-lg">{t('female')}</span>
                            </div>
                        </div>
                    </div>
                );

            case 1: // Photos (Direct Upload -> Analysis)
                return (
                    <div className="space-y-6 animate-in-fade">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold">정면 사진을 올려주세요</h2>
                            <p className="text-muted-foreground">AI 분석을 위해 정면 사진 한 장이면 충분합니다.</p>
                        </div>

                        <div className="max-w-xs mx-auto">
                            <div className="relative aspect-[3/4] bg-white/5 rounded-xl border border-dashed border-white/20 overflow-hidden group hover:border-indigo-500/50 transition-colors">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                const url = reader.result as string;
                                                startAnalysis(url);
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                                    <Camera className="w-8 h-8 mb-2 opacity-50" />
                                    <span className="text-sm font-medium">터치하여 사진 업로드</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-in-fade">
                <div className="relative w-64 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-indigo-500/50 shadow-2xl bg-black/50">
                    {previewImg && (
                        <img
                            src={previewImg}
                            alt="Analyzing"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                    )}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                    {/* Scanning Line Animation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-scan" style={{ height: '20%' }} />
                </div>

                <div className="space-y-4 max-w-xs mx-auto">
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                            AI Analyzing...
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {progress < 100 ? "얼굴 윤곽 스캐닝 중..." : "분석 완료! 결과 생성 중..."}
                        </p>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                {/* CSS for Scan Animation */}
                <style jsx global>{`
                    @keyframes scan {
                        0% { top: -20%; }
                        100% { top: 120%; }
                    }
                    .animate-scan {
                        animation: scan 2s linear infinite;
                    }
                `}</style>
            </div>
        );
    }


    return (
        <div className="max-w-md mx-auto min-h-screen flex flex-col">
            {/* Header */}
            <div className="pt-8 pb-4 px-6 flex items-center justify-between">
                <Button variant="ghost" size="icon" onClick={handleBack} className="text-muted-foreground">
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                {/* Simplified Progress Dots */}
                <div className="flex gap-2">
                    <div className={`w-2 h-2 rounded-full ${currentStep === 0 ? 'bg-indigo-500' : 'bg-white/20'}`} />
                    <div className={`w-2 h-2 rounded-full ${currentStep === 1 ? 'bg-indigo-500' : 'bg-white/20'}`} />
                </div>
                <div className="w-9" />
            </div>

            {/* Content */}
            <div className="flex-1 px-6 py-4 overflow-y-auto">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        {renderStepContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
