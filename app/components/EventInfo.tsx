"use client";

import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import { EVENTS } from "@/app/lib/data";
import { WeddingEvent } from "@/app/types";

const EventCard = memo(function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
    return (
        <div
            className="reveal group"
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className="relative card-elegant p-10 text-center bg-white/60 hover:bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border-none h-full flex flex-col items-center">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none -rotate-12 group-hover:rotate-12 transition-transform duration-700">
                    <Image src="/floral-main.png" alt="" fill style={{ objectFit: 'contain' }} />
                </div>

                {/* Icon/Emoji replacement */}
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{event.icon}</div>

                {/* Title */}
                <h3 className="font-display text-2xl text-[var(--color-primary)] mb-6">{event.title}</h3>

                {/* Divider */}
                <div className="w-12 h-px bg-[var(--color-primary)]/10 mb-6" />

                {/* Time & Location */}
                <div className="flex flex-col gap-4 mb-8 flex-grow">
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-[var(--color-primary)] font-medium tracking-wide uppercase text-xs">{event.time}</p>
                        <p className="text-[var(--color-text)] opacity-40 text-[10px] tracking-widest uppercase">{event.date}</p>
                    </div>
                    <div className="h-px w-6 bg-[var(--color-primary)]/5 mx-auto"></div>
                    <div>
                        <p className="text-[var(--color-text)] opacity-60 text-sm leading-relaxed max-w-[180px]">
                            {event.location}
                        </p>
                    </div>
                </div>

                {/* Map Link */}
                <a
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-[10px] tracking-[0.2em] uppercase font-bold py-3 px-8 inline-flex items-center gap-3 hover:tracking-[0.3em] transition-all"
                >
                    Chỉ đường
                </a>
            </div>
        </div>
    );
});

function EventInfoComponent() {
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
        <section ref={sectionRef} className="py-24 md:py-32 paper-texture relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute -left-20 top-40 w-80 h-80 opacity-10 pointer-events-none rotate-180">
                <Image src="/floral-main.png" alt="" fill style={{ objectFit: 'contain' }} className="animate-float" />
            </div>
            <div className="absolute -right-20 bottom-40 w-80 h-80 opacity-10 pointer-events-none">
                <Image src="/floral-main.png" alt="" fill style={{ objectFit: 'contain' }} className="animate-float" />
            </div>

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <div className="reveal mb-8 w-16 h-16 relative">
                        <Image src="/floral-main.png" alt="Flower" fill style={{ objectFit: 'contain' }} />
                    </div>
                    <h2 className="reveal font-display text-4xl md:text-5xl text-[var(--color-primary)] mb-4">
                        Thông Tin Lễ Cưới
                    </h2>
                    <div className="reveal flex items-center gap-4 text-[var(--color-text)] opacity-30 uppercase text-[10px] tracking-[0.4em] font-medium">
                        <div className="h-px w-12 bg-current"></div>
                        <span>Wedding Events</span>
                        <div className="h-px w-12 bg-current"></div>
                    </div>
                </div>

                {/* Event Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {EVENTS.map((event, index) => (
                        <EventCard key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export const EventInfo = memo(EventInfoComponent);
