import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "안심제사 — 제사·49재·천도재·납골봉안당 전문 사찰 연결 서비스",
  description: "바쁜 일상 속 제사 걱정, 안심제사가 대신 챙겨드립니다. 전국 계약 사찰과 연결해 드리는 제사 위탁·49재·천도재·납골봉안당 전문 서비스입니다.",
  keywords: "제사 절에 맡기기, 49재 비용, 천도재 신청, 납골봉안당 추천, 제사 대행, 안심제사",
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
      </body>
    </html>
  );
}
