"use client";

import { memo, useCallback, useMemo, useState } from "react";

interface RSVPLuxuryFormProps {
  events: string[];
}

type Attendance = "yes" | "no" | "maybe";

interface RSVPState {
  name: string;
  phone: string;
  email: string;
  attendance: Attendance;
  guestCount: number;
  selectedEvents: string[];
  dietary: string;
  note: string;
}

const initialFormState: RSVPState = {
  name: "",
  phone: "",
  email: "",
  attendance: "yes",
  guestCount: 1,
  selectedEvents: [],
  dietary: "",
  note: "",
};

function RSVPLuxuryFormComponent({ events }: RSVPLuxuryFormProps) {
  const [form, setForm] = useState<RSVPState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "saving" | "done">("idle");

  const updateField = useCallback(
    <K extends keyof RSVPState>(field: K, value: RSVPState[K]) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const toggleEvent = useCallback((eventTitle: string) => {
    setForm((prev) => {
      if (prev.selectedEvents.includes(eventTitle)) {
        return {
          ...prev,
          selectedEvents: prev.selectedEvents.filter((item) => item !== eventTitle),
        };
      }

      return {
        ...prev,
        selectedEvents: [...prev.selectedEvents, eventTitle],
      };
    });
  }, []);

  const selectedEventsLabel = useMemo(() => {
    if (!form.selectedEvents.length) {
      return "Chưa chọn sự kiện";
    }
    return form.selectedEvents.join(" • ");
  }, [form.selectedEvents]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus("saving");

      await new Promise((resolve) => setTimeout(resolve, 700));

      setStatus("done");
    },
    []
  );

  return (
    <div className="lux-rsvp-wrap">
      <div className="lux-rsvp-side">
        <p className="lux-kicker">Xác nhận tham dự</p>
        <h2 className="lux-title">Mẫu xác nhận tham dự</h2>
        <p>
          Điền thông tin tham dự để cô dâu chú rể chuẩn bị chỗ ngồi, thực đơn và lịch đón tiếp tốt nhất cho bạn.
        </p>

        <div className="lux-rsvp-summary" aria-live="polite">
          <p>
            <strong>Trạng thái:</strong>{" "}
            {form.attendance === "yes"
              ? "Sẽ tham dự"
              : form.attendance === "maybe"
                ? "Xác nhận sau"
                : "Không thể tham dự"}
          </p>
          <p>
            <strong>Số khách:</strong> {form.guestCount}
          </p>
          <p>
            <strong>Sự kiện:</strong> {selectedEventsLabel}
          </p>
        </div>
      </div>

      <form className="lux-rsvp-form" onSubmit={handleSubmit} autoComplete="off">
        <label>
          Họ và tên
          <input
            type="text"
            name="guest_name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Nguyễn Văn A"
          />
        </label>

        <div className="lux-rsvp-grid-2">
          <label>
            Số điện thoại
            <input
              type="tel"
              name="guest_phone"
              autoComplete="tel"
              inputMode="tel"
              required
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="09xx xxx xxx"
            />
          </label>

          <label>
            Thư điện tử
            <input
              type="email"
              name="guest_email"
              autoComplete="email"
              spellCheck={false}
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="ten@email.com"
            />
          </label>
        </div>

        <div className="lux-rsvp-grid-2">
          <label>
            Tham dự
            <select
              name="attendance"
              value={form.attendance}
              onChange={(event) => updateField("attendance", event.target.value as Attendance)}
            >
              <option value="yes">Tôi sẽ tham dự</option>
              <option value="maybe">Tôi xác nhận sau</option>
              <option value="no">Tôi không thể tham dự</option>
            </select>
          </label>

          <label>
            Số người đi cùng
            <input
              type="number"
              name="guest_count"
              inputMode="numeric"
              min={0}
              max={10}
              value={form.guestCount}
              onChange={(event) => updateField("guestCount", Number(event.target.value) || 0)}
              disabled={form.attendance !== "yes"}
            />
          </label>
        </div>

        <fieldset className="lux-rsvp-events">
          <legend>Sự kiện tham dự</legend>
          <div className="lux-rsvp-checklist">
            {events.map((eventTitle) => (
              <label key={eventTitle} className="lux-check-item">
                <input
                  type="checkbox"
                  name="selected_events"
                  value={eventTitle}
                  checked={form.selectedEvents.includes(eventTitle)}
                  onChange={() => toggleEvent(eventTitle)}
                  disabled={form.attendance !== "yes"}
                />
                <span>{eventTitle}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label>
          Ăn kiêng / dị ứng
          <input
            type="text"
            name="dietary_note"
            autoComplete="off"
            value={form.dietary}
            onChange={(event) => updateField("dietary", event.target.value)}
            placeholder="Ví dụ: Không hải sản"
          />
        </label>

        <label>
          Lời nhắn
          <textarea
            name="guest_note"
            rows={4}
            value={form.note}
            onChange={(event) => updateField("note", event.target.value)}
            placeholder="Gửi lời chúc đến cô dâu chú rể…"
          />
        </label>

        <button className="lux-button" type="submit" disabled={status === "saving"}>
          {status === "saving" ? "Đang gửi…" : status === "done" ? "Đã gửi thành công" : "Gửi xác nhận"}
        </button>
      </form>
    </div>
  );
}

export const RSVPLuxuryForm = memo(RSVPLuxuryFormComponent);
