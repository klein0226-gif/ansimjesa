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
    slug: "deokunsa",
    name: "김해 덕운사",
    tag: "접근성 최고",
    emoji: "🚗",
    location: "경남 김해시 장유면",
    desc: "김해 시내에서 가까운 아담하고 정갈한 사찰. 바쁜 일상 속에서도 부담 없이 방문할 수 있습니다. 혜원 스님이 정성스럽게 제사를 모십니다.",
    features: ["김해 시내 근교 — 접근성 우수", "아담하고 정갈한 분위기", "경내 잘 가꿔져 산책 가능", "지역 포교·봉사 활동 활발", "혜원 스님 상주"],
    best: "바쁜 직장인, 김해·부산 거주자, 편안한 분위기를 원하는 분",
    price: "제사 위탁 연 30만원 / 영구위탁 150만원",
  },
  {
    slug: "suamsa",
    name: "합천 수암사",
    tag: "경치 최고",
    emoji: "🌊",
    location: "경남 합천군 (합천호 인근)",
    desc: "합천호가 내려다보이는 수려한 경관 속 평화로운 수행 도량. 아름다운 자연과 함께 고인을 추모하며 마음의 치유를 얻을 수 있습니다. 법웅 스님이 참선과 수행을 안내합니다.",
    features: ["합천호 조망 — 뛰어난 경치", "가야산 자락 맑은 기운", "조용하고 평화로운 도량", "템플스테이 운영", "법웅 스님 상주"],
    best: "마음의 위로가 필요한 분, 자연 속 힐링을 원하는 분",
    price: "제사 위탁 연 30만원 / 영구위탁 150만원",
  },
  {
    slug: "maesa",
    name: "거창 마애사",
    tag: "문화재 · 품격",
    emoji: "🗿",
    location: "경남 거창군 (가야산 국립공원 인근)",
    desc: "바위에 새겨진 마애불상이 있는 역사 깊은 암자. 깊은 산속의 진정한 고요함 속에서 격식 있고 품격 높은 제사를 모십니다. 정묵 스님이 소박하고 따뜻한 법문으로 안내합니다.",
    features: ["마애불상 — 지방문화재", "깊은 산속 진정한 고요함", "자연과 완전히 동화된 분위기", "역사적·문화적 가치", "정묵 스님 상주"],
    best: "격식과 의미를 중시하는 분, 특별한 추모를 원하는 분",
    price: "제사 위탁 연 30만원 / 영구위탁 150만원",
  },
  {
    slug: "baekcheonsa",
    name: "와룡산 백천사",
    tag: "1,300년 전통 · 시설 최고",
    emoji: "🏔️",
    location: "경남 사천시 백천사로 149",
    desc: "신라 문무왕(663년) 시절 창건된 1,300년 역사의 고찰. 동양 최대 목조 와불상이 있으며, 와룡산 자락의 청정한 자연 속에서 고인을 영구히 모실 수 있습니다. 극락전 추모관은 현대적이고 깨끗하게 관리됩니다. 정암 스님이 상주하시며 템플스테이와 불교대학을 운영합니다.",
    features: ["1,300년 역사 고찰", "동양 최대 목조 와불상", "영구 봉안 가능 (연장 무제한)", "극락전 추모관 — 현대식 깨끗한 시설", "부도탑 봉안 가능", "입장료·주차 무료", "와룡산 청정 자연환경", "템플스테이 운영", "정암 스님 상주"],
    best: "영구 봉안을 원하는 분, 경남 지역 거주자, 시설과 전통 모두 중시하는 분",
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
              <Link key={t.slug} href={`/temples/${t.slug}`} className="block rounded-2xl border-2 border-gray-100 hover:border-[#2D6A4F] transition-all p-8 md:p-10 no-underline cursor-pointer">
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
              </Link>
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
