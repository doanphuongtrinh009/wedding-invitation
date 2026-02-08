"use client";

import { memo, useEffect, useMemo, useState } from "react";

interface CountdownBoardProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateRemainingTime(targetDate: string): TimeLeft {
  const targetTime = new Date(targetDate).getTime();

  if (Number.isNaN(targetTime)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const now = Date.now();
  const diff = targetTime - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownBoardComponent({ targetDate }: CountdownBoardProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateRemainingTime(targetDate));

  const formattedDate = useMemo(() => {
    const parsedDate = new Date(targetDate);

    if (Number.isNaN(parsedDate.getTime())) {
      return targetDate;
    }

    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(parsedDate);
  }, [targetDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateRemainingTime(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const hasStarted =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  const blocks = useMemo(
    () => [
      { label: "Ngày", value: timeLeft.days },
      { label: "Giờ", value: timeLeft.hours },
      { label: "Phút", value: timeLeft.minutes },
      { label: "Giây", value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  if (hasStarted) {
    return (
      <div className="lux-countdown lux-countdown--ended" role="status" aria-live="polite">
        <p className="lux-countdown-title">Ngày vui đã bắt đầu</p>
        <p className="lux-countdown-note">Hẹn gặp bạn tại lễ cưới.</p>
      </div>
    );
  }

  return (
    <div className="lux-countdown" role="timer" aria-live="polite">
      <div className="lux-countdown-grid">
        {blocks.map((block) => (
          <div className="lux-countdown-item" key={block.label}>
            <span className="lux-countdown-value">{String(block.value).padStart(2, "0")}</span>
            <span className="lux-countdown-label">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const CountdownBoard = memo(CountdownBoardComponent);
