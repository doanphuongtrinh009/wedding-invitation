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
    const [isScrolled, setIsScrolled] = useState(false);

    // Music state
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
            setIsScrolled(window.scrollY > 50);

            // Detect active section
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150;

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
            {/* Desktop Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-md py-2">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <button
                            onClick={() => scrollToSection("home")}
                            className="font-display text-xl text-[var(--color-primary)] hover:opacity-80 transition-opacity"
                        >
                            P & T
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                        ? "bg-[var(--color-primary)] text-white shadow-md"
                                        : "text-[var(--color-text)] hover:bg-[var(--color-primary)]/10"
                                        }`}
                                >
                                    <span className="mr-1">{item.icon}</span>
                                    {item.label}
                                </button>
                            ))}

                            {/* Music Toggle */}
                            <button
                                onClick={toggleMusic}
                                disabled={!isLoaded}
                                className="ml-2 p-2 rounded-full text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 disabled:opacity-50"
                                title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
                                aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
                            >
                                <span className={`text-xl ${isPlaying ? "animate-spin-slow" : ""}`}>
                                    {isPlaying ? "💿" : "🎵"}
                                </span>
                            </button>
                        </div>

                        {/* Mobile: Music + Menu Button */}
                        <div className="md:hidden flex items-center gap-1">
                            <button
                                onClick={toggleMusic}
                                disabled={!isLoaded}
                                className="p-2 rounded-full text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 disabled:opacity-50"
                                title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
                            >
                                <span className={`text-xl ${isPlaying ? "animate-spin-slow" : ""}`}>
                                    {isPlaying ? "💿" : "🎵"}
                                </span>
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-full text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`} onClick={() => setIsOpen(false)} />

            {/* Mobile Menu Panel */}
            <div className={`fixed top-0 right-0 h-full w-72 z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <span className="font-display text-2xl text-[var(--color-primary)]">Menu</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-100 text-[var(--color-text)]"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="space-y-2">
                        {navItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${activeSection === item.id
                                    ? "bg-[var(--color-primary)] text-white"
                                    : "text-[var(--color-text)] hover:bg-[var(--color-primary)]/10"
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export const Navigation = memo(NavigationComponent);
