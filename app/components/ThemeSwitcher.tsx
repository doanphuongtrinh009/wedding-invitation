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
    ];

    return (
        <div className="fixed bottom-4 left-4 z-[60] flex flex-col items-start gap-2">

            <div className={`
                flex flex-col gap-2 bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg border border-black/5
                transition-all duration-300 origin-bottom-left
                ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}
            `}>
                {themes.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => {
                            setTheme(t.id as any);
                            setIsOpen(false);
                        }}
                        className={`
                            px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2
                            ${theme === t.id ? "ring-2 ring-offset-1 ring-[#c9a87c]" : "hover:bg-black/5"}
                        `}
                        style={{ backgroundColor: t.color, color: t.textColor }}
                    >
                        {t.name}
                    </button>
                ))}
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-white/90 backdrop-blur shadow-lg rounded-full flex items-center justify-center border border-black/5 hover:scale-110 transition-transform active:scale-95"
                title="Đổi giao diện"
            >
                <Paintbrush size={20} className="text-[#2D3E33]" />
            </button>
        </div>
    );
}
