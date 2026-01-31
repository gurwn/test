'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ScanFace, Globe, ChevronDown } from "lucide-react";
import { useLanguage, LANGUAGES } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HomeContent from "@/components/home/HomeContent";
import HybridWizard from "@/components/hybrid/HybridWizard";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 dark:bg-purple-600/20 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/10 bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Header Area: Language & Theme */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-2">
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 px-3 text-muted-foreground hover:text-foreground border border-border/50 bg-background/50 backdrop-blur-sm rounded-full gap-2">
              <span className="text-lg">{currentLang.flag}</span>
              <span className="hidden sm:inline font-medium text-xs">{currentLang.label}</span>
              <ChevronDown className="w-3 h-3 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[150px]">
            {LANGUAGES.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className="gap-2 cursor-pointer font-medium"
              >
                <span className="text-lg">{lang.flag}</span>
                {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      <div className="max-w-md w-full space-y-8 animate-in-fade">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/40 backdrop-blur-md mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-xs font-medium text-muted-foreground">AI Based Hair Consulting</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {t('landingTitle1')} <br />
            <span className="text-gradient">{t('landingTitle2')}</span>
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
            {t('landingSubtitle')}
          </p>
        </div>

        <div className="pt-4">
          <HybridWizard />
        </div>

        <div className="grid grid-cols-3 gap-4 pt-12 border-t border-border/40">
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
              <ScanFace className="w-5 h-5 text-indigo-500" />
            </div>
            <p className="text-xs text-muted-foreground font-medium">{t('featureFace')}</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Sparkles className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-xs text-muted-foreground font-medium">{t('featureStyle')}</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
              <span className="text-sm font-bold text-pink-500">Top5</span>
            </div>
            <p className="text-xs text-muted-foreground font-medium">{t('featureReport')}</p>
          </div>
        </div>
      </div>
    </div>

      {/* SEO Content Section */ }
  <HomeContent />
    </main >
  );
}
