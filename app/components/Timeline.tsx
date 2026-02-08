"use client";

import { memo } from "react";
import { CONFIG } from "@/app/lib/data";

const CameraIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="15" y="30" width="70" height="50" rx="10" />
        <path d="M15 45 h70" className="opacity-50" />
        <circle cx="50" cy="55" r="18" />
        <circle cx="50" cy="55" r="14" className="opacity-50" />
        <path d="M30 30 V 20 H 45 L 50 30" />
        <rect x="70" y="22" width="10" height="8" rx="2" />
        <path d="M20 20 q5 -5 10 0 q5 5 -10 10 q-5 -5 0 -10" fill="#FF6B6B" stroke="none" className="animate-pulse" />
        <path d="M85 25 q3 -3 6 0 q3 3 -6 6 q-3 -3 0 -6" fill="#FF6B6B" stroke="none" style={{ animationDelay: "1s" }} />
    </svg>
);

const RingIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="35" cy="60" r="25" />
        <circle cx="65" cy="60" r="25" />
        <path d="M35 35 L 45 20 L 55 20 L 65 35 L 50 50 Z" />
        <path d="M35 35 L 65 35" />
        <path d="M45 20 L 50 50" />
        <path d="M55 20 L 50 50" />
        <path d="M50 10 L 50 5 M 40 10 L 38 7 M 60 10 L 62 7" strokeWidth="1" />
        <path d="M20 40 q4 -4 8 0 q4 4 -8 8 q-4 -4 0 -8" fill="#FF6B6B" stroke="none" className="animate-pulse" />
        <path d="M80 40 q4 -4 8 0 q4 4 -8 8 q-4 -4 0 -8" fill="#FF6B6B" stroke="none" style={{ animationDelay: "0.5s" }} />
    </svg>
);

const CheersIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 20 L 30 50 Q 30 65 45 65 L 45 90 M 30 90 L 60 90" transform="rotate(-15 45 70)" />
        <path d="M30 25 L 60 25" transform="rotate(-15 45 70)" className="opacity-50" />
        <path d="M70 20 L 70 50 Q 70 65 55 65 L 55 90 M 40 90 L 70 90" transform="rotate(15 55 70)" />
        <path d="M40 25 L 70 25" transform="rotate(15 55 70)" className="opacity-50" />
        <path d="M50 15 L 50 5 M 45 10 L 55 10" strokeWidth="1" />
        <path d="M50 30 q5 -5 10 0 q5 5 -10 10 q-5 -5 0 -10" fill="#FF6B6B" stroke="none" className="animate-pulse" />
    </svg>
);

function TimelineComponent() {
    const timeline = CONFIG.timeline;

    if (!timeline || timeline.length === 0) return null;

    const getIcon = (iconName: string, className: string) => {
        switch (iconName) {
            case "camera":
                return <CameraIcon className={className} />;
            case "ring":
                return <RingIcon className={className} />;
            case "cheers":
                return <CheersIcon className={className} />;
            default:
                return null;
        }
    };

    return (
        <section className="py-24 md:py-28">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mb-12 text-center md:mb-16">
                    <p className="section-heading mb-2">Lịch Trình</p>
                    <h2 className="section-title text-4xl md:text-5xl">Timeline Ngày Cưới</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                    {timeline.map((item, index) => (
                        <div key={index} className="card-elegant flex flex-col items-center rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-1 md:p-8">
                            <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[var(--border-accent)] bg-white/70 text-[var(--color-primary)] md:h-28 md:w-28">
                                {getIcon(item.icon, "h-16 w-16")}
                            </div>
                            <div className="font-display text-3xl text-[var(--color-primary)]">{item.time}</div>
                            <div className="mt-2 text-sm uppercase tracking-[0.12em] text-[var(--color-text)]/75 md:text-base">{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export const Timeline = memo(TimelineComponent);
