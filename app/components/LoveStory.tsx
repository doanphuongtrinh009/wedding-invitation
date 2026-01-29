"use client";

import { memo } from "react";
import Image from "next/image";
import { LOVE_STORY } from "@/app/lib/data";

function LoveStoryComponent() {
    if (!LOVE_STORY || LOVE_STORY.length === 0) return null;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                        Câu Chuyện Tình Yêu
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl text-[var(--color-primary)]">
                        Hành Trình Yêu Thương
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-[var(--color-primary)]/10 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-24">
                        {LOVE_STORY.map((item: any, index: number) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Image Side */}
                                <div className="w-full md:w-1/2 flex justify-center p-4">
                                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#f8f5f0] shadow-xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} px-4`}>
                                    <div className="inline-block bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-display text-xl px-4 py-1 rounded-full mb-4">
                                        {item.date}
                                    </div>
                                    <h3 className="font-display text-2xl md:text-3xl text-[var(--color-primary)] mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--color-text)] opacity-70 leading-relaxed italic">
                                        {item.description}
                                    </p>
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
