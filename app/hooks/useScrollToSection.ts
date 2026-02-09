"use client";

import { useCallback } from "react";

export function useScrollToSection() {
    const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (!href || !href.startsWith("#")) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navHeight = 80; // Approximate nav height
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    }, []);

    return scrollToSection;
}
