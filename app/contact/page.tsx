"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type FormState = {
  name: string;
  phone: string;
  service: string;
  schedule: string;
  message: string;
  privacyAgreed: boolean;
  sensitiveAgreed: boolean;
};

const INITIAL: FormState = {
  name: "",
  phone: "",
  service: "",
  schedule: "",
  message: "",
  privacyAgreed: false,
  sensitiveAgreed: false,
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.phone.trim()) {
      setError("성함과 연락처는 필수입니다.");
      return;
    }
    if (!form.privacyAgreed || !form.sensitiveAgreed) {
      setError("개인정보 처리방침 및 민감정보 처리에 모두 동의해 주세요.");
      return;
    }

    setSubmitting(true);
    try {
      // 희망 일정과 추가 메시지를 message로 합쳐 전송 (API 스키마 유지)
      const composedMessage = [
        form.schedule ? `희망 일정: ${form.schedule}` : "",
        form.message ? `메시지: ${form.message}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: form.service,
          message: composedMessage,
          privacyAgreed: form.privacyAgreed,
          sensitiveAgreed: form.sensitiveAgreed,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
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
                전문 상담원이 안내해 드립니다.
              </span>
            </h1>
            <p style={{ color: "#C9C2AE", fontSize: 17, lineHeight: 1.9, maxWidth: 640 }}>
              어떤 서비스가 맞을지 고민되실 때, 비용이 궁금하실 때, 절차가 헷갈리실 때 — 친절하게 안내해 드립니다.
              상담은 전액 무료이며 비공개로 진행됩니다.
            </p>
          </div>
        </section>

        {/* Contact body — 좌 사이드 / 우 폼 */}
        <section style={{ padding: "0" }}>
          <div
            className="max-w-[1240px] mx-auto px-6 md:px-10 grid gap-12 lg:gap-20 items-start"
            style={{
              gridTemplateColumns: "minmax(0, 1fr)",
              padding: "100px 24px",
            }}
          >
            <div className="lg:grid lg:gap-20 lg:items-start lg:grid-cols-[1fr_1.2fr]">
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
                      fontSize: 26,
                      color: "var(--gold-500)",
                      letterSpacing: "0.04em",
                      opacity: 0.85,
                      margin: "8px 0 6px",
                    }}
                  >
                    개설 준비 중
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-mute)", lineHeight: 1.9 }}>
                    정식 오픈 시 번호와
                    <br />
                    카카오 채널을
                    <br />
                    안내드리겠습니다.
                  </div>
                  <span
                    aria-disabled="true"
                    aria-label="카카오 채널 개설 준비 중"
                    className="inline-flex items-center gap-2.5 mt-6"
                    style={{
                      background: "rgba(107, 112, 133, 0.12)",
                      color: "var(--ink-mute, #6B7085)",
                      border: "1px dashed rgba(107,112,133,0.45)",
                      padding: "12px 20px",
                      fontWeight: 500,
                      fontSize: 13,
                      letterSpacing: "0.02em",
                      cursor: "not-allowed",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#6B7085">
                      <path d="M12 3C6.5 3 2 6.5 2 10.7c0 2.7 1.8 5.1 4.5 6.5-.1.5-.9 3.4-1 3.6 0 0 0 .2.1.2.1.1.2 0 .2 0 .3 0 3.6-2.3 4.2-2.7.6.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.7C22 6.5 17.5 3 12 3z" />
                    </svg>
                    카카오 채널 · 개설 준비 중
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
                  <p style={{ fontSize: 14, color: "#C9C2AE", lineHeight: 1.8, margin: 0 }}>
                    제사 · 봉안 · 천도재 관련 문의는 종교적 신념에 관한 민감정보로 분류되어
                    엄격히 비공개 관리되며, 상담 외 용도로 사용되지 않습니다.
                  </p>
                </div>
              </aside>

              {/* Right — form */}
              <div
                className="mt-10 lg:mt-0"
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  padding: "56px 32px",
                }}
              >
                {submitted ? (
                  <SuccessCard onReset={() => { setForm(INITIAL); setSubmitted(false); }} />
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <span className="eyebrow">상담 신청</span>
                    <h2
                      className="font-myeongjo"
                      style={{
                        fontWeight: 600,
                        fontSize: 28,
                        letterSpacing: "-0.01em",
                        margin: "12px 0 4px",
                      }}
                    >
                      문의 양식
                    </h2>
                    <p
                      style={{
                        color: "var(--ink-soft)",
                        fontSize: 14,
                        lineHeight: 1.8,
                        margin: "0 0 20px",
                        paddingBottom: 24,
                        borderBottom: "1px solid var(--line-gold)",
                      }}
                    >
                      입력하신 내용은 상담 외 용도로 사용되지 않습니다. 24시간 이내에 담당자가 연락드립니다.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field
                        label="이름"
                        required
                        value={form.name}
                        onChange={(v) => update("name", v)}
                        placeholder="홍길동"
                        autoComplete="name"
                      />
                      <Field
                        label="연락처"
                        required
                        value={form.phone}
                        onChange={(v) => update("phone", v)}
                        placeholder="010-0000-0000"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </div>

                    <div>
                      <Label>희망 서비스</Label>
                      <select
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        style={selectStyle}
                      >
                        <option value="">선택 안 함</option>
                        <option value="49재">사십구재</option>
                        <option value="납골봉안">납골봉안당</option>
                        <option value="영구위패">영구 위패</option>
                        <option value="상담만">상담만 받고 싶어요</option>
                      </select>
                    </div>

                    <Field
                      label="희망 일정"
                      value={form.schedule}
                      onChange={(v) => update("schedule", v)}
                      placeholder="예: 다음 주 평일 오후, 또는 5월 중"
                    />

                    <div>
                      <Label>추가 메시지 (선택)</Label>
                      <textarea
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="궁금하신 내용을 자유롭게 적어주세요."
                        rows={4}
                        style={{ ...inputStyle, resize: "none", minHeight: 100 }}
                      />
                    </div>

                    <div className="flex flex-col gap-3" style={{ marginTop: 8 }}>
                      <CheckboxRow
                        checked={form.privacyAgreed}
                        onChange={(v) => update("privacyAgreed", v)}
                        label={
                          <>
                            <Link href="/privacy" className="underline" style={{ color: "var(--gold-600)" }}>
                              개인정보 처리방침
                            </Link>
                            에 동의합니다. <span style={{ color: "var(--gold-600)" }}>*</span>
                          </>
                        }
                      />
                      <CheckboxRow
                        checked={form.sensitiveAgreed}
                        onChange={(v) => update("sensitiveAgreed", v)}
                        label={
                          <>
                            제사·봉안·천도재 관련 문의가 종교적 신념에 관한 민감정보임을 이해하며,
                            상담 목적으로만 처리되는 데 동의합니다. <span style={{ color: "var(--gold-600)" }}>*</span>
                          </>
                        }
                      />
                    </div>

                    {error && (
                      <div
                        style={{
                          color: "#A4341A",
                          fontSize: 13.5,
                          background: "rgba(164, 52, 26, 0.06)",
                          border: "1px solid rgba(164, 52, 26, 0.25)",
                          padding: "12px 14px",
                        }}
                      >
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        marginTop: 12,
                        background: submitting ? "rgba(184,153,104,0.55)" : "var(--navy-800)",
                        color: "var(--gold-400)",
                        border: "1px solid var(--gold-500)",
                        padding: "18px 24px",
                        fontWeight: 600,
                        fontSize: 15,
                        letterSpacing: "0.14em",
                        cursor: submitting ? "wait" : "pointer",
                        transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {submitting ? "전송 중…" : "상담 신청 보내기"}
                    </button>
                  </form>
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

/* ---- Helpers ---- */

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-serif-en)",
  fontStyle: "italic",
  color: "var(--gold-600)",
  fontSize: 11,
  letterSpacing: "0.22em",
  marginBottom: 8,
  textTransform: "uppercase",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--line)",
  padding: "12px 0",
  color: "var(--ink)",
  fontFamily: "inherit",
  fontSize: 15,
  outline: "none",
  transition: "border-color 200ms ease",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none",
};

function Label({ children }: { children: React.ReactNode }) {
  return <label style={labelStyle}>{children}</label>;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  autoComplete,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <Label>
        {label} {required && <span style={{ color: "var(--gold-600)" }}>*</span>}
      </Label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--gold-500)")}
        onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--line)")}
      />
    </div>
  );
}

function CheckboxRow({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: React.ReactNode;
}) {
  return (
    <label
      className="flex items-start gap-3"
      style={{ fontSize: 13, color: "var(--ink-soft)", cursor: "pointer", lineHeight: 1.65 }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{
          appearance: "none",
          width: 16,
          height: 16,
          border: "1px solid var(--gold-500)",
          background: checked ? "var(--gold-500)" : "transparent",
          marginTop: 3,
          flexShrink: 0,
          position: "relative",
          cursor: "pointer",
        }}
      />
      <span>{label}</span>
    </label>
  );
}

function SuccessCard({ onReset }: { onReset: () => void }) {
  return (
    <div
      className="text-center"
      style={{
        padding: "60px 28px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
      }}
    >
      <div
        aria-hidden
        style={{
          width: 72,
          height: 72,
          border: "1px solid var(--gold-500)",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          color: "var(--gold-500)",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3
        className="font-myeongjo"
        style={{ fontWeight: 600, fontSize: 26, letterSpacing: "-0.01em", margin: 0 }}
      >
        상담 신청이 접수되었습니다
      </h3>
      <p style={{ color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.85, maxWidth: 420, margin: 0 }}>
        24시간 이내에 담당자가 연락드리겠습니다. 입력하신 내용은 비공개로 안전하게 보관됩니다.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Link
          href="/temples"
          className="font-myeongjo"
          style={{
            fontSize: 14,
            color: "var(--navy-800)",
            borderBottom: "1px solid var(--gold-500)",
            paddingBottom: 4,
            letterSpacing: "0.05em",
          }}
        >
          사찰 살펴보기 →
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
          }}
        >
          서비스 살펴보기 →
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="font-myeongjo"
          style={{
            fontSize: 14,
            color: "var(--ink-mute)",
            background: "transparent",
            border: "none",
            borderBottom: "1px solid var(--ink-mute)",
            paddingBottom: 4,
            letterSpacing: "0.05em",
            cursor: "pointer",
          }}
        >
          새 문의 작성
        </button>
      </div>
    </div>
  );
}
