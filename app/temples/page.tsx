import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사찰 안내 — 경남 네 곳의 계약 사찰",
  description:
    "현재 경남의 계약 사찰 4곳(덕운사·수암사·마애사·백천사). 전국 어디서든 상담 가능, 계약 사찰은 추후 점점 확대 예정. 각 사찰의 연혁·전각·봉안 시설을 한눈에 비교하세요.",
  openGraph: {
    title: "사찰 안내 — 안심제사",
    description: "현재 경남의 계약 사찰 4곳. 전국 상담 가능, 계약 사찰은 추후 점점 확대 예정.",
    url: "https://ansimjesa.co.kr/temples",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/temples" },
};

const temples = [
  {
    slug: "deokunsa",
    name: "덕운사",
    region: "경남 김해시 주촌면",
    oneliner:
      "김해 시내에서 차로 15분. 번잡한 공설 추모원과 달리, 절 안에서 가족끼리 조용히 모실 수 있는 곳. 법성 스님 직접 집전.",
    highlights: [
      "대웅전 · 아미타불·미륵불·지장보살",
      "산신각 · 주촌면 일대 조망",
      "범종각 · 정기 타종 의식",
      "추모의 집(봉안당) · 사찰 직영",
      "극락전 · 기일·49재·천도재 전용",
      "김해 시내에서 차로 15분",
    ],
    best: "김해·부산 거주자, 접근성과 프라이버시를 함께 원하는 분",
    price: "제사 위탁 연 30만원 · 영구위탁 150만원",
    photo: "/temples/deokunsa_hero.jpg",
    tag: "ACCESS · 접근성",
  },
  {
    slug: "suamsa",
    name: "수암사",
    region: "경남 의령군 의령읍",
    oneliner:
      "진입로 650m에 3.8m 관음상 333기가 줄지어 선 풍경. 여기만큼 사진으로 보여드리기 좋은 곳은 없습니다. 3,500기 봉안 가능.",
    highlights: [
      "333 노천 관세음보살상 · 650m 진입로",
      "대적광전 · 약 250평 금동만불상",
      "보천사지 삼층석탑·승탑 (보물)",
      "영혼의 쉼터 · 3,500기 대규모 납골",
      "88올림픽 법고 · 천왕문",
      "미륵삼존불 대불사 진행 중",
    ],
    best: "규모와 영험을 중시하는 분, 자녀에게 뚜렷이 보여줄 수 있는 랜드마크를 원하는 분",
    price: "제사 위탁 연 30만원 · 영구위탁 150만원",
    photo: "/temples/suamsa_hero.jpg",
    tag: "LANDMARK · 상징",
  },
  {
    slug: "maesa",
    name: "마애사",
    region: "경남 함안군 군북면",
    oneliner:
      "통일신라 때부터 지켜온 보물 제159호 마애불과 동양 최대 청룡상이 함께. 함안군 공설봉안당이 바로 옆이라 관리도 안전합니다.",
    highlights: [
      "방어산 마애약사여래삼존입상 (보물 제159호)",
      "호국 청룡상 · 길이 38m",
      "극락보전 · 아미타불 중심 법당",
      "함안군 공설봉안당 인접 · 지자체 연계",
      "윤회의 탑 · 도자기형 납골탑",
      "부처님 약손 바위(불수암) · 108계단",
    ],
    best: "문화재적 가치와 격식을 중시하는 분, 지자체 연계 봉안 안정성을 원하는 분",
    price: "제사 위탁 연 30만원 · 영구위탁 150만원",
    photo: "/temples/maesa_hero.jpg",
    tag: "HERITAGE · 문화재",
  },
  {
    slug: "baekcheonsa",
    name: "백천사",
    region: "경남 사천시 와룡산",
    oneliner:
      "신라 663년 창건, 1,300년 역사. 15m 목조 와불 몸 안에 들어가 예불하고, TV 나온 목탁 치는 소(우보살)까지. 영남권 탑클래스 봉안 시설.",
    highlights: [
      "약사여래 와불 · 세계 최대급 15m 목조",
      "몸속 법당 · 부처님 몸 안 예불",
      "목조보살좌상 · 고려 말 유형문화유산",
      "극락전 추모관 · 호텔급 봉안당",
      "효심원 · 체계적 장례·제사 서비스",
      "우보살 · 목탁 치는 소, TV 출연",
    ],
    best: "영구 봉안을 원하는 분, 전통과 시설·볼거리 모두 중시하는 분",
    price: "제사 위탁 연 30만원 · 영구위탁 150만원 · 봉안 개인 250만원~ · 부부 900만원~ · 부도탑 1,000만원~",
    photo: "/temples/baekcheonsa_hero.jpg",
    tag: "1,300 YEARS · 전통 · 시설",
  },
];

const numerals = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ"];

export default function TemplesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Dark hero */}
        <section
          style={{
            padding: "180px 0 80px",
            color: "#F1EBD8",
            background:
              "radial-gradient(800px 400px at 80% 20%, rgba(184,153,104,0.15), transparent 60%), linear-gradient(180deg, #0B1628 0%, #0F1A2E 100%)",
            borderBottom: "1px solid rgba(184,153,104,0.25)",
          }}
        >
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <span className="eyebrow">Partner Temples</span>
            <h1
              className="font-myeongjo"
              style={{
                fontWeight: 500,
                fontSize: "clamp(40px, 4.8vw, 68px)",
                color: "#F6EED9",
                lineHeight: 1.15,
                margin: "24px 0 18px",
                maxWidth: 900,
              }}
            >
              경남 네 곳의 엄선된 사찰,
              <br />
              <span className="font-latin" style={{ color: "var(--gold-400)", fontStyle: "italic" }}>
                정중하게 연결해 드립니다.
              </span>
            </h1>
            <div
              className="font-myeongjo inline-block"
              style={{
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 500,
                background: "rgba(184,153,104,0.1)",
                color: "var(--gold-400)",
                border: "1px solid rgba(184,153,104,0.45)",
                letterSpacing: "0.02em",
                marginBottom: 22,
              }}
            >
              전국 어디서든 상담 가능 · 계약 사찰은 추후 점점 확대 예정
            </div>
            <p style={{ color: "#C9C2AE", fontSize: 17, lineHeight: 1.9, maxWidth: 640 }}>
              각 사찰마다 특별한 장점이 있습니다. 접근성, 분위기, 시설, 비용을 한눈에 비교하고 상황에 가장 잘 맞는
              사찰을 찾아보세요. 결정이 어려우시면 무료 상담으로 추천받으실 수 있습니다.
            </p>
          </div>
        </section>

        {/* Temple details */}
        <section style={{ padding: "40px 0 120px" }}>
          <div className="max-w-[1040px] mx-auto px-6 md:px-10">
            {temples.map((t, idx, arr) => (
              <article
                key={t.slug}
                className="grid gap-10 lg:gap-14 items-start"
                style={{
                  gridTemplateColumns: "minmax(0, 1fr)",
                  padding: "64px 0",
                  borderTop: "1px solid var(--line)",
                  borderBottom: idx === arr.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <div
                  className="lg:grid lg:gap-14 lg:items-start"
                  style={{ gridTemplateColumns: "280px 1fr" }}
                >
                  {/* Visual */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: "4 / 5",
                      background: "linear-gradient(180deg, #1A2A48 0%, #0F1A2E 100%)",
                      border: "1px solid var(--gold-500)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.photo}
                      alt={`${t.name} 전경`}
                      className="w-full h-full object-cover"
                      style={{ opacity: 0.78 }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(11,22,40,0.05) 0%, rgba(11,22,40,0.55) 100%)",
                      }}
                    />
                    <div
                      className="absolute font-latin"
                      style={{
                        top: 16,
                        left: 16,
                        color: "var(--gold-400)",
                        fontSize: 13,
                        letterSpacing: "0.22em",
                        fontStyle: "italic",
                      }}
                    >
                      {numerals[idx]}
                    </div>
                    <div
                      className="absolute font-myeongjo"
                      style={{
                        bottom: 16,
                        left: 16,
                        right: 16,
                        color: "#F6EED9",
                        fontSize: 16,
                        letterSpacing: "0.02em",
                      }}
                    >
                      <span className="font-latin" style={{ fontStyle: "italic", letterSpacing: "0.2em" }}>
                        {t.slug.toUpperCase()}
                      </span>{" "}
                      · {t.name}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="mt-8 lg:mt-0">
                    <div
                      className="flex gap-3 items-center flex-wrap"
                      style={{
                        marginBottom: 18,
                        fontSize: 13,
                        letterSpacing: "0.2em",
                        color: "var(--gold-600)",
                      }}
                    >
                      <span className="font-latin" style={{ fontStyle: "italic" }}>
                        {t.tag}
                      </span>
                      <span style={{ color: "var(--ink-mute)", letterSpacing: "0.02em", fontSize: 13 }}>
                        · {t.region}
                      </span>
                    </div>
                    <h3
                      className="font-myeongjo"
                      style={{ fontWeight: 600, fontSize: 34, letterSpacing: "-0.01em", margin: "0 0 18px" }}
                    >
                      {t.name}
                    </h3>
                    <p
                      style={{
                        color: "var(--ink-soft)",
                        fontSize: 15,
                        lineHeight: 1.9,
                        margin: "0 0 28px",
                      }}
                    >
                      {t.oneliner}
                    </p>
                    <ul
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-none p-0 m-0"
                      style={{
                        padding: "24px 0",
                        borderTop: "1px solid var(--line-gold)",
                        borderBottom: "1px solid var(--line-gold)",
                      }}
                    >
                      {t.highlights.slice(0, 6).map((h) => (
                        <li
                          key={h}
                          className="flex gap-2.5 items-start"
                          style={{ fontSize: 13.5, color: "var(--ink-soft)" }}
                        >
                          <span
                            aria-hidden
                            style={{
                              width: 5,
                              height: 5,
                              background: "var(--gold-500)",
                              borderRadius: "50%",
                              marginTop: 8,
                              flexShrink: 0,
                            }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="mt-7 grid gap-6 sm:gap-8"
                      style={{ gridTemplateColumns: "1fr 1fr" }}
                    >
                      <div>
                        <div
                          className="font-latin"
                          style={{
                            fontSize: 12,
                            letterSpacing: "0.22em",
                            color: "var(--gold-600)",
                            marginBottom: 6,
                            fontStyle: "italic",
                          }}
                        >
                          BEST FOR
                        </div>
                        <div style={{ fontSize: 14, color: "var(--ink)" }}>{t.best}</div>
                      </div>
                      <div>
                        <div
                          className="font-latin"
                          style={{
                            fontSize: 12,
                            letterSpacing: "0.22em",
                            color: "var(--gold-600)",
                            marginBottom: 6,
                            fontStyle: "italic",
                          }}
                        >
                          REFERENCE PRICE
                        </div>
                        <div
                          className="font-myeongjo"
                          style={{ fontWeight: 600, color: "var(--gold-600)", fontSize: 16 }}
                        >
                          {t.price}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Link
                        href={`/temples/${t.slug}`}
                        className="inline-flex items-center gap-3 transition-all"
                        style={{
                          padding: "14px 26px",
                          fontSize: 14,
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          color: "var(--gold-600)",
                          border: "1px solid var(--gold-500)",
                          background: "transparent",
                        }}
                      >
                        자세히 보기 · DETAIL <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="text-center mt-20 lg:mt-24">
              <p style={{ color: "var(--ink-mute)", fontSize: 15, marginBottom: 28 }}>
                어느 사찰이 맞는지 모르시겠다면, 무료 상담으로 함께 추천받으세요.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 transition-all"
                style={{
                  padding: "18px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  background: "var(--gold-500)",
                  color: "var(--navy-900)",
                  border: "1px solid var(--gold-500)",
                }}
              >
                무료 상담으로 사찰 추천받기 <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
