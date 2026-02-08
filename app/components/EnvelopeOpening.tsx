"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { COUPLE } from "@/app/lib/data";

interface EnvelopeOpeningProps {
    onOpen: () => void;
}

function EnvelopeOpeningComponent({ onOpen }: EnvelopeOpeningProps) {
    const [isExiting, setIsExiting] = useState(false);

    const handleOpen = () => {
        if (isExiting) return;
        setIsExiting(true);
        setTimeout(() => {
            onOpen();
        }, 600);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-[var(--background)] px-4 py-8 transition-all duration-500 ${isExiting ? "scale-105 opacity-0" : "scale-100 opacity-100"}`}
            role="main"
            aria-label="Thiệp cưới"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-16 -top-16 h-[224px] w-[224px] md:h-[432px] md:w-[432px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: "contain" }} className="animate-float" />
                </div>
                <div className="absolute -right-16 -top-16 h-[224px] w-[224px] md:h-[432px] md:w-[432px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: "contain", transform: "scaleX(-1)" }} className="animate-float" />
                </div>
                <div className="absolute -bottom-16 -left-16 h-[208px] w-[208px] md:h-[352px] md:w-[352px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: "contain", transform: "rotate(180deg) scaleX(-1)" }} className="animate-float" />
                </div>
                <div className="absolute -bottom-16 -right-16 h-[208px] w-[208px] md:h-[352px] md:w-[352px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: "contain", transform: "rotate(180deg)" }} className="animate-float" />
                </div>
            </div>

            <button
                className="group relative cursor-pointer rounded-[28px] text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/30"
                onClick={handleOpen}
                type="button"
            >
                <div
                    className="rounded-[28px] p-2 md:p-3"
                    style={{ background: "linear-gradient(135deg, var(--color-accent) 0%, #d8bea0 50%, var(--color-accent) 100%)" }}
                >
                    <div className="flex w-full max-w-[840px] flex-col overflow-hidden rounded-[24px] border border-[var(--border-accent)] bg-[var(--surface-strong)] shadow-[var(--shadow-lift)] md:flex-row">
                        <div className="relative min-h-[272px] w-full overflow-hidden md:min-h-0 md:w-[400px]">
                            <Image
                                src="/couple-photo.png"
                                alt="Ảnh cưới"
                                fill
                                style={{ objectFit: "cover" }}
                                className="transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30 hidden md:block" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 md:hidden" />
                        </div>

                        <div className="flex w-full items-center p-6 md:w-[408px] md:p-8">
                            <div className="relative w-full rounded-[20px] border border-[var(--border-accent)] bg-white/75 p-6 shadow-[var(--shadow-soft)] md:p-8">
                                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-[var(--color-accent)]" />
                                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-[var(--color-accent)]" />
                                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-[var(--color-accent)]" />
                                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-[var(--color-accent)]" />

                                <div className="mb-4 flex justify-center">
                                    <div className="relative h-16 w-16">
                                        <Image src="/floral-main.png" alt="" fill style={{ objectFit: "contain" }} />
                                    </div>
                                </div>

                                <div className="mb-4 text-center">
                                    <p className="section-heading">Thiệp Mời Cưới</p>
                                </div>

                                <div className="mb-4 flex items-center justify-center gap-3 text-[var(--color-accent)]">
                                    <div className="h-px w-12 bg-current/80" />
                                    <div className="text-base">❧</div>
                                    <div className="h-px w-12 bg-current/80" />
                                </div>

                                <div className="mb-3 text-center">
                                    <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-primary)]/55">Chú Rể</p>
                                    <h1 className="font-display text-3xl text-[var(--color-primary)] md:text-4xl">{COUPLE.groom.name}</h1>
                                </div>

                                <p className="my-2 text-center font-display text-2xl text-[var(--color-accent)]">&</p>

                                <div className="mb-4 text-center">
                                    <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-primary)]/55">Cô Dâu</p>
                                    <h1 className="font-display text-3xl text-[var(--color-primary)] md:text-4xl">{COUPLE.bride.name}</h1>
                                </div>

                                <div className="mb-4 flex justify-center">
                                    <div className="h-px w-16 bg-[var(--color-accent)]/50" />
                                </div>

                                <p className="mb-2 text-center text-[11px] uppercase tracking-[0.2em] text-[var(--color-primary)]/65">Trân Trọng Kính Mời</p>

                                <div className="mb-4 text-center">
                                    <p className="font-display text-xl tracking-wide text-[var(--color-primary)] md:text-2xl">Thứ Sáu, 10/04/2026</p>
                                </div>

                                <div className="mb-3 flex justify-center">
                                    <div className="relative h-12 w-12">
                                        <Image src="/floral-main.png" alt="" fill style={{ objectFit: "contain", transform: "rotate(180deg)" }} />
                                    </div>
                                </div>

                                <p className="animate-pulse text-center text-[11px] uppercase tracking-[0.18em] text-[var(--color-primary)]/55">
                                    Nhấn để xem chi tiết
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}

export const EnvelopeOpening = memo(EnvelopeOpeningComponent);
