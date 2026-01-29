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
        <section ref={sectionRef} className="py-20 md:py-28 paper-texture relative">
            {/* Floating Decoration */}
            <div className="absolute left-5 bottom-20 text-5xl opacity-15 animate-float">🌷</div>

            <div className="max-w-md mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="reveal mb-4">
                        <span className="text-4xl">💌</span>
                    </div>
                    <h2 className="reveal font-display text-3xl md:text-4xl text-[#2D3E33] mb-3">
                        Xác Nhận Tham Dự
                    </h2>
                    <p className="reveal text-[#2D3E33]/60 text-sm tracking-wider">
                        Vui lòng xác nhận sự hiện diện của bạn
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="reveal card-elegant p-8">
                    {/* Name */}
                    <div className="mb-6">
                        <label htmlFor="rsvp-name" className="block text-[#2D3E33] text-sm font-medium mb-2">
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

                    {/* Attending */}
                    <div className="mb-6">
                        <label htmlFor="rsvp-attending" className="block text-[#2D3E33] text-sm font-medium mb-2">
                            Bạn có tham dự được không?
                        </label>
                        <select
                            id="rsvp-attending"
                            className="input-elegant appearance-none cursor-pointer"
                            value={formData.attending}
                            onChange={(e) => updateField("attending", e.target.value as RSVPFormData["attending"])}
                        >
                            <option value="yes">✅ Có, tôi sẽ tham dự</option>
                            <option value="no">❌ Rất tiếc, tôi không thể</option>
                            <option value="maybe">🤔 Tôi sẽ xác nhận sau</option>
                        </select>
                    </div>

                    {/* Guests */}
                    {formData.attending === "yes" && (
                        <div className="mb-8">
                            <label className="block text-[#2D3E33] text-sm font-medium mb-3">
                                Số người đi cùng
                            </label>
                            <div className="flex items-center justify-center gap-6">
                                <button
                                    type="button"
                                    className="w-12 h-12 rounded-full border-2 border-[#2D3E33]/20 text-[#2D3E33] font-bold hover:bg-[#2D3E33]/10 transition-colors"
                                    onClick={() => updateField("guests", Math.max(0, formData.guests - 1))}
                                    aria-label="Giảm"
                                >
                                    −
                                </button>
                                <span className="font-display text-4xl text-[#2D3E33] w-16 text-center tabular-nums">
                                    {formData.guests}
                                </span>
                                <button
                                    type="button"
                                    className="w-12 h-12 rounded-full border-2 border-[#2D3E33]/20 text-[#2D3E33] font-bold hover:bg-[#2D3E33]/10 transition-colors"
                                    onClick={() => updateField("guests", Math.min(10, formData.guests + 1))}
                                    aria-label="Tăng"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={submitted}
                        className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${submitted
                                ? "bg-green-600 text-white"
                                : "btn-primary"
                            }`}
                    >
                        {submitted ? "✓ Đã gửi xác nhận!" : "Gửi Xác Nhận"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export const RSVPForm = memo(RSVPFormComponent);
