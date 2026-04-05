import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "거창 마애사 — 안심제사 사찰 안내",
  description: "김해 시내 근교의 아담하고 정갈한 사찰. 정묵 스님이 정성스럽게 제사를 모십니다.",
};

export default function MaesaPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/temples" className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">← 사찰 목록으로</Link>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">🗿 거창 마애사</h1>
          <p className="text-gray-500 text-lg mb-2">📍 경남 거창군 (가야산 국립공원 인근)</p>
          <p className="text-gray-500 mb-8">🙏 주지: 정묵 스님 — 마애불 보존·홍보, 소박한 법문, 명상 프로그램</p>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold mb-4">사찰 소개</h2>
            <p className="text-gray-700 leading-relaxed">김해 시내에서 가까운 아담하고 정갈한 사찰입니다. 바쁜 일상 속에서도 부담 없이 방문할 수 있으며, 경내가 잘 가꿔져 조용히 산책하기에도 좋습니다. 정묵 스님이 지역 주민들과 소통하며 정성스럽게 제사를 모시고 계십니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border-2 border-green-100 p-6">
              <h3 className="font-bold text-lg mb-4" style={{ color: "#2D6A4F" }}>👍 이런 점이 좋습니다</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 마애불상 — 지방문화재</li>
                <li>✓ 깊은 산속 진정한 고요함</li>
                <li>✓ 자연과 완전히 동화된 분위기</li>
                <li>✓ 역사적·문화적 가치</li>
                <li>✓ 명상 프로그램 운영</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-orange-100 p-6">
              <h3 className="font-bold text-lg mb-4 text-orange-600">⚠️ 참고하세요</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 접근성이 매우 떨어집니다 (좁은 산길, 자가용 필수)</li>
                <li>• 매우 작은 규모의 암자입니다</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-gray-100 p-8 mb-8">
            <h3 className="font-serif text-xl font-bold mb-4">제공 서비스</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl mb-2">🕯️</p>
                <p className="font-bold">기제사</p>
                <p className="text-sm text-gray-500">기일에 맞춘 전통 제사</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl mb-2">🌸</p>
                <p className="font-bold">추모제</p>
                <p className="text-sm text-gray-500">특별한 날 고인 추모</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl mb-2">📿</p>
                <p className="font-bold">천도제</p>
                <p className="text-sm text-gray-500">고인의 영혼 천도</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-8 mb-8" style={{ backgroundColor: "#2D6A4F10" }}>
            <h3 className="font-serif text-xl font-bold mb-2">비용 안내</h3>
            <p className="text-2xl font-bold" style={{ color: "#2D6A4F" }}>제사 위탁 연 30만원 / 영구위탁 150만원</p>
            <p className="text-sm text-gray-500 mt-2">이런 분께 추천: 격식과 의미를 중시하는 분, 특별한 추모를 원하는 분</p>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-block px-8 py-4 rounded-full text-white font-bold shadow-md hover:opacity-90 transition-all" style={{ backgroundColor: "#2D6A4F" }}>
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
