'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Download, Info, MapPin, Share2, Star, Sparkles, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { UserProfile, HairStyle } from '@/lib/types';
import { getRecommendations } from '@/lib/logic/recommendation';
import VirtualStyler from '@/components/VirtualStyler';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ResultView() {
    const router = useRouter();
    const { language, setLanguage, t } = useLanguage();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [results, setResults] = useState<{ recommended: HairStyle[], others: HairStyle[] } | null>(null);
    const [selectedStyle, setSelectedStyle] = useState<HairStyle | null>(null);
    const [isPremium, setIsPremium] = useState(false); // [PIVOT] Freemium State
    const [showPaywall, setShowPaywall] = useState(false);

    useEffect(() => {
        // Load from local storage
        const saved = localStorage.getItem('hairfit_user_profile');
        if (!saved) {
            router.push('/analyze');
            return;
        }
        const parsed = JSON.parse(saved) as UserProfile;
        setProfile(parsed);

        // Calculate Recommendations
        const recs = getRecommendations(parsed);
        setResults(recs);
        setSelectedStyle(recs.recommended[0]); // Default to #1
    }, [router]);

    if (!profile || !results || !selectedStyle) return null;

    const toggleLanguage = () => {
        setLanguage(language === 'ko' ? 'en' : 'ko');
    };

    return (
        <div className="max-w-md mx-auto min-h-screen pb-24">
            {/* Header */}
            <div className="pt-8 px-6 pb-4 flex items-center justify-between">
                <Button variant="ghost" size="icon" onClick={() => router.push('/')} className="text-muted-foreground">
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                <span className="font-semibold">{t('analysisResult')}</span>
                <Button variant="ghost" size="icon" onClick={toggleLanguage} className="text-muted-foreground">
                    <Globe className="w-5 h-5" />
                    <span className="sr-only">Toggle Language</span>
                </Button>
            </div>

            <div className="px-6 space-y-8 animate-in-fade">

                {/* 1. Top Recommendation */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/30">
                            {t('bestMatch')}
                        </span>
                        <span className="text-sm text-muted-foreground">
                            {t('shape_' + profile.faceShape)} ({t('desc_' + profile.faceShape)})
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gradient">
                        {(language === 'ko' && selectedStyle.nameKo) ? selectedStyle.nameKo : selectedStyle.name}
                    </h1>

                    <p className="text-muted-foreground">
                        {(language === 'ko' && selectedStyle.descriptionKo) ? selectedStyle.descriptionKo : selectedStyle.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {selectedStyle.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="px-3 py-1 bg-white/5 hover:bg-white/10">
                                #{t(tag) || tag}
                            </Badge>
                        ))}
                    </div>

                    <Card className="glass-card border-indigo-500/30 overflow-hidden">
                        <div className="relative aspect-video bg-black/50">
                            {/* Image Placeholder */}
                            <img src={selectedStyle.imageUrl} alt={selectedStyle.name} className="w-full h-full object-cover opacity-80" onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400/222/white?text=Hairstyle+Image'} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                <div className="text-white text-sm font-medium flex items-center gap-2">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    98% {t('matchScore')}
                                </div>
                            </div>
                        </div>
                        <CardContent className="p-4 space-y-3">
                            <h3 className="font-semibold flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-400" />
                                {t('whyItFits')}
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {/* Auto-translated match reasons logic */}
                                <li className="flex gap-2 items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                    {t('reason_face_good')} ({t('shape_' + profile.faceShape)})
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                    {t('reason_texture_good')} ({selectedStyle.textureWeights[profile.hairCondition.texture] > 0 ? t('reason_texture_good') : t('reason_texture_bad')})
                                    {/* Simply showing texture match info */}
                                    {/* Actually let's just use the generic positive reason since it IS a match if recommended */}
                                    Match: {profile.hairCondition.texture}
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                    {t('reason_vibe_good')} ({t(profile.preferences.vibe[0]) || profile.preferences.vibe[0]})
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>


                {/* 1.5 Salon Recommendations (Mock) */}
                {results.recommended.find(r => r.id === selectedStyle.id)?.recommendedSalons && (
                    <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                            <MapPin className="w-4 h-4" />
                            <span>{t('findSalon')} (Partner Salons)</span>
                        </div>
                        <div className="space-y-3">
                            {results.recommended.find(r => r.id === selectedStyle.id)?.recommendedSalons
                                ?.filter(salon => {
                                    // [PIVOT] Region Filtering
                                    const targetCountry = language === 'ko' ? 'kr' : 'us';
                                    return salon.country === targetCountry;
                                })
                                .map((salon, idx) => (
                                    <div key={idx} className="flex gap-3 items-center bg-slate-50 dark:bg-black/20 p-2 rounded-lg border border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
                                        <img src={salon.imageUrl} alt={salon.name} className="w-12 h-12 rounded-full object-cover border border-slate-200 dark:border-white/10" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{salon.name}</h4>
                                                <span className="text-xs text-yellow-500 dark:text-yellow-400 flex items-center gap-0.5">
                                                    <Star className="w-3 h-3 fill-yellow-500 dark:fill-yellow-400" /> {salon.rating}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center text-xs text-muted-foreground mt-0.5">
                                                <span>{salon.location}</span>
                                                <span className="text-indigo-600 dark:text-indigo-400 font-medium">{salon.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {/* 2.5 Subscription Banner */}
                <div className="relative overflow-hidden rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6 text-center space-y-3">
                    <div className="absolute top-0 right-0 p-2 opacity-50">
                        <Star className="w-12 h-12 text-yellow-500/20 fill-yellow-500/20" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400">{t('subscribeTitle')}</h3>
                    <p className="text-sm text-yellow-700/80 dark:text-yellow-200/80">
                        {t('subscribeDesc')}
                    </p>
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold">
                        {t('subscribeBtn')}
                    </Button>
                </div>

                {/* 3. Virtual Try-On CTA (Premium Only) */}
                <Dialog open={showPaywall} onOpenChange={setShowPaywall}>
                    {/* Hidden Trigger via State, or custom button logic below */}
                </Dialog>

                {isPremium ? (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg" className="w-full h-14 text-lg font-bold bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 shadow-lg shadow-purple-500/25 border-0">
                                <Sparkles className="w-5 h-5 mr-2" />
                                {t('aiGenerate')}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md h-[80vh] p-0 bg-background border-border">
                            <VirtualStyler userImage={profile.images?.front || ''} styleOverlay={selectedStyle.imageUrl} />
                        </DialogContent>
                    </Dialog>
                ) : (
                    <Button
                        size="lg"
                        onClick={() => setShowPaywall(true)}
                        className="w-full h-14 text-lg font-bold bg-slate-900 border-slate-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-white/10 dark:text-gray-300"
                    >
                        <Sparkles className="w-5 h-5 mr-2 opacity-50" />
                        {t('aiGenerate')} (Premium)
                    </Button>
                )}

                {/* Paywall Modal */}
                <Dialog open={showPaywall} onOpenChange={setShowPaywall}>
                    <DialogContent className="max-w-md bg-white dark:bg-zinc-900 border-yellow-500/20 text-center space-y-4">
                        <div className="mx-auto w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-2">
                            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('subscribeTitle')}</h2>
                        <p className="text-muted-foreground">
                            AI 가상 착용 기능은 프리미엄 회원 전용입니다.<br />
                            지금 구독하고 나에게 딱 맞는 스타일을 찾아보세요!
                        </p>
                        <Button
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-12"
                            onClick={() => {
                                setIsPremium(true);
                                setShowPaywall(false);
                                alert("Premium Unlocked! (Demo)");
                            }}
                        >
                            {t('subscribeBtn')}
                        </Button>
                    </DialogContent>
                </Dialog>

                {/* 2. Salon Request Template */}
                <Card className="bg-slate-50 dark:bg-zinc-900/50 border-slate-200 dark:border-white/10">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                            ✂️ {t('requestTemplate')}
                        </CardTitle>
                        <CardDescription>{t('showDesigner')}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-4 bg-white text-black rounded-lg font-mono text-sm shadow-inner relative overflow-hidden border border-slate-200">
                            <div className="absolute top-0 right-0 p-2 opacity-50">
                                <Share2 className="w-4 h-4" />
                            </div>
                            <p className="font-bold mb-2 text-lg border-b border-black/10 pb-2">
                                {(language === 'ko' && selectedStyle.nameKo) ? selectedStyle.nameKo : selectedStyle.name}
                            </p>
                            <p className="whitespace-pre-wrap leading-relaxed">
                                "{selectedStyle.salonRequest}"
                            </p>
                            <div className="mt-4 text-xs text-zinc-500 border-t border-black/10 pt-2 flex justify-between">
                                <span>HairFit Analysis</span>
                                <span>{new Date().toLocaleDateString()}</span>
                            </div>
                        </div>
                        <Button className="w-full bg-white text-black hover:bg-zinc-200 border border-slate-200" onClick={() => {
                            // Copy to clipboard or Share
                            navigator.share?.({
                                title: 'HairFit Request',
                                text: selectedStyle.salonRequest,
                            }).catch(() => { });
                        }}>
                            <Download className="w-4 h-4 mr-2" />
                            {t('download') || 'Save Image'}
                        </Button>
                    </CardContent>
                </Card>

                {/* 5. Other Recommendations */}
                <div className="space-y-4 pb-8">
                    <h3 className="font-bold text-lg">{t('otherRecs')}</h3>
                    <div className="space-y-3">
                        {results.recommended.slice(1, 4).map((style, idx) => (
                            <div
                                key={style.id}
                                onClick={() => setSelectedStyle(style)}
                                className={`p-3 rounded-xl border flex gap-4 cursor-pointer transition-all ${selectedStyle.id === style.id
                                    ? 'bg-indigo-50 dark:bg-white/10 border-indigo-500'
                                    : 'bg-transparent border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5'
                                    }`}
                            >
                                <div className="w-16 h-16 rounded-lg bg-slate-200 dark:bg-white/10 overflow-hidden shrink-0">
                                    <img
                                        src={style.imageUrl}
                                        className="w-full h-full object-cover"
                                        alt={style.name}
                                        onError={(e) => e.currentTarget.src = `https://placehold.co/100/222/white?text=${style.name.substring(0, 6)}`}
                                    />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-semibold truncate">
                                            {(language === 'ko' && style.nameKo) ? style.nameKo : style.name}
                                        </h4>
                                        <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-green-500/50 text-green-600 dark:text-green-400">9{5 - idx}%</Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-1">
                                        {(language === 'ko' && style.descriptionKo) ? style.descriptionKo : style.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
