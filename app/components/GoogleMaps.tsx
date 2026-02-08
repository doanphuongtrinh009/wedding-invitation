"use client";

import { memo, useState, useCallback, useEffect, useRef } from "react";

function GoogleMapsComponent() {
    const [isLoaded, setIsLoaded] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
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
        <section ref={sectionRef} className="py-24 md:py-28">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mb-12 text-center md:mb-14">
                    <div className="reveal mb-4 text-4xl">📍</div>
                    <p className="reveal section-heading mb-2">Địa Điểm</p>
                    <h2 className="reveal section-title mb-3 text-4xl md:text-5xl">Địa Điểm Tiệc Cưới</h2>
                    <p className="reveal section-subtitle uppercase">Nhà hàng Diamond Palace, Quận 7, TP.HCM</p>
                </div>

                <div className="reveal card-elegant rounded-[28px] p-4 md:p-6">
                    <div className="relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-white/70">
                        {!isLoaded && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--surface)]">
                                <span className="text-sm tracking-[0.12em] text-[var(--color-text)]/60">Đang tải bản đồ...</span>
                            </div>
                        )}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6324694889895!2d106.69890771033066!3d10.762622359429045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a3b49e59%3A0xa1bd14e483a602db!2sIndependence%20Palace!5e0!3m2!1sen!2s!4v1706520000000!5m2!1sen!2s"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                            onLoad={handleLoad}
                            title="Địa điểm tiệc cưới"
                        />
                    </div>
                </div>

                <div className="reveal mt-8 text-center">
                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <span>🗺️</span>
                        <span>Mở trong Google Maps</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export const GoogleMaps = memo(GoogleMapsComponent);
