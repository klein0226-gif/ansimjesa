import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "무료 상담 신청 — 제사·49재·천도재·봉안당 상담",
  description: "안심제사 무료 상담을 신청하세요. 제사 위탁, 49재, 천도재, 납골봉안당 — 어떤 서비스든 부담 없이 물어보세요. 24시간 내 연락드립니다.",
  openGraph: {
    title: "무료 상담 신청 — 안심제사",
    description: "어떤 서비스든 부담 없이 물어보세요. 24시간 내 연락드립니다.",
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
