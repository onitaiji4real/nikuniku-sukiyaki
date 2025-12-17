import type { Metadata } from "next";
import { Noto_Serif_JP, Zen_Kaku_Gothic_New } from "next/font/google";
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
  title: "Nikuniku 黒岩家壽喜燒專門店 | 正宗關西壽喜燒",
  description: "台南唯一正宗關西風壽喜燒，嚴選信州A5和牛與伊比利梅花豚，搭配獨家秘製醬汁與專人桌邊服務，為您呈現最道地的日式饗宴。",
  icons: {
    icon: "/favicon.png", // Using static file in public
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
        {children}
      </body>
    </html>
  );
}
