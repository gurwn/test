"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-9 h-9 border border-white/10 hover:bg-white/10"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-yellow-400 transition-all" />
            ) : (
                <Moon className="h-4 w-4 text-indigo-500 transition-all" />
            )}
        </Button>
    );
}
