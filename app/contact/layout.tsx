import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "안내 — 안심제사 정식 오픈 준비 중",
  description: "안심제사 상담 신청 시스템은 현재 정식 오픈 준비 중입니다. 사찰 안내와 서비스 정보는 자유롭게 살펴보실 수 있습니다.",
  openGraph: {
    title: "안내 — 안심제사",
    description: "정식 오픈 준비 중입니다. 곧 안내드리겠습니다.",
    url: "https://ansimjesa.co.kr/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
