"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";

interface MusicPillProps {
  src: string;
}

function MusicPillComponent({ src }: MusicPillProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAttemptedAutoplay = useRef(false);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!src) return;

    const audio = new Audio(src);
    audio.loop = true;

    const handleCanPlay = () => setIsReady(true);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("ended", handleEnded);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, [src]);

  // Auto-play music when ready (only once)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isReady || hasAttemptedAutoplay.current) return;

    hasAttemptedAutoplay.current = true;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Aggressive playback trigger on ANY interaction
        const enableAudio = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            // Remove all temporary listeners on success
            ["click", "touchstart", "scroll", "mousemove", "keydown"].forEach(event =>
              document.removeEventListener(event, enableAudio)
            );
          } catch {
            // Still failing? Keep trying on next interaction
          }
        };

        // Add listeners for almost any user activity
        ["click", "touchstart", "scroll", "mousemove", "keydown"].forEach(event =>
          document.addEventListener(event, enableAudio, { once: true, passive: true })
        );
      }
    };

    playAudio();
  }, [isReady]);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, [isPlaying]);

  return (
    <button
      type="button"
      className="lux-music-toggle"
      onClick={toggleMusic}
      disabled={!isReady}
      aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
      title={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
    >
      <span aria-hidden>{isPlaying ? "❚❚" : "▶"}</span>
      <span>Nhạc</span>
    </button>
  );
}

export const MusicPill = memo(MusicPillComponent);
