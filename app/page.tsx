import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ----- Data ----- */

const services = [
  {
    idx: "SERVICE · 01",
    corner: "Ⅰ",
    title: "사십구재",
    subtitle: "49일, 영혼의 여정을 함께",
    desc:
      "돌아가신 후 49일 동안 매 7일마다 재를 올려 극락왕생을 기원합니다. 사정에 따라 마지막 49일째(막재)만 진행하는 절충형도 선택하실 수 있습니다.",
    items: ["7일 간격 정규 진행", "막재 단독 가능", "유족 참석 환영"],
  },
  {
    idx: "SERVICE · 02",
    corner: "Ⅱ",
    title: "납골봉안당",
    subtitle: "사찰 내 품격 있는 영구 안치",
    desc:
      "사찰 내 봉안당에 영구 안치하여 언제든 참배하실 수 있습니다. 연중 청결 관리가 이루어지며, 명절과 기일에 정중하게 보살핍니다.",
    items: ["영구 안치 · 기간 만료 없음", "벌초·봉분 관리 부담 없음", "개방형 참배 공간"],
  },
  {
    idx: "SERVICE · 03",
    corner: "Ⅲ",
    title: "영구 위패",
    subtitle: "한 번의 계약, 추가 비용 없이 영구히",
    desc:
      "한 번의 서면 계약과 한 번의 비용 결제로 사찰에 위패를 모시고, 매월 지장재일 합동재로 정성껏 모셔드립니다. 추가 비용 없이 영구히 이어집니다.",
    items: ["서면 계약 · 한 번의 비용", "매월 지장재일 합동재", "스님 집전"],
  },
];

const temples = [
  {
    slug: "deokunsa",
    name: "김해 덕운사",
    region: "경남 김해",
    tag: "ACCESS · 접근성",
    oneliner:
      "김해 시내 근교의 정갈한 사찰. 바쁜 일상 속에서도 부담 없이 방문할 수 있습니다.",
    best: "김해·부산 거주자, 접근성과 프라이버시를 함께 원하는 분",
  },
  {
    slug: "suamsa",
    name: "의령 수암사",
    region: "경남 의령",
    tag: "HERITAGE · 보물 · 333관음",
    oneliner:
      "고려 보물 두 점과 333위 노천 관음불 산책길이 함께 자리한 자연 속 사찰.",
    best: "보물·관음 산책길·자연 속 힐링을 선호하시는 분",
  },
  {
    slug: "maesa",
    name: "함안 마애사",
    region: "경남 함안",
    tag: "HERITAGE · 통일신라 마애불",
    oneliner:
      "통일신라 801년에 새겨진 마애약사여래삼존입상을 품은 격식 있는 도량.",
    best: "문화재적 가치와 격식을 중시하시는 분",
  },
  {
    slug: "baekcheonsa",
    name: "사천 백천사",
    region: "경남 사천",
    tag: "HERITAGE · 1,300년 고찰",
    oneliner:
      "신라 663년 창건의 1,300년 고찰. 동양 최대 목조 와불상과 7건의 지정 문화재.",
    best: "전통과 시설을 모두 중시하시는 분",
  },
];

const steps = [
  {
    num: "STEP · Ⅰ",
    title: "무료 상담",
    desc: "전화 또는 문의 양식으로 편하게 연락주세요. 민감하신 부분은 비공개로 진행합니다.",
  },
  {
    num: "STEP · Ⅱ",
    title: "사찰 추천",
    desc: "상황·지역·예산에 맞춰 1:1로 사찰을 추천드립니다. 비교 자료를 함께 드립니다.",
  },
  {
    num: "STEP · Ⅲ",
    title: "계약 체결",
    desc: "서면 계약을 통해 서비스 범위와 기간을 확정합니다. 구두 합의는 남기지 않습니다.",
  },
  {
    num: "STEP · Ⅳ",
    title: "최초 봉안재 동행",
    sub: "봉안재(奉安齋) — 위패·유골을 사찰에 정식으로 모시는 첫 의식",
    desc:
      "저희 직원이 사찰 입구에서부터 모시고 들어가, 의식의 모든 순서를 곁에서 안내해 드립니다. 처음이라 낯설어도 당황하실 일 없도록, 차후 진행 절차까지 함께 살펴드립니다.",
    note: "차량이 없으셔서 이동이 불편하신 경우, 상담을 통해 도움을 드립니다.",
    highlight: true,
  },
  {
    num: "STEP · Ⅴ",
    title: "영구 진행",
    desc: "이제 걱정 없이 맡겨두세요. 매월 지장재일에 합동재로 정성껏 모셔드립니다.",
  },
];

const guides = [
  {
    kicker: "GUIDE · 01",
    title: "제사를 절에 맡기면 어떻게 진행되나요?",
    summary:
      "영구위탁 제사의 전 과정 — 계약부터 매월 지장재일 합동재 집전까지 한눈에 정리했습니다.",
    body: [
      "1. 사찰과 영구위탁 계약 체결 — 위패 봉안, 매월 합동재 집전, 기일·명절 별도재까지 포함된 범위를 서면으로 약정합니다. 한 번의 계약·한 번의 비용으로 추가 비용 없이 영구히 모셔집니다.",
      "2. 위패 봉안 (최초 봉안재) — 고인의 위패를 사찰 봉안당에 정식으로 모시는 첫 의식입니다. 저희 직원이 사찰 입구부터 동행하며 절차를 안내해 드립니다.",
      "3. 매월 지장재일 합동재 — 음력 매월 18일(지장재일)에 스님이 직접 집전하는 합동재가 봉행됩니다. 가족이 직접 오시지 않아도 정성껏 모셔집니다.",
    ],
  },
  {
    kicker: "GUIDE · 02",
    title: "49재 비용은 어떻게 구성되나요?",
    summary:
      "상담을 통해 가장 적합한 사찰을 안내해 드립니다. 고객의 입장에서 함께 고민하겠습니다.",
    body: [
      "49재란 — 고인이 돌아가신 날부터 49일 동안 7일 간격으로 7번 올리는 천도재입니다. 불교에서는 이 49일이 다음 생을 결정하는 중요한 기간으로 여깁니다.",
      "일반적 비용 구성: 기본 49재 1식(7회 통합 봉행), 위패 제작·영정 봉안, 음식 공양·제수, 막재(7재) 가족 참석 권장. 사찰별 정확한 비용은 상담 시 비교표로 안내드립니다.",
      "안심제사 안내 — 추가 비용·숨은 항목 없이 사찰별 비교표를 함께 드립니다.",
    ],
  },
  {
    kicker: "GUIDE · 03",
    title: "천도재는 언제 지내야 할까요?",
    summary:
      "천도재가 필요한 상황과 진행 시기까지 — 상담 전에 알아두시면 좋은 기초 지식.",
    body: [
      "천도재(薦度齋)란 — 고인의 영혼이 좋은 곳으로 가시도록 비는 불교 의식입니다. 49재가 끝난 이후, 또는 오랜 시간이 지난 조상님을 위해 별도로 봉행할 수 있습니다.",
      "이런 상황에서 권해드립니다: 49재를 미처 지내지 못한 경우, 조부모·증조부모 등 오래된 조상님을 위해, 가족에게 좋지 않은 일이 반복될 때, 이장·화장 등 묘소 정리 후.",
      "진행 시기 — 특별히 정해진 시기는 없으나, 음력 7월 백중(우란분재)이나 동지 즈음에 많이 봉행됩니다.",
    ],
  },
  {
    kicker: "GUIDE · 04",
    title: "형제 간 의견이 갈릴 때, 어떻게 정리하나요?",
    summary:
      "제사·49재·봉안을 두고 가족 의견이 다를 때 — 흔한 갈등 유형과 정리 방법을 차분히 안내합니다.",
    body: [
      "흔한 갈등 — 종교가 다른 형제, 비용 분담, 책임자 지정, 제사를 잇거나 그만두는 결정 등이 자주 화두로 오릅니다.",
      "안심제사의 역할 — 한쪽에 치우치지 않고 사실 정보(비용·진행 방식·문서)와 선택지를 정리해 드립니다. 결정 자체는 가족의 몫이지만, 같은 정보를 바탕으로 이야기 나누실 수 있도록 돕습니다.",
      "권유 — 결론을 서두르지 마세요. 비교 자료를 두고 한 번 더 모이시면 의외로 빨리 합의가 됩니다.",
    ],
  },
];

/* ----- Reusable visual: temple silhouette SVG ----- */
function TempleSilhouette() {
  return (
    <svg
      viewBox="0 0 400 240"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="#B89968"
      strokeWidth="1"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.9 }}
      aria-hidden
    >
      <path d="M0 130 L70 70 L130 110 L200 50 L280 100 L340 80 L400 130 L400 240 L0 240 Z" fill="rgba(184,153,104,0.04)" strokeWidth="0.5" opacity="0.7" />
      <path d="M0 165 L60 130 L110 155 L170 120 L240 145 L310 130 L400 160 L400 240 L0 240 Z" fill="rgba(184,153,104,0.06)" strokeWidth="0.5" />
      <g transform="translate(160 130)">
        <path d="M5 70 L5 50 L0 50 L40 18 L80 50 L75 50 L75 70 Z" fill="rgba(184,153,104,0.2)" strokeWidth="0.7" />
        <path d="M-8 50 L40 14 L88 50" strokeWidth="0.8" />
        <path d="M-12 52 L92 52" strokeWidth="0.4" />
        <line x1="40" y1="14" x2="40" y2="4" strokeWidth="0.5" />
        <circle cx="40" cy="4" r="2" fill="#B89968" stroke="none" />
        <rect x="32" y="55" width="16" height="15" fill="rgba(11,22,40,0.4)" strokeWidth="0.4" />
      </g>
      <circle cx="60" cy="45" r="1" fill="#D4B98A" stroke="none" />
      <circle cx="95" cy="30" r="1" fill="#D4B98A" stroke="none" />
      <circle cx="320" cy="40" r="1" fill="#D4B98A" stroke="none" />
      <circle cx="355" cy="55" r="1" fill="#D4B98A" stroke="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ====================================================== */}
        {/* 1) HERO                                                 */}
        {/* ====================================================== */}
        <section
          className="relative overflow-hidden"
          style={{
            minHeight: "100vh",
            padding: "160px 0 120px",
            color: "#F1EBD8",
            background:
              "radial-gradient(1000px 600px at 85% 10%, rgba(184,153,104,0.18), transparent 60%), radial-gradient(800px 500px at 10% 90%, rgba(30,50,88,0.6), transparent 60%), linear-gradient(180deg, #0B1628 0%, #0F1A2E 55%, #0B1628 100%)",
          }}
        >
          {/* Grid overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.5,
              backgroundImage:
                "linear-gradient(rgba(184,153,104,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(184,153,104,0.05) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />
          <div className="relative max-w-[1240px] mx-auto px-6 md:px-10">
            <div
              className="grid gap-12 lg:gap-20 items-center lg:grid-cols-[1.2fr_0.8fr]"
            >
              {/* Left — headline + CTAs */}
              <div>
                <span className="eyebrow">Since 2026 · 영구봉안 · 영구위탁</span>
                <h1
                  className="font-myeongjo"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(44px, 5.2vw, 80px)",
                    lineHeight: 1.12,
                    letterSpacing: "-0.02em",
                    margin: "28px 0 32px",
                    color: "#F6EED9",
                  }}
                >
                  <span className="font-latin" style={{ color: "var(--gold-400)", fontStyle: "italic", fontWeight: 400 }}>
                    바쁜 일상에도,
                  </span>
                  <br />
                  제사 걱정은
                  <br />
                  <span style={{ color: "var(--gold-400)" }}>안심하세요.</span>
                </h1>
                <p
                  style={{
                    fontSize: 18,
                    lineHeight: 1.8,
                    color: "#C9C2AE",
                    maxWidth: 520,
                    marginBottom: 44,
                  }}
                >
                  일 년에 단 하루, 기다리고 계신 분을 위해.
                  <br />
                  엄선된 계약 사찰과 1:1로 연결해
                  <br />
                  사십구재·납골봉안·영구 위패를 정성껏 모십니다.
                </p>
                <div className="flex gap-4 flex-wrap">
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
                    무료 상담 신청 <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/temples"
                    className="inline-flex items-center gap-3 transition-all"
                    style={{
                      padding: "18px 32px",
                      fontSize: 15,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      color: "#F1EBD8",
                      border: "1px solid rgba(241,235,216,0.4)",
                      background: "transparent",
                    }}
                  >
                    계약 사찰 살펴보기
                  </Link>
                </div>
              </div>

              {/* Right — gold line silhouette panel */}
              <div className="relative mt-12 lg:mt-0 hidden md:block">
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "4 / 5",
                    background: "rgba(248, 245, 238, 0.04)",
                    border: "1px solid rgba(184,153,104,0.3)",
                  }}
                >
                  <TempleSilhouette />
                  <div
                    className="absolute font-latin text-center"
                    style={{
                      bottom: 24,
                      left: 0,
                      right: 0,
                      color: "var(--gold-400)",
                      fontSize: 12,
                      letterSpacing: "0.3em",
                    }}
                  >
                    PARTNER TEMPLES · 계약 사찰
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* 2) MANIFESTO (full-bleed navy, single line)             */}
        {/* ====================================================== */}
        <section
          style={{
            background: "var(--navy-deep, #0A1220)",
            color: "#EFE9DA",
            padding: "100px 0",
            borderTop: "1px solid rgba(184,153,104,0.25)",
            borderBottom: "1px solid rgba(184,153,104,0.25)",
          }}
        >
          <div className="max-w-[1040px] mx-auto px-6 md:px-10 text-center">
            <span className="eyebrow center">Manifesto</span>
            <p
              className="font-myeongjo mt-6"
              style={{
                fontWeight: 400,
                fontSize: "clamp(22px, 2.4vw, 32px)",
                lineHeight: 1.6,
                color: "#F6EED9",
                letterSpacing: "-0.01em",
              }}
            >
              마음은 그대로 두시고,
              <span style={{ color: "var(--gold-400)" }}> 번거로움만 </span>
              저희에게 맡겨 주세요.
            </p>
            <div className="mt-8 mx-auto rule-gold" />
          </div>
        </section>

        {/* ====================================================== */}
        {/* 3) SERVICES TEASER (3-up)                               */}
        {/* ====================================================== */}
        <section style={{ background: "var(--ivory)", padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="lg:grid lg:gap-20 lg:items-end mb-16 lg:mb-20 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <span className="eyebrow">Our Services</span>
                <h2
                  className="font-myeongjo mt-6"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(34px, 3.6vw, 52px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                  }}
                >
                  세 가지의 정성,
                  <br />한 곳에서 모십니다.
                </h2>
              </div>
              <p className="mt-6 lg:mt-0" style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.8, maxWidth: 520 }}>
                49재, 납골봉안, 영구 위패까지 — 안심제사가 안내하는 모든 서비스는 계약된 사찰을 통해 정성껏 진행됩니다. 규모와 방식은 상황에 맞춰 함께 정해 드립니다.
              </p>
            </div>

            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                borderTop: "1px solid var(--line)",
                borderLeft: "1px solid var(--line)",
              }}
            >
              {services.map((s) => (
                <article
                  key={s.title}
                  className="relative transition-colors"
                  style={{
                    background: "var(--paper)",
                    padding: "56px 40px",
                    borderRight: "1px solid var(--line)",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <div
                    className="font-latin"
                    style={{ fontSize: 13, letterSpacing: "0.22em", color: "var(--gold-600)", marginBottom: 24 }}
                  >
                    {s.idx}
                  </div>
                  <div
                    className="absolute font-myeongjo"
                    style={{
                      top: 48,
                      right: 40,
                      fontWeight: 500,
                      fontSize: 14,
                      color: "var(--gold-600)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.corner}
                  </div>
                  <h3
                    className="font-myeongjo"
                    style={{ fontWeight: 600, fontSize: 28, letterSpacing: "-0.01em", margin: "0 0 8px" }}
                  >
                    {s.title}
                  </h3>
                  <div
                    style={{ fontSize: 14, color: "var(--gold-600)", marginBottom: 24, letterSpacing: "0.02em" }}
                  >
                    {s.subtitle}
                  </div>
                  <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>
                    {s.desc}
                  </p>
                  <ul
                    className="grid grid-cols-1 gap-2.5 list-none p-0 m-0"
                    style={{ paddingTop: 24, borderTop: "1px solid var(--line-gold)" }}
                  >
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5"
                        style={{ fontSize: 13, color: "var(--ink-soft)", letterSpacing: "0.01em" }}
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-myeongjo"
                style={{
                  fontSize: 14,
                  color: "var(--navy-800)",
                  borderBottom: "1px solid var(--gold-500)",
                  paddingBottom: 4,
                  letterSpacing: "0.05em",
                }}
              >
                서비스 자세히 보기 →
              </Link>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* 4) TEMPLES TEASER (4-up)                                */}
        {/* ====================================================== */}
        <section style={{ padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="lg:grid lg:gap-20 lg:items-end mb-16 lg:mb-20 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <span className="eyebrow">Partner Temples</span>
                <h2
                  className="font-myeongjo mt-6"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(34px, 3.6vw, 52px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  상황에 맞는 사찰,
                  <br />정중하게 추천해 드립니다.
                </h2>
              </div>
              <p className="mt-6 lg:mt-0" style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.8, maxWidth: 520 }}>
                전통 고찰부터 자연 속 사찰, 보물을 품은 도량까지 — 1:1 상담을 통해 상황에 가장 잘 맞는 사찰을 연결해드립니다.
              </p>
            </div>

            <div
              className="grid gap-8"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
            >
              {temples.map((t, i) => (
                <Link
                  key={t.slug}
                  href={`/temples/${t.slug}`}
                  className="block transition-all no-underline"
                  style={{
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      height: 200,
                      background: "linear-gradient(180deg, #1A2A48 0%, #0F1A2E 100%)",
                      borderBottom: "1px solid var(--gold-500)",
                    }}
                  >
                    <TempleSilhouette />
                    <div
                      className="absolute font-latin"
                      style={{
                        top: 16,
                        left: 16,
                        background: "rgba(11,22,40,0.85)",
                        color: "var(--gold-400)",
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        padding: "6px 12px",
                        border: "1px solid var(--gold-500)",
                        fontStyle: "italic",
                      }}
                    >
                      {["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ"][i]} · {t.tag.split(" · ")[0]}
                    </div>
                    <div
                      className="absolute font-latin"
                      style={{
                        bottom: 12,
                        left: 16,
                        fontSize: 11,
                        color: "var(--gold-400)",
                        letterSpacing: "0.22em",
                        fontStyle: "italic",
                      }}
                    >
                      {t.slug.toUpperCase()}
                    </div>
                  </div>
                  <div style={{ padding: 28 }}>
                    <h3
                      className="font-myeongjo"
                      style={{ fontWeight: 600, fontSize: 20, letterSpacing: "-0.01em", margin: "0 0 8px" }}
                    >
                      {t.name}
                    </h3>
                    <div style={{ fontSize: 12, color: "var(--gold-600)", letterSpacing: "0.04em", marginBottom: 12 }}>
                      {t.region}
                    </div>
                    <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.75 }}>{t.oneliner}</p>
                    <div
                      className="mt-4 pt-3"
                      style={{ borderTop: "1px dashed var(--line)", fontSize: 12.5, color: "var(--ink-mute)" }}
                    >
                      <strong style={{ color: "var(--gold-600)", fontWeight: 600, letterSpacing: "0.04em" }}>
                        추천
                      </strong>{" "}
                      {t.best}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* 5) PHILOSOPHY 孝                                        */}
        {/* ====================================================== */}
        <section style={{ background: "var(--ivory)", padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="lg:grid lg:gap-24 lg:items-center lg:grid-cols-2">
              {/* Left — 孝 with concentric circles */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "4 / 5",
                  background: "var(--navy-800)",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 24,
                    border: "1px solid var(--gold-500)",
                  }}
                />
                <svg
                  viewBox="0 0 400 500"
                  preserveAspectRatio="xMidYMid slice"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12 }}
                  fill="none"
                  stroke="#B89968"
                  strokeWidth="0.5"
                >
                  <circle cx="200" cy="250" r="180" />
                  <circle cx="200" cy="250" r="140" />
                  <circle cx="200" cy="250" r="100" />
                  <line x1="200" y1="40" x2="200" y2="460" />
                  <line x1="20" y1="250" x2="380" y2="250" />
                </svg>
                <div
                  className="absolute inset-0 grid place-items-center font-myeongjo"
                  style={{
                    fontSize: "clamp(180px, 24vw, 320px)",
                    fontWeight: 400,
                    color: "var(--gold-500)",
                    lineHeight: 1,
                    opacity: 0.95,
                  }}
                >
                  孝
                </div>
                <div
                  className="absolute font-latin text-center"
                  style={{
                    bottom: 48,
                    left: 0,
                    right: 0,
                    color: "var(--gold-400)",
                    fontSize: 13,
                    letterSpacing: "0.3em",
                  }}
                >
                  HYO · 효도 · FILIAL PIETY
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <span className="eyebrow">Our Philosophy</span>
                <p
                  className="font-myeongjo"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(26px, 2.5vw, 38px)",
                    lineHeight: 1.55,
                    color: "var(--ink)",
                    margin: "28px 0 36px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  효(<span className="font-latin" style={{ color: "var(--gold-600)" }}>孝</span>)의 마음은 그대로 두시고,
                  <br />
                  번거로움만 저희에게 맡겨 주세요.
                </p>
                <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.9, marginBottom: 20 }}>
                  바쁜 일상, 해외 거주, 연세 드신 부모님을 모시는 상황 — 직접 제를 모시기 어려운 분들 곁에
                  안심제사가 함께합니다. 계약 사찰에서 스님이 직접 집전하며, 매월 지장재일에 합동재로 정성껏 모셔드립니다.
                </p>
                <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.9 }}>
                  한 번의 서면 계약으로 추가 비용 없이 영구히 모셔집니다. 남은 것은 마음을 담는 일뿐, 나머지는 저희가 빈틈없이 챙깁니다.
                </p>
                <div
                  className="flex justify-between items-end mt-10 pt-8"
                  style={{ borderTop: "1px solid var(--line-gold)" }}
                >
                  <div>
                    <div className="font-myeongjo" style={{ fontSize: 16, fontWeight: 600 }}>
                      안심제사 편집부
                    </div>
                    <div style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.08em", marginTop: 4 }}>
                      ANSIMJESA
                    </div>
                  </div>
                  <div className="rule-gold" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* 6) HOW IT WORKS — 5 steps with Step IV gold-emphasized  */}
        {/* ====================================================== */}
        <section style={{ background: "var(--navy-800)", color: "#EFE9DA", padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="lg:grid lg:gap-20 lg:items-end mb-16 lg:mb-20 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <span className="eyebrow">How It Works</span>
                <h2
                  className="font-myeongjo mt-6"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(34px, 3.6vw, 52px)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    color: "#F6EED9",
                  }}
                >
                  다섯 걸음이면 충분합니다.
                </h2>
              </div>
              <p className="mt-6 lg:mt-0" style={{ fontSize: 16, color: "#C9C2AE", lineHeight: 1.8, maxWidth: 520 }}>
                복잡한 절차는 저희가 맡고, 결정만 남겨드립니다. 최초 상담부터 계약, 그리고 영구 진행까지 — 정성스럽게 안내해 드립니다.
              </p>
            </div>

            <div
              className="grid gap-0"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                borderTop: "1px solid rgba(184,153,104,0.3)",
              }}
            >
              {steps.map((s, i, arr) => {
                const highlight = s.highlight === true;
                return (
                  <div
                    key={s.title}
                    className="relative"
                    style={{
                      padding: "48px 28px 48px 28px",
                      borderRight: i === arr.length - 1 ? "none" : "1px solid rgba(184,153,104,0.2)",
                      background: highlight
                        ? "linear-gradient(180deg, rgba(184,153,104,0.10), rgba(184,153,104,0.02))"
                        : "transparent",
                    }}
                  >
                    <div
                      className="font-latin"
                      style={{
                        fontStyle: "italic",
                        fontSize: 14,
                        color: highlight ? "var(--gold-light)" : "var(--gold-400)",
                        letterSpacing: "0.3em",
                        marginBottom: 20,
                      }}
                    >
                      {s.num}
                    </div>
                    <h3
                      className="font-myeongjo"
                      style={{
                        fontWeight: 500,
                        fontSize: highlight ? 24 : 22,
                        color: highlight ? "var(--gold-light)" : "#F6EED9",
                        margin: "0 0 12px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {s.title}
                    </h3>
                    {s.sub && (
                      <p
                        className="font-latin"
                        style={{
                          fontSize: 12.5,
                          color: "var(--gold-light)",
                          margin: "0 0 12px",
                          paddingBottom: 10,
                          borderBottom: "1px solid rgba(184,153,104,0.18)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {s.sub}
                      </p>
                    )}
                    <p style={{ color: "#B8B09A", fontSize: 13.5, lineHeight: 1.8, margin: 0 }}>
                      {s.desc}
                    </p>
                    {s.note && (
                      <p
                        style={{
                          marginTop: 14,
                          paddingTop: 12,
                          borderTop: "1px dashed rgba(184,153,104,0.3)",
                          fontSize: 12.5,
                          color: "var(--gold-400)",
                          lineHeight: 1.7,
                          margin: "14px 0 0",
                        }}
                      >
                        {s.note}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* 7) CULTURE GUIDE — 4 details accordions                 */}
        {/* ====================================================== */}
        <section id="guide" style={{ background: "var(--ivory)", padding: "120px 0", scrollMarginTop: 96 }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="text-center max-w-[720px] mx-auto mb-16 lg:mb-20">
              <span className="eyebrow center">Culture Guide</span>
              <h2
                className="font-myeongjo mt-6"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                진행 과정, 차분히 알려 드립니다.
              </h2>
              <p className="mt-5" style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.8 }}>
                계약부터 의식 진행, 매월 합동재까지 — 모든 절차를 명확히 안내해 드립니다. 처음이라 낯설어도 한눈에 이해하실 수 있도록 정리했습니다.
              </p>
            </div>
            <div
              className="grid gap-[2px]"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                background: "var(--line)",
              }}
            >
              {guides.map((g) => (
                <details
                  key={g.title}
                  style={{ background: "var(--paper)" }}
                >
                  <summary
                    className="cursor-pointer list-none"
                    style={{ padding: "40px 32px" }}
                  >
                    <div
                      className="font-latin"
                      style={{
                        color: "var(--gold-600)",
                        fontSize: 13,
                        letterSpacing: "0.2em",
                        marginBottom: 16,
                        fontStyle: "italic",
                      }}
                    >
                      {g.kicker}
                    </div>
                    <h4
                      className="font-myeongjo"
                      style={{
                        fontWeight: 600,
                        fontSize: 19,
                        margin: "0 0 12px",
                        lineHeight: 1.45,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {g.title}
                    </h4>
                    <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.75, margin: 0 }}>
                      {g.summary}
                    </p>
                    <div
                      className="mt-6"
                      style={{ fontSize: 12, color: "var(--gold-600)", letterSpacing: "0.24em", fontWeight: 600 }}
                    >
                      자세히 보기 →
                    </div>
                  </summary>
                  <div
                    style={{
                      padding: "0 32px 36px",
                      borderTop: "1px solid rgba(184,153,104,0.2)",
                    }}
                  >
                    {g.body.map((para, i) => (
                      <p
                        key={i}
                        style={{
                          fontSize: 14,
                          color: "var(--ink-soft)",
                          lineHeight: 1.85,
                          marginTop: i === 0 ? 24 : 14,
                          marginBottom: 0,
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* 8) CTA BAND — navy with gold border                     */}
        {/* ====================================================== */}
        <section style={{ padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div
              className="relative"
              style={{
                background: "var(--navy-800)",
                color: "#EFE9DA",
                padding: "72px 32px",
              }}
            >
              <div
                aria-hidden
                className="absolute"
                style={{
                  inset: 24,
                  border: "1px solid rgba(184,153,104,0.3)",
                  pointerEvents: "none",
                }}
              />
              <div className="relative max-w-[820px] mx-auto text-center" style={{ padding: "24px" }}>
                <span className="eyebrow center">Free Consultation</span>
                <h3
                  className="font-myeongjo mt-6"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(28px, 3vw, 42px)",
                    lineHeight: 1.3,
                    margin: "16px 0 20px",
                    color: "#F6EED9",
                    letterSpacing: "-0.01em",
                  }}
                >
                  어려운 부분은 저희가,
                  <br />
                  마음만 담아 주세요.
                </h3>
                <p style={{ color: "#C9C2AE", fontSize: 15, lineHeight: 1.9, maxWidth: 520, margin: "0 auto 32px" }}>
                  상담은 전액 무료이며, 문의 내용은 엄격히 비공개로 관리됩니다. 전화·카카오 채널은 개설 준비 중입니다.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 transition-all"
                    style={{
                      padding: "18px 32px",
                      background: "var(--gold-500)",
                      color: "var(--navy-900)",
                      fontWeight: 700,
                      fontSize: 15,
                      letterSpacing: "0.14em",
                      border: "1px solid var(--gold-500)",
                    }}
                  >
                    상담 신청 안내 →
                  </Link>
                  <span
                    aria-disabled="true"
                    aria-label="카카오 채널 개설 준비 중"
                    className="inline-flex items-center justify-center gap-3"
                    style={{
                      padding: "18px 32px",
                      background: "rgba(184,153,104,0.04)",
                      color: "rgba(201,194,174,0.65)",
                      border: "1px dashed rgba(184,153,104,0.35)",
                      fontWeight: 500,
                      fontSize: 14,
                      letterSpacing: "0.12em",
                      cursor: "not-allowed",
                    }}
                  >
                    카카오 채널 · 개설 준비 중
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
