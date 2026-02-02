'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, ChevronDown, Share2, User, Check } from 'lucide-react';
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

// Simple Markdown Parser for visual hierarchy
function MarkdownContent({ content }: { content: string }) {
    if (!content) return null;
    const lines = content.split('\n');
    return (
        <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed md:text-lg">
            {lines.map((line, i) => {
                if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-6 mb-3">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('- **')) {
                    const clean = line.replace('- **', '');
                    const [bold, rest] = clean.split('**:');
                    return (
                        <li key={i} className="ml-4 list-disc marker:text-indigo-500 pl-2 mb-2">
                            <strong className="text-slate-900 dark:text-white">{bold}</strong>: {rest}
                        </li>
                    );
                }
                if (line.startsWith('1. ')) {
                    return <div key={i} className="ml-4 flex gap-2 mb-2"><span className="font-bold text-indigo-500">{line.substring(0, 2)}</span><span>{line.substring(3)}</span></div>;
                }
                if (line.trim() === '') return <br key={i} />;

                return <p key={i}>{line}</p>;
            })}
        </div>
    );
}

export default function BlogPostDetail() {
    const { slug } = useParams();
    const router = useRouter();
    const { t, language, setLanguage } = useLanguage();

    // Safety check if slug is undefined (though useParams usually provides it)
    if (!slug) return null;

    const post = BLOG_POSTS.find(p => p.slug === slug);
    const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];


    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl font-bold">Post Not Found</h1>
                <Button onClick={() => router.push('/blog')}>Back to Blog</Button>
            </div>
        );
    }

    const title = post.title[language] || post.title['en'];
    // Fallback logic for content: if empty for current language, fallback to English
    const content = post.content[language] && post.content[language].length > 20 ? post.content[language] : post.content['en'];

    return (
        <main className="min-h-screen bg-background pb-20">
            {/* Header / Nav Overlay */}
            <div className="absolute top-0 right-0 w-full z-20 p-6 flex justify-end items-center pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-9 px-3 text-white hover:bg-white/10 hover:text-white border border-white/20 bg-black/20 backdrop-blur-sm rounded-full gap-2 transition-all">
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

            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <img
                    src={post.image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 pb-12">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <Link href="/blog">
                            <Button size="sm" variant="outline" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 mb-4 backdrop-blur-md">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back
                            </Button>
                        </Link>
                        <div className="flex gap-2 mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs font-bold uppercase tracking-wider bg-indigo-500 text-white px-2 py-1 rounded-md shadow-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-lg break-keep">
                            {title}
                        </h1>
                        <div className="flex items-center gap-6 text-slate-300 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="p-1 bg-white/20 rounded-full">
                                    <User className="w-3 h-3 text-white" />
                                </div>
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <article className="max-w-3xl mx-auto px-6 py-12">
                <MarkdownContent content={content} />

                <div className="my-12 pt-8 border-t border-border flex justify-between items-center">
                    <div className="font-bold text-slate-900 dark:text-white">
                        Was this helpful?
                    </div>
                    <Button variant="outline" className="gap-2" onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied!');
                    }}>
                        <Share2 className="w-4 h-4" />
                        Share Article
                    </Button>
                </div>
            </article>

            {/* Read Next (Random other post) */}
            <div className="max-w-3xl mx-auto px-6 pt-0 pb-12">
                <h3 className="font-bold text-xl mb-6 text-slate-900 dark:text-white">Read Next</h3>
                <div className="grid gap-6">
                    {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 1).map(nextPost => (
                        <Link key={nextPost.slug} href={`/blog/${nextPost.slug}`}>
                            <div className="group bg-slate-50 dark:bg-white/5 rounded-xl p-4 flex gap-4 items-center hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer border border-border">
                                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={nextPost.image} className="w-full h-full object-cover" alt={nextPost.title['en']} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg group-hover:text-indigo-500 transition-colors">
                                        {nextPost.title[language] || nextPost.title['en']}
                                    </h4>
                                    <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                                        {nextPost.excerpt[language] || nextPost.excerpt['en']}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
