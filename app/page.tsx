"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

// Static imports for above-the-fold content
import { EnvelopeOpening, HeroSection } from "./components";

// Dynamic imports with lazy loading
const CountdownTimer = dynamic(
  () => import("./components/CountdownTimer").then((mod) => ({ default: mod.CountdownTimer })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const EventInfo = dynamic(
  () => import("./components/EventInfo").then((mod) => ({ default: mod.EventInfo })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const GoogleMaps = dynamic(
  () => import("./components/GoogleMaps").then((mod) => ({ default: mod.GoogleMaps })),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const PhotoGallery = dynamic(
  () => import("./components/PhotoGallery").then((mod) => ({ default: mod.PhotoGallery })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const RSVPForm = dynamic(
  () => import("./components/RSVPForm").then((mod) => ({ default: mod.RSVPForm })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const Guestbook = dynamic(
  () => import("./components/Guestbook").then((mod) => ({ default: mod.Guestbook })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const Footer = dynamic(
  () => import("./components/Footer").then((mod) => ({ default: mod.Footer })),
  { ssr: true }
);

const MusicToggle = dynamic(
  () => import("./components/MusicToggle").then((mod) => ({ default: mod.MusicToggle })),
  { ssr: false }
);

const ThemeSwitcherComp = dynamic(
  () => import("./components/ThemeSwitcher").then((mod) => ({ default: mod.ThemeSwitcher })),
  { ssr: false }
);

const LoveStory = dynamic(
  () => import("./components/LoveStory").then((mod) => ({ default: mod.LoveStory })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const DressCode = dynamic(
  () => import("./components/DressCode").then((mod) => ({ default: mod.DressCode })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

const BankInfo = dynamic(
  () => import("./components/BankInfo").then((mod) => ({ default: mod.BankInfo })),
  { loading: () => <SectionSkeleton />, ssr: true }
);

// Loading skeleton
function SectionSkeleton() {
  return (
    <div className="py-20 paper-texture">
      <div className="max-w-lg mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-10 bg-[#2D3E33]/10 rounded-lg w-1/3 mx-auto mb-6" />
          <div className="h-4 bg-[#2D3E33]/5 rounded w-2/3 mx-auto mb-8" />
          <div className="h-40 bg-[#2D3E33]/5 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default function WeddingInvitation() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <main className="relative paper-texture min-h-screen">
      {/* Envelope Opening Screen */}
      {!isEnvelopeOpen && (
        <EnvelopeOpening onOpen={() => setIsEnvelopeOpen(true)} />
      )}

      {/* Main Content */}
      {isEnvelopeOpen && (
        <div className="animate-fadeIn">
          <HeroSection />

          <Suspense fallback={<SectionSkeleton />}>
            <CountdownTimer />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <EventInfo />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <LoveStory />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <GoogleMaps />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <PhotoGallery />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <RSVPForm />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <DressCode />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <BankInfo />
          </Suspense>

          <Suspense fallback={<SectionSkeleton />}>
            <Guestbook />
          </Suspense>

          <Footer />
          <MusicToggle />
        </div>
      )}

      <ThemeSwitcherComp />
    </main>
  );
}
