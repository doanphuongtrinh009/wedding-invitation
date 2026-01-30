
"use client";

import { AppConfig, defaultConfig } from "@/app/types/config";
import { Download, Loader2, Send } from "lucide-react";
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

export default function ConfigGeneratorPage() {
    const [config, setConfig] = useState<AppConfig>(defaultConfig);
    const [contact, setContact] = useState<ContactInfo>({ name: "", phone: "", zalo: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const updateConfig = (key: keyof AppConfig, value: any) => {
        setConfig((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleDownload = () => {
        const jsonString = JSON.stringify(config, null, 4);
        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "config.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleSubmit = async () => {
        // Validate Contact
        if (!contact.name || !contact.phone || !contact.email) {
            alert("Vui lòng nhập đầy đủ: Tên, Số điện thoại và Email!");
            document.getElementById("contact-section")?.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        setIsSubmitting(true);

        try {
            // 2. Send API
            const response = await fetch('/api/send-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contact, config })
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
        <div className="min-h-screen bg-gray-50 p-4 font-sans pb-24">
            <div className="max-w-3xl mx-auto">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Thông Tin Thiệp Cưới</h1>
                    <p className="text-gray-600">
                        Vui lòng nhập đầy đủ thông tin bên dưới để tạo thiệp.
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

                {/* Floating Action Button */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
                    <div className="max-w-3xl mx-auto flex justify-end gap-4">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Đang gửi...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    <span>Gửi Thông Tin</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Success Modal */}
                {showSuccess && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
                        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 text-center animate-in zoom-in-95 duration-200">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send className="w-8 h-8 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Gửi Thành Công!</h2>
                            <p className="text-gray-600 mb-6">
                                Đơn hàng đã được gửi đến Admin.
                                Chúng tôi sẽ liên hệ lại sớm nhất!
                            </p>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                                >
                                    Về Trang Chủ
                                </button>
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200"
                                >
                                    Ở lại trang này
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
