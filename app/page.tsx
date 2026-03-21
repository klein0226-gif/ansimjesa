import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const temples = [
  {
    name: "도심 가까운 사찰",
    tag: "접근성 최고",
    desc: "서울 도심에서 30분 이내. 대중교통·주차 모두 편리합니다.",
    best: "바쁜 직장인, 고령의 부모님을 모시는 분",
    emoji: "🚇",
  },
  {
    name: "자연 속 전통 고찰",
    tag: "분위기 최고",
    desc: "수백 년 역사의 전통 사찰. 깊은 산속 고즈넉한 분위기.",
    best: "경건하고 격식 있는 의식을 원하는 분",
    emoji: "🌿",
  },
  {
    name: "현대식 봉안당 사찰",
    tag: "시설 최고",
    desc: "최신식 납골봉안당 시설. 쾌적하고 관리가 철저합니다.",
    best: "납골봉안당과 제사를 함께 원하는 분",
    emoji: "🏛️",
  },
];

const services = [
  { icon: "🙏", title: "제사 영구위탁", desc: "기일마다 절에서 대신 제사를 모셔드립니다. 한 번 계약으로 영구히 안심하세요." },
  { icon: "⚱️", title: "납골봉안당", desc: "쾌적하고 관리 철저한 사찰 봉안당. 안치부터 참배까지 정성껏 모십니다." },
  { icon: "🪔", title: "49재", desc: "돌아가신 후 49일간의 영혼 여정을 스님과 함께 정성으로 모십니다." },
  { icon: "🌸", title: "천도재", desc: "꿈에 자주 나타나시거나 집안에 불운이 반복된다면 천도재로 해결하세요." },
];

const steps = [
  { step: "01", title: "무료 상담", desc: "전화 또는 문의 양식으로 편하게 연락주세요." },
  { step: "02", title: "사찰 추천", desc: "상황에 맞는 사찰을 1:1로 추천해드립니다." },
  { step: "03", title: "계약 체결", desc: "원하시는 사찰과 서비스로 계약을 진행합니다." },
  { step: "04", title: "안심", desc: "이제 걱정 없이 맡겨두세요. 저희가 챙깁니다." },
];

const guides = [
  { title: "제사를 절에 맡기면 어떻게 진행되나요?", desc: "영구위탁 제사의 전 과정을 쉽게 설명해드립니다." },
  { title: "49재 비용 총정리 — 얼마나 드나요?", desc: "규모별, 사찰별 49재 비용을 투명하게 공개합니다." },
  { title: "천도재는 언제 지내야 할까요?", desc: "천도재가 필요한 상황과 효과를 알아봅니다." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 히어로 */}
        <section
          className="min-h-screen flex items-center justify-center text-center px-6 pt-16"
          style={{ background: "linear-gradient(160deg, #F5F0E8 0%, #ffffff 60%)" }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-medium tracking-widest mb-6" style={{ color: "#2D6A4F" }}>
              🪷 ANSIMJESA
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "#1A1A1A" }}>
              일 년에 단 하루,<br />
              <span style={{ color: "#2D6A4F" }}>기다리고 계십니다.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
              바쁜 일상 속 제사 걱정, 안심제사가 대신 챙겨드립니다.<br />
              전국 계약 사찰과 연결해 드리는 제사 위탁 전문 서비스입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg transition-all hover:opacity-90"
                style={{ backgroundColor: "#2D6A4F" }}
              >
                무료 상담 신청하기
              </Link>
              <Link
                href="/temples"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-all hover:bg-[#2D6A4F] hover:text-white"
                style={{ borderColor: "#2D6A4F", color: "#2D6A4F" }}
              >
                사찰 살펴보기
              </Link>
            </div>
          </div>
        </section>

        {/* 신뢰 지표 */}
        <section className="py-12 border-y border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-6 text-center">
            {[
              { num: "상담 무료", sub: "부담 없이 문의하세요" },
              { num: "원스톱", sub: "제사·49재·천도재·봉안당" },
              { num: "1:1 매칭", sub: "상황에 맞는 사찰 추천" },
            ].map((item) => (
              <div key={item.num}>
                <p className="font-serif text-2xl md:text-3xl font-bold" style={{ color: "#2D6A4F" }}>{item.num}</p>
                <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 서비스 4종 */}
        <section className="py-24 px-6" style={{ backgroundColor: "#F5F0E8" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>SERVICES</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">안심제사가 제공하는 서비스</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-serif text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 절 비교 카드 */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>TEMPLES</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">어느 사찰이 나에게 맞을까요?</h2>
              <p className="text-gray-500 mt-3">각 사찰마다 특별한 장점이 있습니다. 상황에 맞는 곳을 골라보세요.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {temples.map((t) => (
                <div key={t.name} className="rounded-2xl border-2 border-gray-100 p-7 hover:border-[#2D6A4F] transition-all hover:shadow-lg">
                  <div className="text-4xl mb-4">{t.emoji}</div>
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{ backgroundColor: "#2D6A4F", color: "white" }}
                  >
                    {t.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold mb-2">{t.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.desc}</p>
                  <p className="text-xs text-gray-400">
                    <span className="font-semibold" style={{ color: "#2D6A4F" }}>이런 분께 추천:</span> {t.best}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full text-white font-bold shadow-md hover:opacity-90 transition-all"
                style={{ backgroundColor: "#2D6A4F" }}
              >
                어느 사찰이 맞는지 물어보기
              </Link>
            </div>
          </div>
        </section>

        {/* 이용 프로세스 */}
        <section className="py-24 px-6" style={{ backgroundColor: "#F5F0E8" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>HOW IT WORKS</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">이용 방법</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                    style={{ backgroundColor: "#2D6A4F" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 상담 신청 폼 */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>CONTACT</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">무료 상담 신청</h2>
              <p className="text-gray-500 mt-3">24시간 내 연락드립니다.</p>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="성함"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors"
              />
              <input
                type="tel"
                placeholder="연락처 (010-0000-0000)"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors"
              />
              <select className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors text-gray-600">
                <option value="">서비스 선택</option>
                <option>제사 영구위탁</option>
                <option>납골봉안당</option>
                <option>49재</option>
                <option>천도재</option>
                <option>기타 문의</option>
              </select>
              <textarea
                placeholder="문의 내용을 자유롭게 적어주세요."
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors resize-none"
              />
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy-agree-main"
                    className="mt-1 w-4 h-4 accent-[#2D6A4F]"
                    required
                  />
                  <label htmlFor="privacy-agree-main" className="text-sm text-gray-600 leading-relaxed">
                    <a href="/privacy" target="_blank" className="underline font-medium" style={{ color: "#2D6A4F" }}>
                      개인정보 처리방침
                    </a>
                    을 읽었으며, 상담 목적의 개인정보 수집·이용에 동의합니다. (필수)
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="sensitive-agree-main"
                    className="mt-1 w-4 h-4 accent-[#2D6A4F]"
                    required
                  />
                  <label htmlFor="sensitive-agree-main" className="text-sm text-gray-600 leading-relaxed">
                    제사·봉안 등 종교적 신념에 관한 민감정보 처리에 별도 동의합니다. (필수)
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-all"
                style={{ backgroundColor: "#2D6A4F" }}
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </section>

        {/* 가이드 콘텐츠 */}
        <section className="py-24 px-6" style={{ backgroundColor: "#F5F0E8" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>GUIDE</p>
              <h2 className="font-serif text-3xl font-bold">제사 문화 가이드</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guides.map((g) => (
                <Link
                  href="/guide"
                  key={g.title}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif font-bold text-base mb-2 leading-snug">{g.title}</h3>
                  <p className="text-gray-500 text-sm">{g.desc}</p>
                  <p className="text-xs mt-4 font-semibold" style={{ color: "#2D6A4F" }}>자세히 보기 →</p>
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
