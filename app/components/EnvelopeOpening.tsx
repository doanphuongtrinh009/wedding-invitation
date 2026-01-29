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
            className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto transition-all duration-500 p-4 bg-white ${isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}

            role="main"
            aria-label="Thiệp cưới"
        >
            {/* Background Floral Decorations */}
            {/* Background Floral Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-16 -left-16 w-[220px] h-[220px] md:w-[400px] md:h-[400px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: 'contain' }} className="animate-float" />
                </div>
                <div className="absolute -top-16 -right-16 w-[220px] h-[220px] md:w-[400px] md:h-[400px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: 'contain', transform: 'scaleX(-1)' }} className="animate-float" />
                </div>
                <div className="absolute -bottom-16 -left-16 w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: 'contain', transform: 'rotate(180deg) scaleX(-1)' }} className="animate-float" />
                </div>
                <div className="absolute -bottom-16 -right-16 w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
                    <Image src="/floral-new.png" alt="" fill style={{ objectFit: 'contain', transform: 'rotate(180deg)' }} className="animate-float" />
                </div>
            </div>

            {/* The Horizontal Invitation Card */}
            <div
                className="relative cursor-pointer group"
                onClick={handleOpen}
            >
                <div className="relative bg-white shadow-2xl group-hover:-translate-y-2 transition-transform duration-300">

                    {/* Outer decorative border */}
                    <div className="p-3 md:p-4" style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, #d4b896 50%, var(--color-accent) 100%)' }}>

                        {/* Inner white card - Horizontal Layout */}
                        <div className="bg-white flex flex-col md:flex-row">

                            {/* Left Side - Photo - stretches to match content height */}
                            <div className="relative w-full md:w-[380px] min-h-[260px] md:min-h-0 overflow-hidden">
                                <Image
                                    src="/couple-photo.png"
                                    alt="Ảnh cưới"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 hidden md:block"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 md:hidden"></div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="w-full md:w-[380px] p-5 md:p-6 flex items-center">

                                {/* Inner border for text area */}
                                <div className="border-2 border-[var(--color-accent)]/50 p-5 md:p-6 w-full relative">

                                    {/* Corner ornaments */}
                                    <div className="absolute -top-0.5 -left-0.5 w-5 h-5 border-t-2 border-l-2 border-[var(--color-accent)]"></div>
                                    <div className="absolute -top-0.5 -right-0.5 w-5 h-5 border-t-2 border-r-2 border-[var(--color-accent)]"></div>
                                    <div className="absolute -bottom-0.5 -left-0.5 w-5 h-5 border-b-2 border-l-2 border-[var(--color-accent)]"></div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 border-b-2 border-r-2 border-[var(--color-accent)]"></div>

                                    {/* Top Floral */}
                                    <div className="flex justify-center mb-4">
                                        <div className="relative w-16 h-16">
                                            <Image src="/floral-main.png" alt="" fill style={{ objectFit: 'contain' }} />
                                        </div>
                                    </div>

                                    {/* Wedding Invitation Text - Vietnamese only */}
                                    <div className="text-center mb-4">
                                        <p className="text-[var(--color-accent)] text-base tracking-[0.25em] uppercase font-semibold">
                                            Thiệp Mời Cưới
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="flex items-center justify-center gap-3 mb-4">
                                        <div className="h-px w-10 bg-[var(--color-accent)]"></div>
                                        <div className="text-[var(--color-accent)] text-lg">❧</div>
                                        <div className="h-px w-10 bg-[var(--color-accent)]"></div>
                                    </div>

                                    {/* Groom Name */}
                                    <div className="text-center mb-3">
                                        <p className="text-[var(--color-primary)] opacity-50 text-[11px] tracking-[0.15em] uppercase mb-1">Chú Rể</p>
                                        <h1 className="font-display text-2xl md:text-3xl text-[var(--color-primary)] leading-tight font-medium">
                                            {COUPLE.groom.name}
                                        </h1>
                                    </div>

                                    {/* And symbol */}
                                    <p className="text-center font-display text-xl text-[var(--color-accent)] my-2">&</p>

                                    {/* Bride Name */}
                                    <div className="text-center mb-4">
                                        <p className="text-[var(--color-primary)] opacity-50 text-[11px] tracking-[0.15em] uppercase mb-1">Cô Dâu</p>
                                        <h1 className="font-display text-2xl md:text-3xl text-[var(--color-primary)] leading-tight font-medium">
                                            {COUPLE.bride.name}
                                        </h1>
                                    </div>

                                    {/* Divider */}
                                    <div className="flex justify-center mb-3">
                                        <div className="h-px w-16 bg-[var(--color-accent)] opacity-50"></div>
                                    </div>

                                    {/* Save the Date */}
                                    <p className="text-center text-[var(--color-primary)] opacity-60 text-[11px] tracking-[0.15em] uppercase mb-2">
                                        Trân Trọng Kính Mời
                                    </p>

                                    {/* Date */}
                                    <div className="text-center mb-4">
                                        <p className="font-display text-xl md:text-2xl text-[var(--color-primary)] font-medium tracking-wide">
                                            Thứ Sáu, 10/04/2026
                                        </p>
                                    </div>

                                    {/* Bottom Floral */}
                                    <div className="flex justify-center mb-3">
                                        <div className="relative w-12 h-12">
                                            <Image src="/floral-main.png" alt="" fill style={{ objectFit: 'contain', transform: 'rotate(180deg)' }} />
                                        </div>
                                    </div>

                                    {/* Touch Hint */}
                                    <p className="text-center text-[var(--color-primary)] opacity-50 text-[11px] tracking-[0.15em] uppercase animate-pulse">
                                        Nhấn để xem chi tiết
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const EnvelopeOpening = memo(EnvelopeOpeningComponent);
