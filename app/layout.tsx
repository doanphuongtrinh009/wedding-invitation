import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Manrope, Playfair_Display, Dancing_Script } from "next/font/google";
import "./styles/globals.css";

import { CONFIG } from "@/app/utils/data";
import { ThemeProvider } from "./components/layout/ThemeProvider";

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

export const metadata: Metadata = {
  title: CONFIG.meta.title,
  description: CONFIG.meta.description,
  metadataBase: new URL("http://localhost:3000"),
  keywords: CONFIG.meta.seoKeywords.split(",").map(k => k.trim()),
  authors: [{ name: "Thiệp Cưới" }],
  openGraph: {
    title: CONFIG.meta.title,
    description: CONFIG.meta.description,
    type: "website",
    locale: "vi_VN",
    images: [CONFIG.couple.coverImage],
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
        <meta name="theme-color" content={CONFIG.meta.themeColor} />
      </head>
      <body className="font-body antialiased text-[var(--foreground)]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
