"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: "rgba(15, 26, 46, 0.92)",
        backdropFilter: "saturate(140%) blur(10px)",
        WebkitBackdropFilter: "saturate(140%) blur(10px)",
        borderColor: "rgba(184,153,104,0.18)",
        color: "#EFE9DA",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3.5 no-underline">
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
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { href: "/temples", label: "사찰 안내" },
            { href: "/services", label: "서비스" },
            { href: "/guide", label: "제사 가이드" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium py-1.5 transition-colors"
              style={{ color: "#DDD6C2", letterSpacing: "0.02em" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 transition-colors"
            style={{
              border: "1px solid var(--gold-500)",
              padding: "10px 22px",
              color: "var(--gold-400)",
              fontSize: 14,
              letterSpacing: "0.04em",
            }}
          >
            무료 상담 신청
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl"
          style={{ color: "var(--gold-400)" }}
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: "var(--navy-900)",
            borderTop: "1px solid rgba(184,153,104,0.2)",
            color: "#DDD6C2",
          }}
        >
          <Link href="/temples" onClick={() => setOpen(false)}>
            사찰 안내
          </Link>
          <Link href="/services" onClick={() => setOpen(false)}>
            서비스
          </Link>
          <Link href="/guide" onClick={() => setOpen(false)}>
            제사 가이드
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{ color: "var(--gold-400)" }}
            className="font-bold"
          >
            무료 상담 신청
          </Link>
        </div>
      )}
    </header>
  );
}
