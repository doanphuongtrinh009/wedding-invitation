"use client";

import Link from "next/link";

import { demoRouteMeta, type DemoVariant } from "@/app/demo/_components/demo-routes";
import styles from "./demo-nav.module.css";

export function DemoRouteNav({ current }: { current: DemoVariant }) {
  return (
    <div className={styles.shell}>
      <Link href="/demo" className={styles.homeLink}>
        Tất cả mẫu
      </Link>

      <nav aria-label="Biến thể giao diện" className={styles.rail}>
        {demoRouteMeta.map((demo) => (
          <Link
            key={demo.variant}
            href={demo.href}
            className={demo.variant === current ? `${styles.link} ${styles.active}` : styles.link}
          >
            {demo.name}
          </Link>
        ))}
      </nav>

      <Link href="/" className={styles.siteLink}>
        Trang chính
      </Link>
    </div>
  );
}
