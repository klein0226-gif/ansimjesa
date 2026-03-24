import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사찰 안내 — 도심·전통·현대식 봉안당 사찰 비교",
  description: "도심 접근성, 전통 분위기, 현대식 시설 — 각 사찰의 특징을 비교하고 나에게 맞는 사찰을 찾아보세요.",
  openGraph: {
    title: "사찰 안내 — 안심제사",
    description: "각 사찰마다 특별한 장점이 있습니다. 어느 사찰이 맞는지 비교해보세요.",
    url: "https://ansimjesa.co.kr/temples",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/temples" },
};

const temples = [
  {
    slug: "urban-temple",
    name: "도심 가까운 사찰",
    tag: "접근성 최고",
    emoji: "🚇",
    location: "서울 근교",
    desc: "서울 도심에서 30분 이내. 지하철·버스·주차 모두 편리합니다. 바쁜 현대인을 위한 최적의 선택입니다.",
    features: ["지하철 10분 거리", "대형 주차장", "평일·주말 모두 운영", "온라인 예약 가능"],
    best: "바쁜 직장인, 고령의 부모님을 모시는 분",
    price: "제사 위탁 연 30만원~",
  },
  {
    slug: "nature-temple",
    name: "자연 속 전통 고찰",
    tag: "분위기 최고",
    emoji: "🌿",
    location: "경기도 산중",
    desc: "수백 년 역사의 전통 사찰. 깊은 산속 고즈넉한 분위기에서 정성껏 모십니다. 격식과 경건함을 중시하는 분께 추천합니다.",
    features: ["수백 년 전통 사찰", "전통 방식 고수", "산속 청정 환경", "단체 방문 가능"],
    best: "경건하고 격식 있는 의식을 원하는 분",
    price: "제사 위탁 연 40만원~",
  },
  {
    slug: "modern-temple",
    name: "현대식 봉안당 사찰",
    tag: "시설 최고",
    emoji: "🏛️",
    location: "경기도 수도권",
    desc: "최신식 납골봉안당을 갖춘 현대적 사찰. 쾌적하고 관리가 철저합니다. 봉안과 제사를 한 곳에서 해결하세요.",
    features: ["최신식 봉안당", "연중 청결 관리", "냉난방 완비", "유족 휴게 공간"],
    best: "납골봉안당과 제사를 함께 원하는 분",
    price: "제사 위탁 연 35만원~",
  },
  {
    slug: "baekcheonsa",
    name: "와룡산 백천사",
    tag: "1,300년 전통",
    emoji: "🏔️",
    location: "경남 사천시",
    desc: "신라 문무왕(663년) 시절 창건된 1,300년 역사의 고찰. 동양 최대 목조 와불상이 있으며, 와룡산 자락의 청정한 자연 속에서 고인을 영구히 모실 수 있습니다. 극락전 추모관에서 봉안과 제사를 함께 해결하세요.",
    features: ["1,300년 역사 고찰", "동양 최대 목조 와불상", "영구 봉안 가능 (연장 무제한)", "극락전 추모관 (극락1호~8호)", "부도탑 봉안 가능", "입장료·주차 무료", "관리비 연 3만원 (영구 50만원)", "와룡산 청정 자연환경"],
    best: "영구 봉안을 원하는 분, 경남 지역 거주자, 전통과 자연을 중시하는 분",
    price: "개인 250만원~ / 부부 900만원~ / 부도탑 1,000만원~",
  },
];

export default function TemplesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>TEMPLES</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">사찰 안내</h1>
            <p className="text-gray-500 text-lg">각 사찰마다 특별한 장점이 있습니다.<br />어느 사찰이 맞는지 비교해보세요.</p>
          </div>

          <div className="space-y-8">
            {temples.map((t) => (
              <div key={t.slug} className="rounded-2xl border-2 border-gray-100 hover:border-[#2D6A4F] transition-all p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="text-6xl">{t.emoji}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: "#2D6A4F" }}
                      >
                        {t.tag}
                      </span>
                      <span className="text-xs text-gray-400">📍 {t.location}</span>
                    </div>
                    <h2 className="font-serif text-2xl font-bold mb-3">{t.name}</h2>
                    <p className="text-gray-600 leading-relaxed mb-5">{t.desc}</p>
                    <ul className="grid grid-cols-2 gap-2 mb-5">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <span style={{ color: "#2D6A4F" }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">이런 분께 추천</p>
                        <p className="text-sm font-medium text-gray-700">{t.best}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 mb-0.5">참고 비용</p>
                        <p className="font-serif font-bold" style={{ color: "#2D6A4F" }}>{t.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-500 mb-4">어느 사찰이 맞는지 모르겠다면 상담을 통해 결정하세요.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-white font-bold shadow-md hover:opacity-90 transition-all"
              style={{ backgroundColor: "#2D6A4F" }}
            >
              무료 상담으로 사찰 추천받기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
