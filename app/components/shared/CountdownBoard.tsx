"use client";

import { memo, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface CountdownBoardProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function seededUnit(seed: number): number {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
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

const FloatingHearts = memo(() => {
  // Generate a fixed set of hearts with deterministic pseudo-random values.
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: seededUnit(i + 1) * 100,
      scale: 0.5 + seededUnit(i + 11),
      duration: 6 + seededUnit(i + 21) * 5,
      delay: seededUnit(i + 31) * 5,
      rotate: seededUnit(i + 41) * 360,
    }));
  }, []);

  return (
    <div className="lux-countdown-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px]"
          style={{ left: `${heart.left}%` }}
          animate={{
            y: [0, -600],
            opacity: [0, 1, 0],
            scale: [heart.scale, heart.scale * 1.2],
            rotate: [0, heart.rotate],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart fill="#e74c3c" stroke="none" className="text-[#e74c3c] opacity-60" size={24 * heart.scale} />
        </motion.div>
      ))}
    </div>
  );
});

FloatingHearts.displayName = "FloatingHearts";

function CountdownBoardComponent({ targetDate }: CountdownBoardProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateRemainingTime(targetDate));

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
      {/* Floating Hearts Animation */}
      <FloatingHearts />

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
