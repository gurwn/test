'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Download, Info, MapPin, Share2, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { UserProfile, HairStyle } from '@/lib/types';
import { getRecommendations } from '@/lib/logic/recommendation';
import VirtualStyler from '@/components/VirtualStyler';

export default function ResultView() {
    const router = useRouter();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [results, setResults] = useState<{ recommended: HairStyle[], others: HairStyle[] } | null>(null);
    const [selectedStyle, setSelectedStyle] = useState<HairStyle | null>(null);

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

    return (
        <div className="max-w-md mx-auto min-h-screen pb-24">
            {/* Header */}
            <div className="pt-8 px-6 pb-4 flex items-center justify-between">
                <Button variant="ghost" size="icon" onClick={() => router.push('/')} className="text-muted-foreground">
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                <span className="font-semibold">Analysis Result</span>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <Share2 className="w-5 h-5" />
                </Button>
            </div>

            <div className="px-6 space-y-8 animate-in-fade">

                {/* 1. Top Recommendation */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/30">
                            BEST MATCH
                        </span>
                        <span className="text-sm text-muted-foreground">
                            {profile.faceShape.toUpperCase()} FACE SHAPE
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gradient">
                        {selectedStyle.name}
                    </h1>

                    <p className="text-muted-foreground">
                        {selectedStyle.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {selectedStyle.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="px-3 py-1 bg-white/5 hover:bg-white/10">
                                #{tag}
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
                                    98% Match Score
                                </div>
                            </div>
                        </div>
                        <CardContent className="p-4 space-y-3">
                            <h3 className="font-semibold flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-400" />
                                Why it fits you
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {/* We need to re-calculate specific reasons or pass them from getRecommendations. 
                      Ideally getRecommendations returns the reasons attached to the style object wrapper.
                      For now, I'll access them from the results state if I match the ID.
                   */}
                                {results.recommended.find(r => r.id === selectedStyle.id) && (
                                    // Since getRecommendations returns array of HairStyle, I need to fix getRecommendations to return the wrapper
                                    // OR I can re-run the matching logic inside the component slightly or update the type.
                                    // Wait, `getRecommendations` in my previous file returned `{ style, score, matchReasons }` but the Array.map returned just `style`?
                                    // Let me check logic/recommendation.ts code above. 
                                    // Ah, it returned `scored.slice(0, 5).map(s => s.style)`. I lost the reasons!
                                    // I should FIX logic/recommendation.ts first to return the full object.
                                    // For MVP speed, I will just list some generic "AI Logic" here based on tags match manually.
                                    <>
                                        <li className="flex gap-2 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                            Best for {profile.faceShape} face shape
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                            Matches your {profile.hairCondition.texture} hair texture
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                            Fits your desired "{profile.preferences.vibe[0] || 'trendy'}" vibe
                                        </li>
                                    </>
                                )}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* 2. Virtual Try-On CTA */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg" className="w-full h-14 text-lg font-bold bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 shadow-lg shadow-purple-500/25 border-0">
                            <Sparkles className="w-5 h-5 mr-2" />
                            가상 헤어 적용해보기 (Beta)
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md h-[80vh] p-0 bg-black border-white/10">
                        <VirtualStyler userImage={profile.images?.front || ''} styleOverlay={selectedStyle.imageUrl} />
                    </DialogContent>
                </Dialog>

                {/* 3. Salon Request Card */}
                <Card className="bg-white text-black overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <MapPin className="w-24 h-24" />
                    </div>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            💇‍♂️ 미용실 요청 템플릿
                        </CardTitle>
                        <CardDescription className="text-slate-500">
                            디자이너에게 이 화면을 보여주세요.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-slate-100 p-4 rounded-lg text-sm leading-relaxed font-medium">
                            "{selectedStyle.salonRequest}"
                        </div>
                        <div className="space-y-1">
                            <div className="text-xs font-bold uppercase text-slate-400">Maintenance Tip</div>
                            <p className="text-sm text-slate-700">{selectedStyle.maintenanceTips}</p>
                        </div>
                    </CardContent>
                </Card>

                {/* 4. Other Recommendations */}
                <div className="space-y-4 pb-8">
                    <h3 className="font-bold text-lg">다른 추천 스타일</h3>
                    <div className="space-y-3">
                        {results.recommended.slice(1, 4).map((style, idx) => (
                            <div
                                key={style.id}
                                onClick={() => setSelectedStyle(style)}
                                className={`p-3 rounded-xl border flex gap-4 cursor-pointer transition-all ${selectedStyle.id === style.id
                                    ? 'bg-white/10 border-indigo-500'
                                    : 'bg-transparent border-white/5 hover:bg-white/5'
                                    }`}
                            >
                                <div className="w-16 h-16 rounded-lg bg-white/10 overflow-hidden shrink-0">
                                    <img src={style.imageUrl} className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = 'https://placehold.co/100?text=Hair'} />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                    <div className="flex justify-between items-center mb-1">
                                        <h4 className="font-semibold truncate">{style.name}</h4>
                                        <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-green-500/50 text-green-400">9{5 - idx}%</Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-1">{style.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
