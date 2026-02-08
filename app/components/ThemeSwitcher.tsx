"use strict";
"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import { Paintbrush } from "lucide-react";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);

    const themes = [
        { id: "luxury", name: "Luxury", color: "#2D3E33", textColor: "white" },
        { id: "pastel", name: "Pastel", color: "#fce7e7", textColor: "#5e4b35" },
        { id: "traditional", name: "Việt Nam", color: "#8B0000", textColor: "#FFD700" },
    ] as const;

    return (
        <div className="fixed bottom-4 left-4 z-[60] flex flex-col items-start gap-2">
            <div
                className={`origin-bottom-left rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-2 shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-300 ${isOpen ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-95 opacity-0"}`}
            >
                <div className="flex flex-col gap-2">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => {
                                setTheme(t.id);
                                setIsOpen(false);
                            }}
                            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${theme === t.id ? "ring-2 ring-[var(--color-accent)] ring-offset-1 ring-offset-white" : "hover:opacity-90"}`}
                            style={{ backgroundColor: t.color, color: t.textColor }}
                            type="button"
                        >
                            {t.name}
                        </button>
                    ))}
                </div>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface)] text-[var(--color-primary)] shadow-[var(--shadow-soft)] transition-transform hover:scale-105 active:scale-95"
                title="Đổi giao diện"
                type="button"
            >
                <Paintbrush size={20} />
            </button>
        </div>
    );
}
