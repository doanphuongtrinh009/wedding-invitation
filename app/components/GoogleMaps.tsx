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
        <section ref={sectionRef} className="py-20 md:py-28 paper-texture">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="reveal mb-4">
                        <span className="text-4xl">📍</span>
                    </div>
                    <h2 className="reveal font-display text-3xl md:text-4xl text-[#2D3E33] mb-3">
                        Địa Điểm Tiệc Cưới
                    </h2>
                    <p className="reveal text-[#2D3E33]/60 text-sm tracking-wider">
                        Nhà hàng Diamond Palace, Quận 7, TP.HCM
                    </p>
                </div>

                {/* Map Container */}
                <div className="reveal card-elegant overflow-hidden p-3">
                    <div className="relative rounded-xl overflow-hidden">
                        {!isLoaded && (
                            <div className="absolute inset-0 bg-[#2D3E33]/5 flex items-center justify-center">
                                <span className="text-[#2D3E33]/40 text-sm">Đang tải bản đồ...</span>
                            </div>
                        )}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6324694889895!2d106.69890771033066!3d10.762622359429045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a3b49e59%3A0xa1bd14e483a602db!2sIndependence%20Palace!5e0!3m2!1sen!2s!4v1706520000000!5m2!1sen!2s"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full rounded-lg"
                            onLoad={handleLoad}
                            title="Địa điểm tiệc cưới"
                        />
                    </div>
                </div>

                {/* CTA Button */}
                <div className="reveal text-center mt-8">
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
