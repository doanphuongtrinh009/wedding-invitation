"use client";

import { memo, useCallback, useMemo, useState } from "react";

import { INITIAL_MESSAGES } from "@/app/utils/data";
import type { GuestMessage } from "@/app/types";

interface GuestbookState {
  name: string;
  message: string;
}

function formatTimestamp(value: string | Date) {
  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Vừa xong";
  }

  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function GuestbookWallComponent() {
  const [messages, setMessages] = useState<GuestMessage[]>(() => INITIAL_MESSAGES);
  const [form, setForm] = useState<GuestbookState>({ name: "", message: "" });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!form.name.trim() || !form.message.trim()) {
        return;
      }

      const nextMessage: GuestMessage = {
        id: Date.now(),
        name: form.name.trim(),
        message: form.message.trim(),
        timestamp: new Date(),
      };

      setMessages((prev) => [nextMessage, ...prev]);
      setForm({ name: "", message: "" });
    },
    [form]
  );

  const visibleMessages = useMemo(() => messages.slice(0, 6), [messages]);

  return (
    <div className="lux-guestbook-wrap">
      <div className="lux-guestbook-form-box">
        <p className="lux-kicker">Sổ lưu bút</p>
        <h2 className="lux-title">Sổ lưu bút</h2>
        <p className="lux-copy">Để lại lời chúc cho cô dâu chú rể. Những lời nhắn mới sẽ hiển thị ngay trên trang.</p>

        <form className="lux-guestbook-form" onSubmit={handleSubmit}>
          <label>
            Tên của bạn
            <input
              type="text"
              name="guestbook_name"
              autoComplete="name"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              maxLength={60}
              placeholder="Ví dụ: Minh Anh"
              required
            />
          </label>

          <label>
            Lời chúc
            <textarea
              name="guestbook_message"
              rows={4}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              maxLength={450}
              placeholder="Chúc hai bạn trăm năm hạnh phúc…"
              required
            />
          </label>

          <button type="submit" className="lux-button">
            Gửi lời chúc
          </button>
        </form>
      </div>

      <div className="lux-message-grid" aria-live="polite">
        {visibleMessages.map((message) => (
          <article className="lux-message-card" key={message.id}>
            <header>
              <h3>{message.name}</h3>
              <time>{formatTimestamp(message.timestamp)}</time>
            </header>
            <p>{message.message}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export const GuestbookWall = memo(GuestbookWallComponent);
