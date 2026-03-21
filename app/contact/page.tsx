"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [sensitiveAgreed, setSensitiveAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

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
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>CONTACT</p>
            <h1 className="font-serif text-4xl font-bold mb-3">무료 상담 신청</h1>
            <p className="text-gray-500">어떤 서비스든 부담 없이 물어보세요. 24시간 내 연락드립니다.</p>
          </div>

          {status === "success" ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🙏</div>
              <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "#2D6A4F" }}>
                상담 신청이 완료되었습니다
              </h2>
              <p className="text-gray-500 mb-8">24시간 내 연락드리겠습니다. 감사합니다.</p>
              <button
                onClick={() => setStatus("idle")}
                className="px-8 py-3 rounded-full text-white font-bold hover:opacity-90 transition-all"
                style={{ backgroundColor: "#2D6A4F" }}
              >
                추가 문의하기
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">성함 *</label>
                <input
                  type="text"
                  placeholder="홍길동"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">연락처 *</label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">서비스 선택</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors text-gray-600"
                >
                  <option value="">선택해주세요</option>
                  <option>제사 영구위탁</option>
                  <option>납골봉안당</option>
                  <option>49재</option>
                  <option>천도재</option>
                  <option>기타 문의</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                <textarea
                  placeholder="궁금하신 내용을 자유롭게 적어주세요."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors resize-none"
                />
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy-agree"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[#2D6A4F]"
                    required
                  />
                  <label htmlFor="privacy-agree" className="text-sm text-gray-600 leading-relaxed">
                    <a href="/privacy" target="_blank" className="underline font-medium" style={{ color: "#2D6A4F" }}>
                      개인정보 처리방침
                    </a>
                    을 읽었으며, 상담 목적의 개인정보 수집·이용에 동의합니다. (필수)
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="sensitive-agree"
                    checked={sensitiveAgreed}
                    onChange={(e) => setSensitiveAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[#2D6A4F]"
                    required
                  />
                  <label htmlFor="sensitive-agree" className="text-sm text-gray-600 leading-relaxed">
                    제사·봉안 등 종교적 신념에 관한 민감정보 처리에 별도 동의합니다. (필수)
                  </label>
                </div>
              </div>

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !privacyAgreed || !sensitiveAgreed}
                className="w-full py-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-all disabled:opacity-60"
                style={{ backgroundColor: "#2D6A4F" }}
              >
                {status === "loading" ? "전송 중..." : "상담 신청하기"}
              </button>
            </form>
          )}

          <div className="mt-10 p-6 rounded-2xl text-center" style={{ backgroundColor: "#F5F0E8" }}>
            <p className="text-sm text-gray-600">전화 상담을 원하시면 아래로 연락주세요.</p>
            <p className="font-serif text-2xl font-bold mt-2" style={{ color: "#2D6A4F" }}>0000-0000</p>
            <p className="text-xs text-gray-400 mt-1">평일 09:00 ~ 18:00</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
