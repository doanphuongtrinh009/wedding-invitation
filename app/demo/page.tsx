"use client";

import Link from "next/link";

import { demoRouteMeta } from "@/app/demo/_components/demo-routes";
import styles from "./demo-index.module.css";

export default function DemoLandingPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Bộ mẫu thương mại cho thị trường Việt Nam</p>
        <h1 className={styles.title}>5 Demo Website Thiệp Cưới</h1>
        <p className={styles.subtitle}>
          Mỗi demo theo một định hướng UI/UX khác nhau để bạn chọn hướng sản phẩm chủ lực, định giá và chiến lược bán template.
        </p>
      </header>

      <section className={styles.grid}>
        {demoRouteMeta.map((demo) => (
          <article key={demo.variant} className={styles.card}>
            <div className={styles.cardTop}>
              <div>
                <h2 className={styles.name}>{demo.name}</h2>
                <p className={styles.tagline}>{demo.tagline}</p>
              </div>
              <span className={styles.badge}>{demo.variant}</span>
            </div>

            <p className={styles.summary}>{demo.summary}</p>

            <div className={styles.footer}>
              <span className={styles.mood}>{demo.mood}</span>
              <Link href={demo.href} className={styles.link}>
                Xem demo
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
