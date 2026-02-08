"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { CountdownBoard } from "@/app/components/shared/CountdownBoard";
import { MusicPill } from "@/app/components/shared/MusicPill";
import { RSVPLuxuryForm } from "@/app/features/rsvp/RSVPForm";
import { GuestbookWall } from "@/app/features/guestbook/GuestbookWall";
import { GiftRegistryPanel } from "@/app/features/registry/GiftRegistryPanel";

// LUXURY VARIANT - Sang Trọng Vàng Kim
const LUXURY_DATA = {
    couple: {
        groom: { name: "Lê Hoàng Anh", shortName: "Hoàng Anh" },
        bride: { name: "Nguyễn Bảo Châu", shortName: "Bảo Châu" },
        coverImage: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=90",
    },
    weddingDate: "2026-09-20T16:00:00",
    events: [
        {
            title: "Lễ Thành Hôn",
            icon: "💒",
            time: "16:00 - 17:00",
            date: "20 tháng 9, 2026",
            location: "Nhà Thờ Đức Bà, Quận 1, TP.HCM",
            mapLink: "https://maps.google.com",
        },
        {
            title: "Tiệc Cocktail",
            icon: "🥂",
            time: "17:30 - 18:30",
            date: "20 tháng 9, 2026",
            location: "Sân Thượng Khách Sạn Rex",
            mapLink: "https://maps.google.com",
        },
        {
            title: "Tiệc Cưới",
            icon: "🎊",
            time: "19:00 - 23:00",
            date: "20 tháng 9, 2026",
            location: "Hội Trường Grand Ballroom, Khách Sạn Rex",
            mapLink: "https://maps.google.com",
        },
    ],
    loveStory: [
        {
            date: "Xuân 2023",
            title: "Duyên Phận Đầu Tiên",
            description:
                "Tại một buổi gala từ thiện ở Sài Gòn, ánh mắt chúng tôi gặp nhau qua đám đông. Cuộc trò chuyện về nghệ thuật đã kéo dài hàng giờ, và chúng tôi nhận ra mình là tri kỷ của nhau.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90",
        },
        {
            date: "Hè 2023",
            title: "Lời Cầu Hôn Ở Paris",
            description:
                "Dưới chân tháp Eiffel lúc hoàng hôn, Hoàng Anh đã quỳ gối cầu hôn. Với nước mắt hạnh phúc, Bảo Châu đã gật đầu đồng ý bước vào hành trình mãi mãi bên nhau.",
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=90",
        },
        {
            date: "Thu 2024",
            title: "Chuẩn Bị Cho Tương Lai",
            description:
                "Từ việc thử bánh cưới đến tham quan địa điểm tổ chức, mỗi khoảnh khắc đều khiến chúng tôi gần nhau hơn. Chúng tôi rất mong được chia sẻ niềm vui này cùng quý khách.",
            image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=90",
        },
    ],
    photos: [
        { id: 1, src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=90", alt: "Ảnh đính hôn" },
        { id: 2, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90", alt: "Chân dung cặp đôi" },
        { id: 3, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=90", alt: "Khoảnh khắc lãng mạn" },
        { id: 4, src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=90", alt: "Ảnh ngoại cảnh" },
        { id: 5, src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=90", alt: "Ảnh hoàng hôn" },
        { id: 6, src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=90", alt: "Kỷ niệm" },
    ],
    dressCode: {
        description:
            "Trang phục dạ hội sang trọng. Chúng tôi rất mong được thấy quý khách trong trang phục lịch lãm. Bảng màu của chúng tôi bao gồm vàng kim, đỏ burgundy và kem ngà.",
        note: "Vui lòng tránh mặc màu trắng hoặc kem ngà.",
        palette: [
            { color: "#D4AF37", name: "Vàng Cổ Điển" },
            { color: "#800020", name: "Đỏ Burgundy" },
            { color: "#2F2F2F", name: "Xám Than" },
            { color: "#F5F5DC", name: "Kem Ngà" },
        ],
    },
};

export default function LuxuryDemo() {
    const navLinks = [
        { href: "#story", label: "Câu Chuyện" },
        { href: "#events", label: "Sự Kiện" },
        { href: "#gallery", label: "Thư Viện" },
        { href: "#registry", label: "Mừng Cưới" },
        { href: "#rsvp", label: "Xác Nhận" },
    ];

    const weddingDateLabel = new Intl.DateTimeFormat("vi-VN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(LUXURY_DATA.weddingDate));

    return (
        <>
            {/* Demo Banner */}
            <div className="demo-banner">
                <div className="demo-banner-content">
                    <span>
                        🎨 Mẫu Demo: <strong>Sang Trọng Vàng Kim</strong>
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

            <main className="lux-page" data-variant="luxury">
                <MusicPill src="/music/wedding-song.mp3" />

                <header className="lux-nav-shell">
                    <div className="lux-nav">
                        <a href="#home" className="lux-brand">
                            <span className="lux-brand-kicker">Thiệp Cưới</span>
                            <span className="lux-brand-script">
                                {LUXURY_DATA.couple.groom.shortName} & {LUXURY_DATA.couple.bride.shortName}
                            </span>
                        </a>

                        <nav className="lux-nav-links" aria-label="Main navigation">
                            {navLinks.map((link) => (
                                <a href={link.href} key={link.href}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <a href="#rsvp" className="lux-nav-cta">
                            Xác Nhận
                        </a>
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
                            <p className="lux-kicker">Cùng Gia Đình Hai Bên</p>
                            <h1>Trân trọng kính mời</h1>
                            <p className="lux-hero-script">
                                {LUXURY_DATA.couple.groom.shortName} <span>&</span> {LUXURY_DATA.couple.bride.shortName}
                            </p>
                            <p className="lux-copy">
                                Hân hạnh được đón tiếp quý khách trong buổi tối trang trọng khi chúng tôi trao lời thề nguyện và bắt đầu hành trình làm vợ chồng.
                            </p>

                            <div className="lux-hero-meta">
                                <p>
                                    <CalendarDays size={14} /> {weddingDateLabel}
                                </p>
                                <p>
                                    <MapPin size={14} /> {LUXURY_DATA.events[0].location}
                                </p>
                            </div>

                            <div className="lux-hero-actions">
                                <a href="#events" className="lux-button">
                                    Xem Lịch Trình
                                </a>
                                <a href="#gallery" className="lux-button lux-button--ghost">
                                    Xem Thư Viện
                                </a>
                            </div>
                        </div>

                        <div className="lux-hero-media">
                            <figure className="lux-photo lux-photo--primary">
                                <Image
                                    src={LUXURY_DATA.couple.coverImage}
                                    alt={`${LUXURY_DATA.couple.groom.shortName} and ${LUXURY_DATA.couple.bride.shortName}`}
                                    fill
                                    sizes="(max-width: 980px) 90vw, 42vw"
                                    priority
                                />
                            </figure>

                            <figure className="lux-photo lux-photo--secondary">
                                <Image src={LUXURY_DATA.photos[0].src} alt="Couple moment" fill sizes="(max-width: 980px) 35vw, 16vw" />
                            </figure>

                            <figure className="lux-photo lux-photo--tertiary">
                                <Image src={LUXURY_DATA.photos[1].src} alt="Couple moment" fill sizes="(max-width: 980px) 38vw, 18vw" />
                            </figure>
                        </div>
                    </div>

                    <div className="lux-countdown-wrap">
                        <CountdownBoard targetDate={LUXURY_DATA.weddingDate} />
                    </div>
                </section>

                <section className="lux-section" id="story">
                    <div className="lux-section-head">
                        <p className="lux-kicker">Our Journey</p>
                        <h2 className="lux-title">A Love Story Written in the Stars</h2>
                        <p className="lux-copy">
                            From a chance meeting to a lifetime commitment, here's how our love story unfolded.
                        </p>
                    </div>

                    <div className="lux-story-layout">
                        <figure className="lux-story-hero-photo">
                            <Image src={LUXURY_DATA.loveStory[0].image} alt="Our story" fill sizes="(max-width: 980px) 92vw, 44vw" />
                        </figure>

                        <div className="lux-story-cards">
                            {LUXURY_DATA.loveStory.map((moment) => (
                                <article key={moment.date} className="lux-story-card">
                                    <p className="lux-story-date">{moment.date}</p>
                                    <h3>{moment.title}</h3>
                                    <p>{moment.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="lux-section" id="events">
                    <div className="lux-section-head">
                        <p className="lux-kicker">Celebration</p>
                        <h2 className="lux-title">Events & Timeline</h2>
                    </div>

                    <div className="lux-schedule-layout">
                        <ol className="lux-event-list">
                            {LUXURY_DATA.events.map((event, index) => (
                                <li className="lux-event-item" key={event.title}>
                                    <span className="lux-event-index">{String(index + 1).padStart(2, "0")}</span>
                                    <article>
                                        <h3>{event.title}</h3>
                                        <p className="lux-event-time">
                                            {event.date} • {event.time}
                                        </p>
                                        <p>{event.location}</p>
                                        <a href={event.mapLink} target="_blank" rel="noreferrer">
                                            Get Directions
                                        </a>
                                    </article>
                                </li>
                            ))}
                        </ol>

                        <div className="lux-map-box">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.9772!3d40.7614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ebe8836!2sThe%20Plaza%20Hotel!5e0!3m2!1sen!2sus!4v1706520000000!5m2!1sen!2sus"
                                title="Wedding venue map"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />

                            <div className="lux-map-meta">
                                <p>
                                    <strong>Valet Parking:</strong> Complimentary valet service available at the main entrance.
                                </p>
                                <a href={LUXURY_DATA.events[0].mapLink} target="_blank" rel="noreferrer">
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="lux-section" id="gallery">
                    <div className="lux-section-head">
                        <p className="lux-kicker">Memories</p>
                        <h2 className="lux-title">Our Engagement Gallery</h2>
                    </div>

                    <div className="lux-gallery-grid">
                        {LUXURY_DATA.photos.map((photo, index) => (
                            <figure className={`lux-gallery-item lux-gallery-item--${(index % 8) + 1}`} key={photo.id}>
                                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 980px) 92vw, 28vw" />
                            </figure>
                        ))}
                    </div>
                </section>

                <section className="lux-section lux-split-section" id="dress-code">
                    <article className="lux-dress-card">
                        <p className="lux-kicker">Attire</p>
                        <h2 className="lux-title">Dress Code</h2>
                        <p className="lux-copy">{LUXURY_DATA.dressCode.description}</p>

                        <div className="lux-palette-grid">
                            {LUXURY_DATA.dressCode.palette.map((item) => (
                                <div className="lux-palette-item" key={item.name}>
                                    <span style={{ backgroundColor: item.color }} />
                                    <p>{item.name}</p>
                                </div>
                            ))}
                        </div>

                        <p className="lux-dress-note">* {LUXURY_DATA.dressCode.note}</p>
                    </article>

                    <article className="lux-faq-card">
                        <p className="lux-kicker">FAQ</p>
                        <h2 className="lux-title">Frequently Asked</h2>

                        <div className="lux-faq-list">
                            <details>
                                <summary>What is the dress code?</summary>
                                <p>Black tie optional. Formal evening attire is requested.</p>
                            </details>
                            <details>
                                <summary>Will transportation be provided?</summary>
                                <p>Complimentary shuttle service from select hotels. Details in your invitation.</p>
                            </details>
                            <details>
                                <summary>Can I bring a guest?</summary>
                                <p>Please refer to your invitation for guest allowance.</p>
                            </details>
                        </div>
                    </article>
                </section>

                <section className="lux-section" id="registry">
                    <div className="lux-section-head">
                        <p className="lux-kicker">Gifts</p>
                        <h2 className="lux-title">Registry & Gifts</h2>
                        <p className="lux-copy">
                            Your presence is the greatest gift. For those who wish to honor us, we've registered at the following.
                        </p>
                    </div>

                    <GiftRegistryPanel />
                </section>

                <section className="lux-section" id="rsvp">
                    <RSVPLuxuryForm events={LUXURY_DATA.events.map((e) => e.title)} />
                </section>

                <section className="lux-section" id="guestbook">
                    <GuestbookWall />
                </section>

                <footer className="lux-footer">
                    <p>With love and gratitude</p>
                    <p className="lux-footer-script">
                        {LUXURY_DATA.couple.groom.shortName} & {LUXURY_DATA.couple.bride.shortName}
                    </p>
                    <p style={{ marginTop: "1rem", fontSize: "0.875rem", opacity: 0.7 }}>September 20, 2026</p>
                </footer>
            </main>

            <style jsx global>{`
        .demo-banner {
          position: sticky;
          top: 0;
          z-index: 100;
          background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
          color: white;
          padding: 0.75rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .demo-banner-content {
          max-width: 1260px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .demo-banner-content span {
          font-size: 0.875rem;
        }

        .demo-banner-content strong {
          font-weight: 700;
        }

        .demo-banner-actions {
          display: flex;
          gap: 1.5rem;
        }

        .demo-banner-link {
          color: white;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .demo-banner-link:hover {
          opacity: 0.8;
        }
      `}</style>
        </>
    );
}
