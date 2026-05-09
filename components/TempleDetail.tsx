import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export type TempleDetailProps = {
  slug: string;
  name: string;
  hanja: string;
  region: string;
  tagline: string;
  oneliner: string;
  heroImage: string;
  subImage?: string;
  address: string;
  lotNumber?: string;
  accessCar: string;
  accessTransit: string;
  foundedYear: string;
  foundedFounder?: string;
  foundedHistory: string;
  highlights: { title: string; body: string }[];
  facilities: { title: string; body: string }[];
  stories: { title: string; body: string }[];
  best: string;
  sources: string[];
};

function EyebrowTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="mb-8">
      <div
        className="font-latin"
        style={{
          fontSize: 12,
          letterSpacing: "0.26em",
          color: "var(--gold-600)",
          marginBottom: 10,
          fontStyle: "italic",
        }}
      >
        {kicker}
      </div>
      <h2
        className="font-myeongjo"
        style={{
          fontWeight: 600,
          fontSize: 26,
          letterSpacing: "-0.01em",
          paddingBottom: 12,
          borderBottom: "1px solid var(--line-gold)",
        }}
      >
        {title}
      </h2>
    </header>
  );
}

export default function TempleDetail(t: TempleDetailProps) {
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
          <div className="max-w-[1040px] mx-auto px-6 md:px-10">
            <Link
              href="/temples"
              className="font-latin"
              style={{
                fontSize: 13,
                color: "var(--gold-400)",
                letterSpacing: "0.12em",
                display: "inline-block",
                marginBottom: 20,
              }}
            >
              ← TEMPLES
            </Link>
            <span className="eyebrow">Partner Temple</span>
            <div
              className="mt-6"
              style={{ color: "var(--gold-400)", letterSpacing: "0.4em", fontSize: 12 }}
            >
              {t.hanja.split("").join(" · ")}
            </div>
            <h1
              className="font-myeongjo mt-3"
              style={{
                fontWeight: 500,
                fontSize: "clamp(40px, 4.8vw, 68px)",
                color: "#F6EED9",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
              }}
            >
              {t.name}
            </h1>
            <p className="mt-3" style={{ color: "#C9C2AE", fontSize: 15, letterSpacing: "0.08em" }}>
              {t.region}
            </p>
            <p
              className="font-latin mt-8"
              style={{
                color: "var(--gold-400)",
                fontSize: 20,
                fontStyle: "italic",
                letterSpacing: "0.01em",
                maxWidth: 720,
              }}
            >
              「 {t.tagline} 」
            </p>
            <p
              className="mt-6"
              style={{ color: "#C9C2AE", fontSize: 17, lineHeight: 1.9, maxWidth: 640 }}
            >
              {t.oneliner}
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0 120px" }}>
          <div className="max-w-[1040px] mx-auto px-6 md:px-10">
            {/* Photos */}
            <div className="mb-16 space-y-4">
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "16 / 9",
                  border: "1px solid var(--line-gold)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.heroImage}
                  alt={`${t.name} 전경`}
                  className="w-full h-full object-cover"
                />
              </div>
              {t.subImage && (
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "16 / 9", border: "1px solid var(--line-gold)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.subImage} alt={`${t.name} 경내`} className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <section className="mb-16">
              <EyebrowTitle kicker="FOUNDED · 창건 연혁" title="창건 연혁" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div
                    className="font-latin"
                    style={{ fontSize: 12, color: "var(--gold-600)", marginBottom: 4, fontStyle: "italic" }}
                  >
                    창건 시기
                  </div>
                  <div style={{ color: "var(--ink)" }}>{t.foundedYear}</div>
                </div>
                {t.foundedFounder && (
                  <div>
                    <div
                      className="font-latin"
                      style={{ fontSize: 12, color: "var(--gold-600)", marginBottom: 4, fontStyle: "italic" }}
                    >
                      창건·주지
                    </div>
                    <div style={{ color: "var(--ink)" }}>{t.foundedFounder}</div>
                  </div>
                )}
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.9 }}>
                {t.foundedHistory}
              </p>
            </section>

            <section className="mb-16">
              <EyebrowTitle kicker="LOCATION · 위치와 교통" title="위치와 교통" />
              <div className="space-y-5" style={{ fontSize: 15, lineHeight: 1.9, color: "var(--ink-soft)" }}>
                <div>
                  <div
                    className="font-latin"
                    style={{ fontSize: 12, color: "var(--gold-600)", marginBottom: 4, fontStyle: "italic" }}
                  >
                    도로명 주소
                  </div>
                  <div style={{ color: "var(--ink)" }}>{t.address}</div>
                  {t.lotNumber && <div style={{ fontSize: 13 }}>지번 · {t.lotNumber}</div>}
                </div>
                <div>
                  <div
                    className="font-latin"
                    style={{ fontSize: 12, color: "var(--gold-600)", marginBottom: 4, fontStyle: "italic" }}
                  >
                    자가용
                  </div>
                  <p>{t.accessCar}</p>
                </div>
                <div>
                  <div
                    className="font-latin"
                    style={{ fontSize: 12, color: "var(--gold-600)", marginBottom: 4, fontStyle: "italic" }}
                  >
                    대중교통
                  </div>
                  <p>{t.accessTransit}</p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <EyebrowTitle kicker="HIGHLIGHTS · 전각·문화재" title="경내 전각과 문화재" />
              <ul className="space-y-5 list-none p-0">
                {t.highlights.map((h) => (
                  <li
                    key={h.title}
                    style={{ borderLeft: "1px solid var(--gold-500)", paddingLeft: 20 }}
                  >
                    <h3
                      className="font-myeongjo"
                      style={{ fontWeight: 600, fontSize: 18, color: "var(--ink)", marginBottom: 6 }}
                    >
                      {h.title}
                    </h3>
                    <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.9 }}>{h.body}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16">
              <EyebrowTitle kicker="FACILITIES · 제사·봉안" title="제사와 봉안 시설" />
              <ul className="space-y-5 list-none p-0">
                {t.facilities.map((f) => (
                  <li
                    key={f.title}
                    style={{ borderLeft: "1px solid var(--gold-400)", paddingLeft: 20 }}
                  >
                    <h3
                      className="font-myeongjo"
                      style={{ fontWeight: 600, fontSize: 18, color: "var(--ink)", marginBottom: 6 }}
                    >
                      {f.title}
                    </h3>
                    <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.9 }}>{f.body}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16">
              <EyebrowTitle kicker="STORIES · 사찰의 이야기" title="이 사찰만의 이야기" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.stories.map((s) => (
                  <div
                    key={s.title}
                    style={{
                      padding: 24,
                      border: "1px solid var(--line-gold)",
                      background: "var(--paper)",
                    }}
                  >
                    <h3
                      className="font-myeongjo"
                      style={{ fontWeight: 600, color: "var(--gold-600)", marginBottom: 8 }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--ink-soft)",
                        fontSize: 15,
                        lineHeight: 1.85,
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <EyebrowTitle kicker="BEST FOR · 추천 대상" title="이런 분께 권합니다" />
              <div className="grid grid-cols-1 gap-6">
                <div
                  style={{
                    padding: 28,
                    border: "1px solid var(--gold-500)",
                    background: "var(--paper)",
                  }}
                >
                  <div
                    className="font-latin"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.3em",
                      color: "var(--gold-600)",
                      marginBottom: 10,
                      fontStyle: "italic",
                    }}
                  >
                    BEST FOR
                  </div>
                  <p style={{ color: "var(--ink)", lineHeight: 1.85, fontSize: 15 }}>{t.best}</p>
                </div>
              </div>
            </section>

            {t.sources.length > 0 && (
              <div
                className="mt-10 pt-6"
                style={{ borderTop: "1px solid var(--line)" }}
              >
                <div
                  className="font-latin"
                  style={{ fontSize: 12, color: "var(--gold-600)", marginBottom: 6, fontStyle: "italic" }}
                >
                  SOURCES · 참고 자료
                </div>
                <p style={{ fontSize: 12, color: "var(--ink-mute)", lineHeight: 1.8 }}>
                  {t.sources.join(" · ")}
                </p>
              </div>
            )}

            <div className="text-center mt-16 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 transition-all"
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
                {t.name}으로 상담 신청
              </Link>
              <Link
                href="/temples"
                className="inline-flex items-center justify-center gap-3 transition-all"
                style={{
                  padding: "18px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  color: "var(--ink)",
                  border: "1px solid var(--ink)",
                  background: "transparent",
                }}
              >
                다른 사찰 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
