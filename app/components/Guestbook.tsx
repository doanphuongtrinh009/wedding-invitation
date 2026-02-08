"use client";

import { memo, useState, useCallback, useEffect, useRef } from "react";
import { GuestMessage } from "@/app/types";
import { INITIAL_MESSAGES } from "@/app/lib/data";

const MessageCard = memo(function MessageCard({ msg }: { msg: GuestMessage }) {
    return (
        <div className="card-elegant rounded-2xl p-5 transition-all duration-300 hover:shadow-[var(--shadow-medium)]">
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xl text-white">
                    {msg.name.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center justify-between gap-3">
                        <h4 className="truncate font-semibold text-[var(--color-primary)]">{msg.name}</h4>
                        <span className="text-xs text-[var(--color-text)]/45">{new Date(msg.timestamp).toLocaleDateString("vi-VN")}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--color-text)]/75">{msg.message}</p>
                </div>
            </div>
        </div>
    );
});

function GuestbookComponent() {
    const [messages, setMessages] = useState<GuestMessage[]>(INITIAL_MESSAGES);
    const [newMessage, setNewMessage] = useState({ name: "", message: "" });
    const sectionRef = useRef<HTMLElement>(null);

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            if (newMessage.name.trim() && newMessage.message.trim()) {
                setMessages((prev) => [
                    {
                        id: Date.now(),
                        name: newMessage.name.trim(),
                        message: newMessage.message.trim(),
                        timestamp: new Date(),
                    },
                    ...prev,
                ]);
                setNewMessage({ name: "", message: "" });
            }
        },
        [newMessage]
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
            <div className="pointer-events-none absolute right-6 top-12 text-5xl opacity-10 animate-float">💐</div>

            <div className="mx-auto max-w-3xl px-4 md:px-6">
                <div className="mb-12 text-center">
                    <div className="reveal mb-4 text-4xl">📖</div>
                    <p className="reveal section-heading mb-2">Guestbook</p>
                    <h2 className="reveal section-title mb-3 text-4xl md:text-5xl">Sổ Lưu Bút</h2>
                    <p className="reveal section-subtitle uppercase">Gửi lời chúc đến cô dâu chú rể</p>
                </div>

                <form onSubmit={handleSubmit} className="reveal card-elegant mb-8 rounded-[28px] p-6 md:p-8">
                    <div className="mb-4 grid gap-4">
                        <input
                            type="text"
                            placeholder="Tên của bạn"
                            className="input-elegant"
                            value={newMessage.name}
                            onChange={(e) => setNewMessage((prev) => ({ ...prev, name: e.target.value }))}
                            maxLength={50}
                        />
                        <textarea
                            placeholder="Viết lời chúc của bạn..."
                            rows={3}
                            className="input-elegant resize-none"
                            value={newMessage.message}
                            onChange={(e) => setNewMessage((prev) => ({ ...prev, message: e.target.value }))}
                            maxLength={500}
                        />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                        Gửi Lời Chúc
                    </button>
                </form>

                <div className="reveal space-y-4">
                    {messages.map((msg) => (
                        <MessageCard key={msg.id} msg={msg} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export const Guestbook = memo(GuestbookComponent);
