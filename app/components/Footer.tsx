"use client";

import { memo, useEffect, useRef } from "react";
import Link from "next/link";
import { COUPLE, CONFIG } from "@/app/lib/data";

function FooterComponent() {
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
        <footer ref={sectionRef} className="py-20 paper-texture relative">
            {/* Top Decoration */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2D3E33]/20 to-transparent" />

            <div className="max-w-lg mx-auto px-4 text-center">
                {/* Thank You */}
                <div className="reveal mb-10">
                    <h3 className="font-display text-3xl text-[var(--color-primary)] mb-4">
                        Cảm Ơn Bạn!
                    </h3>
                    <p className="text-[var(--color-text)] opacity-60 text-sm leading-relaxed max-w-sm mx-auto">
                        Sự hiện diện của bạn là niềm hạnh phúc lớn lao của chúng tôi trong ngày trọng đại này.
                    </p>
                </div>

                {/* Names */}
                <div className="reveal flex items-center justify-center gap-4 mb-10">
                    <span className="font-display text-xl text-[var(--color-primary)]">{COUPLE.groom.shortName}</span>
                    <span className="text-2xl text-[var(--color-text)] opacity-60">♥</span>
                    <span className="font-display text-xl text-[var(--color-primary)]">{COUPLE.bride.shortName}</span>
                </div>

                {/* Decorative Divider */}
                <div className="reveal flex items-center justify-center gap-3 mb-8 text-[var(--color-text)] opacity-30">
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                </div>

                {/* Copyright */}
                <p className="reveal text-[var(--color-text)] opacity-40 text-xs tracking-wider mb-4">
                    Thực hiện bởi ♥ | {new Date(CONFIG.weddingDate).toLocaleDateString('vi-VN')}
                </p>

                <div className="reveal">
                    <Link
                        href="/tool/generator"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/5 hover:bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium transition-colors"
                    >
                        <span>✨</span>
                        Tạo thiệp cưới của bạn
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export const Footer = memo(FooterComponent);
