"use client";

import { memo } from "react";
import { CONFIG } from "@/app/lib/data";

// Custom Hand-drawn Icons
const CameraIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Body */}
        <rect x="15" y="30" width="70" height="50" rx="10" />
        <path d="M15 45 h70" className="opacity-50" />
        {/* Lens */}
        <circle cx="50" cy="55" r="18" />
        <circle cx="50" cy="55" r="14" className="opacity-50" />
        {/* Flash/Button */}
        <path d="M30 30 V 20 H 45 L 50 30" />
        <rect x="70" y="22" width="10" height="8" rx="2" />
        {/* Hearts */}
        <path d="M20 20 q5 -5 10 0 q5 5 -10 10 q-5 -5 0 -10" fill="#FF6B6B" stroke="none" className="animate-pulse" />
        <path d="M85 25 q3 -3 6 0 q3 3 -6 6 q-3 -3 0 -6" fill="#FF6B6B" stroke="none" style={{ animationDelay: "1s" }} />
    </svg>
);

const RingIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Ring 1 */}
        <circle cx="35" cy="60" r="25" />
        {/* Ring 2 */}
        <circle cx="65" cy="60" r="25" />
        {/* Diamond */}
        <path d="M35 35 L 45 20 L 55 20 L 65 35 L 50 50 Z" />
        <path d="M35 35 L 65 35" />
        <path d="M45 20 L 50 50" />
        <path d="M55 20 L 50 50" />
        {/* Sparkles/Hearts */}
        <path d="M50 10 L 50 5 M 40 10 L 38 7 M 60 10 L 62 7" strokeWidth="1" />
        <path d="M20 40 q4 -4 8 0 q4 4 -8 8 q-4 -4 0 -8" fill="#FF6B6B" stroke="none" className="animate-pulse" />
        <path d="M80 40 q4 -4 8 0 q4 4 -8 8 q-4 -4 0 -8" fill="#FF6B6B" stroke="none" style={{ animationDelay: "0.5s" }} />
    </svg>
);

const CheersIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Glass 1 */}
        <path d="M30 20 L 30 50 Q 30 65 45 65 L 45 90 M 30 90 L 60 90" transform="rotate(-15 45 70)" />
        <path d="M30 25 L 60 25" transform="rotate(-15 45 70)" className="opacity-50" />
        {/* Glass 2 */}
        <path d="M70 20 L 70 50 Q 70 65 55 65 L 55 90 M 40 90 L 70 90" transform="rotate(15 55 70)" />
        <path d="M40 25 L 70 25" transform="rotate(15 55 70)" className="opacity-50" />
        {/* Bubbles/Clink */}
        <path d="M50 15 L 50 5 M 45 10 L 55 10" strokeWidth="1" />
        <path d="M50 30 q5 -5 10 0 q5 5 -10 10 q-5 -5 0 -10" fill="#FF6B6B" stroke="none" className="animate-pulse" />
    </svg>
);

function TimelineComponent() {
    const timeline = CONFIG.timeline;

    if (!timeline || timeline.length === 0) return null;

    const getIcon = (iconName: string, className: string) => {
        switch (iconName) {
            case "camera": return <CameraIcon className={className} />;
            case "ring": return <RingIcon className={className} />;
            case "cheers": return <CheersIcon className={className} />;
            default: return null;
        }
    };

    return (
        <section className="py-12 paper-texture">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="font-display text-4xl md:text-5xl text-[var(--color-primary)]">
                        Timeline
                    </h2>
                </div>

                <div className="grid grid-cols-3 gap-4 md:gap-8">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-24 h-24 md:w-32 md:h-32 mb-4 transition-transform hover:scale-110 duration-300">
                                {getIcon(item.icon, "w-full h-full text-[var(--color-text)]")}
                            </div>
                            <div className="text-center space-y-1">
                                <div className="font-display text-xl md:text-2xl text-[var(--color-primary)] font-bold">
                                    {item.time}
                                </div>
                                <div className="font-display text-lg md:text-xl text-[var(--color-text)]">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export const Timeline = memo(TimelineComponent);
