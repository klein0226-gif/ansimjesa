import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제사 문화 가이드 — 제사·49재·천도재 쉽게 이해하기",
  description: "제사, 49재, 천도재, 납골봉안당에 대해 알기 쉽게 정리한 가이드 모음입니다. 제사 문화의 역사와 비용까지 투명하게 안내합니다.",
  openGraph: {
    title: "제사 문화 가이드 — 안심제사",
    description: "제사·49재·천도재에 대해 알기 쉽게 정리했습니다.",
    url: "https://ansimjesa.co.kr/guide",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/guide" },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
