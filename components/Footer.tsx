import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy-deep, #0A1220)",
        color: "#B8B09A",
        borderTop: "1px solid rgba(184,153,104,0.2)",
        padding: "80px 0 40px",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div
          className="grid gap-10 md:gap-14 pb-12 md:pb-14 grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr]"
          style={{
            borderBottom: "1px solid rgba(184,153,104,0.2)",
          }}
        >
          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-3.5">
              <span
                className="grid place-items-center font-myeongjo font-bold"
                style={{
                  width: 38,
                  height: 38,
                  border: "1px solid var(--gold-500)",
                  color: "var(--gold-400)",
                  fontSize: 17,
                  letterSpacing: "-0.02em",
                }}
                aria-hidden
              >
                安
              </span>
              <span className="flex flex-col leading-none">
                <span
                  className="font-myeongjo font-semibold"
                  style={{ fontSize: 20, letterSpacing: "0.02em", color: "#F6EED9" }}
                >
                  안심제사
                </span>
                <span
                  className="font-latin mt-1.5"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.32em",
                    color: "var(--gold-500)",
                  }}
                >
                  ANSIMJESA
                </span>
              </span>
            </div>
            <p
              className="mt-5"
              style={{ fontSize: 14, lineHeight: 1.9, color: "#8D8672" }}
            >
              바쁜 일상 속 제사 걱정,
              <br />
              안심제사가 대신 정성을 다해 챙겨드립니다.
              <br />
              계약 사찰 · 영구위탁 · 영구봉안 안내.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5
              className="font-myeongjo mb-6"
              style={{
                color: "var(--gold-400)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "0.1em",
              }}
            >
              서비스
            </h5>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">사십구재</Link></li>
              <li><Link href="/services" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">납골봉안당</Link></li>
              <li><Link href="/services" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">영구 위패</Link></li>
            </ul>
          </div>

          {/* Temples */}
          <div>
            <h5
              className="font-myeongjo mb-6"
              style={{
                color: "var(--gold-400)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "0.1em",
              }}
            >
              사찰 안내
            </h5>
            <ul className="flex flex-col gap-3">
              <li><Link href="/temples/deokunsa" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">김해 덕운사</Link></li>
              <li><Link href="/temples/suamsa" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">의령 수암사</Link></li>
              <li><Link href="/temples/maesa" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">함안 마애사</Link></li>
              <li><Link href="/temples/baekcheonsa" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">사천 백천사</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              className="font-myeongjo mb-6"
              style={{
                color: "var(--gold-400)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "0.1em",
              }}
            >
              연락
            </h5>
            <ul className="flex flex-col gap-3">
              <li
                className="font-myeongjo"
                style={{
                  color: "var(--gold-500)",
                  fontSize: 16,
                  letterSpacing: "0.04em",
                  opacity: 0.85,
                }}
              >
                개설 준비 중
              </li>
              <li className="text-[13px]" style={{ color: "#8D8672", lineHeight: 1.7 }}>
                정식 오픈 시 전화·카카오
                <br />
                채널을 안내드립니다.
              </li>
              <li><Link href="/contact" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">무료 상담 신청</Link></li>
              <li><Link href="/guide" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">제사 문화 가이드</Link></li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8"
          style={{ fontSize: 12, color: "#7A7360", letterSpacing: "0.04em" }}
        >
          <div>
            © 2026 안심제사 · ansimjesa.co.kr · All rights reserved ·{" "}
            <Link href="/privacy" className="underline hover:text-[color:var(--gold-400)]">
              개인정보 처리방침
            </Link>
          </div>
          <div className="text-[12px]" style={{ color: "#7A7360" }}>
            상담 전액 무료 · 비공개 처리
          </div>
        </div>
      </div>
    </footer>
  );
}
