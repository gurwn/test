"use client";

import { useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { HairStyle } from '@/lib/survey/types';
import { Button } from '@/components/ui/button';
import { Download, RotateCcw, Share2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import FaceAnalysisChart from '@/components/feature/FaceAnalysisChart';

interface ResultCardProps {
    styleData: HairStyle;
    onReset: () => void;
    scores?: Record<string, number>;
}

export default function ResultCard({ styleData, onReset, scores }: ResultCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { t, language } = useLanguage();
    const isKo = language === 'ko';

    // Dynamic Data Selection
    const activeName = (isKo && styleData.nameKo) ? styleData.nameKo : styleData.name;
    const activeDescription = (isKo && styleData.descriptionKo) ? styleData.descriptionKo : styleData.description;
    const activePosition = (isKo && styleData.positionKo) ? styleData.positionKo : styleData.position;
    const activeTags = (isKo && styleData.tagsKo) ? styleData.tagsKo : styleData.tags;
    const activeBadMatch = (isKo && styleData.badMatchKo) ? styleData.badMatchKo : styleData.badMatch;

    const handleDownload = useCallback(async () => {
        if (cardRef.current === null) return;

        try {
            const dataUrl = await toPng(cardRef.current, { cacheBust: true });
            const link = document.createElement('a');
            link.download = `HairFit_${styleData.id}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to download image', err);
        }
    }, [styleData.id]);

    const handleShare = useCallback(async () => {
        try {
            // Prefer native share if available (Mobile)
            if (navigator.share) {
                await navigator.share({
                    title: `HairFit - ${activeName}`,
                    text: `My HairFit Style is ${activeName}! #HairFit`,
                    url: window.location.href,
                });
            } else {
                // Fallback to clipboard for Desktop
                await navigator.clipboard.writeText(window.location.href);
                alert("Link Copied!");
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    }, [activeName]);

    return (
        <div className="flex flex-col items-center w-full max-w-sm mx-auto space-y-6">

            {/* --- The Capture Area (Result Card) --- */}
            <div
                ref={cardRef}
                className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-[#F4F4F5] border-4 border-white shadow-2xl flex flex-col items-center justify-between p-6 text-slate-800"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 pointer-events-none" />

                {/* Header */}
                <div className="relative z-10 text-center space-y-1 mt-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wider uppercase">
                        {t('hairFitTypeIndicator')}
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none">
                        {activeName.split(' (')[0]}
                    </h2>
                    <p className="text-sm font-semibold text-slate-500">
                        "{activePosition}"
                    </p>
                </div>

                {/* Character Image */}
                <div className="relative z-10 w-48 h-48 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                    <img
                        src={styleData.imagePath}
                        alt={styleData.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Info Section */}
                <div className="relative z-10 w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 space-y-3">
                    <div className="bg-slate-100 rounded-lg p-3 text-center">
                        <p className="text-sm font-medium text-slate-700 break-keep leading-snug">
                            {activeDescription}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="space-y-1">
                            <span className="font-bold text-sky-600 block">{t('goodFor')}</span>
                            <div className="flex flex-wrap gap-1">
                                {activeTags.map(t => (
                                    <span key={t} className="bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded-md">#{t}</span>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-1 border-l pl-2 border-slate-200">
                            <span className="font-bold text-rose-500 block">{t('avoidIf')}</span>
                            <div className="flex flex-wrap gap-1">
                                {activeBadMatch.map(t => (
                                    <span key={t} className="bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded-md">#{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* --- New: Detailed Analysis Report --- */}
            <div className="w-full bg-white rounded-2xl p-5 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span>📝</span> {t('detailedReport')}
                </h3>

                {scores && (
                    <div className="mb-4">
                        <FaceAnalysisChart scores={scores as any} />
                    </div>
                )}

                {/* Expert Comment */}
                <div className="space-y-2">
                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{t('expertComment')}</div>
                    <p className="text-sm text-slate-600 leading-relaxed text-justify break-keep">
                        {isKo ? styleData.expertComment?.ko :
                            language === 'ja' ? styleData.expertComment?.ja :
                                language === 'zh' ? styleData.expertComment?.zh :
                                    language === 'vn' ? styleData.expertComment?.vn :
                                        language === 'th' ? styleData.expertComment?.th :
                                            styleData.expertComment?.en}
                    </p>
                </div>

                <div className="h-px bg-slate-100" />

                {/* Styling Guide */}
                <div className="space-y-2">
                    <div className="text-xs font-bold text-rose-500 uppercase tracking-wider">{t('stylingTip')}</div>
                    <div className="text-sm text-slate-600 leading-relaxed break-keep whitespace-pre-line bg-slate-50 p-3 rounded-lg border border-slate-100">
                        {isKo ? styleData.stylingGuide?.ko :
                            language === 'ja' ? styleData.stylingGuide?.ja :
                                language === 'zh' ? styleData.stylingGuide?.zh :
                                    language === 'vn' ? styleData.stylingGuide?.vn :
                                        language === 'th' ? styleData.stylingGuide?.th :
                                            styleData.stylingGuide?.en}
                    </div>
                </div>

                <div className="h-px bg-slate-100" />

                {/* Maintenance */}
                <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{t('maintenanceTip')}</div>
                    <p className="text-sm text-slate-600 leading-relaxed break-keep">
                        {isKo ? styleData.maintenance?.ko :
                            language === 'ja' ? styleData.maintenance?.ja :
                                language === 'zh' ? styleData.maintenance?.zh :
                                    language === 'vn' ? styleData.maintenance?.vn :
                                        language === 'th' ? styleData.maintenance?.th :
                                            styleData.maintenance?.en}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 text-[10px] text-slate-400 font-mono mt-2 text-center">
                {t('hairFitConsulting')}
            </div>

            {/* --- Action Buttons --- */}
            <div className="flex flex-col gap-3 w-full">
                <Button
                    onClick={handleDownload}
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold h-12 rounded-xl shadow-lg shadow-indigo-500/20"
                >
                    <Download className="w-5 h-5 mr-2" />
                    {t('saveCard')}
                </Button>

                <div className="grid grid-cols-2 gap-3">
                    <Button
                        variant="secondary"
                        onClick={handleShare}
                        className="w-full h-12 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10"
                    >
                        <Share2 className="w-4 h-4 mr-2" />
                        {t('share')}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={onReset}
                        className="w-full h-12 rounded-xl border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-200"
                    >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        {t('retry')}
                    </Button>
                </div>
            </div>

        </div >
    );
}
