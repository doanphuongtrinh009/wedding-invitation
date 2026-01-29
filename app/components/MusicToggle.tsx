"use client";

import { memo, useState, useRef, useCallback, useEffect } from "react";

import { CONFIG } from "@/app/lib/data";

function MusicToggleComponent() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && !audioRef.current) {
            audioRef.current = new Audio(CONFIG.meta.musicUrl);
            audioRef.current.loop = true;
            audioRef.current.addEventListener("canplaythrough", () => {
                setIsLoaded(true);
                // Auto play when loaded (assuming user interaction occurred to reach this state)
                audioRef.current?.play()
                    .then(() => setIsPlaying(true))
                    .catch((e) => console.log("Autoplay blocked:", e));
            });
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const toggleMusic = useCallback(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => { });
            }
            setIsPlaying((prev) => !prev);
        }
    }, [isPlaying]);

    return (
        <button
            onClick={toggleMusic}
            disabled={!isLoaded}
            className="music-btn"
            title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
            aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
        >
            <div className={`text-xl ${isPlaying ? "animate-spin-slow" : ""}`}>
                {isPlaying ? "💿" : "🎵"}
            </div>
        </button>
    );
}

export const MusicToggle = memo(MusicToggleComponent);
