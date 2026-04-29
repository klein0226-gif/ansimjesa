import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 안내 — 제사 영구위탁·납골봉안당·49재·천도재",
  description:
    "안심제사의 모든 서비스를 안내합니다. 제사 영구위탁, 납골봉안당 안치, 49재, 천도재까지 계약된 사찰을 통해 정성껏 진행합니다.",
  openGraph: {
    title: "서비스 안내 — 안심제사",
    description:
      "제사 영구위탁, 납골봉안당, 49재, 천도재 — 안심제사가 제공하는 모든 서비스를 확인하세요.",
    url: "https://ansimjesa.co.kr/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/services" },
};

const services = [
  {
    num: "Ⅰ · ETERNAL",
    title: "제사 영구위탁",
    sub: "기일마다, 매년 자동으로",
    body: "돌아가신 분의 기일에 맞춰 계약된 사찰에서 제사를 지내드립니다. 한 번 서면 계약으로 매년 자동 진행되며, 가족의 왕래가 어려울 때도 끊김 없이 이어집니다. 진행 전 리마인드, 진행 당일의 사진·영상, 사후 보고서까지 모두 제공합니다.",
    items: [
      "매년 기일 자동 진행 · 누락 없음",
      "제수 음식 사찰 전담 준비",
      "당일 사진·영상 리포트",
      "스님 집전 100% 보장",
    ],
  },
  {
    num: "Ⅱ · ENSHRINEMENT",
    title: "납골봉안당",
    sub: "품격 있는 영구 안치",
    body: "사찰 내 납골봉안당에 안치하여 언제든 참배하실 수 있습니다. 연중 청결 관리가 이루어지며, 명절과 기일에는 사찰에서 합동 추모가 진행됩니다. 안치 위치·형태·규모별로 3가지 옵션이 준비되어 있습니다.",
    items: [
      "연중 청결 관리",
      "개방형 참배 공간 상시 이용",
      "명절·추석·기일 합동 제사",
      "프라이빗/공용/특실 3종",
    ],
  },
  {
    num: "Ⅲ · 49 DAYS",
    title: "사십구재",
    sub: "49일, 영혼의 여정",
    body: "돌아가신 후 49일 동안 매 7일마다 재를 올려 영혼의 극락왕생을 기원합니다. 사정에 따라 마지막 49일째(막재)만 진행하는 절충형도 선택하실 수 있으며, 유족의 참석 여부와 무관하게 정성은 동일하게 모십니다.",
    items: [
      "7일 간격 정규 진행 (총 7회)",
      "막재 단독 진행 가능",
      "유족 참석 환영 · 비참석 가능",
      "경전 독송 · 법문 포함",
    ],
  },
  {
    num: "Ⅳ · CROSSING",
    title: "천도재",
    sub: "이승에 머무시는 영혼을 극락으로",
    body: "고인이 꿈에 자주 나타나시거나, 갑작스러운 사고로 돌아가셨거나, 집안에 원인 모를 일이 반복될 때 천도재를 통해 매듭을 지어드립니다. 상황의 민감성을 존중하여 상담 전 과정이 비공개로 진행됩니다.",
    items: [
      "개인 천도재",
      "합동 천도재 (비용 절충형)",
      "사고사·급사 전담 상담",
      "집안 안녕 기원 병행",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Dark hero */}
        <section
          style={{
            minHeight: "auto",
            padding: "180px 0 80px",
            color: "#F1EBD8",
            background:
              "radial-gradient(800px 400px at 80% 20%, rgba(184,153,104,0.15), transparent 60%), linear-gradient(180deg, #0B1628 0%, #0F1A2E 100%)",
            borderBottom: "1px solid rgba(184,153,104,0.25)",
          }}
        >
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <span className="eyebrow">Our Services</span>
            <h1
              className="font-myeongjo"
              style={{
                fontWeight: 500,
                fontSize: "clamp(40px, 4.8vw, 68px)",
                color: "#F6EED9",
                lineHeight: 1.15,
                margin: "24px 0 24px",
                maxWidth: 900,
              }}
            >
              계약된 사찰을 통해
              <br />
              <span className="font-latin" style={{ color: "var(--gold-400)", fontStyle: "italic" }}>
                정성껏 모십니다.
              </span>
            </h1>
            <p style={{ color: "#C9C2AE", fontSize: 17, lineHeight: 1.9, maxWidth: 640 }}>
              제사 영구위탁부터 납골봉안, 49재, 천도재까지 — 안심제사의 모든 서비스는 경남 4개 사찰에서
              스님이 직접 집전하며, 정식 오픈 후 서면 약정 예정입니다.
            </p>
          </div>
        </section>

        {/* Service details */}
        <section style={{ padding: "40px 0 120px" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            {services.map((s, i, arr) => (
              <article
                key={s.title}
                className="grid gap-10 lg:gap-16 items-start"
                style={{
                  gridTemplateColumns: "minmax(0, 1fr)",
                  padding: "56px 0",
                  borderTop: "1px solid var(--line)",
                  borderBottom: i === arr.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <div
                  className="lg:grid lg:gap-16 lg:items-start"
                  style={{ gridTemplateColumns: "200px 1fr 1fr" }}
                >
                  <div>
                    <div
                      className="font-latin"
                      style={{
                        color: "var(--gold-600)",
                        fontSize: 14,
                        letterSpacing: "0.28em",
                        marginBottom: 8,
                        fontStyle: "italic",
                      }}
                    >
                      {s.num}
                    </div>
                    <h3
                      className="font-myeongjo"
                      style={{
                        fontWeight: 600,
                        fontSize: 30,
                        letterSpacing: "-0.01em",
                        margin: "12px 0 0",
                      }}
                    >
                      {s.title}
                    </h3>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--gold-600)",
                        marginTop: 8,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {s.sub}
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0">
                    <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.9, margin: 0 }}>
                      {s.body}
                    </p>
                  </div>
                  <div className="mt-6 lg:mt-0">
                    <ul className="flex flex-col gap-0 list-none p-0 m-0">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3.5 items-start"
                          style={{
                            padding: "12px 0",
                            borderBottom: "1px dashed var(--line)",
                            fontSize: 14,
                            color: "var(--ink)",
                          }}
                        >
                          <span
                            aria-hidden
                            style={{ color: "var(--gold-600)", fontWeight: 600 }}
                          >
                            —
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}

            <div className="text-center mt-20 lg:mt-24">
              <p style={{ color: "var(--ink-mute)", fontSize: 15, marginBottom: 28 }}>
                어떤 서비스가 맞을지 확신이 서지 않으신다면, 무료 상담으로 함께 정해보세요.
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
                무료 상담 신청 <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
