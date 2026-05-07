"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articles = [
  {
    slug: "jesa-wital",
    category: "제사 위탁",
    title: "절에 맡기면 진짜 어떻게 되나요?",
    desc: "계약부터 매년 기일까지, 전 과정 쌩으로 공개합니다.",
    readTime: "3분",
  },
  {
    slug: "49jae-biyong",
    category: "49재",
    title: "49재, 얼마 나와요?",
    desc: "바가지 없는 가격 총정리. 절충형까지 다 안내.",
    readTime: "4분",
  },
  {
    slug: "chundojae-timing",
    category: "천도재",
    title: "꿈에 자꾸 나와요, 천도재 해야 하나요?",
    desc: "해야 할 때와 안 해도 되는 때, 분명히 구분합니다.",
    readTime: "4분",
  },
  {
    slug: "jesa-history",
    category: "제사 문화",
    title: "제사는 대체 왜 지내는 걸까",
    desc: "고려부터 이어진 1000년의 이유. 간단히 말씀드릴게요.",
    readTime: "5분",
  },
  {
    slug: "bonandang",
    category: "납골봉안당",
    title: "일반 납골당 vs 사찰 봉안당",
    desc: "뭐가 다른지, 왜 절이 나은지. 한 방에 정리.",
    readTime: "3분",
  },
  {
    slug: "49jae-meaning",
    category: "49재",
    title: "왜 하필 49일일까",
    desc: "7번의 심판, 중유의 개념. 철학 빠르게 훑기.",
    readTime: "5분",
  },
  {
    slug: "mixed-religion",
    category: "가족 의사결정",
    title: "기독교 집안인데 일부만 제사를 원해요",
    desc: "종교가 다른 가족 사이에서 제사를 어떻게 풀어야 할지 — 흔한 케이스와 선택지를 정리합니다.",
    readTime: "4분",
  },
  {
    slug: "overseas-family",
    category: "가족 의사결정",
    title: "해외 거주 중인데, 부모님 기일은 어떡하죠?",
    desc: "직접 참석이 어려운 자녀가 제사를 챙기는 방법 — 위탁·원격 참배·절충안을 안내합니다.",
    readTime: "4분",
  },
  {
    slug: "sibling-conflict",
    category: "가족 의사결정",
    title: "형제 간 의견이 갈릴 때, 어떻게 정리하나요?",
    desc: "장남이 모든 부담을 지던 시대는 지났습니다. 흔한 갈등 유형과 합의 방법을 차분히 정리합니다.",
    readTime: "5분",
  },
];

const categories = ["전체", "제사 문화", "제사 위탁", "49재", "천도재", "납골봉안당", "가족 의사결정"];

export default function GuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredArticles =
    selectedCategory === "전체"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

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
            <span className="eyebrow">Culture Guide</span>
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
              제사 문화,
              <br />
              <span className="font-latin" style={{ color: "var(--gold-400)", fontStyle: "italic" }}>
                바르게 알려 드립니다.
              </span>
            </h1>
            <p style={{ color: "#C9C2AE", fontSize: 17, lineHeight: 1.9, maxWidth: 640 }}>
              제사가 처음이어도 상관없습니다. 궁금한 거 여기 다 있어요. 제사·49재·천도재·납골봉안까지
              쉽고 투명하게 정리해 드립니다.
            </p>
          </div>
        </section>

        {/* Body */}
        <section style={{ background: "var(--ivory)", padding: "100px 0" }}>
          <div className="max-w-[1240px] mx-auto px-6 md:px-10">
            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-2 justify-center mb-14">
              {categories.map((c) => {
                const selected = selectedCategory === c;
                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className="font-myeongjo transition-colors"
                    style={{
                      padding: "10px 22px",
                      fontSize: 13,
                      letterSpacing: "0.04em",
                      border: selected
                        ? "1px solid var(--navy-800)"
                        : "1px solid var(--line-gold)",
                      background: selected ? "var(--navy-800)" : "var(--paper)",
                      color: selected ? "var(--gold-400)" : "var(--ink-soft)",
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            {/* 아티클 목록 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/guide/${a.slug}`}
                  className="block no-underline transition-colors"
                  style={{
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                    padding: 28,
                  }}
                >
                  <span
                    className="eyebrow"
                    style={{ fontSize: 11, letterSpacing: "0.24em" }}
                  >
                    {a.category}
                  </span>
                  <h3
                    className="font-myeongjo mt-5"
                    style={{
                      fontWeight: 600,
                      fontSize: 19,
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                      color: "var(--ink)",
                      marginBottom: 12,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--ink-soft)",
                      fontSize: 14,
                      lineHeight: 1.8,
                      marginBottom: 22,
                    }}
                  >
                    {a.desc}
                  </p>
                  <div
                    className="flex items-center justify-between pt-3"
                    style={{ borderTop: "1px solid var(--line)" }}
                  >
                    <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>
                      읽는 시간 {a.readTime}
                    </span>
                    <span
                      className="font-latin"
                      style={{ fontSize: 13, color: "var(--gold-600)" }}
                    >
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div
                className="text-center py-16"
                style={{ color: "var(--ink-mute)", fontSize: 14 }}
              >
                해당 분류의 글이 아직 없습니다.
              </div>
            )}

            {/* CTA block */}
            <div
              className="text-center mt-20"
              style={{
                padding: "56px 40px",
                background: "var(--navy-800)",
                color: "#EFE9DA",
                border: "1px solid rgba(184,153,104,0.4)",
              }}
            >
              <span className="eyebrow center" style={{ color: "var(--gold-400)" }}>
                Free Consultation
              </span>
              <h2
                className="font-myeongjo mt-6"
                style={{
                  fontWeight: 500,
                  fontSize: 30,
                  color: "#F6EED9",
                  letterSpacing: "-0.01em",
                  marginBottom: 14,
                }}
              >
                글로 안 풀리는 게 있다면
              </h2>
              <p
                style={{
                  color: "#C9C2AE",
                  fontSize: 15,
                  lineHeight: 1.9,
                  marginBottom: 28,
                }}
              >
                폼 한 장이 가장 빠른 길입니다. 24시간 내 회신드립니다.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3"
                style={{
                  padding: "18px 32px",
                  background: "var(--gold-500)",
                  color: "var(--navy-900)",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.14em",
                  border: "1px solid var(--gold-500)",
                }}
              >
                무료 상담 신청하기 · SUBMIT
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
