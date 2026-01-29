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
        <section ref={sectionRef} className="py-20 md:py-28 paper-texture relative">
            {/* Floating Decorations */}
            <div className="absolute left-5 top-20 text-5xl opacity-20 animate-float">🌸</div>
            <div className="absolute right-10 bottom-20 text-4xl opacity-15 animate-float" style={{ animationDelay: "2s" }}>🌺</div>

            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="reveal mb-4">
                        <span className="text-4xl">📷</span>
                    </div>
                    <h2 className="reveal font-display text-3xl md:text-4xl text-[#2D3E33] mb-3">
                        Album Ảnh Cưới
                    </h2>
                    <p className="reveal text-[#2D3E33]/60 text-sm tracking-wider">
                        Những khoảnh khắc đáng nhớ của chúng tôi
                    </p>
                </div>

                {/* Polaroid Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {PHOTOS.map((photo, index) => (
                        <div
                            key={photo.id}
                            className="reveal polaroid cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => openModal(photo.src)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && openModal(photo.src)}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-center text-[#2D3E33]/50 text-xs mt-2 font-body">
                                {photo.alt}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl transition-colors z-10"
                        onClick={closeModal}
                        aria-label="Đóng"
                    >
                        ×
                    </button>
                    <div
                        className="relative max-w-4xl max-h-[85vh] w-full h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Ảnh cưới"
                            fill
                            sizes="100vw"
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export const PhotoGallery = memo(PhotoGalleryComponent);
