"use client";

import Image from "next/image";
import { Gift, Heart, MapPin, Sparkles } from "lucide-react";

import { MusicPill } from "@/app/components/shared/MusicPill";
import { demoContent } from "@/app/demo/_components/demo-content";
import { romanticImageSet } from "@/app/demo/_components/image-moods";
import { DemoRouteNav } from "@/app/demo/_components/demo-nav";
import { FadeInSection, ParallaxBlock, StaggerGroup, StaggerItem } from "@/app/demo/_components/motion-primitives";
import styles from "./romantic.module.css";

const heroImage = romanticImageSet[0];
const romanticGallery = romanticImageSet;
const romanticMoments = demoContent.storyMoments.slice(0, 4);

export default function RomanticDemoPage() {
  const dateLine = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(demoContent.weddingDate));

  return (
    <main className={styles.page}>
      <MusicPill src="/music/wedding-song.mp3" />
      <DemoRouteNav current="romantic" mode="classic" />

      <section className={styles.hero} id="home">
        <div className={styles.petalAura} aria-hidden />
        <div className={styles.petalAuraSecond} aria-hidden />

        <StaggerGroup className={styles.invitationCard}>
          <StaggerItem>
            <p className={styles.eyebrow}>Lãng Mạn Floral</p>
          </StaggerItem>
          <StaggerItem>
            <h1>
              {demoContent.groom.shortName}
              <span>&amp;</span>
              {demoContent.bride.shortName}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className={styles.subtitle}>Thiệp mời cưới phong cách tiệc vườn</p>
          </StaggerItem>
          <StaggerItem>
            <p className={styles.dateLine}>{dateLine}</p>
          </StaggerItem>
          <StaggerItem>
            <p className={styles.metaLine}>
              <MapPin size={16} /> {demoContent.location}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className={styles.actions}>
              <a href="#moments">Câu chuyện</a>
              <a href="#rsvp">Xác nhận</a>
              <a href="#gift">Mừng cưới</a>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <ParallaxBlock className={styles.heroPhotoWrap} travel={34}>
          <figure className={styles.heroPhoto}>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={heroImage.blurDataURL}
              quality={92}
              sizes="(max-width: 900px) 60vw, 34vw"
              style={heroImage.objectPosition ? { objectPosition: heroImage.objectPosition } : undefined}
            />
          </figure>
        </ParallaxBlock>
      </section>

      <FadeInSection className={styles.events} id="events">
        <header>
          <p className={styles.eyebrow}>Lịch trình sự kiện</p>
          <h2>Lịch trình tiệc cưới</h2>
        </header>

        <div className={styles.eventGrid}>
          {demoContent.events.map((event) => (
            <article key={event.id}>
              <span>
                <Heart size={14} />
              </span>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>{event.location}</p>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.moments} id="moments">
        <header>
          <p className={styles.eyebrow}>Hành trình tình yêu</p>
          <h2>Những khoảnh khắc dễ thương của chúng tôi</h2>
        </header>

        <div className={styles.momentList}>
          {romanticMoments.map((moment) => (
            <article key={moment.id}>
              <p>{moment.date}</p>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.gallery} id="gallery">
        <header>
          <p className={styles.eyebrow}>Thư viện ảnh</p>
          <h2>Bộ ảnh floral romance</h2>
        </header>

        <div className={styles.galleryDeck}>
          {romanticGallery.map((photo, index) => (
            <figure key={photo.id} style={{ transform: `rotate(${index % 2 === 0 ? -1.6 : 1.6}deg)` }}>
              <div className={styles.photoFrame}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={photo.blurDataURL}
                  loading="lazy"
                  quality={88}
                  sizes="(max-width: 900px) 100vw, 30vw"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                />
              </div>
              <figcaption>
                <Sparkles size={12} /> Khoảnh khắc #{index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.rsvp} id="rsvp">
        <div>
          <p className={styles.eyebrow}>Xác nhận tham dự</p>
          <h2>Xác nhận để chúng tôi đón tiếp chu đáo</h2>
          <p>{demoContent.vows[2]}</p>
        </div>

        <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
          <label>
            Họ tên khách mời
            <input type="text" name="name" autoComplete="name" placeholder="Nhập họ tên…" required />
          </label>
          <label>
            Số lượng tham dự
            <input type="number" name="guestCount" min={1} max={6} inputMode="numeric" defaultValue={1} />
          </label>
          <label>
            Lời nhắn gửi
            <textarea name="message" rows={3} placeholder="Gửi lời chúc ngắn…" />
          </label>
          <button type="submit">Gửi xác nhận</button>
        </form>
      </FadeInSection>

      <FadeInSection className={styles.gifts} id="gift">
        <header>
          <p className={styles.eyebrow}>Mừng cưới</p>
          <h2>Thông tin gửi tặng</h2>
        </header>

        <div className={styles.giftGrid}>
          {demoContent.gifts.map((gift) => (
            <article key={gift.id}>
              <div className={styles.giftHead}>
                <Gift size={16} />
                <p>{gift.sideLabel}</p>
              </div>
              <div className={styles.qrWrap}>
                <Image src={gift.qrImage} alt={`Mã QR ${gift.bankName}`} fill sizes="116px" />
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
          Cảm ơn bạn đã dành thời gian chung vui cùng {demoContent.groom.shortName} &amp; {demoContent.bride.shortName}
        </p>
        <a href="#home">Về đầu trang</a>
      </footer>
    </main>
  );
}
