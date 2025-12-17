import type { Metadata } from "next";
import { Noto_Serif_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sukiyaki-nikuniku.ac-fe.online"),
  title: {
    default: "Nikuniku 黒岩家壽喜燒專門店 | 正宗關西壽喜燒",
    template: "%s | Nikuniku 黒岩家"
  },
  description: "台南唯一正宗關西風壽喜燒，嚴選信州A5和牛與伊比利梅花豚，搭配獨家秘製醬汁與專人桌邊服務，為您呈現最道地的日式饗宴。",
  keywords: ["台南壽喜燒", "嘉義壽喜燒", "和牛", "聚餐餐廳", "黒岩家", "關西壽喜燒", "日式料理"],
  openGraph: {
    title: "Nikuniku 黒岩家壽喜燒專門店",
    description: "嚴選信州A5和牛與伊比利梅花豚，呈現最道地的日式饗宴。",
    url: "/",
    siteName: "Nikuniku 黒岩家",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/images/media-coverage-1.jpg", // Using an existing high-quality image as OG image for now
        width: 1200,
        height: 630,
        alt: "Nikuniku 黒岩家壽喜燒 A5和牛",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${notoSerif.variable} ${zenKaku.variable} antialiased bg-sumi-950 text-sumi-50`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
