"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { CountdownBoard } from "@/app/components/shared/CountdownBoard";
import { MusicPill } from "@/app/components/shared/MusicPill";
import { RSVPLuxuryForm } from "@/app/features/rsvp/RSVPForm";
import { GuestbookWall } from "@/app/features/guestbook/GuestbookWall";
import { GiftRegistryPanel } from "@/app/features/registry/GiftRegistryPanel";

// MINIMAL VARIANT - Tối Giản Hiện Đại
const MINIMAL_DATA = {
  couple: {
    groom: { name: "Trần Minh Khôi", shortName: "Minh Khôi" },
    bride: { name: "Lê Hà My", shortName: "Hà My" },
    coverImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=90",
  },
  weddingDate: "2026-07-12T15:00:00",
  events: [
    {
      title: "Lễ Cưới",
      icon: "🌿",
      time: "15:00",
      date: "12 tháng 7, 2026",
      location: "Vườn Thực Vật Thành Phố",
      mapLink: "https://maps.google.com",
    },
    {
      title: "Tiệc Chiêu Đãi",
      icon: "🍃",
      time: "17:00",
      date: "12 tháng 7, 2026",
      location: "Sân Vườn",
      mapLink: "https://maps.google.com",
    },
  ],
  loveStory: [
    {
      date: "2022",
      title: "Lần Đầu Gặp Gỡ",
      description:
        "Chúng tôi gặp nhau tại một hội thảo thiết kế. Niềm đam mê chung về chủ nghĩa tối giản và cà phê ngon đã kết nối chúng tôi.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=90",
    },
    {
      date: "2024",
      title: "Lời Cầu Hôn",
      description:
        "Trong một buổi sáng leo núi yên tĩnh, Khôi đã hỏi My câu hỏi quan trọng nhất. My đã đồng ý mà không chút do dự.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=90",
    },
  ],
  photos: [
    { id: 1, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=90", alt: "Cặp đôi" },
    { id: 2, src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=90", alt: "Chân dung" },
    { id: 3, src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=90", alt: "Thiên nhiên" },
    { id: 4, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=90", alt: "Cùng nhau" },
  ],
  dressCode: {
    description:
      "Trang phục tiệc vườn. Vải thoáng mát, màu sắc tự nhiên nhẹ nhàng. Sự thoải mái là quan trọng nhất.",
    note: "Sự kiện ngoài trời - vui lòng mang giày thoải mái.",
    palette: [
      { color: "#F5F5F5", name: "Trắng Mềm" },
      { color: "#E8E8E8", name: "Xám Nhạt" },
      { color: "#9CAF88", name: "Xanh Rêu" },
      { color: "#D4C5B9", name: "Cát" },
    ],
  },
};

export default function MinimalDemo() {
  const navLinks = [
    { href: "#story", label: "Câu Chuyện" },
    { href: "#when", label: "Thời Gian" },
    { href: "#gallery", label: "Hình Ảnh" },
    { href: "#rsvp", label: "Xác Nhận" },
  ];

  const weddingDateLabel = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(MINIMAL_DATA.weddingDate));

  return (
    <>
      <div className="demo-banner minimal-banner">
        <div className="demo-banner-content">
          <span>
            🎨 Mẫu Demo: <strong>Tối Giản Hiện Đại</strong>
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

      <main className="minimal-page">
        <MusicPill src="/music/wedding-song.mp3" />

        <header className="minimal-nav">
          <div className="minimal-nav-content">
            <a href="#home" className="minimal-logo">
              M & E
            </a>

            <nav className="minimal-nav-links">
              {navLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="minimal-hero" id="home">
          <div className="minimal-hero-content">
            <div className="minimal-hero-text">
              <h1>
                {MINIMAL_DATA.couple.groom.shortName}
                <br />& {MINIMAL_DATA.couple.bride.shortName}
              </h1>
              <p className="minimal-date">{weddingDateLabel}</p>
              <p className="minimal-location">
                <MapPin size={16} />
                {MINIMAL_DATA.events[0].location}
              </p>
            </div>

            <div className="minimal-hero-image">
              <Image
                src={MINIMAL_DATA.couple.coverImage}
                alt="Minh Khôi và Hà My"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="minimal-countdown">
            <CountdownBoard targetDate={MINIMAL_DATA.weddingDate} />
          </div>
        </section>

        <section className="minimal-section" id="story">
          <div className="minimal-section-header">
            <h2>Câu Chuyện Của Chúng Tôi</h2>
            <p>Hành trình tìm thấy nhau</p>
          </div>

          <div className="minimal-story-grid">
            {MINIMAL_DATA.loveStory.map((moment, index) => (
              <article key={moment.date} className="minimal-story-card">
                <div className="minimal-story-image">
                  <Image src={moment.image} alt={moment.title} fill sizes="(max-width: 768px) 100vw, 45vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="minimal-story-content">
                  <span className="minimal-story-year">{moment.date}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="minimal-section minimal-section-gray" id="when">
          <div className="minimal-section-header">
            <h2>Thời Gian & Địa Điểm</h2>
            <p>Hân hạnh đón tiếp quý khách</p>
          </div>

          <div className="minimal-events">
            {MINIMAL_DATA.events.map((event) => (
              <div key={event.title} className="minimal-event-card">
                <span className="minimal-event-icon">{event.icon}</span>
                <h3>{event.title}</h3>
                <p className="minimal-event-time">{event.time}</p>
                <p className="minimal-event-location">{event.location}</p>
              </div>
            ))}
          </div>

          <div className="minimal-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.9632!3d40.7829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1706520000000!5m2!1sen!2sus"
              title="Venue location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section className="minimal-section" id="gallery">
          <div className="minimal-section-header">
            <h2>Hình Ảnh</h2>
            <p>Những khoảnh khắc đã chia sẻ</p>
          </div>

          <div className="minimal-gallery">
            {MINIMAL_DATA.photos.map((photo) => (
              <figure key={photo.id} className="minimal-gallery-item">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </figure>
            ))}
          </div>
        </section>

        <section className="minimal-section minimal-section-gray" id="dress">
          <div className="minimal-section-header">
            <h2>Trang Phục</h2>
            <p>{MINIMAL_DATA.dressCode.description}</p>
          </div>

          <div className="minimal-palette">
            {MINIMAL_DATA.dressCode.palette.map((item) => (
              <div key={item.name} className="minimal-palette-item">
                <div className="minimal-palette-color" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="minimal-section" id="registry">
          <div className="minimal-section-header">
            <h2>Mừng Cười</h2>
            <p>Sự hiện diện của quý khách là điều quý giá nhất</p>
          </div>
          <GiftRegistryPanel />
        </section>

        <section className="minimal-section minimal-section-gray" id="rsvp">
          <RSVPLuxuryForm events={MINIMAL_DATA.events.map((e) => e.title)} />
        </section>

        <section className="minimal-section" id="guestbook">
          <GuestbookWall />
        </section>

        <footer className="minimal-footer">
          <p>Hẹn gặp lại</p>
          <p className="minimal-footer-names">Minh Khôi & Hà My</p>
        </footer>
      </main>

      <style jsx global>{`
        .minimal-banner {
          background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%) !important;
        }

        .minimal-page {
          font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif;
          color: #1a1a1a;
          background: #ffffff;
        }

        .minimal-nav {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e5e5e5;
          z-index: 50;
        }

        .minimal-nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .minimal-logo {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          letter-spacing: 0.05em;
        }

        .minimal-nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .minimal-nav-links a {
          color: #666;
          text-decoration: none;
          font-size: 0.9375rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .minimal-nav-links a:hover {
          color: #1a1a1a;
        }

        .minimal-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .minimal-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .minimal-hero-text h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 300;
          line-height: 1.1;
          margin: 0 0 2rem;
          letter-spacing: -0.02em;
        }

        .minimal-date {
          font-size: 1.125rem;
          color: #666;
          margin: 0 0 1rem;
        }

        .minimal-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #999;
          font-size: 0.9375rem;
        }

        .minimal-hero-image {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 2px;
          overflow: hidden;
        }

        .minimal-countdown {
          margin-top: 3rem;
        }

        .minimal-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        .minimal-section-gray {
          background: #fafafa;
          max-width: 100%;
        }

        .minimal-section-gray > * {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .minimal-section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .minimal-section-header h2 {
          font-size: 2.5rem;
          font-weight: 300;
          margin: 0 0 1rem;
          letter-spacing: -0.01em;
        }

        .minimal-section-header p {
          color: #666;
          font-size: 1.0625rem;
        }

        .minimal-story-grid {
          display: grid;
          gap: 4rem;
        }

        .minimal-story-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .minimal-story-card:nth-child(even) {
          direction: rtl;
        }

        .minimal-story-card:nth-child(even) > * {
          direction: ltr;
        }

        .minimal-story-image {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 2px;
          overflow: hidden;
        }

        .minimal-story-year {
          display: block;
          font-size: 0.875rem;
          color: #999;
          margin-bottom: 0.5rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .minimal-story-content h3 {
          font-size: 1.75rem;
          font-weight: 400;
          margin: 0 0 1rem;
        }

        .minimal-story-content p {
          color: #666;
          line-height: 1.7;
        }

        .minimal-events {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .minimal-event-card {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 2px;
        }

        .minimal-event-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }

        .minimal-event-card h3 {
          font-size: 1.25rem;
          font-weight: 500;
          margin: 0 0 0.5rem;
        }

        .minimal-event-time {
          color: #666;
          margin: 0 0 0.25rem;
        }

        .minimal-event-location {
          color: #999;
          font-size: 0.9375rem;
        }

        .minimal-map {
          border-radius: 2px;
          overflow: hidden;
          height: 400px;
        }

        .minimal-map iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .minimal-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .minimal-gallery-item {
          position: relative;
          aspect-ratio: 1;
          margin: 0;
          border-radius: 2px;
          overflow: hidden;
        }

        .minimal-palette {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .minimal-palette-item {
          text-align: center;
        }

        .minimal-palette-color {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 0.75rem;
          border: 1px solid #e5e5e5;
        }

        .minimal-palette-item span {
          font-size: 0.875rem;
          color: #666;
        }

        .minimal-footer {
          text-align: center;
          padding: 4rem 2rem;
          background: #fafafa;
        }

        .minimal-footer p {
          color: #999;
          margin: 0 0 0.5rem;
        }

        .minimal-footer-names {
          font-size: 1.5rem;
          color: #1a1a1a !important;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .minimal-hero-content,
          .minimal-story-card {
            grid-template-columns: 1fr;
          }

          .minimal-nav-links {
            gap: 1.5rem;
          }

          .minimal-nav-links a {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </>
  );
}
