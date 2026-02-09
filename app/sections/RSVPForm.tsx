"use client";

import { memo, useCallback, useState } from "react";

type Attendance = "yes" | "no" | "maybe";

interface RSVPState {
  name: string;
  phone: string;
  attendance: Attendance;
  guestCount: number;
  dietary: string;
  note: string;
}

const initialFormState: RSVPState = {
  name: "",
  phone: "",
  attendance: "yes",
  guestCount: 1,
  dietary: "",
  note: "",
};

function RSVPLuxuryFormComponent() {
  const [form, setForm] = useState<RSVPState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "saving" | "done">("idle");

  const updateField = useCallback(
    <K extends keyof RSVPState>(field: K, value: RSVPState[K]) => {
      setForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setStatus("saving");
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("done");
    },
    []
  );

  return (
    <div className="lux-rsvp-clean">
      <div className="lux-rsvp-header-clean">
        <h2 className="lux-title">Xác Nhận Tham Dự</h2>
        <div className="lux-rsvp-divider"><span></span></div>
      </div>

      <form className="lux-rsvp-form-clean" onSubmit={handleSubmit}>
        <div className="lux-rsvp-row">
          <label>
            Họ và tên
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Nhập họ tên của bạn..."
            />
          </label>
          <label>
            Số điện thoại
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="Nhập số điện thoại..."
            />
          </label>
        </div>

        <div className="lux-rsvp-row">
          <label>
            Tham dự
            <select
              value={form.attendance}
              onChange={(e) => updateField("attendance", e.target.value as Attendance)}
            >
              <option value="yes">Tôi sẽ tham dự</option>
              <option value="maybe">Tôi xác nhận sau</option>
              <option value="no">Tôi không thể tham dự</option>
            </select>
          </label>
          <label>
            Số lượng khách
            <input
              type="number"
              min={1}
              max={10}
              value={form.guestCount}
              onChange={(e) => updateField("guestCount", Number(e.target.value) || 1)}
              disabled={form.attendance !== "yes"}
            />
          </label>
        </div>

        <label>
          Lưu ý về ăn uống / Ghi chú
          <input
            type="text"
            value={form.dietary}
            onChange={(e) => updateField("dietary", e.target.value)}
            placeholder="Ví dụ: Ăn chay, dị ứng hải sản..."
          />
        </label>

        <label>
          Lời nhắn gửi đến cặp đôi
          <textarea
            rows={3}
            value={form.note}
            onChange={(e) => updateField("note", e.target.value)}
            placeholder="Gửi lời chúc tốt đẹp nhất..."
          />
        </label>

        <button className="lux-button-premium" type="submit" disabled={status === "saving"}>
          {status === "saving" ? "Đang gửi..." : status === "done" ? "Gửi thành công ✨" : "Xác nhận tham dự"}
        </button>
      </form>
    </div>
  );
}

export const RSVPLuxuryForm = memo(RSVPLuxuryFormComponent);
