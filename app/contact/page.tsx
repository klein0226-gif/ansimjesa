import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
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

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">성함 *</label>
              <input
                type="text"
                placeholder="홍길동"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">연락처 *</label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">서비스 선택</label>
              <select className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors text-gray-600">
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
                className="w-full border border-gray-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#2D6A4F] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-all"
              style={{ backgroundColor: "#2D6A4F" }}
            >
              상담 신청하기
            </button>
          </form>

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
