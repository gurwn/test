'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Camera, Check, Sparkles, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { UserProfile, FaceShape, Gender, HairLength, HairThickness, HairTexture } from '@/lib/types';

// Steps
const STEPS = ['Gender', 'Photos', 'Face Shape', 'Condition', 'Preferences'];

export default function AnalysisWizard() {
    const router = useRouter();
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
            vibe: [],
            stylingDifficulty: 'medium',
            lengthGoal: 'keep',
        },
    });

    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            // Finish
            startAnalysis();
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        } else {
            router.back();
        }
    };

    const startAnalysis = () => {
        setIsLoading(true);
        // Simulate analysis
        let p = 0;
        const interval = setInterval(() => {
            p += 2;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                // Save to localStorage so Result page can read it (Simple MVP)
                localStorage.setItem('hairfit_user_profile', JSON.stringify(profile));
                router.push('/result');
            }
        }, 50); // 2.5 seconds total
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
                                onClick={() => setProfile({ ...profile, gender: 'male' })}
                                className={`cursor-pointer p-6 rounded-2xl border-2 flex flex-col items-center gap-4 transition-all ${profile.gender === 'male'
                                    ? 'border-indigo-500 bg-indigo-500/10'
                                    : 'border-white/10 hover:bg-white/5'
                                    }`}
                            >
                                <div className="text-4xl">👨</div>
                                <span className="font-semibold text-lg">Male</span>
                            </div>
                            <div
                                onClick={() => setProfile({ ...profile, gender: 'female' })}
                                className={`cursor-pointer p-6 rounded-2xl border-2 flex flex-col items-center gap-4 transition-all ${profile.gender === 'female'
                                    ? 'border-pink-500 bg-pink-500/10'
                                    : 'border-white/10 hover:bg-white/5'
                                    }`}
                            >
                                <div className="text-4xl">👩</div>
                                <span className="font-semibold text-lg">Female</span>
                            </div>
                        </div>
                    </div>
                );


            case 1: // Photos
                return (
                    <div className="space-y-6 animate-in-fade">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold">사진을 업로드해주세요</h2>
                            <p className="text-muted-foreground">정면, 측면, 후면 사진이 필요합니다.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {(['front', 'side', 'back'] as const).map((angle) => (
                                <div key={angle} className="relative aspect-[3/4] bg-white/5 rounded-xl border border-dashed border-white/20 overflow-hidden group hover:border-indigo-500/50 transition-colors">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        capture="user" // Opens camera directly on mobile if supported
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = async () => {
                                                    const url = reader.result as string;
                                                    setProfile(prev => ({
                                                        ...prev,
                                                        images: { ...prev.images!, [angle]: url }
                                                    }));

                                                    // Auto-Analyze if Front photo
                                                    if (angle === 'front') {
                                                        setIsLoading(true);
                                                        try {
                                                            const res = await fetch('/api/analyze-face', {
                                                                method: 'POST',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify({ image: url })
                                                            });
                                                            const data = await res.json();
                                                            if (data.faceShape) {
                                                                setProfile(p => ({
                                                                    ...p,
                                                                    gender: data.gender || p.gender,
                                                                    faceShape: data.faceShape.toLowerCase() || 'oval',
                                                                    hairCondition: { ...p.hairCondition, texture: data.hairTexture || 'straight' }
                                                                }));
                                                            }
                                                        } catch (e) {
                                                            console.error("Auto-analysis failed", e);
                                                        } finally {
                                                            setIsLoading(false);
                                                        }
                                                    }
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                    {profile.images?.[angle] ? (
                                        <>
                                            <img src={profile.images[angle]} alt={angle} className="w-full h-full object-cover" />
                                            {isLoading && angle === 'front' && (
                                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center animate-in fade-in">
                                                    <Sparkles className="w-8 h-8 text-indigo-400 animate-spin mb-2" />
                                                    <span className="text-xs font-bold text-indigo-200">AI Analyzing...</span>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                                            <Camera className="w-8 h-8 mb-2 opacity-50" />
                                            <span className="capitalize text-sm font-medium">{angle} View</span>
                                            <span className="text-xs opacity-50 mt-1">Tap to Open Camera</span>
                                        </div>
                                    )}
                                    {/* Status Indicator */}
                                    {profile.images?.[angle] && (
                                        <div className="absolute top-2 right-2 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-4 rounded-lg flex gap-3 items-start">
                                <div><Sparkles className="w-5 h-5 text-indigo-400 mt-1" /></div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold text-indigo-300">AI Auto-Analysis Active</h4>
                                    <p className="text-xs text-muted-foreground">
                                        Photos are automatically analyzed to pre-fill your hair profile.
                                        <br />Detailed reports are available for <span className="text-yellow-400 font-bold">Premium Subscribers</span>.
                                    </p>
                                </div>
                            </div>

                            {/* Premium Teaser (Blurred) */}
                            <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-black/20 p-6 space-y-4">
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-3">
                                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                                    </div>
                                    <h3 className="font-bold text-white mb-1">Unlock Premium Analysis</h3>
                                    <p className="text-xs text-gray-400 mb-4">Get detailed face symmetry report & personal color analysis.</p>
                                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-0">
                                        Subscribe - $2.99/mo
                                    </Button>
                                </div>

                                {/* Fake Content Behind Blur */}
                                <div className="space-y-4 opacity-50">
                                    <div className="h-4 w-3/4 bg-white/20 rounded" />
                                    <div className="h-4 w-1/2 bg-white/20 rounded" />
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="h-24 bg-white/10 rounded" />
                                        <div className="h-24 bg-white/10 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 2: // Face Shape
                return (
                    <div className="space-y-6 animate-in-fade">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold">얼굴형을 선택해주세요</h2>
                            <p className="text-muted-foreground">가장 비슷하다고 생각되는 형태를 골라주세요.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {(['oval', 'round', 'square', 'long', 'triangle', 'heart', 'diamond'] as FaceShape[]).map((shape) => (
                                <div
                                    key={shape}
                                    onClick={() => setProfile(prev => ({ ...prev, faceShape: shape }))}
                                    className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${profile.faceShape === shape
                                        ? 'border-indigo-500 bg-indigo-500/20 ring-1 ring-indigo-500'
                                        : 'border-white/10 hover:bg-white/5'
                                        }`}
                                >
                                    {/* Placeholder Icon for shape */}
                                    <div className="w-12 h-16 bg-white/10 rounded-full mb-2 flex items-center justify-center text-xs text-muted-foreground border border-white/5">
                                        {/* In a real app, I'd put specific SVGs here */}
                                        img
                                    </div>
                                    <span className="capitalize font-medium text-sm">{shape}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 3: // Condition
                return (
                    <div className="space-y-6 animate-in-fade">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold">모발 상태 체크</h2>
                            <p className="text-muted-foreground">현재 상태를 정확히 알려주세요.</p>
                        </div>

                        <div className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                            {/* Length */}
                            <div className="space-y-3">
                                <Label>현재 기장</Label>
                                <div className="flex gap-2">
                                    {(['short', 'medium', 'long'] as HairLength[]).map(l => (
                                        <Button
                                            key={l}
                                            variant="outline"
                                            className={`flex-1 capitalize ${profile.hairCondition.length === l ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400' : 'bg-transparent border-white/10'}`}
                                            onClick={() => setProfile(p => ({ ...p, hairCondition: { ...p.hairCondition, length: l } }))}
                                        >
                                            {l}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Texture */}
                            <div className="space-y-3">
                                <Label>모질 (직모/곱슬)</Label>
                                <div className="flex gap-2">
                                    {(['straight', 'wavy', 'curly'] as HairTexture[]).map(t => (
                                        <Button
                                            key={t}
                                            variant="outline"
                                            className={`flex-1 capitalize ${profile.hairCondition.texture === t ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400' : 'bg-transparent border-white/10'}`}
                                            onClick={() => setProfile(p => ({ ...p, hairCondition: { ...p.hairCondition, texture: t } }))}
                                        >
                                            {t}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Problems */}
                            <div className="space-y-3 pt-2">
                                <Label>고민거리 (중복 선택)</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    <div
                                        onClick={() => setProfile(p => ({ ...p, hairCondition: { ...p.hairCondition, sideVolume: !p.hairCondition.sideVolume } }))}
                                        className={`cursor-pointer p-3 rounded-lg border text-sm flex items-center gap-2 ${profile.hairCondition.sideVolume ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10'}`}
                                    >
                                        {profile.hairCondition.sideVolume ? <Check className="w-4 h-4 text-indigo-400" /> : <div className="w-4 h-4 border rounded-sm border-white/30" />}
                                        옆머리가 떠요
                                    </div>
                                    <div
                                        onClick={() => setProfile(p => ({ ...p, hairCondition: { ...p.hairCondition, thinning: !p.hairCondition.thinning } }))}
                                        className={`cursor-pointer p-3 rounded-lg border text-sm flex items-center gap-2 ${profile.hairCondition.thinning ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10'}`}
                                    >
                                        {profile.hairCondition.thinning ? <Check className="w-4 h-4 text-indigo-400" /> : <div className="w-4 h-4 border rounded-sm border-white/30" />}
                                        숱이 적어요/탈모
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                );

            case 4: // Preferences
                return (
                    <div className="space-y-6 animate-in-fade">
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold">어떤 스타일을 원하세요?</h2>
                            <p className="text-muted-foreground">원하는 느낌을 알려주세요.</p>
                        </div>

                        <div className="space-y-8 px-2">
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <Label>손질 난이도</Label>
                                    <span className="text-sm text-indigo-400 font-medium capitalize">{profile.preferences.stylingDifficulty}</span>
                                </div>
                                <div className="pt-2">
                                    <Slider
                                        defaultValue={[1]}
                                        max={2}
                                        step={1}
                                        className="cursor-pointer"
                                        onValueChange={(val) => {
                                            const map = ['easy', 'medium', 'hard'];
                                            setProfile(p => ({ ...p, preferences: { ...p.preferences, stylingDifficulty: map[val[0]] as any } }));
                                        }}
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                        <span>쉬움 (털어 말리기)</span>
                                        <span>보통 (약간의 드라이)</span>
                                        <span>어려움 (왁스/스프레이)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Label>기장 목표</Label>
                                <RadioGroup
                                    defaultValue="keep"
                                    onValueChange={(val) => setProfile(p => ({ ...p, preferences: { ...p.preferences, lengthGoal: val as any } }))}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg border border-white/10">
                                        <RadioGroupItem value="keep" id="r1" />
                                        <Label htmlFor="r1" className="flex-1 cursor-pointer">현재 기장 유지</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg border border-white/10">
                                        <RadioGroupItem value="cut" id="r2" />
                                        <Label htmlFor="r2" className="flex-1 cursor-pointer">짧게 자르고 싶음</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-white/5 p-3 rounded-lg border border-white/10">
                                        <RadioGroupItem value="grow" id="r3" />
                                        <Label htmlFor="r3" className="flex-1 cursor-pointer">기르고 싶음 (거지존 탈출)</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-4">
                                <Label>원하는 분위기 (태그 선택)</Label>
                                <div className="flex flex-wrap gap-2">
                                    {['clean', 'trendy', 'pro', 'manly', 'cute', 'hip', 'soft'].map(tag => (
                                        <div
                                            key={tag}
                                            onClick={() => {
                                                const current = profile.preferences.vibe;
                                                const next = current.includes(tag) ? current.filter(t => t !== tag) : [...current, tag];
                                                setProfile(p => ({ ...p, preferences: { ...p.preferences, vibe: next } }));
                                            }}
                                            className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer transition-colors ${profile.preferences.vibe.includes(tag)
                                                ? 'bg-indigo-500 border-indigo-500 text-white'
                                                : 'bg-transparent border-white/20 text-muted-foreground hover:border-white/50'
                                                }`}
                                        >
                                            #{tag}
                                        </div>
                                    ))}
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
                <div className="relative w-32 h-32">
                    {/* Scanning Animation */}
                    <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full animate-ping" />
                    <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl">🧬</span>
                    </div>
                </div>

                <div className="space-y-2 max-w-xs mx-auto">
                    <h3 className="text-xl font-bold">Analyzing your features...</h3>
                    <p className="text-sm text-muted-foreground animate-pulse">
                        {progress < 30 && "Scanning face shape..."}
                        {progress >= 30 && progress < 60 && "Checking hair texture..."}
                        {progress >= 60 && progress < 90 && "Matching best styles..."}
                        {progress >= 90 && "Generating report..."}
                    </p>
                    <Progress value={progress} className="h-2" />
                </div>
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
                <div className="flex gap-1">
                    {STEPS.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 w-8 rounded-full transition-colors ${idx <= currentStep ? 'bg-indigo-500' : 'bg-white/10'}`}
                        />
                    ))}
                </div>
                <div className="w-9" /> {/* Spacer */}
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

            {/* Bottom Action */}
            <div className="p-6 bg-gradient-to-t from-background to-transparent sticky bottom-0 z-10">
                <Button
                    size="lg"
                    className="w-full h-14 text-lg bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20"
                    onClick={handleNext}
                >
                    {currentStep === STEPS.length - 1 ? 'See Results' : 'Next'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </div>
        </div>
    );
}
