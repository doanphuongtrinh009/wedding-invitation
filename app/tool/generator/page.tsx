"use client";

import { AppConfig, defaultConfig } from "@/app/types/config";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import BankForm from "./components/BankForm";
import CoupleForm from "./components/CoupleForm";
import DressCodeForm from "./components/DressCodeForm";
import EventsForm from "./components/EventsForm";
import FormSection from "./components/FormSection";
import GalleryForm from "./components/GalleryForm";
import LoveStoryForm from "./components/LoveStoryForm";
import MetaForm from "./components/MetaForm";
import TimelineForm from "./components/TimelineForm";
import ContactForm, { ContactInfo } from "./components/ContactForm";
import type { UpdateConfig } from "./components/types";

export default function ConfigGeneratorPage() {
    const [config, setConfig] = useState<AppConfig>(defaultConfig);
    const [contact, setContact] = useState<ContactInfo>({ name: "", phone: "", zalo: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const updateConfig: UpdateConfig = (key, value) => {
        setConfig((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!contact.name || !contact.phone || !contact.email) {
            alert("Vui lòng nhập đầy đủ: Tên, Số điện thoại và Email!");
            document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/send-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contact, config }),
            });

            if (response.ok) {
                setShowSuccess(true);
            } else {
                const data = await response.json();
                alert("Có lỗi xảy ra khi gửi email: " + (data.error || "Unknown error"));
            }
        } catch (error) {
            console.error(error);
            alert("Lỗi kết nối.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[var(--background)] pb-28 pt-8 md:pt-10">
            <div className="mx-auto max-w-4xl px-4 md:px-6">
                <header className="card-elegant mb-8 rounded-[28px] px-6 py-8 text-center md:px-8 md:py-10">
                    <p className="section-heading mb-2">Wedding Generator</p>
                    <h1 className="section-title mb-3 text-4xl md:text-5xl">Thông Tin Thiệp Cưới</h1>
                    <p className="text-sm leading-relaxed text-[var(--color-text)]/70 md:text-base">
                        Vui lòng nhập đầy đủ thông tin bên dưới để tạo thiệp theo phong cách cao cấp.
                    </p>
                </header>

                <div className="space-y-6">
                    <div id="contact-section">
                        <FormSection title="0. Thông tin liên hệ (Quan trọng)" defaultOpen={true}>
                            <ContactForm contact={contact} setContact={setContact} />
                        </FormSection>
                    </div>

                    <FormSection title="1. Thông tin chung">
                        <MetaForm config={config} updateConfig={updateConfig} />
                    </FormSection>

                    <FormSection title="2. Cô Dâu & Chú Rể">
                        <CoupleForm config={config} updateConfig={updateConfig} />
                    </FormSection>

                    <FormSection title="3. Lịch trình (Timeline)">
                        <TimelineForm config={config} updateConfig={updateConfig} />
                    </FormSection>

                    <FormSection title="4. Chuyện tình yêu (Love Story)">
                        <LoveStoryForm config={config} updateConfig={updateConfig} />
                    </FormSection>

                    <FormSection title="5. Album ảnh (Gallery)">
                        <GalleryForm config={config} updateConfig={updateConfig} />
                    </FormSection>

                    <FormSection title="6. Sự kiện cưới (Events)">
                        <EventsForm config={config} updateConfig={updateConfig} />
                    </FormSection>

                    <FormSection title="7. Dress Code (Trang phục)">
                        <DressCodeForm config={config} updateConfig={updateConfig} />
                    </FormSection>

                    <FormSection title="8. Thông tin Ngân hàng">
                        <BankForm config={config} updateConfig={updateConfig} />
                    </FormSection>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border-soft)] bg-[var(--surface)] p-4 backdrop-blur-xl">
                <div className="mx-auto flex max-w-4xl justify-end">
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs uppercase tracking-[0.14em] disabled:cursor-not-allowed disabled:opacity-60"
                        type="button"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Đang gửi</span>
                            </>
                        ) : (
                            <>
                                <Send className="h-4 w-4" />
                                <span>Gửi Thông Tin</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {showSuccess && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-4">
                    <div className="animate-scaleIn w-full max-w-md rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface-strong)] p-8 text-center shadow-[var(--shadow-lift)]">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300 bg-emerald-100">
                            <Send className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h2 className="section-title mb-2 text-3xl">Gửi Thành Công!</h2>
                        <p className="mb-6 text-sm leading-relaxed text-[var(--color-text)]/72">
                            Đơn hàng đã được gửi đến Admin. Chúng tôi sẽ liên hệ lại sớm nhất.
                        </p>
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => (window.location.href = "/")}
                                className="btn-primary w-full rounded-2xl text-xs uppercase tracking-[0.14em]"
                                type="button"
                            >
                                Về Trang Chủ
                            </button>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="w-full rounded-2xl border border-[var(--border-soft)] bg-white/75 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] transition-colors hover:bg-white"
                                type="button"
                            >
                                Ở lại trang này
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
