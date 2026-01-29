"use client";

import { memo } from "react";
import { CONFIG } from "@/app/lib/data";

function FamilyInfoComponent() {
    const family = CONFIG.family;

    if (!family) return null;

    return (
        <section className="py-16 paper-texture">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 relative">
                        {/* Nhà Trai */}
                        <div className="p-8 text-center">
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <h3 className="font-display text-2xl md:text-3xl text-[var(--color-primary)]">
                                    {family.groom.title}
                                </h3>
                                <span className="text-2xl">🥂</span>
                            </div>
                            <div className="space-y-2 font-display text-lg text-[var(--color-text)]">
                                <p className="italic">{family.groom.father}</p>
                                <p className="italic">{family.groom.mother}</p>
                            </div>
                        </div>

                        {/* Divider - Center decoration */}
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">
                            <div className="w-px h-12 bg-[var(--color-primary)]/30"></div>
                            <div className="w-16 h-20 bg-[var(--color-primary)] rounded-md flex items-center justify-center my-2 shadow-lg">
                                <span className="text-2xl text-[var(--color-accent)]">囍</span>
                            </div>
                            <div className="w-px h-12 bg-[var(--color-primary)]/30"></div>
                        </div>

                        {/* Mobile Divider */}
                        <div className="md:hidden flex items-center justify-center py-4">
                            <div className="w-12 h-px bg-[var(--color-primary)]/30"></div>
                            <div className="w-12 h-14 bg-[var(--color-primary)] rounded-md flex items-center justify-center mx-3 shadow-lg">
                                <span className="text-xl text-[var(--color-accent)]">囍</span>
                            </div>
                            <div className="w-12 h-px bg-[var(--color-primary)]/30"></div>
                        </div>

                        {/* Nhà Gái */}
                        <div className="p-8 text-center">
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <h3 className="font-display text-2xl md:text-3xl text-[var(--color-primary)]">
                                    {family.bride.title}
                                </h3>
                                <span className="text-2xl">💍</span>
                            </div>
                            <div className="space-y-2 font-display text-lg text-[var(--color-text)]">
                                <p className="italic">{family.bride.father}</p>
                                <p className="italic">{family.bride.mother}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const FamilyInfo = memo(FamilyInfoComponent);
