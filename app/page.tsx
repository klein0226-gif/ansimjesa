import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const temples = [
  {
    slug: "deokunsa",
    name: "덕운사",
    region: "경남 김해",
    oneliner:
      "김해 시내에서 차로 15분. 번잡한 공설 추모원과 달리, 절 안에서 가족끼리 조용히 모실 수 있는 곳.",
    best: "김해·부산 거주자, 접근성과 프라이버시를 함께 원하는 분",
    photo: "/temples/deokunsa_hero.jpg",
  },
  {
    slug: "suamsa",
    name: "수암사",
    region: "경남 의령",
    oneliner:
      "진입로 650m에 3.8m 관음상 333기가 줄지어 선 풍경. 규모와 영험함의 랜드마크.",
    best: "규모와 영험을 중시하는 분, 자녀에게 뚜렷이 보여줄 수 있는 곳을 원하는 분",
    photo: "/temples/suamsa_hero.jpg",
  },
  {
    slug: "maesa",
    name: "마애사",
    region: "경남 함안",
    oneliner:
      "통일신라 때부터 지켜온 보물 제159호 마애불과 동양 최대 청룡상이 함께. 지자체 연계 봉안.",
    best: "문화재적 가치와 격식을 중시하는 분, 지자체 연계 봉안 안정성을 원하는 분",
    photo: "/temples/maesa_hero.jpg",
  },
  {
    slug: "baekcheonsa",
    name: "백천사",
    region: "경남 사천",
    oneliner:
      "신라 663년 창건, 1,300년 역사. 15m 목조 와불 몸 안에 들어가 예불하는 희귀 공간.",
    best: "영구 봉안을 원하는 분, 전통과 시설·볼거리 모두 중시하는 분",
    photo: "/temples/baekcheonsa_hero.jpg",
  },
];

const services = [
  {
    idx: "SERVICE · 01",
    corner: "Ⅰ",
    title: "제사 영구위탁",
    subtitle: "기일마다, 매년 자동으로 모셔드립니다",
    desc: "돌아가신 분의 기일에 맞춰 계약 사찰에서 제사를 지내드립니다. 한 번의 서면 계약으로 영구히 진행되며, 매회 사진·영상으로 결과를 전달해드립니다.",
    items: ["매년 기일 자동 진행", "제수 음식 전담 준비", "사진·영상 전달", "스님 집전 · 매회 보고"],
  },
  {
    idx: "SERVICE · 02",
    corner: "Ⅱ",
    title: "납골봉안당",
    subtitle: "사찰 내 품격 있는 영구 안치",
    desc: "사찰 내 봉안당에 안치하여 언제든 참배하실 수 있습니다. 연중 청결 관리가 이루어지며, 명절과 기일에는 사찰에서 합동 추모가 진행됩니다.",
    items: ["연중 청결 관리", "개방형 참배 공간", "명절 합동 제사", "안치 옵션 3종"],
  },
  {
    idx: "SERVICE · 03",
    corner: "Ⅲ",
    title: "사십구재",
    subtitle: "49일, 영혼의 여정을 함께",
    desc: "돌아가신 후 49일 동안 매 7일마다 재를 올려 극락왕생을 기원합니다. 사정에 따라 마지막 49일(막재)만 진행하는 절충형도 선택하실 수 있습니다.",
    items: ["7일 간격 정규 진행", "막재 단독 가능", "유족 참석 환영", "경전 독송·법문 포함"],
  },
  {
    idx: "SERVICE · 04",
    corner: "Ⅳ",
    title: "천도재",
    subtitle: "이승에 머무시는 영혼을 극락으로",
    desc: "꿈에 자주 나타나시거나, 갑작스러운 사고로 돌아가셨거나, 집안에 원인 모를 일이 반복될 때 — 천도재로 매듭을 지어드립니다.",
    items: ["개인 천도재", "합동 천도재", "사고사·급사 전담", "집안 안녕 기원"],
  },
];

const steps = [
  { num: "STEP · Ⅰ", title: "무료 상담", desc: "전화 또는 문의 양식으로 편하게 연락주세요. 민감하신 부분은 비공개로 진행합니다." },
  { num: "STEP · Ⅱ", title: "사찰 추천", desc: "상황·지역·예산에 맞춰 1:1로 사찰을 추천드립니다. 비교 자료를 함께 드립니다." },
  { num: "STEP · Ⅲ", title: "계약 체결", desc: "서면 계약을 통해 서비스 범위와 기간을 확정합니다. 구두 합의는 남기지 않습니다." },
  { num: "STEP · Ⅳ", title: "영구 진행", desc: "이제 걱정 없이 맡겨두세요. 기일마다 자동으로, 사진과 함께 보고드립니다." },
];

const guides = [
  {
    kicker: "GUIDE · 01",
    slug: "jesa-wital",
    title: "제사를 절에 맡기면 어떻게 진행되나요?",
    desc: "영구위탁 제사의 전 과정 — 계약부터 기일 당일의 집전, 사후 보고까지 한눈에 정리했습니다.",
  },
  {
    kicker: "GUIDE · 02",
    slug: "49jae-biyong",
    title: "49재 비용 총정리 — 얼마나 드나요?",
    desc: "규모별·사찰별 49재 비용을 투명하게 공개합니다. 숨겨진 항목 없이 꼼꼼히 안내해드립니다.",
  },
  {
    kicker: "GUIDE · 03",
    slug: "sibling-conflict",
    title: "형제 간 의견이 갈릴 때, 어떻게 정리하나요?",
    desc: "제사·49재·봉안을 두고 가족 의견이 다를 때 — 흔한 갈등 유형과 정리 방법을 차분히 안내합니다.",
  },
];

const trust = [
  { num: "4", small: "종", label: "핵심 서비스 · CORE" },
  { num: "1:1", small: "", label: "맞춤 상담 · MATCH" },
  { num: "24", small: "h", label: "회신 약속 · WITHIN" },
  { num: "0", small: "원", label: "상담료 무료 · FREE" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ---------- HERO ---------- */}
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
            <div className="grid gap-12 lg:gap-20 items-center" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
              <div className="lg:grid lg:gap-20 lg:items-center" style={{ gridTemplateColumns: "1.2fr 0.8fr" }}>
                {/* Left — headline */}
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
                    제사·49재·천도재·납골봉안을 정성껏 모십니다.
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

                {/* Right — credential card */}
                <div className="relative mt-16 lg:mt-0">
                  {/* Seal */}
                  <div
                    aria-hidden
                    className="absolute font-latin text-center leading-tight"
                    style={{
                      top: -28,
                      right: -20,
                      width: 96,
                      height: 96,
                      border: "1px solid var(--gold-500)",
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      background: "var(--navy-900)",
                      color: "var(--gold-400)",
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      transform: "rotate(-8deg)",
                      fontStyle: "italic",
                    }}
                  >
                    ANSIMJESA
                    <br />· EST ·<br />
                    2026
                  </div>
                  <div
                    className="gold-corners"
                    style={{
                      background: "rgba(248, 245, 238, 0.04)",
                      border: "1px solid rgba(184,153,104,0.3)",
                      padding: 36,
                    }}
                  >
                    <span className="eyebrow">Our Promise</span>
                    <h4
                      className="font-myeongjo"
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#F6EED9",
                        margin: "18px 0 24px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      안심제사의 약속
                    </h4>
                    {[
                      ["계약 형식", "서면 계약"],
                      ["진행 보고", "사진·영상"],
                      ["스님 집전", "매회 보고"],
                      ["영구 위탁", "기일 자동"],
                      ["상담 비용", "전액 무료"],
                    ].map(([k, v], i, arr) => (
                      <div
                        key={k}
                        className="flex justify-between"
                        style={{
                          padding: "14px 0",
                          borderBottom: i === arr.length - 1 ? "none" : "1px solid rgba(184,153,104,0.2)",
                          fontSize: 14,
                        }}
                      >
                        <span style={{ color: "#B8B09A", letterSpacing: "0.02em" }}>{k}</span>
                        <span
                          className="font-myeongjo"
                          style={{ fontWeight: 600, color: "var(--gold-400)", letterSpacing: "0.04em" }}
                        >
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- TRUST STRIP ---------- */}
        <section
          style={{
            background: "var(--navy-900)",
            color: "var(--gold-100)",
            padding: "56px 0",
            borderTop: "1px solid rgba(184,153,104,0.25)",
            borderBottom: "1px solid rgba(184,153,104,0.25)",
          }}
        >
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="grid gap-6 md:gap-10" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <div className="hidden md:contents">
                {trust.map((t, i) => (
                  <div
                    key={t.label}
                    className="flex flex-col gap-2 px-6"
                    style={{ borderLeft: i === 0 ? "none" : "1px solid rgba(184,153,104,0.2)" }}
                  >
                    <span
                      className="font-myeongjo"
                      style={{ fontWeight: 400, fontSize: 40, color: "var(--gold-400)", letterSpacing: "-0.02em", lineHeight: 1 }}
                    >
                      {t.num}
                      {t.small && (
                        <span style={{ fontSize: 20, color: "#C9C2AE", marginLeft: 4, letterSpacing: 0 }}>{t.small}</span>
                      )}
                    </span>
                    <span style={{ fontSize: 13, color: "#B8B09A", letterSpacing: "0.08em" }}>{t.label}</span>
                  </div>
                ))}
              </div>
              <div className="contents md:hidden">
                {trust.map((t) => (
                  <div key={t.label} className="flex flex-col gap-2 px-3">
                    <span
                      className="font-myeongjo"
                      style={{ fontWeight: 400, fontSize: 32, color: "var(--gold-400)", lineHeight: 1 }}
                    >
                      {t.num}
                      {t.small && <span style={{ fontSize: 16, color: "#C9C2AE", marginLeft: 4 }}>{t.small}</span>}
                    </span>
                    <span style={{ fontSize: 12, color: "#B8B09A", letterSpacing: "0.06em" }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- PHILOSOPHY / MANIFESTO ---------- */}
        <section style={{ padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div
              className="grid gap-12 lg:gap-24 items-center"
              style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
            >
              <div className="lg:grid lg:gap-24 lg:items-center" style={{ gridTemplateColumns: "1fr 1fr" }}>
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
                      fontSize: 14,
                      letterSpacing: "0.3em",
                    }}
                  >
                    HYO · 孝道 · FILIAL PIETY
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
                    안심제사가 함께합니다. 계약 사찰에서 스님이 직접 집전하고, 진행 전 과정은 사진과 영상으로
                    보고드립니다.
                  </p>
                  <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.9 }}>
                    한 번의 계약으로 매년 기일마다 자동으로 모십니다. 남은 것은 마음을 담는 일뿐, 나머지는 저희가
                    빈틈없이 챙깁니다.
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
                        ANSIMJESA · SEOUL
                      </div>
                    </div>
                    <div className="rule-gold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SERVICES ---------- */}
        <section style={{ background: "var(--ivory)", padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div
              className="grid gap-8 lg:gap-20 mb-16 lg:mb-20"
              style={{ gridTemplateColumns: "minmax(0, 1fr)" }}
            >
              <div className="lg:grid lg:gap-20 lg:items-end" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
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
                    네 가지의 정성,
                    <br />한 곳에서 모십니다.
                  </h2>
                </div>
                <p className="mt-6 lg:mt-0" style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.8, maxWidth: 520 }}>
                  제사 영구위탁부터 납골봉안, 49재, 천도재까지 — 안심제사가 제공하는 모든 서비스는 계약된 사찰을
                  통해 정성껏 진행됩니다. 규모와 방식은 상황에 맞춰 맞춤 설계해 드립니다.
                </p>
              </div>
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
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-none p-0 m-0"
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
          </div>
        </section>

        {/* ---------- TEMPLES (preview) ---------- */}
        <section style={{ padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="lg:grid lg:gap-20 lg:items-end mb-16 lg:mb-20" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
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
                수백 년 역사의 전통 고찰, 접근성 좋은 도심 사찰, 최신식 봉안 시설을 갖춘 사찰까지 — 저희가 1:1
                상담을 통해 상황에 가장 잘 맞는 사찰을 연결해드립니다.
              </p>
            </div>

            <div
              className="grid gap-8"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
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
                      height: 240,
                      background: "linear-gradient(180deg, #1A2A48 0%, #0F1A2E 100%)",
                      borderBottom: "1px solid var(--gold-500)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.photo}
                      alt={`${t.name} 전경`}
                      className="w-full h-full object-cover"
                      style={{ opacity: 0.75 }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(11,22,40,0.1) 0%, rgba(11,22,40,0.55) 100%)",
                      }}
                    />
                    <div
                      className="absolute font-latin"
                      style={{
                        top: 20,
                        left: 20,
                        background: "rgba(11,22,40,0.85)",
                        color: "var(--gold-400)",
                        fontSize: 12,
                        letterSpacing: "0.2em",
                        padding: "8px 14px",
                        border: "1px solid var(--gold-500)",
                        fontStyle: "italic",
                      }}
                    >
                      {["Ⅰ · ACCESS", "Ⅱ · VIEW", "Ⅲ · HERITAGE", "Ⅳ · TRADITION"][i] || "TEMPLE"}
                    </div>
                    <div
                      className="absolute font-latin"
                      style={{
                        bottom: 16,
                        left: 20,
                        fontSize: 12,
                        color: "var(--gold-400)",
                        letterSpacing: "0.22em",
                        fontStyle: "italic",
                      }}
                    >
                      {t.slug.toUpperCase()}
                    </div>
                  </div>
                  <div style={{ padding: 32 }}>
                    <h3
                      className="font-myeongjo"
                      style={{ fontWeight: 600, fontSize: 22, letterSpacing: "-0.01em", margin: "0 0 14px" }}
                    >
                      {t.name} <span style={{ color: "var(--ink-mute)", fontWeight: 400, fontSize: 14 }}>· {t.region}</span>
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.75 }}>{t.oneliner}</p>
                    <div
                      className="mt-5 pt-4"
                      style={{ borderTop: "1px dashed var(--line)", fontSize: 13, color: "var(--ink-mute)" }}
                    >
                      <strong
                        style={{ color: "var(--gold-600)", fontWeight: 600, letterSpacing: "0.04em" }}
                      >
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

        {/* ---------- PROCESS ---------- */}
        <section style={{ background: "var(--navy-800)", color: "#EFE9DA", padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div className="lg:grid lg:gap-20 lg:items-end mb-16 lg:mb-20" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
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
                  네 걸음이면 충분합니다.
                </h2>
              </div>
              <p className="mt-6 lg:mt-0" style={{ fontSize: 16, color: "#C9C2AE", lineHeight: 1.8, maxWidth: 520 }}>
                복잡한 절차는 저희가 맡고, 결정만 남겨드립니다. 최초 상담부터 계약, 그리고 영구 진행까지 — 투명하고
                정성스럽게 안내해 드립니다.
              </p>
            </div>

            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                borderTop: "1px solid rgba(184,153,104,0.3)",
              }}
            >
              {steps.map((s, i, arr) => (
                <div
                  key={s.title}
                  className="relative"
                  style={{
                    padding: "56px 40px 56px 0",
                    borderRight: i === arr.length - 1 ? "none" : "1px solid rgba(184,153,104,0.2)",
                  }}
                >
                  <div
                    className="font-latin"
                    style={{
                      fontStyle: "italic",
                      fontSize: 14,
                      color: "var(--gold-400)",
                      letterSpacing: "0.3em",
                      marginBottom: 32,
                    }}
                  >
                    {s.num}
                  </div>
                  {i !== arr.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute"
                      style={{
                        top: 56,
                        right: -5,
                        width: 9,
                        height: 9,
                        background: "var(--gold-500)",
                        borderRadius: "50%",
                      }}
                    />
                  )}
                  <h3
                    className="font-myeongjo"
                    style={{
                      fontWeight: 500,
                      fontSize: 26,
                      color: "#F6EED9",
                      margin: "0 0 16px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ color: "#B8B09A", fontSize: 14, lineHeight: 1.8, paddingRight: 20, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CONTACT CTA ---------- */}
        <section style={{ padding: "120px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <div
              className="relative"
              style={{
                background: "var(--navy-800)",
                color: "#EFE9DA",
                padding: "56px 32px",
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
              <div
                className="relative lg:grid lg:gap-20 lg:items-center"
                style={{ gridTemplateColumns: "1fr 1fr", padding: "24px" }}
              >
                <div>
                  <span className="eyebrow">Free Consultation</span>
                  <h3
                    className="font-myeongjo"
                    style={{
                      fontWeight: 500,
                      fontSize: 38,
                      lineHeight: 1.3,
                      margin: "24px 0 24px",
                      color: "#F6EED9",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    어려운 부분은 저희가,
                    <br />
                    마음만 담아 주세요.
                  </h3>
                  <p style={{ color: "#C9C2AE", fontSize: 15, lineHeight: 1.9, maxWidth: 420 }}>
                    정식 오픈 후 안내드립니다. 상담은 전액 무료이며, 문의 내용은 엄격히 비공개로
                    관리됩니다.
                  </p>
                  <div
                    className="mt-10 pt-8"
                    style={{ borderTop: "1px solid rgba(184,153,104,0.3)" }}
                  >
                    <div
                      style={{ fontSize: 12, letterSpacing: "0.3em", color: "var(--gold-500)", marginBottom: 12 }}
                    >
                      DIRECT LINE
                    </div>
                    <div
                      className="font-myeongjo"
                      style={{
                        fontSize: 32,
                        color: "var(--gold-500)",
                        letterSpacing: "0.12em",
                        opacity: 0.75,
                      }}
                    >
                      開設備中
                    </div>
                    <div
                      className="font-latin"
                      style={{
                        fontSize: 11,
                        color: "var(--gold-500)",
                        letterSpacing: "0.32em",
                        marginTop: 6,
                      }}
                    >
                      OPENING SOON
                    </div>
                    <p style={{ color: "#B8B09A", fontSize: 13, marginTop: 12, lineHeight: 1.8 }}>
                      개설 대비 중입니다. 정식 오픈 시
                      <br />
                      번호와 채널을 안내드립니다.
                    </p>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 flex flex-col gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 transition-all"
                    style={{
                      padding: "20px 32px",
                      background: "var(--gold-500)",
                      color: "var(--navy-900)",
                      fontWeight: 700,
                      fontSize: 15,
                      letterSpacing: "0.14em",
                      border: "1px solid var(--gold-500)",
                    }}
                  >
                    안내 페이지 보기 ·→
                  </Link>
                  <span
                    aria-disabled="true"
                    aria-label="카카오 채널 개설 예정"
                    className="inline-flex items-center justify-center gap-3"
                    style={{
                      padding: "20px 32px",
                      background: "rgba(107, 112, 133, 0.12)",
                      color: "var(--ink-mute, #6B7085)",
                      border: "1px dashed rgba(107,112,133,0.45)",
                      fontWeight: 500,
                      fontSize: 15,
                      letterSpacing: "0.04em",
                      cursor: "not-allowed",
                    }}
                  >
                    카카오 채널 개설 예정
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- GUIDE TEASER ---------- */}
        <section style={{ background: "var(--ivory)", padding: "120px 0" }}>
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
                제사 문화, 차분히 알려 드립니다.
              </h2>
              <p className="mt-5" style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.8 }}>
                정확한 정보만으로도 많은 걱정이 사라집니다. 현대 한국 가정에 맞는 제사·49재·천도재 안내를 읽어
                보세요.
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
                <Link
                  key={g.slug}
                  href={`/guide/${g.slug}`}
                  className="block transition-colors no-underline"
                  style={{ background: "var(--paper)", padding: "40px 32px" }}
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
                  <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.75 }}>{g.desc}</p>
                  <div
                    className="mt-7"
                    style={{ fontSize: 12, color: "var(--gold-600)", letterSpacing: "0.24em", fontWeight: 600 }}
                  >
                    READ MORE · →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
