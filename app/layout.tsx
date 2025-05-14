import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "이제 스튜디오 | Now Studio",
  description: "당신의 '지금'을 함께 완성하는 영상 스튜디오",
  icons: {
    icon: "/favicon.ico",
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
      <body>
        {children}
      </body>
    </html>
  );
}