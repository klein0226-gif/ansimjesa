"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isValidKoreanPhone } from "@/lib/phone";
import { KAKAO_CHANNEL_URL } from "@/lib/constants";

function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("02")) {
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    if (digits.length <= 9) return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
  }
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length <= 11) return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

const lblClass =
  "font-latin block mb-2 uppercase";
const lblStyle: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.22em",
  color: "var(--gold-600)",
  fontStyle: "italic",
  fontWeight: 500,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--line)",
  padding: "12px 0",
  color: "var(--ink)",
  fontSize: 15,
  outline: "none",
  transition: "border-color .2s ease",
};

const inputClass =
  "focus:outline-none";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [sensitiveAgreed, setSensitiveAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handlePhoneChange(value: string) {
    const formatted = formatPhoneNumber(value);
    setPhone(formatted);
    if (phoneError && formatted.replace(/\D/g, "").length >= 9) {
      if (isValidKoreanPhone(formatted)) {
        setPhoneError("");
      }
    }
  }

  function validatePhone(): boolean {
    if (!phone.trim()) {
      setPhoneError("연락처를 입력해주세요.");
      return false;
    }
    if (!isValidKoreanPhone(phone)) {
      setPhoneError("올바른 전화번호 형식이 아닙니다. (예: 010-0000-0000)");
      return false;
    }
    setPhoneError("");
    return true;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (!validatePhone()) {
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, message, privacyAgreed, sensitiveAgreed }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "요청에 실패했습니다.");
      }

      setStatus("success");
      setName("");
      setPhone("");
      setPhoneError("");
      setService("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "오류가 발생했습니다.");
    }
  }

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
            <span className="eyebrow">Free Consultation</span>
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
              <span className="font-latin" style={{ color: "var(--gold-400)", fontStyle: "italic" }}>
                24시간 내 연락드립니다.
              </span>
            </h1>
            <p style={{ color: "#C9C2AE", fontSize: 17, lineHeight: 1.9, maxWidth: 640 }}>
              어떤 서비스가 맞을지 고민되실 때, 비용이 궁금하실 때, 절차가 헷갈리실 때 — 전문 상담원이 친절하게
              안내해 드립니다. 상담은 전액 무료이며 비공개로 진행됩니다.
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
                      color: "var(--gold-600)",
                      letterSpacing: "0.02em",
                      margin: "8px 0 6px",
                    }}
                  >
                    상담 번호 준비 중
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-mute)", lineHeight: 1.9 }}>
                    평일 09:00 – 19:00
                    <br />
                    토요일 10:00 – 15:00
                    <br />
                    일요일 · 공휴일 휴무
                  </div>
                  <a
                    href={KAKAO_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 mt-6"
                    style={{
                      background: "#FEE500",
                      color: "#3C1E1E",
                      padding: "14px 22px",
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: "0.02em",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#3C1E1E">
                      <path d="M12 3C6.5 3 2 6.5 2 10.7c0 2.7 1.8 5.1 4.5 6.5-.1.5-.9 3.4-1 3.6 0 0 0 .2.1.2.1.1.2 0 .2 0 .3 0 3.6-2.3 4.2-2.7.6.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.7C22 6.5 17.5 3 12 3z" />
                    </svg>
                    카카오톡으로 빠른 상담
                  </a>
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

              {/* Right — form */}
              <div
                className="mt-10 lg:mt-0"
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  padding: "56px 40px",
                }}
              >
                {status === "success" ? (
                  <div className="text-center py-10">
                    <div
                      className="mx-auto mb-6 grid place-items-center font-myeongjo font-bold"
                      style={{
                        width: 72,
                        height: 72,
                        border: "1px solid var(--gold-500)",
                        color: "var(--gold-600)",
                        fontSize: 28,
                      }}
                      aria-hidden
                    >
                      安
                    </div>
                    <h2
                      className="font-myeongjo"
                      style={{
                        fontWeight: 600,
                        fontSize: 28,
                        color: "var(--gold-600)",
                        marginBottom: 12,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      접수 완료
                    </h2>
                    <p style={{ color: "var(--ink-soft)", lineHeight: 1.9, marginBottom: 32 }}>
                      24시간 안에 연락드립니다.
                      <br />
                      고맙습니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => setStatus("idle")}
                        style={{
                          padding: "16px 28px",
                          background: "var(--navy-800)",
                          color: "var(--gold-400)",
                          border: "1px solid var(--gold-500)",
                          fontWeight: 600,
                          fontSize: 14,
                          letterSpacing: "0.1em",
                        }}
                      >
                        추가 문의하기
                      </button>
                      <a
                        href={KAKAO_CHANNEL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                        style={{
                          padding: "16px 28px",
                          background: "#FEE500",
                          color: "#3C1E1E",
                          fontWeight: 700,
                          fontSize: 14,
                          letterSpacing: "0.02em",
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#3C1E1E">
                          <path d="M12 3C6.5 3 2 6.5 2 10.7c0 2.7 1.8 5.1 4.5 6.5-.1.5-.9 3.4-1 3.6 0 0 0 .2.1.2.1.1.2 0 .2 0 .3 0 3.6-2.3 4.2-2.7.6.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.7C22 6.5 17.5 3 12 3z" />
                        </svg>
                        카카오톡 빠른 상담
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="eyebrow">Online Request</span>
                    <h2
                      className="font-myeongjo"
                      style={{
                        fontWeight: 600,
                        fontSize: 32,
                        margin: "20px 0 12px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      상담 신청서
                    </h2>
                    <p
                      style={{
                        color: "var(--ink-soft)",
                        fontSize: 15,
                        lineHeight: 1.8,
                        margin: "0 0 40px",
                        paddingBottom: 32,
                        borderBottom: "1px solid var(--line-gold)",
                      }}
                    >
                      아래 양식에 간단히 작성해 주시면, 24시간 이내 전문 상담원이 연락드립니다.
                    </p>

                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className={lblClass} style={lblStyle}>
                            성함 / Name
                          </label>
                          <input
                            type="text"
                            placeholder="홍길동"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={inputStyle}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={lblClass} style={lblStyle}>
                            연락처 / Contact
                          </label>
                          <input
                            type="tel"
                            placeholder="010-0000-0000"
                            required
                            value={phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            onBlur={validatePhone}
                            style={{
                              ...inputStyle,
                              borderBottomColor: phoneError ? "#b91c1c" : "var(--line)",
                            }}
                            className={inputClass}
                          />
                          {phoneError && (
                            <p style={{ fontSize: 12, color: "#b91c1c", marginTop: 6 }}>{phoneError}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className={lblClass} style={lblStyle}>
                          서비스 / Service
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          style={inputStyle}
                          className={inputClass}
                        >
                          <option value="">선택해 주세요</option>
                          <option>제사 영구위탁</option>
                          <option>납골봉안당</option>
                          <option>사십구재</option>
                          <option>천도재</option>
                          <option>사찰 추천 문의</option>
                          <option>기타 문의</option>
                        </select>
                      </div>
                      <div>
                        <label className={lblClass} style={lblStyle}>
                          문의 내용 / Message
                        </label>
                        <textarea
                          placeholder="궁금하신 내용을 자유롭게 적어주세요. 비공개로 처리됩니다."
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          style={{ ...inputStyle, resize: "none", minHeight: 90 }}
                          className={inputClass}
                        />
                      </div>

                      <div className="flex flex-col gap-3 mt-2">
                        <label className="flex gap-3 items-start cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            checked={privacyAgreed}
                            onChange={(e) => setPrivacyAgreed(e.target.checked)}
                            style={{
                              appearance: "none",
                              WebkitAppearance: "none",
                              width: 16,
                              height: 16,
                              border: "1px solid var(--gold-500)",
                              marginTop: 3,
                              flexShrink: 0,
                              background: privacyAgreed ? "var(--gold-500)" : "transparent",
                              position: "relative",
                              cursor: "pointer",
                            }}
                          />
                          <span style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                            <a
                              href="/privacy"
                              target="_blank"
                              className="underline"
                              style={{ color: "var(--gold-600)" }}
                            >
                              개인정보 처리방침
                            </a>
                            을 읽었으며, 상담 외 용도로 사용되지 않음에 동의합니다.{" "}
                            <em style={{ color: "var(--gold-600)", fontStyle: "normal", fontWeight: 600 }}>
                              (필수)
                            </em>
                          </span>
                        </label>
                        <label className="flex gap-3 items-start cursor-pointer">
                          <input
                            type="checkbox"
                            required
                            checked={sensitiveAgreed}
                            onChange={(e) => setSensitiveAgreed(e.target.checked)}
                            style={{
                              appearance: "none",
                              WebkitAppearance: "none",
                              width: 16,
                              height: 16,
                              border: "1px solid var(--gold-500)",
                              marginTop: 3,
                              flexShrink: 0,
                              background: sensitiveAgreed ? "var(--gold-500)" : "transparent",
                              position: "relative",
                              cursor: "pointer",
                            }}
                          />
                          <span style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.7 }}>
                            제사·봉안 등 종교적 신념에 관한 민감정보 처리에 동의합니다.{" "}
                            <em style={{ color: "var(--gold-600)", fontStyle: "normal", fontWeight: 600 }}>
                              (필수)
                            </em>
                          </span>
                        </label>
                      </div>

                      {status === "error" && (
                        <div
                          style={{
                            padding: 16,
                            background: "#fef2f2",
                            border: "1px solid #fecaca",
                            color: "#b91c1c",
                            fontSize: 14,
                          }}
                        >
                          {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading" || !privacyAgreed || !sensitiveAgreed}
                        className="mt-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          background: "var(--navy-800)",
                          color: "var(--gold-400)",
                          border: "1px solid var(--gold-500)",
                          padding: 20,
                          fontWeight: 600,
                          fontSize: 15,
                          letterSpacing: "0.14em",
                        }}
                      >
                        {status === "loading" ? "전송 중..." : "상담 신청하기 · SUBMIT"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
