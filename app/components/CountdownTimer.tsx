"use client";

import { useState, useEffect, memo, useCallback, useRef } from "react";
import Image from "next/image";
import { TimeLeft } from "@/app/types";
import { WEDDING_DATE, COUPLE, QUOTES } from "@/app/lib/data";

interface CountdownTimerProps {
    targetDate?: string;
}

function CountdownTimerComponent({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const sectionRef = useRef<HTMLElement>(null);
    const finalDate = targetDate || WEDDING_DATE;

    const calculateTimeLeft = useCallback(() => {
        const weddingDate = new Date(finalDate).getTime();
        const now = new Date().getTime();
        const difference = weddingDate - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }, [finalDate]);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

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

    const timeBlocks = [
        { value: timeLeft.days, label: "Ngày" },
        { value: timeLeft.hours, label: "Giờ" },
        { value: timeLeft.minutes, label: "Phút" },
        { value: timeLeft.seconds, label: "Giây" },
    ];

    // Quote rotation logic
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        if (!QUOTES || QUOTES.length === 0) return;
        const interval = setInterval(() => {
            setCurrentQuoteIndex((prev) => (prev + 1) % QUOTES.length);
        }, 5000); // Change quote every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const currentQuote = QUOTES && QUOTES.length > 0 ? QUOTES[currentQuoteIndex] : null;

    return (
        <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden paper-texture">


            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

                {/* Elegant Title */}
                <div className="reveal mb-6">
                    <p className="text-[var(--color-accent)] text-xs tracking-[0.4em] uppercase font-semibold mb-2">
                        ⊹ Đếm Ngược ⊹
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl text-[var(--color-primary)] italic">
                        Đến Ngày Trọng Đại
                    </h2>
                </div>

                {/* Couple Names */}
                <div className="reveal mb-10">
                    <p className="font-display text-2xl md:text-3xl text-[var(--color-primary)] opacity-70 italic">
                        {COUPLE.groom.shortName} & {COUPLE.bride.shortName}
                    </p>
                </div>

                {/* Countdown Cards */}
                <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-10">
                    {timeBlocks.map((block, index) => (
                        <div key={index} className="group">
                            <div
                                className="relative bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-[var(--color-accent)]/20 group-hover:shadow-xl group-hover:border-[var(--color-accent)]/40 transition-all duration-500"
                            >
                                {/* Decorative top line */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent rounded-full"></div>

                                <div className="font-display text-5xl md:text-6xl text-[var(--color-primary)] mb-2 tabular-nums font-light leading-none">
                                    {String(block.value).padStart(2, "0")}
                                </div>
                                <div className="text-[var(--color-accent)] text-sm uppercase tracking-[0.25em] font-medium">
                                    {block.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Wedding Date Display */}
                <div className="reveal">
                    <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full border border-[var(--color-accent)]/30">
                        <div className="text-[var(--color-primary)] opacity-50 text-sm">📅</div>
                        <p className="font-display text-xl md:text-2xl text-[var(--color-primary)] tracking-wide">
                            {new Date(finalDate).toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                </div>

                {/* Decorative Quote */}
                {currentQuote && (
                    <div className="reveal mt-12 min-h-[80px] flex flex-col items-center justify-center transition-opacity duration-1000">
                        <p className="font-display text-lg md:text-xl text-[var(--color-primary)] opacity-60 italic max-w-2xl mx-auto animate-fadeIn">
                            "{currentQuote.content}"
                        </p>
                        {currentQuote.author && (
                            <p className="text-xs text-[var(--color-primary)] opacity-40 mt-2 uppercase tracking-widest">
                                — {currentQuote.author} —
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export const CountdownTimer = memo(CountdownTimerComponent);
