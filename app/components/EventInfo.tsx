"use client";

import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import { EVENTS } from "@/app/lib/data";
import { WeddingEvent } from "@/app/types";

const EventCard = memo(function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
    return (
        <div className="reveal" style={{ animationDelay: `${index * 0.12}s` }}>
            <div className="card-elegant group relative flex h-full flex-col items-center rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1 md:p-10">
                <div className="pointer-events-none absolute right-4 top-4 h-20 w-20 rotate-[-8deg] opacity-[0.06] transition-transform duration-700 group-hover:rotate-6">
                    <Image src="/floral-main.png" alt="" fill style={{ objectFit: "contain" }} />
                </div>

                <div className="mb-5 text-4xl transition-transform duration-300 group-hover:scale-110">{event.icon}</div>
                <h3 className="font-display text-3xl text-[var(--color-primary)]">{event.title}</h3>
                <div className="my-6 h-px w-14 bg-[var(--color-accent)]/45" />

                <div className="mb-8 flex flex-1 flex-col items-center gap-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-[var(--color-primary)]/85">{event.time}</div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-text)]/45">{event.date}</div>
                    <div className="h-px w-8 bg-[var(--color-primary)]/15" />
                    <p className="max-w-[208px] text-sm leading-relaxed text-[var(--color-text)]/72">{event.location}</p>
                </div>

                <a
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center justify-center text-[11px] uppercase tracking-[0.2em]"
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
        <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32">
            <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rotate-180 opacity-10">
                <Image src="/floral-main.png" alt="" fill style={{ objectFit: "contain" }} className="animate-float" />
            </div>
            <div className="pointer-events-none absolute -right-24 bottom-40 h-80 w-80 opacity-10">
                <Image src="/floral-main.png" alt="" fill style={{ objectFit: "contain" }} className="animate-float" />
            </div>

            <div className="relative mx-auto max-w-6xl px-6">
                <div className="mb-16 flex flex-col items-center text-center md:mb-20">
                    <div className="reveal mb-6 h-16 w-16">
                        <Image src="/floral-main.png" alt="Flower" width={64} height={64} className="h-full w-full object-contain" />
                    </div>
                    <p className="reveal section-heading mb-2">Wedding Events</p>
                    <h2 className="reveal section-title mb-4 text-4xl md:text-5xl">Thông Tin Lễ Cưới</h2>
                    <div className="reveal flex items-center gap-3 text-[10px] uppercase tracking-[0.34em] text-[var(--color-text)]/45">
                        <div className="h-px w-10 bg-current" />
                        <span>Lịch Trình</span>
                        <div className="h-px w-10 bg-current" />
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {EVENTS.map((event, index) => (
                        <EventCard key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export const EventInfo = memo(EventInfoComponent);
