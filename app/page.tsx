import { Suspense } from "react";
import dynamic from "next/dynamic";

import { HeroSection } from "./components/HeroSection";
import { ClientWrapper, SectionSkeleton, GoogleMapsClient } from "./components/ClientWrapper";

const CountdownTimer = dynamic(
  () => import("./components/CountdownTimer").then((mod) => ({ default: mod.CountdownTimer })),
  { loading: () => <SectionSkeleton /> }
);

const EventInfo = dynamic(
  () => import("./components/EventInfo").then((mod) => ({ default: mod.EventInfo })),
  { loading: () => <SectionSkeleton /> }
);

const PhotoGallery = dynamic(
  () => import("./components/PhotoGallery").then((mod) => ({ default: mod.PhotoGallery })),
  { loading: () => <SectionSkeleton /> }
);

const RSVPForm = dynamic(
  () => import("./components/RSVPForm").then((mod) => ({ default: mod.RSVPForm })),
  { loading: () => <SectionSkeleton /> }
);

const Guestbook = dynamic(
  () => import("./components/Guestbook").then((mod) => ({ default: mod.Guestbook })),
  { loading: () => <SectionSkeleton /> }
);

const Footer = dynamic(
  () => import("./components/Footer").then((mod) => ({ default: mod.Footer }))
);

const LoveStory = dynamic(
  () => import("./components/LoveStory").then((mod) => ({ default: mod.LoveStory })),
  { loading: () => <SectionSkeleton /> }
);

const DressCode = dynamic(
  () => import("./components/DressCode").then((mod) => ({ default: mod.DressCode })),
  { loading: () => <SectionSkeleton /> }
);

const BankInfo = dynamic(
  () => import("./components/BankInfo").then((mod) => ({ default: mod.BankInfo })),
  { loading: () => <SectionSkeleton /> }
);

const Timeline = dynamic(
  () => import("./components/Timeline").then((mod) => ({ default: mod.Timeline }))
);

export default function WeddingInvitation() {
  return (
    <ClientWrapper>
      <section id="home">
        <HeroSection />
      </section>

      <section id="countdown">
        <Suspense fallback={<SectionSkeleton />}>
          <CountdownTimer />
        </Suspense>
      </section>

      <Suspense fallback={<SectionSkeleton />}>
        <Timeline />
      </Suspense>

      <section id="events">
        <Suspense fallback={<SectionSkeleton />}>
          <EventInfo />
        </Suspense>
      </section>

      <section id="story">
        <Suspense fallback={<SectionSkeleton />}>
          <LoveStory />
        </Suspense>
      </section>

      <Suspense fallback={<SectionSkeleton />}>
        <GoogleMapsClient />
      </Suspense>

      <section id="gallery">
        <Suspense fallback={<SectionSkeleton />}>
          <PhotoGallery />
        </Suspense>
      </section>

      <section id="rsvp">
        <Suspense fallback={<SectionSkeleton />}>
          <RSVPForm />
        </Suspense>
      </section>

      <Suspense fallback={<SectionSkeleton />}>
        <DressCode />
      </Suspense>

      <section id="gift">
        <Suspense fallback={<SectionSkeleton />}>
          <BankInfo />
        </Suspense>
      </section>

      <Suspense fallback={<SectionSkeleton />}>
        <Guestbook />
      </Suspense>

      <Footer />
    </ClientWrapper>
  );
}
