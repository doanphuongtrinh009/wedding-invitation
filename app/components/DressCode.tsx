"use client";

import { memo } from "react";
import { DRESS_CODE } from "@/app/lib/data";

function DressCodeComponent() {
    if (!DRESS_CODE) return null;

    return (
        <section className="py-20 paper-texture relative">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-[var(--color-primary)]/5">
                    <p className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                        Trang Phục
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl text-[var(--color-primary)] mb-6">
                        Dress Code
                    </h2>

                    <p className="text-[var(--color-text)] opacity-70 mb-8 leading-relaxed">
                        {DRESS_CODE.description}
                    </p>

                    {/* Color Palette */}
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        {DRESS_CODE.palette.map((item: any, index: number) => (
                            <div key={index} className="flex flex-col items-center gap-2 group">
                                <div
                                    className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-md border-2 border-white group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-xs uppercase tracking-wider text-[var(--color-text)] opacity-60">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    {DRESS_CODE.note && (
                        <div className="inline-block bg-[var(--color-primary)]/5 px-6 py-3 rounded-lg">
                            <p className="text-sm font-medium text-[var(--color-text)] opacity-80 italic">
                                * {DRESS_CODE.note}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export const DressCode = memo(DressCodeComponent);
