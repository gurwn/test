"use client";

import Link from 'next/link';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { BLOG_POSTS } from '@/lib/blog/posts';


export default function HomeContent() {
    const { t, language } = useLanguage();

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

            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-center">{t('faqTitle')}</h2>
                <div className="w-full space-y-4">
                    <details className="group bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden">
                        <summary className="flex cursor-pointer items-center justify-between font-medium p-4 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors list-none">
                            {t('faq1Q')}
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                            {t('faq1A')}
                        </div>
                    </details>

                    <details className="group bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden">
                        <summary className="flex cursor-pointer items-center justify-between font-medium p-4 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors list-none">
                            {t('faq2Q')}
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                            {t('faq2A')}
                        </div>
                    </details>

                    <details className="group bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden">
                        <summary className="flex cursor-pointer items-center justify-between font-medium p-4 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors list-none">
                            {t('faq3Q')}
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="p-4 pt-0 text-muted-foreground text-sm leading-relaxed">
                            {t('faq3A')}
                        </div>
                    </details>
                </div>
            </section>

            {/* 3. Latest Articles (Blog Preview) */}
            <section className="space-y-8 border-t border-slate-200 dark:border-white/10 pt-16">
                <div className="flex justify-between items-center px-2">
                    <h2 className="text-2xl font-bold">{t('latestArticles') || "Latest Articles"}</h2>
                    <Link href="/blog" className="text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:underline">
                        View All →
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Dynamic Blog Posts */}
                    {BLOG_POSTS.slice(0, 2).map((post) => {
                        const title = post.title[language] || post.title['en'];
                        const excerpt = post.excerpt[language] || post.excerpt['en'];

                        return (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 transition-all hover:shadow-lg hover:border-indigo-500">
                                <div className="aspect-video rounded-xl bg-slate-100 mb-4 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-indigo-500 transition-colors line-clamp-1">{title}</h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {excerpt}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
