"use strict";
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CONFIG } from "@/app/utils/data";

type Theme = "luxury" | "pastel" | "traditional";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes: Record<Theme, { primary: string; accent: string; bgImage: string; text: string; paperTexture: string }> = {
    luxury: {
        primary: "#2f2922",
        accent: "#b58a57",
        text: "#4d4338",
        bgImage: "url('/bg-luxury-v2.png')",
        paperTexture: "url('/bg-luxury-v2.png')",
    },
    pastel: {
        primary: "#5e4b35",
        accent: "#d48c95",
        text: "#5e4b35",
        bgImage: "url('/bg-pastel-v2.png')",
        paperTexture: "url('/bg-pastel-v2.png')",
    },
    traditional: {
        primary: "#8B0000", // Deep red for contrast on light bg
        accent: "#D4AF37", // Antique gold
        text: "#5a0a0a", // Dark text
        bgImage: "linear-gradient(to bottom right, #fffdf5, #fff0d4)", // Light cream/gold gradient
        paperTexture: "linear-gradient(to bottom right, #fffdf5, #fff0d4)",
    },
};

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
