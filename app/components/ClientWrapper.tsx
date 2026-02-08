"use client";

import { useState, Suspense, type ReactNode } from "react";
import dynamic from "next/dynamic";

import { EnvelopeOpening } from "./EnvelopeOpening";
import { Navigation } from "./Navigation";

const ThemeSwitcherComp = dynamic(
    () => import("./ThemeSwitcher").then((mod) => ({ default: mod.ThemeSwitcher })),
    { ssr: false }
);

const GoogleMapsClient = dynamic(
    () => import("./GoogleMaps").then((mod) => ({ default: mod.GoogleMaps })),
    { loading: () => <SectionSkeleton />, ssr: false }
);

export { GoogleMapsClient };

function SectionSkeleton() {
    return (
        <div className="py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="animate-pulse rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)]">
                    <div className="mx-auto mb-4 h-3 w-40 rounded-full bg-[var(--color-primary)]/10" />
                    <div className="mx-auto mb-6 h-10 w-72 rounded-xl bg-[var(--color-primary)]/10" />
                    <div className="h-52 rounded-2xl bg-[var(--color-primary)]/8" />
                </div>
            </div>
        </div>
    );
}

export { SectionSkeleton };

interface ClientWrapperProps {
    children: ReactNode;
}

export function ClientWrapper({ children }: ClientWrapperProps) {
    const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

    return (
        <main className="paper-texture relative min-h-screen overflow-hidden">
            {!isEnvelopeOpen && <EnvelopeOpening onOpen={() => setIsEnvelopeOpen(true)} />}

            {isEnvelopeOpen && (
                <div className="animate-fadeIn">
                    <Navigation />
                    {children}
                </div>
            )}

            <ThemeSwitcherComp />
        </main>
    );
}
