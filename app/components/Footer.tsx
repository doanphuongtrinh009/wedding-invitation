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
        <footer ref={sectionRef} className="relative py-20">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent" />

            <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
                <div className="reveal card-elegant rounded-[28px] p-8 md:p-10">
                    <h3 className="font-display text-4xl text-[var(--color-primary)]">Cảm Ơn Bạn!</h3>
                    <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-text)]/70 md:text-base">
                        Sự hiện diện của bạn là niềm hạnh phúc lớn lao của chúng tôi trong ngày trọng đại này.
                    </p>

                    <div className="my-8 flex items-center justify-center gap-4">
                        <span className="font-display text-2xl text-[var(--color-primary)] md:text-3xl">{COUPLE.groom.shortName}</span>
                        <span className="text-2xl text-[var(--color-accent)]">♥</span>
                        <span className="font-display text-2xl text-[var(--color-primary)] md:text-3xl">{COUPLE.bride.shortName}</span>
                    </div>

                    <div className="mb-6 flex items-center justify-center gap-2 text-[var(--color-primary)]/35">
                        <span>✦</span>
                        <span>✦</span>
                        <span>✦</span>
                    </div>

                    <p className="mb-5 text-xs uppercase tracking-[0.14em] text-[var(--color-text)]/45">
                        Thực hiện bởi ♥ | {new Date(CONFIG.weddingDate).toLocaleDateString("vi-VN")}
                    </p>

                    <Link href="/tool/generator" className="btn-outline inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.18em]">
                        <span>✨</span>
                        Tạo thiệp cưới của bạn
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export const Footer = memo(FooterComponent);
