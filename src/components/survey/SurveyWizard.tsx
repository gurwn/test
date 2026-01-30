"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS, HAIRSTYLES } from '@/lib/survey/data';
import { recommendStyle } from '@/lib/survey/logic';
import { QuestionId } from '@/lib/survey/types';
import { ChevronRight, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResultCard from './ResultCard';

export default function SurveyWizard() {
    const [answers, setAnswers] = useState<Record<QuestionId, string>>({
        forehead: '',
        vibe: '',
        maintenance: '',
    });
    const [step, setStep] = useState(0);
    const [result, setResult] = useState<string | null>(null);

    const currentQuestion = QUESTIONS[step];

    const handleAnswer = (value: string) => {
        const newAnswers = { ...answers, [currentQuestion.id]: value };
        setAnswers(newAnswers);

        if (step < QUESTIONS.length - 1) {
            setTimeout(() => setStep(step + 1), 250); // Slight delay for better UX
        } else {
            // Finish
            const styleId = recommendStyle(
                newAnswers.forehead,
                newAnswers.vibe,
                newAnswers.maintenance
            );
            setResult(styleId);
        }
    };

    const handleReset = () => {
        setAnswers({ forehead: '', vibe: '', maintenance: '' });
        setStep(0);
        setResult(null);
    };

    if (result) {
        const styleData = HAIRSTYLES[result];
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] py-8 animate-in fade-in zoom-in duration-500">
                <ResultCard styleData={styleData} onReset={handleReset} />
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto w-full min-h-[50vh] flex flex-col justify-center">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                />
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                >
                    <div className="text-center space-y-2 mb-8">
                        <span className="text-sm font-medium text-indigo-400">Step {step + 1} / {QUESTIONS.length}</span>
                        <h2 className="text-2xl font-bold">{currentQuestion.title}</h2>
                    </div>

                    <div className="grid gap-3">
                        {currentQuestion.options.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleAnswer(option.value)}
                                className="group relative flex items-center p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 transition-all text-left"
                            >
                                <div className="flex-1">
                                    <div className="font-semibold text-lg group-hover:text-indigo-300 transition-colors">
                                        {option.label}
                                    </div>
                                    {option.description && (
                                        <div className="text-sm text-muted-foreground mt-0.5">
                                            {option.description}
                                        </div>
                                    )}
                                </div>
                                <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                            </button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
