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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* ✅ 검색 엔진 최적화 메타 */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Now Studio" />
        <meta
          name="keywords"
          content="이제 스튜디오, 영상제작, 브랜드 영상, 유튜브 영상 제작, Now Studio"
        />
        {/* ✅ 구글/네이버 서치콘솔 등록 시 발급되는 인증코드 (아래 값은 예시) */}
        <meta name="google-site-verification" content="구글코드" />
        <meta name="naver-site-verification" content="7eb58d30ef45ec613b178946184c37a629796852" />
      </head>
      <body>{children}</body>
    </html>
  );
}