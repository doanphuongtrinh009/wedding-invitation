"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";

interface MusicPillProps {
  src: string;
  autoPlay?: boolean;
}

function MusicPillComponent({ src, autoPlay = false }: MusicPillProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!src) return;

    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = "auto";

    const handleCanPlay = () => setIsReady(true);
    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("canplaythrough", handleCanPlay);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isReady || !autoPlay) return;

    void audio.play().catch(() => {
      setIsPlaying(false);
    });
  }, [autoPlay, isReady]);

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
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
      title={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
    >
      <span aria-hidden>{isPlaying ? "❚❚" : "▶"}</span>
      <span>Nhạc</span>
    </button>
  );
}

export const MusicPill = memo(MusicPillComponent);
