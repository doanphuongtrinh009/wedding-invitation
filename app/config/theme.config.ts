/**
 * Theme Configuration System
 * 
 * This file defines the available themes and their styling properties.
 * Each theme can be customized independently.
 */

export interface ThemeConfig {
    name: string;
    displayName: string;
    colors: {
        primary: string;
        accent: string;
        text: string;
        background: string;
        surface: string;
    };
    fonts: {
        display: string;
        body: string;
        script: string;
    };
    spacing: {
        section: string;
        component: string;
    };
}

export const themes: Record<string, ThemeConfig> = {
    luxury: {
        name: "luxury",
        displayName: "Luxury Gold",
        colors: {
            primary: "#2f2922",
            accent: "#b58a57",
            text: "#4d4338",
            background: "#f7f1e7",
            surface: "rgba(255, 255, 255, 0.8)",
        },
        fonts: {
            display: "Playfair Display",
            body: "Manrope",
            script: "Great Vibes",
        },
        spacing: {
            section: "clamp(4.3rem, 8vw, 7.2rem)",
            component: "clamp(1.8rem, 4vw, 3rem)",
        },
    },
    pastel: {
        name: "pastel",
        displayName: "Soft Pastel",
        colors: {
            primary: "#5e4b35",
            accent: "#d48c95",
            text: "#5e4b35",
            background: "#fef8f3",
            surface: "rgba(255, 255, 255, 0.85)",
        },
        fonts: {
            display: "Playfair Display",
            body: "Manrope",
            script: "Great Vibes",
        },
        spacing: {
            section: "clamp(4.3rem, 8vw, 7.2rem)",
            component: "clamp(1.8rem, 4vw, 3rem)",
        },
    },
    traditional: {
        name: "traditional",
        displayName: "Traditional Red & Gold",
        colors: {
            primary: "#8B0000",
            accent: "#D4AF37",
            text: "#5a0a0a",
            background: "#fffdf5",
            surface: "rgba(255, 255, 255, 0.9)",
        },
        fonts: {
            display: "Playfair Display",
            body: "Manrope",
            script: "Great Vibes",
        },
        spacing: {
            section: "clamp(4.3rem, 8vw, 7.2rem)",
            component: "clamp(1.8rem, 4vw, 3rem)",
        },
    },
};

export const getTheme = (themeName: string): ThemeConfig => {
    return themes[themeName] || themes.luxury;
};
