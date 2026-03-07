import Image from "next/image";
import { CalendarDays, Heart, LayoutTemplate, MapPin, Sparkles } from "lucide-react";

import {
  BANK_INFO,
  CONFIG,
  CONTENT,
  COUPLE,
  DRESS_CODE,
  EVENTS,
  LOVE_STORY,
  PHOTOS,
  QUOTES,
  TIMELINE,
  VENUE_MAP_EMBED,
  WEDDING_DATE,
} from "@/app/lib/data";
import { MotionSection, MotionText } from "@/app/components/motion/MotionSection";
import { CountdownBoard } from "@/app/components/shared/CountdownBoard";
import { MusicPill } from "@/app/components/shared/MusicPill";
import { GiftRegistryPanel } from "@/app/sections/GiftRegistryPanel";

const ICON_MAP = {
  camera: "📸",
  ring: "💍",
  cheers: "🥂",
  music: "🎶",
  cake: "🎂",
  heart: "❤",
} as const;

function resolveDisplayIcon(icon: string | undefined, fallback: string) {
  if (!icon) {
    return fallback;
  }

  if (icon in ICON_MAP) {
    return ICON_MAP[icon as keyof typeof ICON_MAP];
  }

  return icon;
}

const invitationContent = CONTENT ?? {};
const storyMoments = LOVE_STORY.slice(0, 4);
const galleryPhotos = PHOTOS.slice(0, 8);
const ceremonyTimeline = TIMELINE.length
  ? TIMELINE
  : EVENTS.map((event, index) => ({
      time: event.time,
      title: event.title,
      icon: event.icon,
      description: index === 0 ? event.location : undefined,
    }));

const infoFaqs = invitationContent.faqItems ?? [];
const heroCollage = [
  COUPLE.coverImage,
  galleryPhotos[0]?.src ?? COUPLE.coverImage,
  galleryPhotos[1]?.src ?? COUPLE.coverImage,
];

const weddingDateLabel = new Intl.DateTimeFormat("vi-VN", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
}).format(new Date(WEDDING_DATE));

const primaryVenue = EVENTS[0];
const heroVenue = EVENTS[2]?.location ?? primaryVenue?.location ?? "Địa điểm lễ cưới";
const hasInfoSection = Boolean(DRESS_CODE || infoFaqs.length || QUOTES[0]);

const navLinks = [
  storyMoments.length ? { href: "#story", label: "Câu chuyện" } : null,
  ceremonyTimeline.length ? { href: "#timeline", label: "Lịch trình" } : null,
  EVENTS.length ? { href: "#schedule", label: "Địa điểm" } : null,
  galleryPhotos.length ? { href: "#gallery", label: "Thư viện" } : null,
  hasInfoSection ? { href: "#dress-code", label: "Thông tin" } : null,
  BANK_INFO.length ? { href: "#registry", label: "Mừng cưới" } : null,
].filter((link): link is { href: string; label: string } => Boolean(link));

const heroActions = [
  EVENTS.length ? { href: "#schedule", label: "Xem địa điểm" } : null,
  galleryPhotos.length ? { href: "#gallery", label: "Xem ảnh cưới" } : null,
  BANK_INFO.length ? { href: "#registry", label: "Mừng cưới" } : null,
].filter((action): action is { href: string; label: string } => Boolean(action));

export default function WeddingInvitation() {
  return (
    <main className="lux-page">
      <MusicPill src={CONFIG.meta.musicUrl} autoPlay={Boolean(CONFIG.meta.musicAutoplay)} />

      <header className="lux-nav-shell">
        <div className="lux-nav">
          <a href="#home" className="lux-brand">
            <span className="lux-brand-kicker">Thiệp Cưới</span>
            <span className="lux-brand-script">
              {COUPLE.groom.shortName} &amp; {COUPLE.bride.shortName}
            </span>
          </a>

          {navLinks.length ? (
            <nav className="lux-nav-links" aria-label="Điều hướng chính">
              {navLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          ) : (
            <div />
          )}

          {BANK_INFO.length ? (
            <a href="#registry" className="lux-nav-cta">
              Mừng cưới
            </a>
          ) : (
            <a href="#schedule" className="lux-nav-cta">
              Xem địa điểm
            </a>
          )}
        </div>
      </header>

      <section className="lux-hero" id="home">
        <div className="lux-hero-orb lux-hero-orb--one" aria-hidden />
        <div className="lux-hero-orb lux-hero-orb--two" aria-hidden />

        <Image
          src="/floral-main.png"
          alt=""
          width={380}
          height={420}
          className="lux-hero-floral lux-hero-floral--one"
          aria-hidden
          priority
        />

        <div className="lux-hero-grid">
          <div className="lux-hero-copy">
            <p className="lux-kicker">{invitationContent.heroKicker ?? "Thiệp Mời Thành Hôn"}</p>

            <MotionText delay={0.1}>
              <h1>{invitationContent.heroHeadline ?? "Một ngày thật đẹp để chúng mình nói lời trọn đời"}</h1>
            </MotionText>

            <MotionText delay={0.2}>
              <p className="lux-hero-script">
                {COUPLE.groom.shortName} <span>&amp;</span> {COUPLE.bride.shortName}
              </p>
            </MotionText>

            <MotionText delay={0.3}>
              <p className="lux-copy">{invitationContent.heroDescription ?? CONFIG.meta.description}</p>
            </MotionText>

            <div className="lux-hero-meta">
              <p>
                <CalendarDays size={14} /> {weddingDateLabel}
              </p>
              <p>
                <MapPin size={14} /> {heroVenue}
              </p>
            </div>

            {heroActions.length ? (
              <div className="lux-hero-actions">
                {heroActions.slice(0, 2).map((action, index) => (
                  <a
                    href={action.href}
                    key={action.href}
                    className={index === 0 ? "lux-button" : "lux-button lux-button--ghost"}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            ) : null}

            <div className="lux-countdown-wrap">
              <CountdownBoard targetDate={WEDDING_DATE} />
            </div>
          </div>

          <div className="lux-hero-media">
            <figure className="lux-photo lux-photo--primary">
              <Image
                src={heroCollage[0]}
                alt={`Ảnh cưới của ${COUPLE.groom.shortName} và ${COUPLE.bride.shortName}`}
                fill
                sizes="(max-width: 980px) 90vw, 42vw"
                priority
              />
            </figure>

            <figure className="lux-photo lux-photo--secondary">
              <Image src={heroCollage[1]} alt="Khoảnh khắc của cặp đôi" fill sizes="(max-width: 980px) 35vw, 16vw" />
            </figure>

            <figure className="lux-photo lux-photo--tertiary">
              <Image src={heroCollage[2]} alt="Khoảnh khắc của cặp đôi" fill sizes="(max-width: 980px) 38vw, 18vw" />
            </figure>
          </div>
        </div>
      </section>

      {storyMoments.length ? (
        <MotionSection className="lux-section" id="story">
          <div className="lux-section-head">
            <p className="lux-kicker">Câu chuyện</p>
            <MotionText>
              <h2 className="lux-title">Câu chuyện của chúng mình</h2>
            </MotionText>
            <MotionText delay={0.2}>
              <p className="lux-copy">
                {invitationContent.storyIntro ??
                  "Từ những lần gặp gỡ tình cờ đến lời hẹn ước, đây là hành trình nhỏ dẫn chúng mình đến ngày về chung một nhà."}
              </p>
            </MotionText>
          </div>

          <div className="lux-timeline-alt">
            <div className="lux-timeline-alt-line" />
            {storyMoments.map((moment, index) => (
              <article
                key={`${moment.date}-${moment.title}`}
                className={`lux-timeline-alt-item ${index % 2 === 0 ? "lux-timeline-alt-item--left" : "lux-timeline-alt-item--right"}`}
              >
                <div className="lux-timeline-alt-content">
                  <div className="lux-timeline-alt-text">
                    <p className="lux-timeline-alt-date">{moment.date}</p>
                    <h3 className="lux-timeline-alt-title">{moment.title}</h3>
                    <p className="lux-timeline-alt-description">{moment.description}</p>
                  </div>
                  <figure className="lux-timeline-alt-image">
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                </div>
                <div className="lux-timeline-alt-dot" />
              </article>
            ))}
          </div>
        </MotionSection>
      ) : null}

      {ceremonyTimeline.length ? (
        <MotionSection className="lux-section" id="timeline">
          <div className="lux-section-head">
            <p className="lux-kicker">Lịch trình</p>
            <h2 className="lux-title">Lịch trình ngày cưới</h2>
            <p className="lux-copy">
              {invitationContent.timelineIntro ??
                "Chương trình diễn ra trong ngày trọng đại của chúng mình."}
            </p>
          </div>

          <div className="lux-timeline-checklist">
            <div className="lux-timeline-checklist-paper">
              <h3 className="lux-timeline-checklist-header">Order of Events</h3>
              <div className="lux-timeline-checklist-items">
                {ceremonyTimeline.map((item, index) => (
                  <div key={`${item.time}-${item.title}`} className="lux-timeline-checklist-item">
                    <div className="lux-timeline-checklist-checkbox" aria-hidden>
                      <span>{resolveDisplayIcon(item.icon, `${index + 1}`)}</span>
                    </div>
                    <div className="lux-timeline-checklist-copy">
                      <div className="lux-timeline-checklist-content">
                        <span className="lux-timeline-checklist-time">{item.time}</span>
                        <span className="lux-timeline-checklist-separator">-</span>
                        <h4 className="lux-timeline-checklist-title">{item.title}</h4>
                      </div>
                      {item.description ? <p className="lux-timeline-checklist-note">{item.description}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>
      ) : null}

      {EVENTS.length ? (
        <MotionSection className="lux-section" id="schedule">
          <div className="lux-section-head">
            <p className="lux-kicker">Địa điểm</p>
            <h2 className="lux-title">Địa điểm tổ chức</h2>
            <p className="lux-copy">
              {invitationContent.scheduleIntro ??
                "Mỗi điểm hẹn trong ngày cưới đều được chuẩn bị để đón bạn thật trọn vẹn."}
            </p>
          </div>

          <div className="lux-locations-grid">
            {EVENTS.map((event, index) => (
              <article key={`${event.title}-${event.time}`} className="lux-location-card">
                <div className="lux-location-card-icon" aria-hidden>
                  {resolveDisplayIcon(event.icon, `${index + 1}`)}
                </div>
                <h3 className="lux-location-card-title">{event.title}</h3>
                <p className="lux-location-card-time">
                  {event.date} • {event.time}
                </p>
                <p className="lux-location-card-address">{event.location}</p>
                {event.mapLink ? (
                  <a href={event.mapLink} target="_blank" rel="noreferrer" className="lux-location-card-link">
                    Xem bản đồ →
                  </a>
                ) : null}
              </article>
            ))}
          </div>

          {VENUE_MAP_EMBED ? (
            <div className="lux-map-box">
              <iframe
                src={VENUE_MAP_EMBED}
                title="Bản đồ địa điểm lễ cưới"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="lux-map-meta">
                <p>{primaryVenue?.location ?? heroVenue}</p>
                {primaryVenue?.mapLink ? (
                  <a href={primaryVenue.mapLink} target="_blank" rel="noreferrer">
                    Mở Google Maps
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </MotionSection>
      ) : null}

      {galleryPhotos.length ? (
        <MotionSection className="lux-section" id="gallery">
          <div className="lux-section-head">
            <p className="lux-kicker">Thư viện ảnh</p>
            <h2 className="lux-title">Khoảnh khắc trước ngày cưới</h2>
            {invitationContent.galleryIntro ? <p className="lux-copy">{invitationContent.galleryIntro}</p> : null}
          </div>

          <div className="lux-gallery-grid">
            {galleryPhotos.map((photo, index) => (
              <figure className={`lux-gallery-item lux-gallery-item--${(index % 8) + 1}`} key={photo.id}>
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 980px) 92vw, 28vw" />
              </figure>
            ))}
          </div>
        </MotionSection>
      ) : null}

      {hasInfoSection ? (
        <MotionSection className="lux-section lux-split-section" id="dress-code">
          {DRESS_CODE ? (
            <article className="lux-dress-card">
              <p className="lux-kicker">Trang phục</p>
              <h2 className="lux-title">Bảng màu trang phục</h2>
              <p className="lux-copy">{DRESS_CODE.description}</p>

              {DRESS_CODE.palette?.length ? (
                <div className="lux-palette-grid">
                  {DRESS_CODE.palette.map((item) => (
                    <div className="lux-palette-item" key={`${item.name}-${item.color}`}>
                      <span style={{ backgroundColor: item.color }} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {DRESS_CODE.note ? <p className="lux-dress-note">* {DRESS_CODE.note}</p> : null}
            </article>
          ) : (
            <article className="lux-dress-card">
              <p className="lux-kicker">Thông điệp</p>
              <h2 className="lux-title">Một lưu ý nhỏ</h2>
              <p className="lux-copy">{QUOTES[0]?.content ?? CONFIG.meta.description}</p>
            </article>
          )}

          {infoFaqs.length || QUOTES[0] ? (
            <article className="lux-faq-card">
              <p className="lux-kicker">Hỏi đáp</p>
              <h2 className="lux-title">{invitationContent.faqTitle ?? "Thông tin nhanh"}</h2>

              {infoFaqs.length ? (
                <div className="lux-faq-list">
                  {infoFaqs.map((item) => (
                    <details key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              ) : null}

              {QUOTES[0] ? (
                <blockquote>
                  “{QUOTES[0].content}”
                  <cite>{QUOTES[0].author}</cite>
                </blockquote>
              ) : null}
            </article>
          ) : null}
        </MotionSection>
      ) : null}

      {BANK_INFO.length ? (
        <MotionSection className="lux-section" id="registry">
          <div className="lux-section-head">
            <p className="lux-kicker">Mừng cưới</p>
            <h2 className="lux-title">Lời chúc &amp; quà mừng</h2>
            <p className="lux-copy">
              {invitationContent.registryIntro ??
                "Sự hiện diện của bạn đã là món quà quý giá. Nếu bạn muốn gửi lời chúc hoặc quà mừng từ xa, chúng mình xin phép nhận tại đây."}
            </p>
          </div>

          <GiftRegistryPanel />
        </MotionSection>
      ) : null}

      <footer className="lux-footer">
        <div className="lux-footer-premium">
          <h2 className="lux-footer-title-script">Thank You</h2>
          <p className="lux-footer-text-minimal">
            {invitationContent.footerMessage ??
              "Cảm ơn bạn đã là một phần quan trọng trong hành trình tình yêu của chúng mình. Sự hiện diện của bạn là món quà quý giá nhất."}
          </p>

          <div className="lux-footer-names-display">
            {COUPLE.groom.shortName} <span><Heart size={14} fill="#b58a57" stroke="none" /></span> {COUPLE.bride.shortName}
          </div>

          <div className="lux-footer-ornament">
            <div className="lux-footer-line" />
            <span>♦</span>
            <div className="lux-footer-line" />
          </div>

          <div className="lux-footer-bottom">
            <span className="lux-footer-date-stamp">
              SAVE THE DATE | {new Date(WEDDING_DATE).toLocaleDateString("vi-VN")}
            </span>

            <div className="lux-footer-actions">
              <a href="/demo" className="lux-footer-generator-link" target="_blank" rel="noreferrer">
                <LayoutTemplate size={12} />
                Xem demo
              </a>
              <a href="/tool/generator" className="lux-footer-generator-link" target="_blank" rel="noreferrer">
                <Sparkles size={12} />
                Tạo thiệp cưới của bạn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
