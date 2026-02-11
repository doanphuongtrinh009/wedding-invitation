"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useId, useState } from "react";

interface FormSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export default function FormSection({ title, children, defaultOpen = false }: FormSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const sectionId = useId();
    const triggerId = `${sectionId}-trigger`;
    const contentId = `${sectionId}-content`;

    return (
        <div className="card-elegant overflow-hidden rounded-3xl">
            <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between border-b border-[var(--border-soft)] bg-white/60 px-6 py-4 text-left transition-colors hover:bg-white/80"
            >
                <span className="font-display text-2xl text-[var(--color-primary)]">{title}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 text-[var(--color-primary)]" /> : <ChevronDown className="h-5 w-5 text-[var(--color-primary)]" />}
            </button>

            {isOpen && (
                <div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="animate-fadeIn px-6 py-6 md:px-8 md:py-8"
                >
                    {children}
                </div>
            )}
        </div>
    );
}
