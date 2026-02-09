"use client";

import Image from "next/image";
import { ArrowUpRight, CalendarDays, Gift, MapPin, Sparkles } from "lucide-react";

import { MusicPill } from "@/app/components/shared/MusicPill";
import { demoContent } from "@/app/demo/_components/demo-content";
import { editorialImageSet } from "@/app/demo/_components/image-moods";
import { DemoRouteNav } from "@/app/demo/_components/demo-nav";
import {
  FadeInBlock,
  FadeInSection,
  ParallaxBlock,
  StaggerGroup,
  StaggerItem,
} from "@/app/demo/_components/motion-primitives";
import styles from "./editorial.module.css";

const heroImage = editorialImageSet[0];
const heroInsetImage = editorialImageSet[1];
const editorialGallery = editorialImageSet;
const editorialMoments = demoContent.storyMoments.slice(0, 3);

export default function EditorialDemoPage() {
  const weddingDateLabel = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(demoContent.weddingDate));

  return (
    <main className={styles.page}>
      <MusicPill src="/music/wedding-song.mp3" />
      <DemoRouteNav current="editorial" />

      <section className={styles.hero} id="home">
        <ParallaxBlock className={styles.heroImageWrap} travel={52}>
          <figure className={styles.heroImageFrame}>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={heroImage.blurDataURL}
              quality={92}
              sizes="(max-width: 900px) 100vw, 52vw"
              style={heroImage.objectPosition ? { objectPosition: heroImage.objectPosition } : undefined}
            />
          </figure>

          <FadeInBlock className={styles.heroInset}>
            <figure>
              <Image
                src={heroInsetImage.src}
                alt={heroInsetImage.alt}
                fill
                placeholder="blur"
                blurDataURL={heroInsetImage.blurDataURL}
                loading="lazy"
                quality={90}
                sizes="(max-width: 900px) 56vw, 22vw"
                style={heroInsetImage.objectPosition ? { objectPosition: heroInsetImage.objectPosition } : undefined}
              />
            </figure>
            <p>
              <Sparkles size={14} /> Bố cục theo tinh thần tạp chí cưới
            </p>
          </FadeInBlock>
        </ParallaxBlock>

        <StaggerGroup className={styles.heroCopy}>
          <StaggerItem>
            <p className={styles.eyebrow}>Editorial Cao Cấp</p>
          </StaggerItem>
          <StaggerItem>
            <h1 className={styles.title}>
              {demoContent.groom.shortName} &amp; {demoContent.bride.shortName}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className={styles.lead}>{demoContent.invitationLine}</p>
          </StaggerItem>
          <StaggerItem>
            <div className={styles.metaRow}>
              <p>
                <CalendarDays size={16} /> {weddingDateLabel}
              </p>
              <p>
                <MapPin size={16} /> {demoContent.location}
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className={styles.heroActions}>
              <a href="#schedule">Lịch trình</a>
              <a href="#rsvp">Xác nhận</a>
              <a href="#gift">Mừng cưới</a>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <FadeInSection className={styles.feature} id="story">
        <div className={styles.featureBody}>
          <p className={styles.featureLabel}>Story Timeline</p>
          <h2>
            Hành trình tình yêu
            <br /> kể bằng nhịp điệu biên tập
          </h2>
          <p>
            Từng mốc thời gian được đặt trong khoảng trắng rộng, nhấn mạnh những khoảnh khắc quan trọng và giữ nhịp đọc nhẹ nhàng
            như một ấn phẩm cao cấp.
          </p>
          <blockquote>&ldquo;{demoContent.vows[0]}&rdquo;</blockquote>
        </div>

        <div className={styles.featureRail}>
          {editorialMoments.map((moment) => (
            <article key={moment.id}>
              <p>{moment.date}</p>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.schedule} id="schedule">
        <header>
          <p className={styles.featureLabel}>Lịch trình sự kiện</p>
          <h2>Lịch trình ngày cưới</h2>
        </header>

        <div className={styles.scheduleGrid}>
          <ol>
            {demoContent.events.map((event, index) => (
              <li key={event.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                  <p>{event.location}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside>
            <h3>Ghi chú cho khách mời</h3>
            <p>{demoContent.vows[1]}</p>
            <a href={demoContent.events[0]?.mapLink ?? "https://maps.google.com"} target="_blank" rel="noreferrer">
              Mở bản đồ <ArrowUpRight size={14} />
            </a>
          </aside>
        </div>
      </FadeInSection>

      <FadeInSection className={styles.gallery} id="gallery">
        <header>
          <p className={styles.featureLabel}>Thư viện ảnh</p>
          <h2>Bộ ảnh editorial</h2>
        </header>

        <div className={styles.galleryGrid}>
          {editorialGallery.map((photo, index) => (
            <figure key={photo.id} className={index === 0 ? styles.large : ""}>
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
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.rsvp} id="rsvp">
        <div>
          <p className={styles.featureLabel}>Xác nhận tham dự</p>
          <h2>Xác nhận tham dự</h2>
          <p>{demoContent.signatureLine}</p>
        </div>

        <form onSubmit={(event) => event.preventDefault()} className={styles.form} aria-label="Biểu mẫu RSVP">
          <label>
            Họ tên
            <input type="text" name="name" placeholder="Nhập họ tên" required />
          </label>
          <label>
            Số điện thoại
            <input type="tel" name="phone" placeholder="Nhập số điện thoại" required />
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
          <p className={styles.featureLabel}>Mừng cưới</p>
          <h2>Thông tin mừng cưới</h2>
        </header>

        <div className={styles.giftGrid}>
          {demoContent.gifts.map((gift) => (
            <article key={gift.id}>
              <div className={styles.giftHead}>
                <Gift size={16} />
                <p>{gift.sideLabel}</p>
              </div>
              <div className={styles.qrWrap}>
                <Image src={gift.qrImage} alt={`Mã QR ${gift.bankName}`} fill sizes="120px" />
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
          Trân trọng cảm ơn sự hiện diện của bạn trong ngày vui của {demoContent.groom.shortName} &amp; {demoContent.bride.shortName}
        </p>
        <a href="#home">Quay lại đầu trang</a>
      </footer>
    </main>
  );
}
