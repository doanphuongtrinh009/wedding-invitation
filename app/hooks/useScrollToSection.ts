"use client";

import { useCallback } from "react";

const NAV_HEIGHT = 80;

export function useScrollToSection() {
    const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (!href || !href.startsWith("#")) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    }, []);

    return scrollToSection;
}
