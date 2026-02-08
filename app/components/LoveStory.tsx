"use client";

import { memo } from "react";
import Image from "next/image";
import { LOVE_STORY } from "@/app/lib/data";
import type { LoveStoryEvent } from "@/app/types";

function LoveStoryComponent() {
    if (!LOVE_STORY || LOVE_STORY.length === 0) return null;

    return (
        <section className="overflow-hidden py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-14 text-center md:mb-16">
                    <p className="section-heading mb-2">Câu Chuyện Tình Yêu</p>
                    <h2 className="section-title text-4xl md:text-5xl">Hành Trình Yêu Thương</h2>
                </div>

                <div className="relative">
                    <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[var(--color-primary)]/12 md:block" />

                    <div className="space-y-12 md:space-y-20">
                        {LOVE_STORY.map((item: LoveStoryEvent, index: number) => (
                            <div
                                key={index}
                                className={`grid items-center gap-6 md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "md:[&>div:first-child]:order-2" : ""}`}
                            >
                                <div className="flex justify-center p-2 md:p-4">
                                    <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/90 shadow-[var(--shadow-medium)] md:h-80 md:w-80">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            className="transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>

                                <div className={`rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-center shadow-[var(--shadow-soft)] md:p-8 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className="mb-4 inline-flex rounded-full border border-[var(--border-accent)] bg-white/70 px-4 py-1 font-display text-xl text-[var(--color-accent)]">
                                        {item.date}
                                    </div>
                                    <h3 className="mb-4 font-display text-3xl text-[var(--color-primary)]">{item.title}</h3>
                                    <p className="leading-relaxed text-[var(--color-text)]/72">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export const LoveStory = memo(LoveStoryComponent);
