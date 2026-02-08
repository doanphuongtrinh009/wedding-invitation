"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { CountdownBoard } from "@/app/components/shared/CountdownBoard";
import { MusicPill } from "@/app/components/shared/MusicPill";
import { RSVPLuxuryForm } from "@/app/features/rsvp/RSVPForm";
import { GuestbookWall } from "@/app/features/guestbook/GuestbookWall";
import { GiftRegistryPanel } from "@/app/features/registry/GiftRegistryPanel";

// TRADITIONAL VARIANT - Classic Vietnamese Wedding
const TRADITIONAL_DATA = {
    couple: {
        groom: { name: "Nguyễn Minh Tuấn", shortName: "Minh Tuấn" },
        bride: { name: "Trần Thanh Mai", shortName: "Thanh Mai" },
        coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=90",
    },
    weddingDate: "2026-11-15T10:00:00",
    events: [
        {
            title: "Lễ Vu Quy",
            icon: "🏮",
            time: "10:00 Sáng",
            date: "15 tháng 11, 2026",
            location: "Nhà Gái - 123 Nguyễn Huệ, Quận 1, TP.HCM",
            mapLink: "https://maps.google.com",
        },
        {
            title: "Lễ Thành Hôn",
            icon: "💒",
            time: "3:00 Chiều",
            date: "15 tháng 11, 2026",
            location: "Nhà Trai - 456 Lê Lợi, Quận 3, TP.HCM",
            mapLink: "https://maps.google.com",
        },
        {
            title: "Tiệc Cưới",
            icon: "🎊",
            time: "6:00 Tối",
            date: "15 tháng 11, 2026",
            location: "Nhà Hàng Tiệc Cưới Riverside",
            mapLink: "https://maps.google.com",
        },
    ],
    loveStory: [
        {
            date: "Xuân 2022",
            title: "Duyên Phận Đầu Tiên",
            description:
                "Chúng tôi gặp nhau lần đầu tại một buổi họp mặt bạn bè. Ánh mắt gặp nhau, trái tim đập thình thịch, và từ đó tình yêu bắt đầu nảy nở.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90",
        },
        {
            date: "Thu 2023",
            title: "Lời Cầu Hôn",
            description:
                "Trong một buổi tối trăng sáng bên bờ sông Sài Gòn, Tuấn đã quỳ gối cầu hôn Mai. Với giọng run run vì xúc động, Mai đã gật đầu đồng ý.",
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=90",
        },
        {
            date: "Đông 2024",
            title: "Chuẩn Bị Đám Cưới",
            description:
                "Từ việc chọn áo dài, trang trí tiệc cưới đến chuẩn bị lễ nghi truyền thống, mỗi khoảnh khắc đều tràn ngập niềm vui và hạnh phúc.",
            image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=90",
        },
    ],
    photos: [
        { id: 1, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=90", alt: "Ảnh cưới" },
        { id: 2, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90", alt: "Chân dung" },
        { id: 3, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=90", alt: "Kỷ niệm" },
        { id: 4, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=90", alt: "Hạnh phúc" },
        { id: 5, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=90", alt: "Hoàng hôn" },
        { id: 6, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=90", alt: "Tình yêu" },
    ],
    dressCode: {
        description:
            "Trang phục truyền thống Việt Nam. Quý khách nam mặc áo dài hoặc vest, quý khách nữ mặc áo dài.",
        note: "Vui lòng tránh mặc màu trắng hoặc đen.",
        palette: [
            { color: "#DC143C", name: "Đỏ Truyền Thống" },
            { color: "#FFD700", name: "Vàng Kim" },
            { color: "#8B0000", name: "Đỏ Thẫm" },
            { color: "#FFF8DC", name: "Kem" },
        ],
    },
};

export default function TraditionalDemo() {
    const navLinks = [
        { href: "#story", label: "Câu Chuyện" },
        { href: "#events", label: "Sự Kiện" },
        { href: "#gallery", label: "Thư Viện" },
        { href: "#rsvp", label: "Xác Nhận" },
    ];

    const weddingDateLabel = new Intl.DateTimeFormat("vi-VN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(TRADITIONAL_DATA.weddingDate));

    return (
        <>
            <div className="demo-banner traditional-banner">
                <div className="demo-banner-content">
                    <span>
                        🎨 Mẫu Demo: <strong>Truyền Thống Việt Nam</strong>
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

            <main className="traditional-page">
                <MusicPill src="/music/wedding-song.mp3" />

                <header className="traditional-nav">
                    <div className="traditional-nav-content">
                        <a href="#home" className="traditional-logo">
                            <span className="traditional-logo-text">Minh Tuấn ❤ Thanh Mai</span>
                        </a>

                        <nav className="traditional-nav-links">
                            {navLinks.map((link) => (
                                <a href={link.href} key={link.href}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </header>

                <section className="traditional-hero" id="home">
                    <div className="traditional-hero-pattern traditional-hero-pattern-left" />
                    <div className="traditional-hero-pattern traditional-hero-pattern-right" />

                    <div className="traditional-hero-content">
                        <div className="traditional-hero-text">
                            <p className="traditional-subtitle">Trân trọng kính mời</p>
                            <h1 className="traditional-names">
                                <span className="traditional-name-groom">{TRADITIONAL_DATA.couple.groom.name}</span>
                                <span className="traditional-heart">♥</span>
                                <span className="traditional-name-bride">{TRADITIONAL_DATA.couple.bride.name}</span>
                            </h1>
                            <p className="traditional-tagline">Hân hạnh được đón tiếp</p>

                            <div className="traditional-hero-details">
                                <div className="traditional-detail">
                                    <Calendar size={20} />
                                    <span>{weddingDateLabel}</span>
                                </div>
                                <div className="traditional-detail">
                                    <MapPin size={20} />
                                    <span>{TRADITIONAL_DATA.events[2].location}</span>
                                </div>
                            </div>

                            <div className="traditional-hero-actions">
                                <a href="#events" className="traditional-button">
                                    Xem Lịch Trình
                                </a>
                                <a href="#rsvp" className="traditional-button traditional-button-outline">
                                    Xác Nhận Tham Dự
                                </a>
                            </div>
                        </div>

                        <div className="traditional-hero-image">
                            <div className="traditional-image-frame">
                                <Image
                                    src={TRADITIONAL_DATA.couple.coverImage}
                                    alt="Minh Tuấn và Thanh Mai"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="traditional-countdown">
                        <CountdownBoard targetDate={TRADITIONAL_DATA.weddingDate} />
                    </div>
                </section>

                <section className="traditional-section" id="story">
                    <div className="traditional-section-header">
                        <div className="traditional-ornament">❀</div>
                        <h2>Câu Chuyện Tình Yêu</h2>
                        <p>Hành trình từ người dưng đến người thương</p>
                    </div>

                    <div className="traditional-timeline">
                        {TRADITIONAL_DATA.loveStory.map((moment, index) => (
                            <article key={moment.date} className="traditional-timeline-item">
                                <div className="traditional-timeline-marker">{index + 1}</div>
                                <div className="traditional-timeline-image">
                                    <Image src={moment.image} alt={moment.title} fill sizes="(max-width: 768px) 100vw, 40vw" style={{ objectFit: "cover" }} />
                                </div>
                                <div className="traditional-timeline-content">
                                    <span className="traditional-timeline-date">{moment.date}</span>
                                    <h3>{moment.title}</h3>
                                    <p>{moment.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="traditional-section traditional-section-red" id="events">
                    <div className="traditional-section-header">
                        <div className="traditional-ornament">❀</div>
                        <h2>Lịch Trình Sự Kiện</h2>
                        <p>Trân trọng kính mời quý khách tham dự</p>
                    </div>

                    <div className="traditional-events">
                        {TRADITIONAL_DATA.events.map((event) => (
                            <div key={event.title} className="traditional-event-card">
                                <span className="traditional-event-icon">{event.icon}</span>
                                <h3>{event.title}</h3>
                                <p className="traditional-event-time">{event.time}</p>
                                <p className="traditional-event-date">{event.date}</p>
                                <p className="traditional-event-location">{event.location}</p>
                                <a href={event.mapLink} target="_blank" rel="noreferrer" className="traditional-event-link">
                                    Xem Bản Đồ
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="traditional-section" id="gallery">
                    <div className="traditional-section-header">
                        <div className="traditional-ornament">❀</div>
                        <h2>Thư Viện Ảnh</h2>
                        <p>Những khoảnh khắc đáng nhớ</p>
                    </div>

                    <div className="traditional-gallery">
                        {TRADITIONAL_DATA.photos.map((photo) => (
                            <figure key={photo.id} className="traditional-gallery-item">
                                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                            </figure>
                        ))}
                    </div>
                </section>

                <section className="traditional-section traditional-section-red" id="dress">
                    <div className="traditional-section-header">
                        <div className="traditional-ornament">❀</div>
                        <h2>Trang Phục</h2>
                        <p>{TRADITIONAL_DATA.dressCode.description}</p>
                    </div>

                    <div className="traditional-palette">
                        {TRADITIONAL_DATA.dressCode.palette.map((item) => (
                            <div key={item.name} className="traditional-palette-item">
                                <div className="traditional-palette-color" style={{ backgroundColor: item.color }} />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>

                    <p className="traditional-dress-note">* {TRADITIONAL_DATA.dressCode.note}</p>
                </section>

                <section className="traditional-section" id="registry">
                    <div className="traditional-section-header">
                        <div className="traditional-ornament">❀</div>
                        <h2>Mừng Cưới</h2>
                        <p>Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi</p>
                    </div>
                    <GiftRegistryPanel />
                </section>

                <section className="traditional-section traditional-section-red" id="rsvp">
                    <RSVPLuxuryForm events={TRADITIONAL_DATA.events.map((e) => e.title)} />
                </section>

                <section className="traditional-section" id="guestbook">
                    <GuestbookWall />
                </section>

                <footer className="traditional-footer">
                    <div className="traditional-ornament">❀</div>
                    <p>Trân trọng cảm ơn</p>
                    <p className="traditional-footer-names">Minh Tuấn & Thanh Mai</p>
                    <p className="traditional-footer-date">15.11.2026</p>
                </footer>
            </main>

            <style jsx global>{`
        .traditional-banner {
          background: linear-gradient(135deg, #dc143c 0%, #8b0000 100%) !important;
        }

        .traditional-page {
          font-family: "Cormorant Garamond", "Times New Roman", serif;
          color: #2c1810;
          background: #fff8f0;
        }

        .traditional-nav {
          position: sticky;
          top: 0;
          background: rgba(255, 248, 240, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 2px solid #dc143c;
          z-index: 50;
        }

        .traditional-nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .traditional-logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #dc143c;
          text-decoration: none;
        }

        .traditional-nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .traditional-nav-links a {
          color: #2c1810;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 600;
          transition: color 0.2s;
        }

        .traditional-nav-links a:hover {
          color: #dc143c;
        }

        .traditional-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
          position: relative;
        }

        .traditional-hero-pattern {
          position: absolute;
          width: 200px;
          height: 200px;
          background-image: radial-gradient(circle, #dc143c 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.1;
        }

        .traditional-hero-pattern-left {
          top: 2rem;
          left: 0;
        }

        .traditional-hero-pattern-right {
          bottom: 2rem;
          right: 0;
        }

        .traditional-hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .traditional-subtitle {
          font-size: 1.125rem;
          color: #8b4513;
          margin: 0 0 1rem;
          font-style: italic;
        }

        .traditional-names {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin: 0 0 1.5rem;
          line-height: 1.3;
          color: #dc143c;
        }

        .traditional-name-groom,
        .traditional-name-bride {
          display: block;
        }

        .traditional-heart {
          display: block;
          text-align: center;
          margin: 0.5rem 0;
          font-size: 1.5rem;
        }

        .traditional-tagline {
          font-size: 1.125rem;
          color: #8b4513;
          margin: 0 0 2rem;
          font-style: italic;
        }

        .traditional-hero-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .traditional-detail {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #2c1810;
        }

        .traditional-hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .traditional-button {
          padding: 0.875rem 2rem;
          background: #dc143c;
          color: white;
          text-decoration: none;
          font-weight: 600;
          border-radius: 4px;
          transition: all 0.3s;
          border: 2px solid #dc143c;
        }

        .traditional-button:hover {
          background: #8b0000;
          border-color: #8b0000;
        }

        .traditional-button-outline {
          background: transparent;
          color: #dc143c;
        }

        .traditional-button-outline:hover {
          background: #dc143c;
          color: white;
        }

        .traditional-image-frame {
          position: relative;
          aspect-ratio: 3/4;
          border: 8px solid #dc143c;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(220, 20, 60, 0.2);
        }

        .traditional-countdown {
          margin-top: 3rem;
        }

        .traditional-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        .traditional-section-red {
          background: linear-gradient(135deg, #fff0f0 0%, #ffe8e8 100%);
          max-width: 100%;
        }

        .traditional-section-red > * {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .traditional-section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .traditional-ornament {
          font-size: 2rem;
          color: #dc143c;
          margin-bottom: 1rem;
        }

        .traditional-section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #dc143c;
        }

        .traditional-section-header p {
          color: #8b4513;
          font-size: 1.125rem;
          font-style: italic;
        }

        .traditional-timeline {
          display: grid;
          gap: 4rem;
        }

        .traditional-timeline-item {
          display: grid;
          grid-template-columns: auto 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .traditional-timeline-marker {
          width: 50px;
          height: 50px;
          background: #dc143c;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .traditional-timeline-image {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 4px;
          overflow: hidden;
          border: 4px solid #dc143c;
        }

        .traditional-timeline-date {
          display: block;
          font-size: 1rem;
          color: #dc143c;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .traditional-timeline-content h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #2c1810;
        }

        .traditional-timeline-content p {
          color: #5c4033;
          line-height: 1.8;
          font-size: 1.0625rem;
        }

        .traditional-events {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .traditional-event-card {
          text-align: center;
          padding: 2.5rem 2rem;
          background: white;
          border-radius: 8px;
          border: 3px solid #dc143c;
          box-shadow: 0 10px 20px rgba(220, 20, 60, 0.1);
        }

        .traditional-event-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }

        .traditional-event-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.75rem;
          color: #dc143c;
        }

        .traditional-event-time {
          color: #2c1810;
          font-weight: 700;
          margin: 0 0 0.25rem;
          font-size: 1.125rem;
        }

        .traditional-event-date {
          color: #8b4513;
          margin: 0 0 0.5rem;
        }

        .traditional-event-location {
          color: #5c4033;
          font-size: 0.9375rem;
          margin: 0 0 1rem;
        }

        .traditional-event-link {
          color: #dc143c;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .traditional-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .traditional-gallery-item {
          position: relative;
          aspect-ratio: 1;
          margin: 0;
          border-radius: 4px;
          overflow: hidden;
          border: 4px solid #dc143c;
        }

        .traditional-palette {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .traditional-palette-item {
          text-align: center;
        }

        .traditional-palette-color {
          width: 100px;
          height: 100px;
          border-radius: 4px;
          margin: 0 auto 1rem;
          border: 3px solid #dc143c;
        }

        .traditional-palette-item span {
          font-size: 1rem;
          color: #2c1810;
          font-weight: 600;
        }

        .traditional-dress-note {
          text-align: center;
          color: #dc143c;
          font-style: italic;
          font-weight: 600;
        }

        .traditional-footer {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #fff0f0 0%, #ffe8e8 100%);
        }

        .traditional-footer p {
          color: #8b4513;
          margin: 0 0 0.5rem;
          font-style: italic;
        }

        .traditional-footer-names {
          font-size: 2rem;
          color: #dc143c !important;
          font-weight: 700;
          margin: 1rem 0 !important;
          font-style: normal !important;
        }

        .traditional-footer-date {
          color: #2c1810 !important;
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .traditional-hero-content {
            grid-template-columns: 1fr;
          }

          .traditional-timeline-item {
            grid-template-columns: 1fr;
          }

          .traditional-timeline-marker {
            margin: 0 auto;
          }

          .traditional-nav-links {
            gap: 1.5rem;
          }

          .traditional-nav-links a {
            font-size: 0.875rem;
          }
        }
      `}</style>
        </>
    );
}
