import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2D6A4F" }} className="text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🪷</span>
              <span className="font-serif text-xl font-bold">안심제사</span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              바쁜 일상 속 제사 걱정,<br />안심제사가 대신 챙겨드립니다.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="font-semibold mb-3 text-green-100">서비스</h4>
            <ul className="space-y-2 text-green-200 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">제사 영구위탁</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">납골봉안당 안내</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">49재</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">천도재</Link></li>
            </ul>
          </div>

          {/* 안내 */}
          <div>
            <h4 className="font-semibold mb-3 text-green-100">안내</h4>
            <ul className="space-y-2 text-green-200 text-sm">
              <li><Link href="/temples" className="hover:text-white transition-colors">사찰 안내</Link></li>
              <li><Link href="/guide" className="hover:text-white transition-colors">제사 문화 가이드</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">무료 상담 신청</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">개인정보 처리방침</Link></li>
              <li>
                <a href="tel:0000-0000" className="hover:text-white transition-colors">
                  전화 상담: 0000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-300 text-xs">
          © 2026 안심제사. All rights reserved. | ansimjesa.co.kr |{" "}
          <Link href="/privacy" className="hover:text-white transition-colors underline">개인정보 처리방침</Link>
        </div>
      </div>
    </footer>
  );
}
