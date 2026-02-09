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
      } catch (error) {
        console.log("Autoplay blocked. Waiting for interaction...");
        // If blocked, wait for first interaction to play
        const enableAudio = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            document.removeEventListener("click", enableAudio);
            document.removeEventListener("touchstart", enableAudio);
          } catch (e) {
            // Still failing, keep listener
          }
        };

        document.addEventListener("click", enableAudio, { once: true });
        document.addEventListener("touchstart", enableAudio, { once: true });
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
