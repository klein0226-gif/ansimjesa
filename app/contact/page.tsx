import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Dark hero */}
        <section
          style={{
            padding: "180px 0 100px",
            color: "#F1EBD8",
            background:
              "radial-gradient(800px 400px at 80% 20%, rgba(184,153,104,0.15), transparent 60%), linear-gradient(180deg, #0B1628 0%, #0F1A2E 100%)",
            borderBottom: "1px solid rgba(184,153,104,0.25)",
          }}
        >
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            <span className="eyebrow">Notice · 안내</span>
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
              부담 없이 물어보세요,
              <br />
              <span className="font-latin" style={{ color: "var(--gold-400)" }}>
                정식 오픈 후 안내드립니다.
              </span>
            </h1>
            <p style={{ color: "#C9C2AE", fontSize: 17, lineHeight: 1.9, maxWidth: 640 }}>
              상담 신청 시스템은 현재 마지막 점검 단계에 있습니다.
              정식 오픈 후 전화 · 카카오 · 온라인 신청을 모두 열어드립니다.
              상담은 전액 무료이며 비공개로 진행됩니다.
            </p>
          </div>
        </section>

        {/* Contact body */}
        <section style={{ padding: "0" }}>
          <div
            className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-12 lg:gap-20 items-start"
            style={{
              gridTemplateColumns: "minmax(0, 1fr)",
              padding: "100px 24px",
            }}
          >
            <div
              className="lg:grid lg:gap-20 lg:items-start"
              style={{ gridTemplateColumns: "1fr 1.2fr" }}
            >
              {/* Left — info panel */}
              <aside className="flex flex-col gap-6">
                <div
                  style={{
                    padding: 40,
                    border: "1px solid var(--line-gold)",
                    background: "var(--paper)",
                  }}
                >
                  <span className="eyebrow">Direct Line</span>
                  <h4
                    className="font-myeongjo mt-5"
                    style={{
                      fontWeight: 600,
                      fontSize: 20,
                      margin: "20px 0 14px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    전화 상담
                  </h4>
                  <div
                    className="font-myeongjo"
                    style={{
                      fontSize: 32,
                      color: "var(--gold-500)",
                      letterSpacing: "0.12em",
                      opacity: 0.7,
                      margin: "8px 0 6px",
                    }}
                  >
                    開設備中
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-mute)", lineHeight: 1.9 }}>
                    개설 대비 중입니다.
                    <br />
                    정식 오픈 시 번호를
                    <br />
                    안내드리겠습니다.
                  </div>
                  <span
                    aria-disabled="true"
                    aria-label="카카오 채널 개설 예정"
                    className="inline-flex items-center gap-2.5 mt-6"
                    style={{
                      background: "rgba(107, 112, 133, 0.12)",
                      color: "var(--ink-mute, #6B7085)",
                      border: "1px dashed rgba(107,112,133,0.45)",
                      padding: "14px 22px",
                      fontWeight: 500,
                      fontSize: 14,
                      letterSpacing: "0.02em",
                      cursor: "not-allowed",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#6B7085">
                      <path d="M12 3C6.5 3 2 6.5 2 10.7c0 2.7 1.8 5.1 4.5 6.5-.1.5-.9 3.4-1 3.6 0 0 0 .2.1.2.1.1.2 0 .2 0 .3 0 3.6-2.3 4.2-2.7.6.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.7C22 6.5 17.5 3 12 3z" />
                    </svg>
                    카카오 채널 개설 예정
                  </span>
                </div>

                <div
                  style={{
                    padding: 40,
                    background: "var(--navy-800)",
                    color: "#EFE9DA",
                    border: "1px solid rgba(184,153,104,0.4)",
                  }}
                >
                  <span className="eyebrow" style={{ color: "var(--gold-400)" }}>
                    Privacy
                  </span>
                  <h4
                    className="font-myeongjo"
                    style={{
                      fontWeight: 600,
                      fontSize: 20,
                      margin: "20px 0 14px",
                      letterSpacing: "-0.01em",
                      color: "#F6EED9",
                    }}
                  >
                    민감한 문의는
                    <br />
                    비공개로 처리됩니다
                  </h4>
                  <p style={{ fontSize: 14, color: "#C9C2AE", lineHeight: 1.8 }}>
                    제사 · 봉안 · 천도재 관련 문의는 종교적 신념에 관한 민감정보로 분류되어 엄격히 비공개
                    관리되며, 상담 외 용도로 사용되지 않습니다.
                  </p>
                </div>
              </aside>

              {/* Right — coming soon notice */}
              <div
                className="mt-10 lg:mt-0"
                style={{
                  background: "linear-gradient(180deg, var(--ivory) 0%, var(--ivory-2) 100%)",
                  border: "1px solid var(--line-gold)",
                  padding: "80px 60px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 18,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    width: 36,
                    height: 36,
                    borderTop: "1px solid var(--gold-500)",
                    borderLeft: "1px solid var(--gold-500)",
                  }}
                />
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    width: 36,
                    height: 36,
                    borderBottom: "1px solid var(--gold-500)",
                    borderRight: "1px solid var(--gold-500)",
                  }}
                />
                <div
                  className="font-myeongjo"
                  style={{
                    fontSize: 90,
                    fontWeight: 500,
                    color: "var(--gold-500)",
                    letterSpacing: "0.12em",
                    lineHeight: 1,
                  }}
                >
                  準備中
                </div>
                <div
                  style={{
                    width: 56,
                    height: 1,
                    background: "var(--gold-500)",
                  }}
                />
                <div
                  className="font-latin"
                  style={{
                    fontSize: 14,
                    color: "var(--gold-600)",
                    letterSpacing: "0.4em",
                  }}
                >
                  OPENING SOON
                </div>
                <p
                  className="font-myeongjo"
                  style={{
                    fontSize: 17,
                    color: "var(--ink-soft)",
                    lineHeight: 1.95,
                    maxWidth: 520,
                    margin: "8px 0 0",
                  }}
                >
                  안심제사의 상담 신청 시스템은 현재 마지막 점검 단계에 있습니다.
                  <br />
                  정식 오픈 후 전화 · 카카오 · 온라인 신청을 모두 열어드립니다.
                  <br />
                  <br />
                  그 전까지는 사찰 안내와 서비스 정보만 살펴보실 수 있습니다.
                </p>
                <div
                  className="flex flex-wrap justify-center"
                  style={{ gap: 32, marginTop: 16 }}
                >
                  <Link
                    href="/temples"
                    className="font-myeongjo"
                    style={{
                      fontSize: 14,
                      color: "var(--navy-800)",
                      borderBottom: "1px solid var(--gold-500)",
                      paddingBottom: 4,
                      letterSpacing: "0.05em",
                      textDecoration: "none",
                    }}
                  >
                    사찰 살펴보기 ·→
                  </Link>
                  <Link
                    href="/services"
                    className="font-myeongjo"
                    style={{
                      fontSize: 14,
                      color: "var(--navy-800)",
                      borderBottom: "1px solid var(--gold-500)",
                      paddingBottom: 4,
                      letterSpacing: "0.05em",
                      textDecoration: "none",
                    }}
                  >
                    서비스 살펴보기 ·→
                  </Link>
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
