import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 안내 — 사십구재·납골봉안당·영구 위패",
  description:
    "안심제사의 세 가지 서비스를 안내합니다. 사십구재, 납골봉안당, 영구 위패 — 계약된 사찰을 통해 정성껏 진행합니다.",
  openGraph: {
    title: "서비스 안내 — 안심제사",
    description: "사십구재, 납골봉안당, 영구 위패 — 안심제사의 모든 서비스를 확인하세요.",
    url: "https://ansimjesa.co.kr/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/services" },
};

const services = [
  {
    num: "Ⅰ · 49 DAYS",
    title: "사십구재",
    sub: "49일, 영혼의 여정",
    body:
      "돌아가신 후 49일 동안 매 7일마다 재를 올려 영혼의 극락왕생을 기원합니다. 사정에 따라 마지막 49일째(막재)만 진행하는 절충형도 선택하실 수 있으며, 유족의 참석 여부와 무관하게 정성은 동일하게 모십니다.",
    items: [
      "7일 간격 정규 진행 (총 7회)",
      "막재 단독 진행 가능",
      "유족 참석 환영 · 비참석 가능",
    ],
  },
  {
    num: "Ⅱ · ENSHRINEMENT",
    title: "납골봉안당",
    sub: "사찰 내 품격 있는 영구 안치",
    body:
      "사찰 내 납골봉안당에 영구 안치하여 언제든 참배하실 수 있습니다. 일반 추모공원의 기간제 봉안과 달리, 계약 기간이 끝나 유골이 옮겨지거나 처분되는 걱정이 없습니다. 매장 방식처럼 벌초·봉분 관리에 매년 시간을 들이실 필요도 없으며 — 사찰이 연중 정중히 보살핍니다.",
    items: [
      "영구 안치 · 기간 만료 없음",
      "벌초·봉분 관리 부담 없음",
      "개방형 참배 공간 상시 이용",
    ],
  },
  {
    num: "Ⅲ · ETERNAL TABLET",
    title: "영구 위패",
    sub: "한 번의 계약, 추가 비용 없이 영구히",
    body:
      "한 번의 서면 계약과 한 번의 비용 결제로 사찰에 위패를 모시고, 매월 지장재일에 합동재로 정성껏 모셔드립니다. 추가 비용 없이 영구히 이어지므로, 남은 가족이 챙기지 못하더라도 걱정을 덜어낼 수 있습니다.",
    items: [
      "서면 계약 · 한 번의 비용 결제",
      "매월 지장재일 합동재 자동 진행",
      "스님 집전 100% 보장",
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
              사십구재부터 납골봉안, 영구 위패까지 — 안심제사의 모든 서비스는 계약 사찰에서
              스님이 직접 집전하며, 전 과정이 서면으로 약정됩니다.
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
                  {/* label-col */}
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
                  {/* body-col */}
                  <div className="mt-6 lg:mt-0">
                    <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.9, margin: 0 }}>
                      {s.body}
                    </p>
                  </div>
                  {/* items-col */}
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
                          <span aria-hidden style={{ color: "var(--gold-600)", fontWeight: 600 }}>
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
