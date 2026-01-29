"use client";

import { memo, useState, useCallback, useEffect, useRef } from "react";
import { GuestMessage } from "@/app/types";
import { INITIAL_MESSAGES } from "@/app/lib/data";

const MessageCard = memo(function MessageCard({ msg }: { msg: GuestMessage }) {
    return (
        <div className="card-elegant p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-11 h-11 bg-[#2D3E33] rounded-full flex items-center justify-center text-white font-display text-lg flex-shrink-0">
                    {msg.name.charAt(0).toUpperCase()}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-[#2D3E33] truncate">{msg.name}</h4>
                        <span className="text-xs text-[#2D3E33]/40 flex-shrink-0 ml-2">
                            {new Date(msg.timestamp).toLocaleDateString("vi-VN")}
                        </span>
                    </div>
                    <p className="text-[#2D3E33]/70 text-sm leading-relaxed break-words">
                        {msg.message}
                    </p>
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
        <section ref={sectionRef} className="py-20 md:py-28 paper-texture relative">
            {/* Floating Decoration */}
            <div className="absolute right-5 top-10 text-5xl opacity-15 animate-float">💐</div>

            <div className="max-w-2xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="reveal mb-4">
                        <span className="text-4xl">📖</span>
                    </div>
                    <h2 className="reveal font-display text-3xl md:text-4xl text-[#2D3E33] mb-3">
                        Sổ Lưu Bút
                    </h2>
                    <p className="reveal text-[#2D3E33]/60 text-sm tracking-wider">
                        Gửi lời chúc đến cô dâu chú rể
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="reveal card-elegant p-6 mb-8">
                    <div className="grid gap-4 mb-4">
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
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                        <span>💌</span>
                        <span>Gửi Lời Chúc</span>
                    </button>
                </form>

                {/* Messages */}
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
