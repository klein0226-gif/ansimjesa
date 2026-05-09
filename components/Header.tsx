"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/temples", label: "사찰 안내" },
  { href: "/services", label: "서비스" },
  { href: "/#guide", label: "제사 가이드" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while mobile overlay is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
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
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 h-[64px] md:h-[80px] flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3.5 no-underline"
            onClick={() => setOpen(false)}
          >
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
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-[14px] font-medium py-1.5"
                style={{ color: "#DDD6C2", letterSpacing: "0.02em" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="nav-cta ml-2 text-[14px]"
            >
              무료 상담 신청
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-2xl relative z-[60]"
            style={{ color: "var(--gold-400)" }}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay menu */}
      {open && (
        <div className="mobile-menu md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              border: "1px solid var(--gold-500)",
              padding: "14px 32px",
              color: "var(--gold-400)",
              fontFamily: "var(--font-serif-ko)",
              fontSize: 16,
              letterSpacing: "0.04em",
            }}
          >
            무료 상담 신청
          </Link>
        </div>
      )}
    </>
  );
}
