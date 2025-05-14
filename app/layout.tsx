import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "이제 스튜디오 | Now Studio",
  description: "당신의 '지금'을 함께 완성하는 영상 스튜디오",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "이제 스튜디오",
    "영상제작",
    "브랜드 영상",
    "유튜브 영상 제작",
    "Now Studio",
  ],
  authors: [{ name: "Now Studio" }],
  robots: "index, follow",
  verification: {
    google: "구글코드", // 실제 구글 코드로 바꿔 넣기
    other: {
      naver: "7eb58d30ef45ec613b178946184c37a629796852",
    },
  },
  openGraph: {
    title: "이제 스튜디오 | Now Studio",
    description: "오늘의 이야기를 내일의 가치로. 영상 전문 제작 스튜디오",
    url: "https://now-studio.kr",
    siteName: "Now Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Now Studio 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이제 스튜디오 | Now Studio",
    description: "당신의 '지금'을 함께 완성하는 영상 스튜디오",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}