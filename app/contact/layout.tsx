import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "무료 상담 신청 — 안심제사",
  description: "안심제사 무료 상담 신청. 사십구재·납골봉안·영구 위패 관련 문의를 24시간 이내 안내드립니다. 상담은 전액 무료이며 비공개로 처리됩니다.",
  openGraph: {
    title: "무료 상담 신청 — 안심제사",
    description: "사십구재·납골봉안·영구 위패 무료 상담. 24시간 이내 회신, 비공개 처리.",
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
