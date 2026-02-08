import Image from "next/image";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import * as motion from "framer-motion/client";

import {
  CONFIG,
  COUPLE,
  DRESS_CODE,
  EVENTS,
  LOVE_STORY,
  PHOTOS,
  QUOTES,
  WEDDING_DATE,
} from "./utils/data";

import { CountdownBoard } from "./components/shared/CountdownBoard";
import { MusicPill } from "./components/shared/MusicPill";
import { RSVPLuxuryForm } from "./features/rsvp/RSVPForm";
import { GuestbookWall } from "./features/guestbook/GuestbookWall";
import { GiftRegistryPanel } from "./features/registry/GiftRegistryPanel";
import { MotionSection, MotionText } from "./components/motion/MotionSection";

const navLinks = [
  { href: "#story", label: "Câu chuyện" },
  { href: "#schedule", label: "Lịch trình" },
  { href: "#gallery", label: "Thư viện" },
  { href: "#registry", label: "Mừng cưới" },
  { href: "#rsvp", label: "Xác nhận" },
];

const heroCollage = [
  COUPLE.coverImage,
  PHOTOS[0]?.src ?? COUPLE.coverImage,
  PHOTOS[1]?.src ?? COUPLE.coverImage,
];

const storyMoments = LOVE_STORY.length
  ? LOVE_STORY.slice(0, 4)
  : [
    {
      date: "Lần đầu gặp gỡ",
      title: "Mọi thứ bắt đầu từ một lần gặp gỡ",
      description:
        "Giữa những lịch trình bận rộn, chúng mình tìm thấy nhau bằng sự chân thành và những cuộc trò chuyện dài.",
      image: COUPLE.coverImage,
    },
    {
      date: "Lời hứa",
      title: "Lời hứa cùng đi đường dài",
      description:
        "Sau nhiều mùa cùng đồng hành, chúng mình chọn nắm tay nhau trong một hành trình mới của cuộc đời.",
      image: COUPLE.coverImage,
    },
  ];

// Wedding day timeline
const weddingTimeline = [
  {
    time: "13:00",
    title: "Lễ Thành Hôn",
    description: "Nghi lễ truyền thống và trao nhẫn cưới",
  },
  {
    time: "15:00",
    title: "Tiệc Cocktail",
    description: "Giao lưu và chụp ảnh cùng khách mời",
  },
  {
    time: "18:10",
    title: "Tiệc Tối",
    description: "Bữa tối trang trọng và phát biểu",
  },
  {
    time: "19:30",
    title: "Cắt Bánh Cưới",
    description: "Nghi thức cắt bánh cưới truyền thống",
  },
  {
    time: "20:15",
    title: "Khiêu Vũ Đầu Tiên",
    description: "Điệu nhảy đầu tiên của đôi uyên ương",
  },
  {
    time: "21:30",
    title: "Tiễn Khách",
    description: "Cảm ơn và chào tạm biệt quý khách",
  },
];

const galleryPhotos = PHOTOS.length
  ? PHOTOS.slice(0, 8)
  : [
    { id: 1001, src: COUPLE.coverImage, alt: "Khoảnh khắc cưới" },
    { id: 1002, src: COUPLE.coverImage, alt: "Khoảnh khắc cưới" },
    { id: 1003, src: COUPLE.coverImage, alt: "Khoảnh khắc cưới" },
    { id: 1004, src: COUPLE.coverImage, alt: "Khoảnh khắc cưới" },
    { id: 1005, src: COUPLE.coverImage, alt: "Khoảnh khắc cưới" },
    { id: 1006, src: COUPLE.coverImage, alt: "Khoảnh khắc cưới" },
  ];

const weddingDateLabel = new Intl.DateTimeFormat("vi-VN", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
}).format(new Date(WEDDING_DATE));

const heroVenue = EVENTS[2]?.location ?? EVENTS[0]?.location ?? "Địa điểm lễ cưới";
const mapLink = EVENTS[2]?.mapLink ?? EVENTS[0]?.mapLink ?? "https://maps.google.com";

const faqs = [
  {
    question: "Có chỗ gửi xe tại địa điểm tiệc không?",
    answer: "Có. Địa điểm có khu vực gửi xe máy và ô tô riêng, nhân viên hướng dẫn tại cổng chính.",
  },
  {
    question: "Gia đình có thể đưa trẻ em theo cùng không?",
    answer: "Hoàn toàn được. Vui lòng ghi số lượng người đi cùng tại phần xác nhận tham dự để ban tổ chức sắp xếp bàn phù hợp.",
  },
  {
    question: "Nếu bận, mình có thể xác nhận sau không?",
    answer: "Có. Bạn chọn trạng thái 'Tôi xác nhận sau' trong form xác nhận tham dự, sau đó cập nhật lại trước ngày cưới.",
  },
];

export default function WeddingInvitation() {
  return (
    <main className="lux-page">
      <MusicPill src={CONFIG.meta.musicUrl} />

      <motion.header
        className="lux-nav-shell"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="lux-nav">
          <a href="#home" className="lux-brand">
            <span className="lux-brand-kicker">Thiệp Cưới</span>
            <span className="lux-brand-script">
              {COUPLE.groom.shortName} &amp; {COUPLE.bride.shortName}
            </span>
          </a>

          <nav className="lux-nav-links" aria-label="Điều hướng chính">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#rsvp" className="lux-nav-cta">
            Xác nhận
          </a>
        </div>
      </motion.header>

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
          <motion.div
            className="lux-hero-copy"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="lux-kicker">Thiệp Mời Thành Hôn</p>
            <MotionText delay={0.3}>
              <h1>Tạo nên ngày đẹp nhất trong đời</h1>
            </MotionText>
            <MotionText delay={0.4}>
              <p className="lux-hero-script">
                {COUPLE.groom.shortName} <span>&amp;</span> {COUPLE.bride.shortName}
              </p>
            </MotionText>
            <MotionText delay={0.5}>
              <p className="lux-copy">
                {CONFIG.meta.description}. Một buổi lễ ấm cúng, tinh tế và đầy yêu thương dành cho gia đình, bạn bè thân thiết.
              </p>
            </MotionText>

            <motion.div
              className="lux-hero-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p>
                <CalendarDays size={14} /> {weddingDateLabel}
              </p>
              <p>
                <MapPin size={14} /> {heroVenue}
              </p>
            </motion.div>

            <motion.div
              className="lux-hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a href="#schedule" className="lux-button">
                Xem lịch trình
              </a>
              <a href="#gallery" className="lux-button lux-button--ghost">
                Xem ảnh cưới
              </a>
            </motion.div>

            <motion.div
              className="lux-countdown-wrap"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <CountdownBoard targetDate={WEDDING_DATE} />
            </motion.div>
          </motion.div>

          <motion.div
            className="lux-hero-media"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
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

          </motion.div>
        </div>
      </section>

      <MotionSection className="lux-section" id="story">
        <div className="lux-section-head">
          <p className="lux-kicker">Câu chuyện</p>
          <MotionText>
            <h2 className="lux-title">Câu chuyện của chúng mình</h2>
          </MotionText>
          <MotionText delay={0.2}>
            <p className="lux-copy">
              Từ những lần gặp gỡ tình cờ đến lời hẹn ước, đây là hành trình nhỏ dẫn chúng mình đến ngày về chung một nhà.
            </p>
          </MotionText>
        </div>

        <div className="lux-timeline-alt">
          <div className="lux-timeline-alt-line"></div>
          {storyMoments.map((moment, index) => (
            <motion.article
              key={`${moment.date}-${moment.title}`}
              className={`lux-timeline-alt-item ${index % 2 === 0 ? 'lux-timeline-alt-item--left' : 'lux-timeline-alt-item--right'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
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
                    style={{ objectFit: 'cover' }}
                  />
                </figure>
              </div>
              <div className="lux-timeline-alt-dot"></div>
            </motion.article>
          ))}
        </div>
      </MotionSection>

      {/* Wedding Day Timeline */}
      <MotionSection className="lux-section" id="timeline">
        <div className="lux-section-head">
          <p className="lux-kicker">Lịch trình</p>
          <h2 className="lux-title">Lịch trình ngày cưới</h2>
          <p className="lux-copy">
            Chương trình diễn ra trong ngày trọng đại của chúng mình
          </p>
        </div>

        <div className="lux-timeline-checklist">
          <motion.div
            className="lux-timeline-checklist-paper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="lux-timeline-checklist-header">Order of Events</h3>
            <div className="lux-timeline-checklist-items">
              {weddingTimeline.map((item, index) => (
                <motion.div
                  key={`${item.time}-${item.title}`}
                  className="lux-timeline-checklist-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="lux-timeline-checklist-checkbox">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div className="lux-timeline-checklist-content">
                    <span className="lux-timeline-checklist-time">{item.time}</span>
                    <span className="lux-timeline-checklist-separator">—</span>
                    <h4 className="lux-timeline-checklist-title">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* Locations */}
      <MotionSection className="lux-section" id="schedule">
        <div className="lux-section-head">
          <p className="lux-kicker">Địa điểm</p>
          <h2 className="lux-title">Địa điểm tổ chức</h2>
        </div>

        <div className="lux-locations-grid">
          {EVENTS.map((event, index) => {
            // Different icons for each event type
            const getEventIcon = (idx: number) => {
              if (idx === 0) {
                // Wedding Rings icon (elegant)
                return (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2Z" />
                    <circle cx="7" cy="14" r="5" />
                    <circle cx="17" cy="14" r="5" />
                    <path d="M7 9L17 9" />
                  </svg>
                );
              } else if (idx === 1) {
                // Elegant Heart icon
                return (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    <path d="M3 3L4 4M20 3L21 4" />
                  </svg>
                );
              } else {
                // Champagne Glasses icon (celebration)
                return (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L8 10L6 18M18 2L16 10L18 18" />
                    <path d="M6 18L6 22M18 18L18 22" />
                    <path d="M4 22L8 22M16 22L20 22" />
                    <path d="M8 10L16 10" />
                  </svg>
                );
              }
            };

            return (
              <article key={`${event.title}-${event.time}`} className="lux-location-card">
                <div className="lux-location-card-icon">
                  {getEventIcon(index)}
                </div>
                <h3 className="lux-location-card-title">{event.title}</h3>
                <p className="lux-location-card-time">{event.time}</p>
                <p className="lux-location-card-address">{event.location}</p>
                <a href={event.mapLink} target="_blank" rel="noreferrer" className="lux-location-card-link">
                  Xem bản đồ →
                </a>
              </article>
            );
          })}
        </div>

      </MotionSection>

      <MotionSection className="lux-section" id="gallery">
        <div className="lux-section-head">
          <p className="lux-kicker">Thư viện ảnh</p>
          <h2 className="lux-title">Khoảnh khắc trước ngày cưới</h2>
        </div>

        <div className="lux-gallery-grid">
          {galleryPhotos.map((photo, index) => (
            <motion.figure
              className={`lux-gallery-item lux-gallery-item--${(index % 8) + 1}`}
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 980px) 92vw, 28vw" />
            </motion.figure>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="lux-section lux-split-section" id="dress-code">
        <article className="lux-dress-card">
          <p className="lux-kicker">Trang phục</p>
          <h2 className="lux-title">Bảng màu trang phục</h2>
          <p className="lux-copy">{DRESS_CODE?.description}</p>

          {DRESS_CODE?.palette?.length ? (
            <div className="lux-palette-grid">
              {DRESS_CODE.palette.map((item) => (
                <div className="lux-palette-item" key={`${item.name}-${item.color}`}>
                  <span style={{ backgroundColor: item.color }} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          ) : null}

          {DRESS_CODE?.note ? <p className="lux-dress-note">* {DRESS_CODE.note}</p> : null}
        </article>

        <article className="lux-faq-card">
          <p className="lux-kicker">Hỏi đáp</p>
          <h2 className="lux-title">Thông tin nhanh</h2>

          <div className="lux-faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          {QUOTES[0] ? (
            <blockquote>
              “{QUOTES[0].content}”
              <cite>{QUOTES[0].author}</cite>
            </blockquote>
          ) : null}
        </article>
      </MotionSection>

      <MotionSection className="lux-section" id="registry">
        <div className="lux-section-head">
          <p className="lux-kicker">Mừng cưới</p>
          <h2 className="lux-title">Mừng cưới &amp; lời chúc</h2>
          <p className="lux-copy">
            Nếu bạn không thể đến trực tiếp, có thể gửi lời chúc và quà mừng qua QR bên dưới. Thông tin tài khoản có nút copy nhanh.
          </p>
        </div>

        <GiftRegistryPanel />
      </MotionSection>

      <MotionSection className="lux-section" id="rsvp">
        <RSVPLuxuryForm events={EVENTS.map((event) => event.title)} />
      </MotionSection>

      <MotionSection className="lux-section" id="guestbook">
        <GuestbookWall />
      </MotionSection>

      <motion.footer
        className="lux-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="lux-footer-card">
          <div className="lux-footer-content">
            <h2 className="lux-footer-title">Cảm Ơn Bạn!</h2>
            <p className="lux-footer-text">
              Sự hiện diện của bạn là niềm hạnh phúc lớn lao của chúng tôi trong ngày trọng đại này.
            </p>

            <div className="lux-footer-names">
              {COUPLE.groom.shortName} <span className="lux-footer-heart">♥</span> {COUPLE.bride.shortName}
            </div>

            <div className="lux-footer-divider">
              <span>♦</span>
              <span>♦</span>
              <span>♦</span>
            </div>

            <div className="lux-footer-credit-wrap">
              <span className="lux-footer-credit">THỰC HIỆN BỞI │ {new Date(WEDDING_DATE).toLocaleDateString('vi-VN')}</span>
              <a href="/tool/generator" className="lux-footer-btn">
                <Sparkles size={14} />
                Tạo thiệp cưới của bạn
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </main >
  );
}
