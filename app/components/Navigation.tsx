"use client";

import { useState, useEffect, memo, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { CONFIG } from "@/app/lib/data";

const navItems = [
    { id: "home", label: "Trang Chủ", icon: "🏠" },
    { id: "countdown", label: "Đếm Ngược", icon: "⏰" },
    { id: "events", label: "Sự Kiện", icon: "💒" },
    { id: "story", label: "Chuyện Tình", icon: "💕" },
    { id: "gallery", label: "Thư Viện", icon: "📸" },
    { id: "rsvp", label: "Xác Nhận", icon: "✉️" },
    { id: "gift", label: "Mừng Cưới", icon: "🎁" },
];

function NavigationComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && !audioRef.current) {
            audioRef.current = new Audio(CONFIG.meta.musicUrl);
            audioRef.current.loop = true;
            audioRef.current.addEventListener("canplaythrough", () => {
                setIsLoaded(true);
                audioRef.current?.play()
                    .then(() => setIsPlaying(true))
                    .catch((e) => console.log("Autoplay blocked:", e));
            });
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const toggleMusic = useCallback(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => { });
            }
            setIsPlaying((prev) => !prev);
        }
    }, [isPlaying]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 160;

            sections.forEach((section, index) => {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <>
            <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
                <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-[var(--surface)] px-4 py-2 shadow-[var(--shadow-soft)] backdrop-blur-xl md:px-6 md:py-3">
                    <button
                        onClick={() => scrollToSection("home")}
                        className="font-display text-2xl tracking-[0.08em] text-[var(--color-primary)] transition-opacity hover:opacity-80"
                    >
                        T&amp;T
                    </button>

                    <div className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`whitespace-nowrap rounded-full px-3 py-2 text-[12px] font-medium tracking-[0.02em] transition-all duration-300 ${activeSection === item.id
                                    ? "bg-[var(--color-primary)] text-white shadow-[0_10px_18px_rgba(31,43,36,0.25)]"
                                    : "text-[var(--color-text)]/80 hover:bg-white/70 hover:text-[var(--color-primary)]"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        <button
                            onClick={toggleMusic}
                            disabled={!isLoaded}
                            className="ml-2 rounded-full bg-white/80 p-2 text-[var(--color-primary)] shadow-[0_6px_14px_rgba(31,43,36,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white disabled:opacity-50"
                            title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
                            aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
                        >
                            <span className={`text-lg ${isPlaying ? "animate-spin-slow" : ""}`}>
                                {isPlaying ? "💿" : "🎵"}
                            </span>
                        </button>
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={toggleMusic}
                            disabled={!isLoaded}
                            className="rounded-full bg-white/80 p-2 text-[var(--color-primary)] shadow-[0_6px_14px_rgba(31,43,36,0.1)] transition-colors hover:bg-white disabled:opacity-50"
                            title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
                            aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
                        >
                            <span className={`text-lg ${isPlaying ? "animate-spin-slow" : ""}`}>
                                {isPlaying ? "💿" : "🎵"}
                            </span>
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-full bg-white/80 p-2 text-[var(--color-primary)] shadow-[0_6px_14px_rgba(31,43,36,0.1)] transition-colors hover:bg-white"
                            aria-label="Mở menu"
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`fixed right-0 top-0 z-50 h-full w-72 bg-[var(--surface-strong)] p-6 shadow-[var(--shadow-lift)] backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="mb-8 flex items-center justify-between">
                    <span className="font-display text-3xl text-[var(--color-primary)]">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-full bg-white/80 p-2 text-[var(--color-text)] shadow-[0_6px_14px_rgba(31,43,36,0.1)]"
                        aria-label="Đóng menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold tracking-[0.02em] transition-all duration-300 ${activeSection === item.id
                                ? "bg-[var(--color-primary)] text-white"
                                : "text-[var(--color-text)]/80 hover:bg-white"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export const Navigation = memo(NavigationComponent);
