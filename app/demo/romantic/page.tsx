"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Calendar, MapPin } from "lucide-react";
import { CountdownBoard } from "@/app/components/shared/CountdownBoard";
import { MusicPill } from "@/app/components/shared/MusicPill";
import { RSVPLuxuryForm } from "@/app/features/rsvp/RSVPForm";
import { GuestbookWall } from "@/app/features/guestbook/GuestbookWall";
import { GiftRegistryPanel } from "@/app/features/registry/GiftRegistryPanel";

// ROMANTIC VARIANT - Lãng Mạn Pastel
const ROMANTIC_DATA = {
  couple: {
    groom: { name: "Nguyễn Đức Anh", shortName: "Đức Anh" },
    bride: { name: "Phạm Linh Chi", shortName: "Linh Chi" },
    coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=90",
  },
  weddingDate: "2026-05-23T14:30:00",
  events: [
    {
      title: "Lễ Cưới Vườn",
      icon: "🌸",
      time: "2:30 Chiều",
      date: "23 tháng 5, 2026",
      location: "Vườn Hồng Rose Garden",
      mapLink: "https://maps.google.com",
    },
    {
      title: "Tiệc Trà Chiều",
      icon: "🫖",
      time: "4:00 Chiều",
      date: "23 tháng 5, 2026",
      location: "Gian Hàng Vườn",
      mapLink: "https://maps.google.com",
    },
    {
      title: "Tiệc Tối",
      icon: "✨",
      time: "6:00 Tối",
      date: "23 tháng 5, 2026",
      location: "Sân Thượng Ánh Nến",
      mapLink: "https://maps.google.com",
    },
  ],
  loveStory: [
    {
      date: "Xuân 2021",
      title: "Cuộc Gặp Gỡ Định Mệnh",
      description:
        "Trong một buổi chiều mưa tháng Tư ở Đà Lạt, cả hai chúng tôi đều với tay lấy chiếc ô cuối cùng trong một hiệu sách nhỏ. Khoảnh khắc cười đùa ấy đã thay đổi tất cả.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90",
    },
    {
      date: "Hè 2022",
      title: "Tình Yêu Nở Rộ",
      description:
        "Mùa hè đầu tiên bên nhau tràn ngập những buổi picnic trên cánh đồng hoa, những buổi dạo bước lúc hoàng hôn, và vô số khoảnh khắc khiến chúng tôi yêu nhau sâu đậm hơn.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=90",
    },
    {
      date: "Thu 2024",
      title: "Khởi Đầu Mãi Mãi",
      description:
        "Dưới tàn lá thu vàng, Đức Anh đã hỏi Linh Chi câu hỏi quan trọng nhất đời. Với nước mắt hạnh phúc, cô ấy đã gật đầu đồng ý một cuộc đời bên nhau.",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=90",
    },
  ],
  photos: [
    { id: 1, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=90", alt: "Đính hôn" },
    { id: 2, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90", alt: "Chân dung" },
    { id: 3, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=90", alt: "Cùng nhau" },
    { id: 4, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=90", alt: "Thiên nhiên" },
    { id: 5, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=90", alt: "Hoàng hôn" },
    { id: 6, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=90", alt: "Tình yêu" },
  ],
  dressCode: {
    description:
      "Trang phục tiệc vườn thanh lịch. Váy bay bổng và vest nhẹ nhàng với tông màu pastel lãng mạn. Phong cách tiệc trà xuân trong vườn.",
    note: "Khuyến khích họa tiết hoa! Vui lòng tránh màu đỏ tươi hoặc đen.",
    palette: [
      { color: "#FFE5EC", name: "Hồng Phấn" },
      { color: "#E8D5C4", name: "Champagne" },
      { color: "#C9B8D4", name: "Tím Lavender" },
      { color: "#B8D4C9", name: "Xanh Mint" },
    ],
  },
};

export default function RomanticDemo() {
  const navLinks = [
    { href: "#story", label: "Câu Chuyện Tình Yêu" },
    { href: "#celebration", label: "Lễ Kỷ Niệm" },
    { href: "#gallery", label: "Thư Viện" },
    { href: "#rsvp", label: "Xác Nhận" },
  ];

  const weddingDateLabel = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(ROMANTIC_DATA.weddingDate));

  return (
    <>
      <div className="demo-banner romantic-banner">
        <div className="demo-banner-content">
          <span>
            🎨 Mẫu Demo: <strong>Lãng Mạn Pastel</strong>
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

      <main className="romantic-page">
        <MusicPill src="/music/wedding-song.mp3" />

        <header className="romantic-nav">
          <div className="romantic-nav-content">
            <a href="#home" className="romantic-logo">
              <Heart size={20} className="romantic-logo-icon" />
              <span>D & S</span>
            </a>

            <nav className="romantic-nav-links">
              {navLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="romantic-hero" id="home">
          <div className="romantic-hero-bg" />
          <div className="romantic-hero-content">
            <div className="romantic-hero-text">
              <p className="romantic-subtitle">Cùng gia đình hai bên</p>
              <h1 className="romantic-names">
                <span>{ROMANTIC_DATA.couple.groom.shortName}</span>
                <Heart className="romantic-heart-icon" size={32} />
                <span>{ROMANTIC_DATA.couple.bride.shortName}</span>
              </h1>
              <p className="romantic-tagline">Trân trọng kính mời</p>

              <div className="romantic-hero-details">
                <div className="romantic-detail">
                  <Calendar size={18} />
                  <span>{weddingDateLabel}</span>
                </div>
                <div className="romantic-detail">
                  <MapPin size={18} />
                  <span>{ROMANTIC_DATA.events[0].location}</span>
                </div>
              </div>
            </div>

            <div className="romantic-hero-image">
              <div className="romantic-image-frame">
                <Image
                  src={ROMANTIC_DATA.couple.coverImage}
                  alt="Đức Anh và Linh Chi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className="romantic-countdown">
            <CountdownBoard targetDate={ROMANTIC_DATA.weddingDate} />
          </div>
        </section>

        <section className="romantic-section" id="story">
          <div className="romantic-section-header">
            <Heart size={24} className="romantic-section-icon" />
            <h2>Câu Chuyện Tình Yêu</h2>
            <p>Hành trình từ người dưng đến tri kỷ</p>
          </div>

          <div className="romantic-timeline">
            {ROMANTIC_DATA.loveStory.map((moment, index) => (
              <article key={moment.date} className="romantic-timeline-item">
                <div className="romantic-timeline-image">
                  <Image src={moment.image} alt={moment.title} fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="romantic-timeline-content">
                  <span className="romantic-timeline-date">{moment.date}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="romantic-section romantic-section-pink" id="celebration">
          <div className="romantic-section-header">
            <h2>Tham Gia Lễ Kỷ Niệm</h2>
            <p>Một ngày tràn ngập tình yêu, tiếng cười và hạnh phúc mãi mãi</p>
          </div>

          <div className="romantic-events">
            {ROMANTIC_DATA.events.map((event, index) => (
              <div key={event.title} className="romantic-event-card">
                <span className="romantic-event-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="romantic-event-icon">{event.icon}</span>
                <h3>{event.title}</h3>
                <p className="romantic-event-time">{event.time}</p>
                <p className="romantic-event-location">{event.location}</p>
              </div>
            ))}
          </div>

          <div className="romantic-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.9632!3d40.7829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1706520000000!5m2!1sen!2sus"
              title="Venue location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>

        <section className="romantic-section" id="gallery">
          <div className="romantic-section-header">
            <h2>Khoảnh Khắc Của Chúng Tôi</h2>
            <p>Những kỷ niệm đáng nhớ trong hành trình</p>
          </div>

          <div className="romantic-gallery">
            {ROMANTIC_DATA.photos.map((photo) => (
              <figure key={photo.id} className="romantic-gallery-item">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
              </figure>
            ))}
          </div>
        </section>

        <section className="romantic-section romantic-section-pink" id="dress">
          <div className="romantic-section-header">
            <h2>Trang Phục</h2>
            <p>{ROMANTIC_DATA.dressCode.description}</p>
          </div>

          <div className="romantic-palette">
            {ROMANTIC_DATA.dressCode.palette.map((item) => (
              <div key={item.name} className="romantic-palette-item">
                <div className="romantic-palette-color" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <p className="romantic-dress-note">{ROMANTIC_DATA.dressCode.note}</p>
        </section>

        <section className="romantic-section" id="registry">
          <div className="romantic-section-header">
            <h2>Mừng Cưới</h2>
            <p>Tình yêu và sự hiện diện của quý khách là món quà quý giá nhất</p>
          </div>
          <GiftRegistryPanel />
        </section>

        <section className="romantic-section romantic-section-pink" id="rsvp">
          <RSVPLuxuryForm events={ROMANTIC_DATA.events.map((e) => e.title)} />
        </section>

        <section className="romantic-section" id="guestbook">
          <GuestbookWall />
        </section>

        <footer className="romantic-footer">
          <Heart size={32} className="romantic-footer-icon" />
          <p>Với tất cả tình yêu</p>
          <p className="romantic-footer-names">Đức Anh & Linh Chi</p>
          <p className="romantic-footer-date">23 tháng 5, 2026</p>
        </footer>
      </main>

      <style jsx global>{`
        .romantic-banner {
          background: linear-gradient(135deg, #d48c95 0%, #c97a85 100%) !important;
        }

        .romantic-page {
          font-family: "Cormorant Garamond", "Georgia", serif;
          color: #5e4b35;
          background: #fef8f3;
        }

        .romantic-nav {
          position: sticky;
          top: 0;
          background: rgba(254, 248, 243, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #f5e5dc;
          z-index: 50;
        }

        .romantic-nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .romantic-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: #d48c95;
          text-decoration: none;
        }

        .romantic-logo-icon {
          fill: #d48c95;
        }

        .romantic-nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .romantic-nav-links a {
          color: #8b7355;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.2s;
        }

        .romantic-nav-links a:hover {
          color: #d48c95;
        }

        .romantic-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
          position: relative;
        }

        .romantic-hero-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(135deg, #ffe5ec 0%, #fef8f3 100%);
          opacity: 0.5;
          border-radius: 0 0 0 200px;
        }

        .romantic-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .romantic-subtitle {
          font-size: 1rem;
          color: #8b7355;
          margin: 0 0 1rem;
          font-style: italic;
        }

        .romantic-names {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          margin: 0 0 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          text-align: center;
        }

        .romantic-heart-icon {
          color: #d48c95;
          fill: #d48c95;
        }

        .romantic-tagline {
          font-size: 1.25rem;
          color: #8b7355;
          margin: 0 0 2rem;
          font-style: italic;
        }

        .romantic-hero-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .romantic-detail {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #8b7355;
        }

        .romantic-image-frame {
          position: relative;
          aspect-ratio: 3/4;
          border-radius: 200px 200px 8px 8px;
          overflow: hidden;
          border: 8px solid white;
          box-shadow: 0 20px 40px rgba(212, 140, 149, 0.15);
        }

        .romantic-countdown {
          margin-top: 3rem;
        }

        .romantic-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        .romantic-section-pink {
          background: linear-gradient(135deg, #ffe5ec 0%, #fef8f3 100%);
          max-width: 100%;
        }

        .romantic-section-pink > * {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .romantic-section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .romantic-section-icon {
          color: #d48c95;
          margin-bottom: 1rem;
        }

        .romantic-section-header h2 {
          font-size: 3rem;
          font-weight: 400;
          margin: 0 0 1rem;
          color: #5e4b35;
        }

        .romantic-section-header p {
          color: #8b7355;
          font-size: 1.125rem;
          font-style: italic;
        }

        .romantic-timeline {
          display: grid;
          gap: 4rem;
        }

        .romantic-timeline-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .romantic-timeline-item:nth-child(even) {
          direction: rtl;
        }

        .romantic-timeline-item:nth-child(even) > * {
          direction: ltr;
        }

        .romantic-timeline-image {
          position: relative;
          aspect-ratio: 4/5;
          border-radius: 100px 100px 8px 8px;
          overflow: hidden;
          border: 6px solid white;
          box-shadow: 0 15px 30px rgba(212, 140, 149, 0.15);
        }

        .romantic-timeline-date {
          display: block;
          font-size: 1rem;
          color: #d48c95;
          margin-bottom: 0.75rem;
          font-style: italic;
        }

        .romantic-timeline-content h3 {
          font-size: 2rem;
          font-weight: 400;
          margin: 0 0 1rem;
          color: #5e4b35;
        }

        .romantic-timeline-content p {
          color: #8b7355;
          line-height: 1.8;
          font-size: 1.0625rem;
        }

        .romantic-events {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .romantic-event-card {
          text-align: center;
          padding: 2.5rem 2rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 20px rgba(212, 140, 149, 0.1);
          position: relative;
        }

        .romantic-event-number {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.875rem;
          color: #d48c95;
          font-weight: 600;
        }

        .romantic-event-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }

        .romantic-event-card h3 {
          font-size: 1.5rem;
          font-weight: 400;
          margin: 0 0 0.5rem;
          color: #5e4b35;
        }

        .romantic-event-time {
          color: #d48c95;
          margin: 0 0 0.5rem;
          font-weight: 600;
        }

        .romantic-event-location {
          color: #8b7355;
          font-size: 0.9375rem;
        }

        .romantic-map {
          border-radius: 16px;
          overflow: hidden;
          height: 400px;
          box-shadow: 0 10px 20px rgba(212, 140, 149, 0.1);
        }

        .romantic-map iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .romantic-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .romantic-gallery-item {
          position: relative;
          aspect-ratio: 1;
          margin: 0;
          border-radius: 100px 100px 8px 8px;
          overflow: hidden;
          border: 4px solid white;
          box-shadow: 0 10px 20px rgba(212, 140, 149, 0.1);
        }

        .romantic-palette {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .romantic-palette-item {
          text-align: center;
        }

        .romantic-palette-color {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 1rem;
          border: 4px solid white;
          box-shadow: 0 8px 16px rgba(212, 140, 149, 0.15);
        }

        .romantic-palette-item span {
          font-size: 1rem;
          color: #8b7355;
        }

        .romantic-dress-note {
          text-align: center;
          color: #d48c95;
          font-style: italic;
          font-size: 0.9375rem;
        }

        .romantic-footer {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #ffe5ec 0%, #fef8f3 100%);
        }

        .romantic-footer-icon {
          color: #d48c95;
          fill: #d48c95;
          margin-bottom: 1rem;
        }

        .romantic-footer p {
          color: #8b7355;
          margin: 0 0 0.5rem;
          font-style: italic;
        }

        .romantic-footer-names {
          font-size: 2rem;
          color: #5e4b35 !important;
          font-weight: 400;
          margin: 1rem 0 !important;
          font-style: normal !important;
        }

        .romantic-footer-date {
          color: #d48c95 !important;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .romantic-hero-content,
          .romantic-timeline-item {
            grid-template-columns: 1fr;
          }

          .romantic-names {
            flex-direction: column;
            gap: 0.5rem;
          }

          .romantic-nav-links {
            gap: 1.5rem;
          }

          .romantic-nav-links a {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </>
  );
}
