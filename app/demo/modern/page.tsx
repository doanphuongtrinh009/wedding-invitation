"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";
import { CountdownBoard } from "@/app/components/shared/CountdownBoard";
import { MusicPill } from "@/app/components/shared/MusicPill";
import { RSVPLuxuryForm } from "@/app/features/rsvp/RSVPForm";
import { GuestbookWall } from "@/app/features/guestbook/GuestbookWall";
import { GiftRegistryPanel } from "@/app/features/registry/GiftRegistryPanel";

// MODERN VARIANT - Hiện Đại Táo Bạo
const MODERN_DATA = {
  couple: {
    groom: { name: "Võ Quang Huy", shortName: "Quang Huy" },
    bride: { name: "Trương Minh Anh", shortName: "Minh Anh" },
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=90",
  },
  weddingDate: "2026-10-10T18:00:00",
  events: [
    {
      title: "Lễ Cưới",
      icon: "◆",
      time: "6:00 Tối",
      date: "10 tháng 10, 2026",
      location: "Bảo Tàng Nghệ Thuật Hiện Đại",
      mapLink: "https://maps.google.com",
    },
    {
      title: "Tiệc Chiêu Đãi",
      icon: "●",
      time: "7:30 Tối",
      date: "10 tháng 10, 2026",
      location: "Sân Thượng Gallery",
      mapLink: "https://maps.google.com",
    },
  ],
  loveStory: [
    {
      date: "2020",
      title: "Kết Nối Kỹ Thuật Số",
      description:
        "Chúng tôi gặp nhau qua một ứng dụng hẹn hò trong thời gian giãn cách. Những buổi hẹn cà phê ảo biến thành những giờ trò chuyện về mọi thứ từ công nghệ đến du lịch.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=90",
    },
    {
      date: "2023",
      title: "Lời Cầu Hôn",
      description:
        "Huy đã lên kế hoạch một trò chơi tìm kiếm kho báu qua thành phố, kết thúc ở sân thượng nơi chúng tôi có buổi hẹn đầu tiên. Câu trả lời là một lời đồng ý nhiệt tình.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=90",
    },
  ],
  photos: [
    { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90", alt: "Cặp đôi" },
    { id: 2, src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=90", alt: "Chân dung" },
    { id: 3, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=90", alt: "Thành phố" },
    { id: 4, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=90", alt: "Cùng nhau" },
  ],
  dressCode: {
    description:
      "Trang phục cocktail với phong cách hiện đại. Khuyến khích màu sắc táo bạo và phong cách đương đại.",
    note: "Địa điểm trong nhà với hệ thống điều hòa.",
    palette: [
      { color: "#1A1A1A", name: "Đen" },
      { color: "#FF6B35", name: "Cam" },
      { color: "#004E89", name: "Xanh Navy" },
      { color: "#F7F7F7", name: "Trắng" },
    ],
  },
};

export default function ModernDemo() {
  const navLinks = [
    { href: "#about", label: "Giới Thiệu" },
    { href: "#details", label: "Chi Tiết" },
    { href: "#photos", label: "Hình Ảnh" },
    { href: "#rsvp", label: "Xác Nhận" },
  ];

  const weddingDateLabel = new Intl.DateTimeFormat("vi-VN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(MODERN_DATA.weddingDate));

  return (
    <>
      <div className="demo-banner modern-banner">
        <div className="demo-banner-content">
          <span>
            🎨 Mẫu Demo: <strong>Hiện Đại Táo Bạo</strong>
          </span>
          <div className="demo-banner-actions">
            <Link href="/demo" className="demo-banner-link">
              ← Tất Cả Mẫu
            </Link>
            <Link href="/" className="demo-banner-link">
              Trang Chính
            </Link>
          </div>
        </div>
      </div>

      <main className="modern-page">
        <MusicPill src="/music/wedding-song.mp3" />

        <header className="modern-nav">
          <div className="modern-nav-content">
            <a href="#home" className="modern-logo">
              Q+M
            </a>

            <nav className="modern-nav-links">
              {navLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="modern-hero" id="home">
          <div className="modern-hero-content">
            <div className="modern-hero-text">
              <div className="modern-hero-label">Thiệp Mời Cưới</div>
              <h1 className="modern-hero-names">
                <span className="modern-name-block">QUANG HUY</span>
                <span className="modern-name-divider">+</span>
                <span className="modern-name-block">MINH ANH</span>
              </h1>

              <div className="modern-hero-meta">
                <div className="modern-meta-item">
                  <Calendar size={20} />
                  <span>{weddingDateLabel}</span>
                </div>
                <div className="modern-meta-item">
                  <Clock size={20} />
                  <span>{MODERN_DATA.events[0].time}</span>
                </div>
                <div className="modern-meta-item">
                  <MapPin size={20} />
                  <span>{MODERN_DATA.events[0].location}</span>
                </div>
              </div>

              <a href="#rsvp" className="modern-cta">
                Xác Nhận Tham Dự
              </a>
            </div>

            <div className="modern-hero-image">
              <div className="modern-image-accent" />
              <Image
                src={MODERN_DATA.couple.coverImage}
                alt="Quang Huy và Minh Anh"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="modern-countdown">
            <CountdownBoard targetDate={MODERN_DATA.weddingDate} />
          </div>
        </section>

        <section className="modern-section modern-section-dark" id="about">
          <div className="modern-section-header">
            <h2>Câu Chuyện Của Chúng Tôi</h2>
          </div>

          <div className="modern-story-grid">
            {MODERN_DATA.loveStory.map((moment) => (
              <article key={moment.date} className="modern-story-card">
                <div className="modern-story-image">
                  <Image src={moment.image} alt={moment.title} fill sizes="(max-width: 768px) 100vw, 45vw" style={{ objectFit: "cover" }} />
                  <div className="modern-story-year">{moment.date}</div>
                </div>
                <div className="modern-story-content">
                  <h3>{moment.title}</h3>
                  <p>{moment.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="modern-section" id="details">
          <div className="modern-section-header">
            <h2>Chi Tiết Sự Kiện</h2>
          </div>

          <div className="modern-events">
            {MODERN_DATA.events.map((event, index) => (
              <div key={event.title} className="modern-event-card">
                <div className="modern-event-icon">{event.icon}</div>
                <h3>{event.title}</h3>
                <p className="modern-event-time">{event.time}</p>
                <p className="modern-event-location">{event.location}</p>
                <a href={event.mapLink} target="_blank" rel="noreferrer" className="modern-event-link">
                  Xem Chỉ Đường →
                </a>
              </div>
            ))}
          </div>

          <div className="modern-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.9632!3d40.7829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1706520000000!5m2!1sen!2sus"
              title="Venue location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section className="modern-section modern-section-dark" id="photos">
          <div className="modern-section-header">
            <h2>Thư Viện</h2>
          </div>

          <div className="modern-gallery">
            {MODERN_DATA.photos.map((photo) => (
              <figure key={photo.id} className="modern-gallery-item">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </figure>
            ))}
          </div>
        </section>

        <section className="modern-section" id="dress">
          <div className="modern-section-header">
            <h2>Trang Phục</h2>
            <p>{MODERN_DATA.dressCode.description}</p>
          </div>

          <div className="modern-palette">
            {MODERN_DATA.dressCode.palette.map((item) => (
              <div key={item.name} className="modern-palette-item">
                <div className="modern-palette-color" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="modern-section modern-section-dark" id="registry">
          <div className="modern-section-header">
            <h2>Mừng Cưới</h2>
          </div>
          <GiftRegistryPanel />
        </section>

        <section className="modern-section" id="rsvp">
          <RSVPLuxuryForm events={MODERN_DATA.events.map((e) => e.title)} />
        </section>

        <section className="modern-section modern-section-dark" id="guestbook">
          <GuestbookWall />
        </section>

        <footer className="modern-footer">
          <div className="modern-footer-content">
            <p className="modern-footer-names">QUANG HUY + MINH ANH</p>
            <p className="modern-footer-date">{weddingDateLabel}</p>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        .modern-banner {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%) !important;
        }

        .modern-page {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1a1a1a;
          background: #ffffff;
        }

        .modern-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 2px solid #1a1a1a;
          z-index: 100;
        }

        .modern-nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modern-logo {
          font-size: 1.5rem;
          font-weight: 900;
          color: #1a1a1a;
          text-decoration: none;
          letter-spacing: 0.1em;
        }

        .modern-nav-links {
          display: flex;
          gap: 3rem;
        }

        .modern-nav-links a {
          color: #1a1a1a;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.2s;
        }

        .modern-nav-links a:hover {
          color: #ff6b35;
        }

        .modern-hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 8rem 2rem 4rem;
        }

        .modern-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .modern-hero-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #ff6b35;
          margin-bottom: 2rem;
        }

        .modern-hero-names {
          font-size: clamp(3rem, 7vw, 5rem);
          font-weight: 900;
          line-height: 0.9;
          margin: 0 0 3rem;
          letter-spacing: -0.02em;
        }

        .modern-name-block {
          display: block;
        }

        .modern-name-divider {
          display: block;
          color: #ff6b35;
          margin: 0.5rem 0;
        }

        .modern-hero-meta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .modern-meta-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          font-size: 0.9375rem;
        }

        .modern-cta {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: #1a1a1a;
          color: white;
          text-decoration: none;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
          transition: all 0.3s;
        }

        .modern-cta:hover {
          background: #ff6b35;
          transform: translateY(-2px);
        }

        .modern-hero-image {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        .modern-image-accent {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          background: #ff6b35;
          z-index: 1;
        }

        .modern-countdown {
          margin-top: 4rem;
        }

        .modern-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        .modern-section-dark {
          background: #1a1a1a;
          color: white;
          max-width: 100%;
        }

        .modern-section-dark > * {
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        .modern-section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .modern-section-header h2 {
          font-size: 3.5rem;
          font-weight: 900;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .modern-section-header p {
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .modern-story-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 3rem;
        }

        .modern-story-card {
          background: rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .modern-story-image {
          position: relative;
          aspect-ratio: 16/9;
        }

        .modern-story-year {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: #ff6b35;
          color: white;
          padding: 0.5rem 1rem;
          font-weight: 900;
          font-size: 0.875rem;
          letter-spacing: 0.1em;
        }

        .modern-story-content {
          padding: 2rem;
        }

        .modern-story-content h3 {
          font-size: 1.75rem;
          font-weight: 900;
          margin: 0 0 1rem;
          text-transform: uppercase;
        }

        .modern-story-content p {
          line-height: 1.7;
          opacity: 0.9;
        }

        .modern-events {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .modern-event-card {
          padding: 2.5rem;
          border: 2px solid #1a1a1a;
          text-align: center;
        }

        .modern-event-icon {
          font-size: 3rem;
          color: #ff6b35;
          margin-bottom: 1.5rem;
        }

        .modern-event-card h3 {
          font-size: 1.5rem;
          font-weight: 900;
          margin: 0 0 1rem;
          text-transform: uppercase;
        }

        .modern-event-time {
          font-weight: 700;
          margin: 0 0 0.5rem;
        }

        .modern-event-location {
          margin: 0 0 1.5rem;
          opacity: 0.7;
        }

        .modern-event-link {
          color: #ff6b35;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .modern-map {
          height: 500px;
          overflow: hidden;
          border: 2px solid #1a1a1a;
        }

        .modern-map iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .modern-gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .modern-gallery-item {
          position: relative;
          aspect-ratio: 1;
          margin: 0;
          overflow: hidden;
        }

        .modern-palette {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .modern-palette-item {
          text-align: center;
        }

        .modern-palette-color {
          width: 100px;
          height: 100px;
          margin: 0 auto 1rem;
          border: 2px solid #1a1a1a;
        }

        .modern-palette-item span {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 0.1em;
        }

        .modern-footer {
          background: #1a1a1a;
          color: white;
          padding: 4rem 2rem;
        }

        .modern-footer-content {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        .modern-footer-names {
          font-size: 2.5rem;
          font-weight: 900;
          margin: 0 0 1rem;
          letter-spacing: 0.1em;
        }

        .modern-footer-date {
          font-size: 1rem;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        @media (max-width: 768px) {
          .modern-hero-content,
          .modern-story-grid {
            grid-template-columns: 1fr;
          }

          .modern-gallery {
            grid-template-columns: 1fr;
          }

          .modern-nav-links {
            gap: 1.5rem;
          }

          .modern-nav-links a {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}
