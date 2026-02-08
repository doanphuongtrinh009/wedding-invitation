"use client";

import { memo, useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { PHOTOS } from "@/app/lib/data";

function PhotoGalleryComponent() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const openModal = useCallback((src: string) => {
        setSelectedImage(src);
        document.body.style.overflow = "hidden";
    }, []);

    const closeModal = useCallback(() => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    }, []);

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
        <section ref={sectionRef} className="relative py-24 md:py-28">
            <div className="pointer-events-none absolute left-4 top-20 text-5xl opacity-15 animate-float">🌸</div>
            <div className="pointer-events-none absolute bottom-20 right-8 text-4xl opacity-10 animate-float" style={{ animationDelay: "2s" }}>🌺</div>

            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="mb-12 text-center md:mb-16">
                    <div className="reveal mb-4 text-4xl">📷</div>
                    <p className="reveal section-heading mb-2">Gallery</p>
                    <h2 className="reveal section-title mb-3 text-4xl md:text-5xl">Album Ảnh Cưới</h2>
                    <p className="reveal section-subtitle uppercase">Những khoảnh khắc đáng nhớ của chúng tôi</p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                    {PHOTOS.map((photo, index) => (
                        <button
                            key={photo.id}
                            className="reveal polaroid cursor-pointer text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => openModal(photo.src)}
                            onKeyDown={(e) => e.key === "Enter" && openModal(photo.src)}
                            type="button"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p className="mt-3 text-center text-xs text-[var(--color-text)]/55">{photo.alt}</p>
                        </button>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 animate-fadeIn" onClick={closeModal}>
                    <button
                        className="absolute right-6 top-6 z-10 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-3xl text-white/85 transition-colors hover:text-white"
                        onClick={closeModal}
                        aria-label="Đóng"
                    >
                        ×
                    </button>
                    <div className="relative h-full w-full max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <Image src={selectedImage} alt="Ảnh cưới" fill sizes="100vw" className="object-contain" priority />
                    </div>
                </div>
            )}
        </section>
    );
}

export const PhotoGallery = memo(PhotoGalleryComponent);
