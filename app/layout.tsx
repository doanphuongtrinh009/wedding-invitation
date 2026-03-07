import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Cormorant_Garamond, Great_Vibes, Manrope, Playfair_Display, Dancing_Script } from "next/font/google";
import "./styles/globals.css";

import { CONFIG } from "@/app/lib/data";
import { themes, type Theme } from "@/app/themes/theme-tokens";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin", "vietnamese"],
  variable: "--font-script",
  weight: ["400"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  variable: "--font-dancing",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

function resolveMetadataBase() {
  const siteUrl = CONFIG.meta.siteUrl?.trim();

  if (!siteUrl) {
    return undefined;
  }

  try {
    return new URL(siteUrl);
  } catch {
    return undefined;
  }
}

const metadataBase = resolveMetadataBase();
const activeTheme = themes[(CONFIG.meta.theme as Theme) || "luxury"] ?? themes.luxury;
const openGraphImages = metadataBase ? [CONFIG.couple.coverImage] : undefined;
const themeStyle = {
  "--background": activeTheme.background,
  "--foreground": activeTheme.text,
  "--color-primary": activeTheme.primary,
  "--color-accent": activeTheme.accent,
  "--color-text": activeTheme.text,
  "--bg-image": activeTheme.bgImage,
} as CSSProperties;

export const metadata: Metadata = {
  title: CONFIG.meta.title,
  description: CONFIG.meta.description,
  metadataBase,
  keywords: CONFIG.meta.seoKeywords.split(",").map((keyword) => keyword.trim()).filter(Boolean),
  authors: [{ name: `${CONFIG.couple.groom.shortName} & ${CONFIG.couple.bride.shortName}` }],
  alternates: metadataBase ? { canonical: "/" } : undefined,
  openGraph: {
    title: CONFIG.meta.title,
    description: CONFIG.meta.description,
    type: "website",
    locale: "vi_VN",
    url: metadataBase ? "/" : undefined,
    images: openGraphImages,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${manrope.variable} ${greatVibes.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={activeTheme.primary} />
      </head>
      <body className="font-body antialiased text-[var(--foreground)]" style={themeStyle}>
        {children}
      </body>
    </html>
  );
}
