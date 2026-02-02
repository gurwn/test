import { useLanguage } from '@/contexts/LanguageContext';

interface FaceAnalysisChartProps {
    scores: {
        oval: number;
        round: number;
        square: number;
        long: number;
        heart: number;
        diamond: number;
        triangle: number;
    };
}

export default function FaceAnalysisChart({ scores }: FaceAnalysisChartProps) {
    const { t } = useLanguage();

    const maxScore = Math.max(...Object.values(scores));
    const data = [
        { label: t('desc_oval'), score: scores.oval, key: 'oval' },
        { label: t('desc_round'), score: scores.round, key: 'round' },
        { label: t('desc_square'), score: scores.square, key: 'square' },
        { label: t('desc_long'), score: scores.long, key: 'long' },
    ];

    // Filter only significant scores (> 20%) to keep chart clean
    const significantData = data.filter(d => d.score > 20).sort((a, b) => b.score - a.score);

    return (
        <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-100">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Face Shape Analysis
            </h4>
            <div className="space-y-3">
                {significantData.map((item) => (
                    <div key={item.key} className="space-y-1">
                        <div className="flex justify-between text-xs">
                            <span className="font-medium text-slate-700">
                                {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                            </span>
                            <span className="text-slate-500">{item.score}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${item.score}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
