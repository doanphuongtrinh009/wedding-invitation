"use client";

import Image from "next/image";
import { CalendarDays, Diamond, Gift, MapPin, ShieldCheck } from "lucide-react";

import { MusicPill } from "@/app/components/shared/MusicPill";
import { demoContent } from "@/app/demo/_components/demo-content";
import { luxuryImageSet } from "@/app/demo/_components/image-moods";
import { DemoRouteNav } from "@/app/demo/_components/demo-nav";
import {
  FadeInBlock,
  FadeInSection,
  ParallaxBlock,
  StaggerGroup,
  StaggerItem,
} from "@/app/demo/_components/motion-primitives";
import styles from "./luxury.module.css";

const heroImage = luxuryImageSet[0];
const luxuryGallery = luxuryImageSet;

export default function DarkLuxuryDemoPage() {
  const dateLine = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(demoContent.weddingDate));

  return (
    <main className={styles.page}>
      <MusicPill src="/music/wedding-song.mp3" />
      <DemoRouteNav current="luxury" mode="overlay" />

      <section className={styles.hero} id="home">
        <ParallaxBlock className={styles.heroMedia} travel={60}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            placeholder="blur"
            blurDataURL={heroImage.blurDataURL}
            quality={92}
            sizes="100vw"
            style={heroImage.objectPosition ? { objectPosition: heroImage.objectPosition } : undefined}
          />
        </ParallaxBlock>

        <div className={styles.overlay} />

        <StaggerGroup className={styles.heroCopy}>
          <StaggerItem>
            <p className={styles.kicker}>Luxury Bóng Đêm</p>
          </StaggerItem>
          <StaggerItem>
            <h1>
              Dạ tiệc của
              <span>{demoContent.groom.shortName} &amp; {demoContent.bride.shortName}</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className={styles.copy}>{demoContent.vows[1]}</p>
          </StaggerItem>
          <StaggerItem>
            <div className={styles.meta}>
              <p>
                <CalendarDays size={16} /> {dateLine}
              </p>
              <p>
                <MapPin size={16} /> {demoContent.location}
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className={styles.heroActions}>
              <a href="#events">Lịch trình</a>
              <a href="#rsvp">Xác nhận</a>
              <a href="#gift">Mừng cưới</a>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <FadeInSection className={styles.gallery} id="gallery">
        <header>
          <p className={styles.kicker}>Thư viện ảnh</p>
          <h2>Bộ ảnh dark luxury</h2>
        </header>

        <div className={styles.galleryGrid}>
          {luxuryGallery.map((photo, index) => (
            <FadeInBlock key={photo.id} className={index === 0 ? styles.heroTile : ""} delay={index * 0.04}>
              <figure>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={photo.blurDataURL}
                  loading="lazy"
                  quality={88}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                />
              </figure>
            </FadeInBlock>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.houseNotes} id="story">
        <div className={styles.noteLead}>
          <p className={styles.kicker}>Hành trình tình yêu</p>
          <h2>Từng chương được kể như một buổi ra mắt couture</h2>
        </div>

        <div className={styles.noteCards}>
          {demoContent.storyMoments.slice(0, 3).map((moment) => (
            <article key={moment.id}>
              <p>{moment.date}</p>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.events} id="events">
        <header>
          <p className={styles.kicker}>Lịch trình sự kiện</p>
          <h2>Lịch trình buổi tối</h2>
        </header>

        <div className={styles.eventGrid}>
          {demoContent.events.map((event) => (
            <article key={event.id}>
              <span>
                <Diamond size={14} />
              </span>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>{event.location}</p>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.rsvp} id="rsvp">
        <div>
          <p className={styles.kicker}>Xác nhận tham dự</p>
          <h2>Xác nhận tham dự premium</h2>
          <p>{demoContent.signatureLine}</p>
        </div>

        <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
          <label>
            Tên trên thiệp mời
            <input type="text" name="name" autoComplete="name" placeholder="Nhập họ tên…" required />
          </label>
          <label>
            Email xác nhận
            <input type="email" name="email" autoComplete="email" placeholder="name@email.com" required />
          </label>
          <label>
            Số lượng khách
            <select name="guestCount" defaultValue="2">
              <option value="1">1 khách</option>
              <option value="2">2 khách</option>
              <option value="3">3 khách</option>
            </select>
          </label>
          <button type="submit">
            <ShieldCheck size={14} /> Gửi xác nhận
          </button>
        </form>
      </FadeInSection>

      <FadeInSection className={styles.gifts} id="gift">
        <header>
          <p className={styles.kicker}>Mừng cưới</p>
          <h2>Thông tin mừng cưới</h2>
        </header>

        <div className={styles.giftGrid}>
          {demoContent.gifts.map((gift) => (
            <article key={gift.id}>
              <div className={styles.giftHead}>
                <Gift size={15} />
                <p>{gift.sideLabel}</p>
              </div>
              <div className={styles.qrWrap}>
                <Image src={gift.qrImage} alt={`Mã QR ${gift.bankName}`} fill sizes="110px" />
              </div>
              <h3>{gift.bankName}</h3>
              <p>{gift.accountName}</p>
              <p>{gift.accountNumber}</p>
              <p>{gift.branch}</p>
            </article>
          ))}
        </div>
      </FadeInSection>

      <footer className={styles.footer}>
        <p>
          Cảm ơn bạn đã đồng hành cùng đêm tiệc của {demoContent.groom.shortName} &amp; {demoContent.bride.shortName}
        </p>
        <a href="#home">Về đầu trang</a>
      </footer>
    </main>
  );
}
