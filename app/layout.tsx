import type { Metadata } from "next";
import "./globals.css";
import KakaoButton from "@/components/KakaoButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://ansimjesa.co.kr"),
  title: "안심제사 — 제사·49재·천도재·납골봉안당 전문 사찰 연결 서비스",
  description: "바쁜 일상 속 제사 걱정, 안심제사가 대신 챙겨드립니다. 전국 계약 사찰과 연결해 드리는 제사 위탁·49재·천도재·납골봉안당 전문 서비스입니다.",
  keywords: "제사 절에 맡기기, 49재 비용, 천도재 신청, 납골봉안당 추천, 제사 대행, 안심제사",
  openGraph: {
    title: "안심제사 — 제사·49재·천도재·납골봉안당 전문 사찰 연결 서비스",
    description: "바쁜 일상 속 제사 걱정, 안심제사가 대신 챙겨드립니다. 전국 계약 사찰과 연결해 드리는 제사 위탁·49재·천도재·납골봉안당 전문 서비스입니다.",
    url: "https://ansimjesa.co.kr",
    siteName: "안심제사",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
        <KakaoButton />
      </body>
    </html>
  );
}
