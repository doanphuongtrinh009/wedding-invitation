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
        <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-36 md:pt-40">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-16 -top-16 h-[304px] w-[304px] opacity-55 md:h-[480px] md:w-[480px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: "contain" }} />
                </div>
                <div className="absolute -right-16 -top-16 h-[304px] w-[304px] opacity-55 md:h-[480px] md:w-[480px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: "contain", transform: "scaleX(-1)" }} />
                </div>
                <div className="absolute -bottom-16 -left-16 h-[288px] w-[288px] opacity-45 md:h-[432px] md:w-[432px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: "contain", transform: "rotate(180deg) scaleX(-1)" }} />
                </div>
                <div className="absolute -bottom-16 -right-16 h-[288px] w-[288px] opacity-45 md:h-[432px] md:w-[432px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: "contain", transform: "rotate(180deg)" }} />
                </div>
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-6 py-10 text-center shadow-[var(--shadow-medium)] backdrop-blur-xl md:px-10 md:py-14">
                <div className="reveal mb-8 md:mb-10">
                    <div className="rounded-[24px] p-2 md:p-3" style={{ background: "linear-gradient(135deg, var(--color-accent) 0%, #d8bea0 50%, var(--color-accent) 100%)" }}>
                        <div className="relative h-[208px] w-[296px] overflow-hidden rounded-[20px] md:h-[296px] md:w-[432px]">
                            <Image src="/couple-photo.png" alt="Ảnh cưới" fill style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>

                <div className="reveal mb-8 w-full max-w-3xl">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        <div className="rounded-2xl border border-[var(--border-soft)] bg-white/60 p-4 md:p-6">
                            <h3 className="font-display text-2xl text-[var(--color-primary)]">{CONFIG.family?.groom.title}</h3>
                            <div className="mt-3 space-y-1 font-display text-base text-[var(--color-text)]/80 md:text-lg">
                                <p className="italic">{CONFIG.family?.groom.father}</p>
                                <p className="italic">{CONFIG.family?.groom.mother}</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-[var(--border-soft)] bg-white/60 p-4 md:p-6">
                            <h3 className="font-display text-2xl text-[var(--color-primary)]">{CONFIG.family?.bride.title}</h3>
                            <div className="mt-3 space-y-1 font-display text-base text-[var(--color-text)]/80 md:text-lg">
                                <p className="italic">{CONFIG.family?.bride.father}</p>
                                <p className="italic">{CONFIG.family?.bride.mother}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reveal mb-6 px-4">
                    <h1 className="font-display text-4xl italic leading-tight text-[var(--color-primary)] md:text-6xl">
                        {COUPLE.groom.shortName} <span className="text-[var(--color-accent)]">&amp;</span> {COUPLE.bride.shortName}
                    </h1>
                </div>

                <div className="reveal mb-4">
                    <p className="font-display text-2xl tracking-[0.12em] text-[var(--color-primary)] md:text-3xl">
                        {new Date(CONFIG.weddingDate).toLocaleDateString("vi-VN")}
                    </p>
                </div>

                <div className="reveal">
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-text)]/70 md:text-base">
                        {CONFIG.events[0]?.location || "TP. Hồ Chí Minh, Việt Nam"}
                    </p>
                </div>
            </div>
        </section>
    );
}

export const HeroSection = memo(HeroSectionComponent);
