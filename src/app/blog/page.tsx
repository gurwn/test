'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, LANGUAGES, Language } from '@/contexts/LanguageContext';
import { BLOG_POSTS } from '@/lib/blog/posts';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function BlogIndex() {
    const { t, language, setLanguage } = useLanguage();
    const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

    return (
        <main className="min-h-screen bg-background">
            {/* Header / Nav */}
            <div className="absolute top-0 left-0 w-full z-10 p-6 flex justify-between items-center text-white">
                <Link href="/">
                    <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Home
                    </Button>
                </Link>

                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-9 px-3 text-white hover:bg-white/10 hover:text-white border border-white/20 bg-black/20 backdrop-blur-sm rounded-full gap-2">
                                <span className="text-lg">{currentLang.flag}</span>
                                <span className="hidden sm:inline font-medium text-xs">{currentLang.label}</span>
                                <ChevronDown className="w-3 h-3 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[150px]">
                            {LANGUAGES.map((lang) => (
                                <DropdownMenuItem
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code as Language)}
                                    className="gap-2 cursor-pointer font-medium"
                                >
                                    <span className="text-lg">{lang.flag}</span>
                                    {lang.label}
                                    {language === lang.code && <Check className="w-3 h-3 ml-auto" />}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <ThemeToggle />
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative py-32 px-6 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10" />
                <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px]" />
                <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        HairFit Blog
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Latest trends, hair care tips, and expert guides for your perfect style.
                    </p>
                </div>
            </div>

            {/* Post List */}
            <div className="max-w-4xl mx-auto px-6 py-12 -mt-10 relative z-20">
                <div className="grid gap-8">
                    {BLOG_POSTS.map((post) => {
                        const title = post.title[language] || post.title['en'];
                        const excerpt = post.excerpt[language] || post.excerpt['en'];

                        return (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <article className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow flex flex-col md:flex-row group">
                                    <div className="md:w-1/3 aspect-[4/3] md:aspect-auto relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 md:w-2/3 flex flex-col justify-between space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex gap-2">
                                                {post.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {title}
                                            </h2>
                                            <p className="text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                                                {excerpt}
                                            </p>
                                        </div>
                                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 gap-4">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                3 min read
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="text-center pb-20">
                <Link href="/">
                    <Button variant="outline" className="rounded-full gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Button>
                </Link>
            </div>
        </main>
    );
}
