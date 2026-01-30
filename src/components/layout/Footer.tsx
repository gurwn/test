"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full py-8 text-center text-sm text-muted-foreground border-t border-white/10 mt-12 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-white">HairFit</span>
                    <span className="text-xs">© 2025 All Rights Reserved.</span>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/terms" className="hover:text-white transition-colors">
                        {t('termsOfService')}
                    </Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">
                        {t('privacyPolicy')}
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </footer>
    );
}
