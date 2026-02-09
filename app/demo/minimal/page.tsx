"use client";

import Image from "next/image";
import { ArrowRight, Gift } from "lucide-react";

import { MusicPill } from "@/app/components/shared/MusicPill";
import { demoContent } from "@/app/demo/_components/demo-content";
import { minimalImageSet } from "@/app/demo/_components/image-moods";
import { DemoRouteNav } from "@/app/demo/_components/demo-nav";
import { FadeInSection, ParallaxBlock, StaggerGroup, StaggerItem } from "@/app/demo/_components/motion-primitives";
import styles from "./minimal.module.css";

const heroImage = minimalImageSet[0];
const minimalGallery = minimalImageSet.slice(1);

export default function MinimalDemoPage() {
  const dateLine = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(demoContent.weddingDate));

  return (
    <main className={styles.page}>
      <MusicPill src="/music/wedding-song.mp3" />
      <DemoRouteNav current="minimal" mode="thin" />

      <section className={styles.hero} id="home">
        <div className={styles.heroVisual} aria-hidden>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            placeholder="blur"
            blurDataURL={heroImage.blurDataURL}
            quality={92}
            sizes="(max-width: 900px) 94vw, 60vw"
            style={heroImage.objectPosition ? { objectPosition: heroImage.objectPosition } : undefined}
          />
        </div>

        <StaggerGroup className={styles.heroStack}>
          <StaggerItem>
            <p className={styles.kicker}>Tối Giản Hiện Đại</p>
          </StaggerItem>
          <StaggerItem>
            <h1>
              {demoContent.groom.shortName}
              <span>và</span>
              {demoContent.bride.shortName}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className={styles.subline}>{dateLine}</p>
          </StaggerItem>
          <StaggerItem>
            <p className={styles.copy}>{demoContent.invitationLine}</p>
          </StaggerItem>
          <StaggerItem>
            <div className={styles.heroActions}>
              <a href="#timeline" className={styles.ghostButton}>
                Khám phá ngày cưới <ArrowRight size={14} />
              </a>
              <a href="#gift" className={styles.ghostButton}>
                Mừng cưới
              </a>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <FadeInSection className={styles.schedule} id="schedule">
        <header>
          <p className={styles.kicker}>Lịch trình sự kiện</p>
          <h2>Thông tin cần biết</h2>
        </header>

        <div className={styles.scheduleGrid}>
          {demoContent.events.map((event) => (
            <article key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>{event.location}</p>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.timeline} id="timeline">
        <header>
          <p className={styles.kicker}>Hành trình tình yêu</p>
          <h2>Nhịp kể chuyện tối giản</h2>
        </header>

        <div className={styles.timelineRows}>
          {demoContent.storyMoments.map((moment) => (
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
          <p className={styles.kicker}>Thư viện ảnh</p>
          <h2>Bộ ảnh cặp đôi hiện đại</h2>
        </header>

        <div className={styles.galleryGrid}>
          {minimalGallery.map((photo) => (
            <ParallaxBlock key={photo.id} className={styles.galleryItem} travel={22}>
              <figure>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={photo.blurDataURL}
                  loading="lazy"
                  quality={88}
                  sizes="(max-width: 900px) 100vw, 45vw"
                  style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                />
              </figure>
            </ParallaxBlock>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.rsvp} id="rsvp">
        <header>
          <p className={styles.kicker}>Xác nhận tham dự</p>
          <h2>Mẫu xác nhận tối giản</h2>
        </header>

        <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
          <label>
            Họ tên
            <input type="text" name="name" autoComplete="name" placeholder="Nhập họ tên…" required />
          </label>
          <label>
            Số điện thoại
            <input type="tel" name="phone" autoComplete="tel" placeholder="Nhập số điện thoại…" required />
          </label>
          <label>
            Trạng thái tham dự
            <select name="attendance" defaultValue="yes">
              <option value="yes">Tôi sẽ tham dự</option>
              <option value="no">Tôi không tham dự được</option>
              <option value="maybe">Tôi sẽ xác nhận sau</option>
            </select>
          </label>
          <button type="submit">Gửi xác nhận</button>
        </form>
      </FadeInSection>

      <FadeInSection className={styles.gifts} id="gift">
        <header>
          <p className={styles.kicker}>Mừng cưới</p>
          <h2>Thông tin tài khoản</h2>
        </header>

        <div className={styles.giftGrid}>
          {demoContent.gifts.map((gift) => (
            <article key={gift.id}>
              <div className={styles.giftHead}>
                <Gift size={15} />
                <p>{gift.sideLabel}</p>
              </div>
              <div className={styles.qrWrap}>
                <Image src={gift.qrImage} alt={`Mã QR ${gift.bankName}`} fill sizes="100px" />
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
          Cảm ơn bạn đã cùng chúng tôi đánh dấu ngày cưới - {demoContent.groom.shortName} &amp; {demoContent.bride.shortName}
        </p>
        <a href="#home">Lên đầu trang</a>
      </footer>
    </main>
  );
}
