"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🪷</span>
          <span className="font-serif text-xl font-bold" style={{ color: "#2D6A4F" }}>
            안심제사
          </span>
        </Link>

        {/* PC 메뉴 */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/temples" className="hover:text-[#2D6A4F] transition-colors">사찰 안내</Link>
          <Link href="/services" className="hover:text-[#2D6A4F] transition-colors">서비스</Link>
          <Link href="/guide" className="hover:text-[#2D6A4F] transition-colors">제사 가이드</Link>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-white font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#2D6A4F" }}
          >
            무료 상담 신청
          </Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="/temples" onClick={() => setOpen(false)}>사찰 안내</Link>
          <Link href="/services" onClick={() => setOpen(false)}>서비스</Link>
          <Link href="/guide" onClick={() => setOpen(false)}>제사 가이드</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-[#2D6A4F] font-bold">
            무료 상담 신청
          </Link>
        </div>
      )}
    </header>
  );
}
