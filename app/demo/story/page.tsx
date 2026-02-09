"use client";

import Image from "next/image";
import { Clock3, Gift, MapPin, MoveDown } from "lucide-react";

import { MusicPill } from "@/app/components/shared/MusicPill";
import { demoContent, storyChapters } from "@/app/demo/_components/demo-content";
import { storyImageSet } from "@/app/demo/_components/image-moods";
import { DemoRouteNav } from "@/app/demo/_components/demo-nav";
import { FadeInBlock, FadeInSection, ParallaxBlock, StaggerGroup, StaggerItem } from "@/app/demo/_components/motion-primitives";
import styles from "./story.module.css";

const chaptersWithImages = storyChapters.map((chapter, index) => ({
  ...chapter,
  image: storyImageSet[index + 1]?.src ?? chapter.image,
  imageAlt: storyImageSet[index + 1]?.alt ?? chapter.title,
  imageBlurDataURL: storyImageSet[index + 1]?.blurDataURL,
  imagePosition: storyImageSet[index + 1]?.objectPosition,
}));
const coverImage = storyImageSet[0];
const storyGallery = storyImageSet;

export default function StoryDemoPage() {
  const dateLine = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(demoContent.weddingDate));

  return (
    <main className={styles.page}>
      <MusicPill src="/music/wedding-song.mp3" />
      <DemoRouteNav current="story" mode="story" />

      <section className={styles.cover} id="home">
        <ParallaxBlock className={styles.coverMedia} travel={42}>
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            priority
            placeholder="blur"
            blurDataURL={coverImage.blurDataURL}
            quality={92}
            sizes="100vw"
            style={coverImage.objectPosition ? { objectPosition: coverImage.objectPosition } : undefined}
          />
        </ParallaxBlock>

        <div className={styles.coverOverlay} />

        <StaggerGroup className={styles.coverCopy}>
          <StaggerItem>
            <p className={styles.kicker}>Kể Chuyện Tương Tác</p>
          </StaggerItem>
          <StaggerItem>
            <h1>
              Hành trình của {demoContent.groom.shortName} &amp; {demoContent.bride.shortName}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p>{demoContent.vows[0]}</p>
          </StaggerItem>
          <StaggerItem>
            <a href="#chapter-1">
              Bắt đầu câu chuyện <MoveDown size={14} />
            </a>
          </StaggerItem>
        </StaggerGroup>
      </section>

      <div className={styles.storyLayout}>
        <div className={styles.chapterStack}>
          {chaptersWithImages.map((chapter) => (
            <FadeInSection key={chapter.id} className={styles.chapter} id={chapter.id}>
              <ParallaxBlock className={styles.chapterMedia} travel={34}>
                <figure>
                  <Image
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    fill
                    placeholder={chapter.imageBlurDataURL ? "blur" : "empty"}
                    blurDataURL={chapter.imageBlurDataURL}
                    loading="lazy"
                    quality={88}
                    sizes="(max-width: 900px) 100vw, 46vw"
                    style={chapter.imagePosition ? { objectPosition: chapter.imagePosition } : undefined}
                  />
                </figure>
              </ParallaxBlock>

              <FadeInBlock className={styles.chapterCopy}>
                <p>{chapter.subtitle}</p>
                <h2>{chapter.title}</h2>
                <p>{chapter.body}</p>
              </FadeInBlock>
            </FadeInSection>
          ))}
        </div>
      </div>

      <FadeInSection className={styles.finale} id="schedule">
        <header>
          <p className={styles.kicker}>Lịch trình sự kiện</p>
          <h2>Timeline ngày cưới</h2>
          <p>{dateLine}</p>
        </header>

        <div className={styles.timeline}>
          {demoContent.events.map((event, index) => (
            <article key={event.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{event.title}</h3>
                <p>
                  <Clock3 size={14} /> {event.date} - {event.time}
                </p>
                <p>
                  <MapPin size={14} /> {event.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection className={styles.gallery} id="gallery">
        <header>
          <p className={styles.kicker}>Thư viện ảnh</p>
          <h2>Bộ ảnh storytelling</h2>
        </header>

        <div className={styles.galleryGrid}>
          {storyGallery.map((photo, index) => (
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
          <p className={styles.kicker}>Xác nhận tham dự</p>
          <h2>Xác nhận tham dự chương kết</h2>
          <p>{demoContent.signatureLine}</p>
        </div>

        <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
          <label>
            Họ tên
            <input type="text" name="name" autoComplete="name" placeholder="Nhập họ tên…" required />
          </label>
          <label>
            Số điện thoại
            <input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="Nhập số điện thoại…" required />
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
                <Image src={gift.qrImage} alt={`Mã QR ${gift.bankName}`} fill sizes="108px" />
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
          Cảm ơn bạn đã đọc hết câu chuyện tình yêu của {demoContent.groom.shortName} &amp; {demoContent.bride.shortName}
        </p>
        <a href="#home">Quay lại</a>
      </footer>
    </main>
  );
}
