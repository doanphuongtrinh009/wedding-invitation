"use client";

import { useState, useEffect, memo, useCallback, useRef } from "react";
import { TimeLeft } from "@/app/types";
import { WEDDING_DATE, COUPLE, QUOTES } from "@/app/lib/data";

interface CountdownTimerProps {
    targetDate?: string;
}

function getTimeLeft(targetDate: string): TimeLeft {
    const weddingDate = new Date(targetDate).getTime();
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
}

function CountdownTimerComponent({ targetDate }: CountdownTimerProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const finalDate = targetDate || WEDDING_DATE;
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(finalDate));

    const calculateTimeLeft = useCallback(() => getTimeLeft(finalDate), [finalDate]);

    useEffect(() => {
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

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        if (!QUOTES || QUOTES.length === 0) return;
        const interval = setInterval(() => {
            setCurrentQuoteIndex((prev) => (prev + 1) % QUOTES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentQuote = QUOTES && QUOTES.length > 0 ? QUOTES[currentQuoteIndex] : null;

    return (
        <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <div className="reveal mb-8">
                    <p className="section-heading mb-2">⊹ Đếm Ngược ⊹</p>
                    <h2 className="section-title text-4xl italic md:text-5xl">Đến Ngày Trọng Đại</h2>
                </div>

                <div className="reveal mb-10">
                    <p className="font-display text-3xl italic text-[var(--color-primary)]/80 md:text-4xl">
                        {COUPLE.groom.shortName} &amp; {COUPLE.bride.shortName}
                    </p>
                </div>

                <div className="reveal mx-auto mb-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                    {timeBlocks.map((block, index) => (
                        <div key={index} className="group rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] md:p-8">
                            <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mx-auto" />
                            <div className="tabular-nums font-display text-5xl font-light leading-none text-[var(--color-primary)] md:text-6xl">
                                {String(block.value).padStart(2, "0")}
                            </div>
                            <div className="mt-3 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-accent)] md:text-sm">
                                {block.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="reveal">
                    <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-accent)] bg-white/70 px-6 py-3 shadow-[var(--shadow-soft)] md:px-8 md:py-4">
                        <div className="text-base text-[var(--color-primary)]/55">📅</div>
                        <p className="font-display text-lg tracking-wide text-[var(--color-primary)] md:text-2xl">
                            {new Date(finalDate).toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>

                {currentQuote && (
                    <div className="reveal mt-12 flex min-h-20 flex-col items-center justify-center transition-opacity duration-700">
                        <p className="mx-auto max-w-3xl font-display text-xl italic text-[var(--color-primary)]/70 md:text-2xl">
                            &ldquo;{currentQuote.content}&rdquo;
                        </p>
                        {currentQuote.author && (
                            <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[var(--color-primary)]/45">
                                {currentQuote.author}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export const CountdownTimer = memo(CountdownTimerComponent);
