import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "합천 수암사 — 안심제사",
  description: "김해 시내 근교의 아담하고 정갈한 사찰. 법웅 스님이 정성스럽게 제사를 모십니다.",
};

export default function SuamsaPage() {
  return (
    <>
      <Header />
      <main className="pt-0 pb-0">
        {/* 히어로 배너 */}
        <div className="relative h-[60vh] min-h-[400px] flex items-end" style={{
          backgroundImage: "url('https://t1.daumcdn.net/cfile/tistory/999120395D10950334')",
          backgroundSize: "cover", backgroundPosition: "center"
        }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 pb-12 w-full">
            <Link href="/temples" className="text-white/60 text-sm hover:text-white mb-4 inline-block">← 사찰 목록</Link>
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#8BC34A" }}>SUAMSA TEMPLE</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-3">합천 수암사</h1>
            <p className="text-white/80 text-lg max-w-xl">호수와 함께하는 평화로운 제사</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* 소개 */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>ABOUT</p>
                <h2 className="font-serif text-3xl font-bold mb-4">사찰 소개</h2>
                <p className="text-gray-600 leading-relaxed mb-4">김해 시내에서 가까운 아담하고 정갈한 사찰입니다. 바쁜 일상 속에서도 부담 없이 방문할 수 있으며, 경내가 잘 가꿔져 조용히 산책하기에도 좋습니다.</p>
                <p className="text-gray-600 leading-relaxed">법웅 스님이 지역 주민들과 소통하며 정성스럽게 제사를 모시고 계십니다. 어린이 불교 교육과 봉사 활동에도 앞장서는 따뜻한 사찰입니다.</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="/temples/suamsa_sub.jpg" alt="suamsa 경내" className="w-full h-[300px] object-cover" />
              </div>
            </div>
          </section>

          {/* 장점 */}
          <section className="mb-16">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>WHY DEOKUNSA</p>
            <h2 className="font-serif text-3xl font-bold mb-8">덕운사를 선택하는 이유</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🚗", title: "접근성 최고", desc: "김해 시내 근교, 주차 편리" },
                { icon: "🌿", title: "정갈한 분위기", desc: "아담하고 잘 가꿔진 경내" },
                { icon: "🙏", title: "법웅 스님 상주", desc: "지역 포교·봉사 활동 활발" },
              ].map((item) => (
                <div key={item.title} className="text-center p-6 rounded-2xl bg-gray-50">
                  <p className="text-4xl mb-3">{item.icon}</p>
                  <p className="font-bold text-lg mb-2">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 서비스 */}
          <section className="mb-16">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>SERVICES</p>
            <h2 className="font-serif text-3xl font-bold mb-8">안심제사 서비스</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "🕯️", name: "기제사", desc: "기일에 맞춰 진행하는 전통 제사. 제물 준비부터 독경까지 모든 절차를 정성껏 모십니다.", time: "약 1시간" },
                { icon: "🌸", name: "추모제", desc: "특별한 날 고인을 추모하는 의식. 헌화와 함께 따뜻한 추모의 시간을 보내실 수 있습니다.", time: "약 40분" },
                { icon: "📿", name: "천도제", desc: "고인의 영혼이 편안히 쉴 수 있도록 올리는 불교 의식. 스님의 정성스러운 독경으로 진행됩니다.", time: "약 1시간 30분" },
              ].map((s) => (
                <div key={s.name} className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#2D6A4F] transition-all">
                  <p className="text-3xl mb-3">{s.icon}</p>
                  <p className="font-bold text-xl mb-2">{s.name}</p>
                  <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
                  <p className="text-xs text-gray-400">소요시간: {s.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 비용 */}
          <section className="mb-16">
            <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "#2D6A4F" }}>
              <p className="text-white/80 text-sm mb-2">PRICING</p>
              <h2 className="font-serif text-3xl font-bold text-white mb-6">비용 안내</h2>
              <div className="flex justify-center gap-8 flex-wrap">
                <div className="bg-white/10 rounded-xl px-8 py-6">
                  <p className="text-white/60 text-sm">연간 위탁</p>
                  <p className="text-white text-3xl font-bold">30만원</p>
                </div>
                <div className="bg-white/10 rounded-xl px-8 py-6">
                  <p className="text-white/60 text-sm">영구 위탁</p>
                  <p className="text-white text-3xl font-bold">150만원</p>
                </div>
              </div>
            </div>
          </section>

          {/* 여행 코스 */}
          <section className="mb-16">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>TRAVEL</p>
            <h2 className="font-serif text-3xl font-bold mb-8">추천 여행 코스</h2>
            <div className="space-y-4">
              {[
                { name: "가야 역사 탐방", route: "덕운사 참배 → 국립김해박물관 → 수로왕릉 → 분성산 산책 → 김해 뒷고기 맛집" },
                { name: "가족 나들이", route: "덕운사 참배 → 김해천문대 (별자리 관측) → 봉하마을 → 장유 카페거리" },
                { name: "부산 연계", route: "덕운사 참배 → 김해공항 근처 맛집 → 부산 해운대 or 광안리 → 저녁 해산물" },
              ].map((c) => (
                <div key={c.name} className="bg-gray-50 rounded-xl p-5">
                  <p className="font-bold mb-1">{c.name}</p>
                  <p className="text-gray-600 text-sm">{c.route}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 위치 */}
          <section className="mb-16">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>LOCATION</p>
            <h2 className="font-serif text-3xl font-bold mb-4">오시는 길</h2>
            <p className="text-gray-600 mb-6">📍 경남 합천군 (합천호 인근)</p>
            <div className="rounded-2xl overflow-hidden border-2 border-gray-100">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52200!2d128.85!3d35.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z64a07ZW0IOuNleybtOyCrA!5e0!3m2!1sko!2skr!4v1" width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>
          </section>

          {/* CTA */}
          <div className="text-center py-8">
            <h2 className="font-serif text-2xl font-bold mb-4">정성스러운 제사, 덕운사에서 시작하세요</h2>
            <Link href="/contact" className="inline-block px-10 py-4 rounded-full text-white font-bold shadow-lg hover:opacity-90 transition-all text-lg" style={{ backgroundColor: "#2D6A4F" }}>
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
