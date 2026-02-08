"use client";

import { memo } from "react";
import { DRESS_CODE } from "@/app/lib/data";
import type { DressCodeConfig } from "@/app/types";

function DressCodeComponent() {
    if (!DRESS_CODE) return null;

    return (
        <section className="relative py-24">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <div className="card-elegant rounded-[32px] p-8 md:p-12">
                    <p className="section-heading mb-2">Trang Phục</p>
                    <h2 className="section-title mb-6 text-4xl md:text-5xl">Dress Code</h2>

                    <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[var(--color-text)]/75">{DRESS_CODE.description}</p>

                    <div className="mb-8 flex flex-wrap justify-center gap-4 md:gap-6">
                        {DRESS_CODE.palette.map((item: DressCodeConfig["palette"][number], index: number) => (
                            <div key={index} className="group flex flex-col items-center gap-2">
                                <div
                                    className="h-14 w-14 rounded-full border-2 border-white shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-xs uppercase tracking-[0.12em] text-[var(--color-text)]/65">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    {DRESS_CODE.note && (
                        <div className="inline-block rounded-2xl border border-[var(--border-soft)] bg-white/70 px-6 py-3">
                            <p className="text-sm italic text-[var(--color-text)]/80">* {DRESS_CODE.note}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export const DressCode = memo(DressCodeComponent);
