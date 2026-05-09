import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "사찰 안내 — 엄선된 계약 사찰 네 곳",
  description:
    "엄선된 계약 사찰 네 곳(덕운사·수암사·마애사·백천사). 전국 어디서든 상담 가능, 계약 사찰은 추후 점점 확대 예정. 각 사찰의 연혁·전각·봉안 시설을 한눈에 비교하세요.",
  openGraph: {
    title: "사찰 안내 — 안심제사",
    description: "엄선된 계약 사찰 네 곳. 전국 상담 가능, 계약 사찰은 추후 점점 확대 예정.",
    url: "https://ansimjesa.co.kr/temples",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/temples" },
};

type Feature = { badge?: string; text: string };

const temples: Array<{
  slug: string;
  numeral: string;
  name: string;
  region: string;
  tag: string;
  oneliner: string;
  features: Feature[];
  best: string;
  Visual: () => React.ReactElement;
}> = [
  {
    slug: "deokunsa",
    numeral: "Ⅰ",
    name: "김해 덕운사",
    region: "경남 김해",
    tag: "ACCESS · 접근성",
    oneliner:
      "김해 시내 근교의 정갈한 사찰입니다. 바쁜 일상 속에서도 부담 없이 방문할 수 있으며, 사찰 스님이 정성스럽게 제사를 모십니다.",
    features: [
      { text: "김해 시내 근교 — 접근성 우수" },
      { text: "아담하고 정갈한 분위기" },
      { text: "주차 편리" },
    ],
    best: "바쁜 직장인 · 김해/부산 거주자 · 편안한 분위기 선호",
    Visual: DeokunsaSVG,
  },
  {
    slug: "suamsa",
    numeral: "Ⅱ",
    name: "의령 수암사",
    region: "경남 의령",
    tag: "HERITAGE · 보물 · 333관음",
    oneliner:
      "경내를 장식하는 333위 노천 관음불과, 고려 석탑·승탑 두 점의 보물이 함께 자리한 사찰입니다. 고인을 추모하며 아름다운 산책길 속에서 마음의 위로를 얻을 수 있습니다.",
    features: [
      { badge: "보물", text: "구 제373호 의령 보천사지 삼층석탑 — 고려 전기, 신라 양식 계승" },
      { badge: "보물", text: "구 제472호 의령 보천사지 승탑 — 팔각원당형, 용·구름 조각" },
      { text: "333위 노천 관음불 산책길" },
      { text: "수려한 자연 경관 · 대규모 도량" },
    ],
    best: "보물 · 333관음 산책길 · 자연 속 힐링 선호",
    Visual: SuamsaSVG,
  },
  {
    slug: "maesa",
    numeral: "Ⅲ",
    name: "함안 마애사",
    region: "경남 함안",
    tag: "HERITAGE · 통일신라 마애불",
    oneliner:
      "방어산 절벽 암면에 새겨진 통일신라 마애불을 품은 도량과 인연을 이은 사찰입니다. 너비 7m·높이 5m의 거대한 삼존불 앞에서 격식 있고 품격 높은 제사를 모십니다.",
    features: [
      { badge: "보물", text: "구 제159호 함안 방어산 마애약사여래삼존입상 — 통일신라 애장왕 2년(801)" },
      { text: "약사여래 · 일광보살 · 월광보살 삼존 선각" },
      { text: "고요한 산자락 도량" },
      { text: "격식 있는 천도재 · 영구 봉안 가능" },
    ],
    best: "보물 · 통일신라 마애불 · 격식 있는 추모",
    Visual: MaesaSVG,
  },
  {
    slug: "baekcheonsa",
    numeral: "Ⅳ",
    name: "사천 백천사",
    region: "경남 사천 · 와룡산",
    tag: "HERITAGE · 보물 1 + 도지정 6 · 1,300년",
    oneliner:
      "신라 문무왕(663년) 시절 창건된 1,300년 역사의 고찰입니다. 동양 최대 목조 와불상과 보물 1건·경남도 지정문화유산 6건을 보유하고 있으며, 와룡산 자락의 청정한 자연 속에서 고인을 영구히 모실 수 있습니다.",
    features: [
      { badge: "보물", text: "밀양 천황사 석조비로자나불좌상 — 통일신라 8세기 후반 (백천사 관리)" },
      { badge: "도 유형", text: "사천 백천사 목조보살좌상 및 복장유물 — 고려 말 1364년" },
      { badge: "도 유형", text: "상교정본자비도량참법 — 고려 후기 목판본" },
      { badge: "도 유형", text: "대방광원각약소주경 — 고려 후기 목판본" },
      { badge: "도 유형", text: "불교전적류 — 조선시대 3책" },
      { badge: "도 자료", text: "신중탱 · 아미타후불탱 — 19세기 탱화 2폭" },
      { text: "동양 최대 목조 와불상 · 1,300년 역사 고찰" },
      { text: "극락전 추모관 — 현대식 · 청결 · 부도탑 봉안 가능" },
    ],
    best: "보물 · 1,300년 고찰 · 시설과 전통 모두 중시",
    Visual: BaekcheonsaSVG,
  },
];

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
              엄선된 계약 사찰 네 곳,
              <br />
              <span className="font-latin" style={{ color: "var(--gold-400)", fontStyle: "italic" }}>
                정중하게 연결해 드립니다.
              </span>
            </h1>
            <div
              className="font-myeongjo inline-flex items-center gap-3 flex-wrap"
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
              각 사찰마다 특별한 장점이 있습니다. 분위기·시설·문화재를 한눈에 비교하고 상황에 가장 잘 맞는
              사찰을 찾아보세요. 결정이 어려우시면 무료 상담으로 추천받으실 수 있습니다.
            </p>
          </div>
        </section>

        {/* Temple details */}
        <section style={{ padding: "40px 0 120px" }}>
          <div className="max-w-[1040px] mx-auto px-6 md:px-10">
            {temples.map((t, idx, arr) => {
              const Visual = t.Visual;
              return (
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
                    {/* Visual — gold-line SVG */}
                    <div
                      className="relative overflow-hidden"
                      style={{
                        aspectRatio: "4 / 5",
                        background: "linear-gradient(180deg, #1A2A48 0%, #0F1A2E 100%)",
                        border: "1px solid var(--gold-500)",
                      }}
                    >
                      <Visual />
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
                        {t.numeral}
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
                        className="grid grid-cols-1 list-none p-0 m-0"
                        style={{
                          padding: "24px 0",
                          gap: 12,
                          borderTop: "1px solid var(--line-gold)",
                          borderBottom: "1px solid var(--line-gold)",
                        }}
                      >
                        {t.features.map((f, i) => (
                          <li
                            key={i}
                            className="grid items-baseline"
                            style={{
                              gridTemplateColumns: "76px 1fr",
                              gap: 12,
                              fontSize: 13.5,
                              color: "var(--ink-soft)",
                              lineHeight: 1.65,
                            }}
                          >
                            {f.badge ? (
                              <span
                                className="font-latin"
                                style={{
                                  display: "inline-block",
                                  fontWeight: 500,
                                  fontSize: 10.5,
                                  letterSpacing: "0.18em",
                                  textTransform: "uppercase",
                                  color: "var(--gold-500)",
                                  border: "1px solid var(--gold-500)",
                                  padding: "3px 8px",
                                  textAlign: "center",
                                  whiteSpace: "nowrap",
                                  alignSelf: "center",
                                }}
                              >
                                {f.badge}
                              </span>
                            ) : (
                              <span
                                aria-hidden
                                style={{
                                  width: 5,
                                  height: 5,
                                  background: "var(--gold-500)",
                                  borderRadius: "50%",
                                  marginTop: 8,
                                  justifySelf: "center",
                                }}
                              />
                            )}
                            <span>{f.text}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7">
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
                          자세히 보기 <span aria-hidden>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

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

/* =====================================================
   Inline gold-line silhouette SVGs (from handoff HTML)
   ===================================================== */

function DeokunsaSVG() {
  return (
    <svg
      viewBox="0 0 320 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="#B89968"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden
    >
      <path d="M0 240 Q80 200 160 220 T320 210 L320 400 L0 400 Z" fill="rgba(184,153,104,0.05)" stroke="none" />
      <path d="M0 280 Q90 250 180 265 T320 260 L320 400 L0 400 Z" fill="rgba(184,153,104,0.07)" stroke="none" />
      <circle cx="240" cy="100" r="34" fill="rgba(184,153,104,0.10)" stroke="rgba(184,153,104,0.4)" strokeWidth="0.6" />
      <g transform="translate(160 320)">
        <rect x="-44" y="-50" width="6" height="50" fill="#B89968" opacity="0.85" />
        <rect x="38" y="-50" width="6" height="50" fill="#B89968" opacity="0.85" />
        <path d="M-70 -50 Q-50 -58 0 -64 Q50 -58 70 -50" stroke="#B89968" strokeWidth="1.4" fill="none" />
        <path d="M-58 -52 Q-40 -54 0 -56 Q40 -54 58 -52" stroke="#B89968" strokeWidth="0.6" fill="none" opacity="0.6" />
        <path d="M-4 -64 L0 -72 L4 -64" stroke="#B89968" strokeWidth="1" fill="#B89968" />
        <line x1="-90" y1="0" x2="90" y2="0" stroke="#B89968" strokeWidth="0.4" opacity="0.5" />
      </g>
      <g stroke="#B89968" strokeWidth="0.7" opacity="0.55" fill="none">
        <path d="M0 140 Q40 130 80 150" />
        <path d="M20 142 L18 132 M20 142 L24 132 M40 138 L38 128 M40 138 L44 130 M60 144 L58 134 M60 144 L64 136" />
      </g>
    </svg>
  );
}

function SuamsaSVG() {
  return (
    <svg
      viewBox="0 0 320 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="#B89968"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden
    >
      <path d="M0 220 Q80 160 160 200 T320 180 L320 400 L0 400 Z" fill="rgba(184,153,104,0.06)" stroke="none" />
      <path d="M0 280 Q90 240 180 260 T320 250 L320 400 L0 400 Z" fill="rgba(184,153,104,0.08)" stroke="none" />
      <g transform="translate(160 310)" stroke="#B89968" fill="#B89968">
        <line x1="0" y1="-130" x2="0" y2="-110" strokeWidth="1" />
        <circle cx="0" cy="-114" r="3" fill="#B89968" />
        <path d="M-18 -110 L18 -110 L22 -100 L-22 -100 Z" fill="rgba(184,153,104,0.7)" strokeWidth="0.6" />
        <rect x="-10" y="-100" width="20" height="14" fill="rgba(184,153,104,0.5)" strokeWidth="0.6" />
        <path d="M-26 -86 L26 -86 L32 -74 L-32 -74 Z" fill="rgba(184,153,104,0.7)" strokeWidth="0.6" />
        <rect x="-15" y="-74" width="30" height="18" fill="rgba(184,153,104,0.5)" strokeWidth="0.6" />
        <path d="M-36 -56 L36 -56 L42 -42 L-42 -42 Z" fill="rgba(184,153,104,0.7)" strokeWidth="0.6" />
        <rect x="-22" y="-42" width="44" height="22" fill="rgba(184,153,104,0.5)" strokeWidth="0.6" />
        <rect x="-50" y="-20" width="100" height="10" fill="rgba(184,153,104,0.6)" strokeWidth="0.6" />
        <rect x="-58" y="-10" width="116" height="6" fill="rgba(184,153,104,0.4)" strokeWidth="0.6" />
        <line x1="-100" y1="-4" x2="100" y2="-4" strokeWidth="0.4" opacity="0.5" />
      </g>
      <g fill="#B89968" opacity="0.55">
        <circle cx="40" cy="330" r="1.6" />
        <rect x="39" y="331" width="2" height="6" />
        <circle cx="56" cy="330" r="1.6" />
        <rect x="55" y="331" width="2" height="6" />
        <circle cx="72" cy="330" r="1.6" />
        <rect x="71" y="331" width="2" height="6" />
        <circle cx="88" cy="330" r="1.6" />
        <rect x="87" y="331" width="2" height="6" />
        <circle cx="232" cy="330" r="1.6" />
        <rect x="231" y="331" width="2" height="6" />
        <circle cx="248" cy="330" r="1.6" />
        <rect x="247" y="331" width="2" height="6" />
        <circle cx="264" cy="330" r="1.6" />
        <rect x="263" y="331" width="2" height="6" />
        <circle cx="280" cy="330" r="1.6" />
        <rect x="279" y="331" width="2" height="6" />
      </g>
    </svg>
  );
}

function MaesaSVG() {
  return (
    <svg
      viewBox="0 0 320 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="#B89968"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden
    >
      <path d="M0 0 L320 0 L320 360 Q280 340 240 350 Q200 360 160 350 Q120 340 80 355 Q40 365 0 350 Z" fill="rgba(184,153,104,0.06)" stroke="none" />
      <g stroke="#B89968" strokeWidth="0.4" opacity="0.35">
        <path d="M40 60 L50 140 L42 220 L60 300" />
        <path d="M280 80 L290 160 L284 240" />
        <path d="M100 30 L110 90" />
        <path d="M220 40 L210 110" />
      </g>
      <g transform="translate(160 200)">
        <path d="M0 -90 Q60 -90 60 -10 Q60 50 0 60 Q-60 50 -60 -10 Q-60 -90 0 -90 Z" fill="rgba(184,153,104,0.10)" stroke="#B89968" strokeWidth="0.6" />
        <ellipse cx="0" cy="-12" rx="44" ry="60" fill="rgba(184,153,104,0.13)" stroke="#B89968" strokeWidth="0.5" opacity="0.7" />
        <circle cx="0" cy="-40" r="16" fill="rgba(184,153,104,0.55)" stroke="#B89968" strokeWidth="0.6" />
        <circle cx="0" cy="-56" r="4" fill="#B89968" />
        <path d="M-30 30 L0 -22 L30 30 Z" fill="rgba(184,153,104,0.55)" stroke="#B89968" strokeWidth="0.6" />
        <path d="M-32 30 Q-20 38 -8 32 Q0 42 8 32 Q20 38 32 30" stroke="#B89968" strokeWidth="0.7" fill="rgba(184,153,104,0.4)" />
        <g transform="translate(-90 0)" opacity="0.7">
          <circle cx="0" cy="-20" r="8" fill="rgba(184,153,104,0.5)" stroke="#B89968" strokeWidth="0.4" />
          <path d="M-12 30 L0 -10 L12 30 Z" fill="rgba(184,153,104,0.4)" stroke="#B89968" strokeWidth="0.4" />
        </g>
        <g transform="translate(90 0)" opacity="0.7">
          <circle cx="0" cy="-20" r="8" fill="rgba(184,153,104,0.5)" stroke="#B89968" strokeWidth="0.4" />
          <path d="M-12 30 L0 -10 L12 30 Z" fill="rgba(184,153,104,0.4)" stroke="#B89968" strokeWidth="0.4" />
        </g>
      </g>
      <line x1="20" y1="360" x2="300" y2="360" stroke="#B89968" strokeWidth="0.3" opacity="0.4" />
    </svg>
  );
}

function BaekcheonsaSVG() {
  return (
    <svg
      viewBox="0 0 320 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="#B89968"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      aria-hidden
    >
      <path d="M0 200 Q80 140 160 180 T320 160 L320 400 L0 400 Z" fill="rgba(184,153,104,0.05)" stroke="none" />
      <path d="M0 250 Q90 210 180 230 T320 220 L320 400 L0 400 Z" fill="rgba(184,153,104,0.08)" stroke="none" />
      <g transform="translate(160 300)">
        <path d="M-130 14 Q-80 0 0 -2 Q80 0 130 14 L130 24 L-130 24 Z" fill="rgba(184,153,104,0.18)" stroke="#B89968" strokeWidth="0.5" />
        <path d="M-110 -2 Q-90 -22 -50 -28 L40 -32 Q60 -36 80 -28 Q105 -22 115 -8" fill="rgba(184,153,104,0.55)" stroke="#B89968" strokeWidth="0.9" />
        <path d="M-60 -22 Q-30 -16 30 -22" stroke="#B89968" strokeWidth="0.4" opacity="0.6" />
        <path d="M-40 -16 Q0 -10 50 -18" stroke="#B89968" strokeWidth="0.4" opacity="0.5" />
        <circle cx="95" cy="-22" r="15" fill="rgba(184,153,104,0.7)" stroke="#B89968" strokeWidth="0.7" />
        <circle cx="105" cy="-32" r="3" fill="#B89968" />
        <circle cx="99" cy="-22" r="1.2" fill="#0F1A2E" />
        <path d="M85 -10 Q80 8 90 14" stroke="#B89968" strokeWidth="0.5" fill="none" />
        <path d="M-110 -2 Q-120 -8 -118 4 Q-114 10 -108 6" stroke="#B89968" strokeWidth="0.6" fill="rgba(184,153,104,0.55)" />
        <circle cx="95" cy="-22" r="22" stroke="#B89968" strokeWidth="0.4" fill="none" opacity="0.5" />
      </g>
      <line x1="20" y1="340" x2="300" y2="340" stroke="#B89968" strokeWidth="0.3" opacity="0.4" />
      <circle cx="60" cy="90" r="22" fill="rgba(184,153,104,0.08)" stroke="rgba(184,153,104,0.35)" strokeWidth="0.5" />
    </svg>
  );
}
