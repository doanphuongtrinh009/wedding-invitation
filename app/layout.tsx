import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import { CONFIG } from "@/app/lib/data";
import { ThemeProvider } from "./components/ThemeContext";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: CONFIG.meta.title,
  description: CONFIG.meta.description,
  keywords: CONFIG.meta.seoKeywords.split(",").map(k => k.trim()),
  authors: [{ name: "Wedding Invitation" }],
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
    <html lang="vi" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={CONFIG.meta.themeColor} />
      </head>
      <body className="font-body antialiased bg-[#FDFBF7]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
