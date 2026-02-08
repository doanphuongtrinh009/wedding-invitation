"use client";

import { memo, useState, useCallback, useEffect, useRef } from "react";
import { RSVPFormData } from "@/app/types";

function RSVPFormComponent() {
    const [formData, setFormData] = useState<RSVPFormData>({
        name: "",
        attending: "yes",
        guests: 1,
    });
    const [submitted, setSubmitted] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            console.log("RSVP Form Data:", formData);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
        },
        [formData]
    );

    const updateField = useCallback(
        <K extends keyof RSVPFormData>(field: K, value: RSVPFormData[K]) => {
            setFormData((prev) => ({ ...prev, [field]: value }));
        },
        []
    );

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
        <section ref={sectionRef} className="relative py-24 md:py-28">
            <div className="pointer-events-none absolute bottom-16 left-4 text-5xl opacity-10 animate-float">🌷</div>

            <div className="mx-auto max-w-lg px-4 md:px-6">
                <div className="mb-12 text-center">
                    <div className="reveal mb-4 text-4xl">💌</div>
                    <p className="reveal section-heading mb-2">RSVP</p>
                    <h2 className="reveal section-title mb-3 text-4xl md:text-5xl">Xác Nhận Tham Dự</h2>
                    <p className="reveal section-subtitle uppercase">Vui lòng xác nhận sự hiện diện của bạn</p>
                </div>

                <form onSubmit={handleSubmit} className="reveal card-elegant rounded-[28px] p-6 md:p-8">
                    <div className="mb-6">
                        <label htmlFor="rsvp-name" className="mb-2 block text-sm font-medium text-[var(--color-text)]/85">
                            Họ và Tên <span className="text-red-400">*</span>
                        </label>
                        <input
                            id="rsvp-name"
                            type="text"
                            required
                            placeholder="Nhập họ tên của bạn"
                            className="input-elegant"
                            value={formData.name}
                            onChange={(e) => updateField("name", e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="rsvp-attending" className="mb-2 block text-sm font-medium text-[var(--color-text)]/85">
                            Bạn có tham dự được không?
                        </label>
                        <select
                            id="rsvp-attending"
                            className="input-elegant cursor-pointer appearance-none"
                            value={formData.attending}
                            onChange={(e) => updateField("attending", e.target.value as RSVPFormData["attending"])}
                        >
                            <option value="yes">✅ Có, tôi sẽ tham dự</option>
                            <option value="no">❌ Rất tiếc, tôi không thể</option>
                            <option value="maybe">🤔 Tôi sẽ xác nhận sau</option>
                        </select>
                    </div>

                    {formData.attending === "yes" && (
                        <div className="mb-8 rounded-2xl border border-[var(--border-soft)] bg-white/60 p-4 md:p-6">
                            <label className="mb-4 block text-sm font-medium text-[var(--color-text)]/85">Số người đi cùng</label>
                            <div className="flex items-center justify-center gap-6">
                                <button
                                    type="button"
                                    className="h-12 w-12 rounded-full border border-[var(--border-soft)] text-2xl text-[var(--color-primary)] transition-colors hover:bg-white"
                                    onClick={() => updateField("guests", Math.max(0, formData.guests - 1))}
                                    aria-label="Giảm"
                                >
                                    −
                                </button>
                                <span className="tabular-nums w-16 text-center font-display text-5xl text-[var(--color-primary)]">{formData.guests}</span>
                                <button
                                    type="button"
                                    className="h-12 w-12 rounded-full border border-[var(--border-soft)] text-2xl text-[var(--color-primary)] transition-colors hover:bg-white"
                                    onClick={() => updateField("guests", Math.min(10, formData.guests + 1))}
                                    aria-label="Tăng"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={submitted}
                        className={`w-full rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${submitted ? "bg-emerald-600 text-white" : "btn-primary"}`}
                    >
                        {submitted ? "Đã gửi xác nhận" : "Gửi Xác Nhận"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export const RSVPForm = memo(RSVPFormComponent);
