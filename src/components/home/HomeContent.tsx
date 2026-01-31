"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomeContent() {
    const { t } = useLanguage();

    return (
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-24 text-left">
            {/* 1. How it Works */}
            <section className="space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold">{t('howItWorksTitle')}</h2>
                    <p className="text-muted-foreground">{t('howItWorksDesc')}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="bg-secondary/30 p-6 rounded-2xl space-y-3">
                        <div className="text-4xl">📸</div>
                        <h3 className="font-bold">{t('step1Title')}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t('step1Desc')}</p>
                    </div>
                    <div className="bg-secondary/30 p-6 rounded-2xl space-y-3">
                        <div className="text-4xl">🧠</div>
                        <h3 className="font-bold">{t('step2Title')}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t('step2Desc')}</p>
                    </div>
                    <div className="bg-secondary/30 p-6 rounded-2xl space-y-3">
                        <div className="text-4xl">✨</div>
                        <h3 className="font-bold">{t('step3Title')}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t('step3Desc')}</p>
                    </div>
                </div>
            </section>

            {/* 2. Why HairFit? SEO Text */}
            <section className="space-y-6 bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/10">
                <h2 className="text-xl font-bold text-center">{t('whyHairFitTitle')}</h2>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>{t('seoText1')}</p>
                    <p>{t('seoText2')}</p>
                </div>
            </section>

            {/* 3. FAQ */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-center">{t('faqTitle')}</h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>{t('faq1Q')}</AccordionTrigger>
                        <AccordionContent>{t('faq1A')}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>{t('faq2Q')}</AccordionTrigger>
                        <AccordionContent>{t('faq2A')}</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>{t('faq3Q')}</AccordionTrigger>
                        <AccordionContent>{t('faq3A')}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    );
}
