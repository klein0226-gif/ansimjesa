import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy-900)",
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
              엄선된 계약 사찰 · 영구위탁 · 영구봉안 안내.
            </p>
          </div>

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
              SERVICES
            </h5>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">제사 영구위탁</Link></li>
              <li><Link href="/services" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">납골봉안당</Link></li>
              <li><Link href="/services" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">사십구재</Link></li>
              <li><Link href="/services" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">천도재</Link></li>
            </ul>
          </div>

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
              ABOUT
            </h5>
            <ul className="flex flex-col gap-3">
              <li><Link href="/temples" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">사찰 안내</Link></li>
              <li><Link href="/guide" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">제사 문화 가이드</Link></li>
              <li><Link href="/contact" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">무료 상담 신청</Link></li>
              <li><Link href="/privacy" className="text-[14px] hover:text-[color:var(--gold-400)] transition-colors">개인정보 처리방침</Link></li>
            </ul>
          </div>

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
              CONTACT
            </h5>
            <ul className="flex flex-col gap-3">
              <li
                className="font-myeongjo"
                style={{
                  color: "var(--gold-500)",
                  fontSize: 22,
                  letterSpacing: "0.12em",
                  opacity: 0.75,
                }}
              >
                開設備中
              </li>
              <li
                className="font-latin"
                style={{
                  fontSize: 11,
                  color: "var(--gold-500)",
                  letterSpacing: "0.32em",
                }}
              >
                OPENING SOON
              </li>
              <li className="text-[13px]" style={{ color: "#8D8672", lineHeight: 1.7 }}>
                정식 오픈 시 번호와<br />
                채널을 안내드립니다.
              </li>
              <li className="text-[13px]" style={{ color: "#8D8672" }}>상담 전액 무료</li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8"
          style={{ fontSize: 12, color: "#7A7360", letterSpacing: "0.04em" }}
        >
          <div>
            © 2026 ANSIMJESA · ansimjesa.co.kr · All rights reserved ·{" "}
            <Link href="/privacy" className="underline hover:text-[color:var(--gold-400)]">
              개인정보 처리방침
            </Link>
          </div>
          <div
            className="font-latin"
            style={{ color: "var(--gold-500)", letterSpacing: "0.2em" }}
          >
            KO · EN · 中文
          </div>
        </div>
      </div>
    </footer>
  );
}
