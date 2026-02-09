"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CONFIG } from "@/app/lib/data";
import { themes, type Theme } from "@/app/themes/theme-tokens";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Default to config, but can be overridden by user state
    const [theme, setTheme] = useState<Theme>((CONFIG.meta.theme as Theme) || "luxury");

    useEffect(() => {
        const root = document.documentElement;
        const currentTheme = themes[theme];

        // Apply CSS variables
        root.style.setProperty("--color-primary", currentTheme.primary);
        root.style.setProperty("--color-accent", currentTheme.accent);
        root.style.setProperty("--color-text", currentTheme.text);
        root.style.setProperty("--bg-image", currentTheme.bgImage);

        // Update meta theme color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", currentTheme.primary);
        }

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
