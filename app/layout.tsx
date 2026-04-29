import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import KakaoButton from "@/components/KakaoButton";

const serifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-serif-kr",
  display: "swap",
});
const sansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-kr",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-latin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ansimjesa.co.kr"),
  title: {
    default: "안심제사 — 제사·49재·천도재·납골봉안당 전문 사찰 연결 서비스",
    template: "%s — 안심제사",
  },
  description:
    "바쁜 일상 속 제사 걱정, 안심제사가 대신 챙겨드립니다. 경남 4개 사찰과 연결해 드리는 제사 위탁·49재·천도재·납골봉안당 안내 서비스입니다.",
  keywords:
    "제사 절에 맡기기, 49재 비용, 천도재 신청, 납골봉안당 추천, 제사 대행, 안심제사, 사찰 봉안당, 제사 위탁, 영구위탁 제사",
  authors: [{ name: "안심제사" }],
  creator: "안심제사",
  publisher: "안심제사",
  formatDetection: {
    telephone: true,
    email: false,
  },
  openGraph: {
    title: "안심제사 — 제사·49재·천도재·납골봉안당 전문 사찰 연결 서비스",
    description:
      "바쁜 일상 속 제사 걱정, 안심제사가 대신 챙겨드립니다. 경남 4개 사찰과 연결해 드리는 제사 위탁·49재·천도재·납골봉안당 안내 서비스입니다.",
    url: "https://ansimjesa.co.kr",
    siteName: "안심제사",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "안심제사 — 제사·49재·천도재·납골봉안당 전문 사찰 연결 서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안심제사 — 제사·49재·천도재·납골봉안당 전문 사찰 연결 서비스",
    description: "바쁜 일상 속 제사 걱정, 안심제사가 대신 챙겨드립니다.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ansimjesa.co.kr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${serifKr.variable} ${sansKr.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">
        {children}
        <KakaoButton />
      </body>
    </html>
  );
}
