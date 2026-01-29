"use client";

import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import { COUPLE, CONFIG } from "@/app/lib/data";

function HeroSectionComponent() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll(".reveal");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-white">

            {/* Bold Floral Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top Left Corner */}
                <div className="absolute -top-16 -left-16 w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                    <Image
                        src="/floral-new.png"
                        alt=""
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                {/* Top Right Corner */}
                <div className="absolute -top-16 -right-16 w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                    <Image
                        src="/floral-new.png"
                        alt=""
                        fill
                        style={{ objectFit: 'contain', transform: 'scaleX(-1)' }}
                    />
                </div>

                {/* Bottom Left Corner */}
                <div className="absolute -bottom-16 -left-16 w-[280px] h-[280px] md:w-[450px] md:h-[450px]">
                    <Image
                        src="/floral-new.png"
                        alt=""
                        fill
                        style={{ objectFit: 'contain', transform: 'rotate(180deg) scaleX(-1)' }}
                    />
                </div>

                {/* Bottom Right Corner */}
                <div className="absolute -bottom-16 -right-16 w-[280px] h-[280px] md:w-[450px] md:h-[450px]">
                    <Image
                        src="/floral-new.png"
                        alt=""
                        fill
                        style={{ objectFit: 'contain', transform: 'rotate(180deg)' }}
                    />
                </div>
            </div>


            <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">

                {/* Couple Photo with Gold Frame */}
                <div className="reveal mb-10 relative">
                    <div className="p-2 md:p-3" style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, #d4b896 50%, var(--color-accent) 100%)' }}>
                        <div className="relative w-[280px] h-[200px] md:w-[400px] md:h-[280px] overflow-hidden">
                            <Image
                                src="/couple-photo.png"
                                alt="Ảnh cưới"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Family Info */}
                <div className="reveal mb-8 w-full px-4" style={{ animationDelay: "0.1s" }}>
                    <div className="grid grid-cols-2 gap-8 md:gap-16 max-w-2xl mx-auto">
                        {/* Nhà Trai */}
                        <div className="text-center">
                            <h3 className="font-display text-lg md:text-xl text-[var(--color-primary)] mb-2 font-bold">
                                {CONFIG.family?.groom.title}
                            </h3>
                            <div className="space-y-1 font-display text-sm md:text-base text-[var(--color-text)]">
                                <p className="italic">{CONFIG.family?.groom.father}</p>
                                <p className="italic">{CONFIG.family?.groom.mother}</p>
                            </div>
                        </div>

                        {/* Nhà Gái */}
                        <div className="text-center">
                            <h3 className="font-display text-lg md:text-xl text-[var(--color-primary)] mb-2 font-bold">
                                {CONFIG.family?.bride.title}
                            </h3>
                            <div className="space-y-1 font-display text-sm md:text-base text-[var(--color-text)]">
                                <p className="italic">{CONFIG.family?.bride.father}</p>
                                <p className="italic">{CONFIG.family?.bride.mother}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Names - Script Style - Allow wrapping on very small screens */}
                <div className="reveal mb-6 px-4" style={{ animationDelay: "0.2s" }}>
                    <h1 className="font-display text-2xl sm:text-3xl md:text-5xl text-[var(--color-primary)] italic leading-tight">
                        {COUPLE.groom.shortName} <span className="text-[var(--color-accent)]">&</span> {COUPLE.bride.shortName}
                    </h1>
                </div>

                {/* Date */}
                <div className="reveal mb-4" style={{ animationDelay: "0.3s" }}>
                    <p className="font-display text-2xl md:text-3xl text-[var(--color-primary)] tracking-[0.15em]">
                        10 | 04 | 2026
                    </p>
                </div>

                {/* Location */}
                <div className="reveal mb-6" style={{ animationDelay: "0.4s" }}>
                    <p className="text-[var(--color-text)] opacity-60 text-sm md:text-base tracking-[0.2em] uppercase">
                        TP. Hồ Chí Minh, Việt Nam
                    </p>
                </div>

                {/* Countdown inline */}
                <div className="reveal flex items-center gap-4 text-[#2D3E33]/50 text-sm" style={{ animationDelay: "0.5s" }}>
                    <span className="tabular-nums">436 Ngày</span>
                    <span>•</span>
                    <span className="tabular-nums">10 Giờ</span>
                    <span>•</span>
                    <span className="tabular-nums">25 Phút</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="reveal absolute bottom-8 left-1/2 -translate-x-1/2 z-10" style={{ animationDelay: "0.6s" }}>
                <div className="flex flex-col items-center gap-2 text-[#2D3E33]/30">
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-current rounded-full animate-bounce"></div>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] uppercase">Cuộn Xuống</span>
                </div>
            </div>
        </section>
    );
}

export const HeroSection = memo(HeroSectionComponent);
