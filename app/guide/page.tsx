"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articles = [
  {
    slug: "jesa-wital",
    category: "제사 위탁",
    title: "제사를 절에 맡기면 어떻게 진행되나요?",
    desc: "영구위탁 제사의 전 과정을 쉽게 설명해드립니다. 계약부터 매년 기일 진행까지 한눈에 확인하세요.",
    readTime: "3분",
  },
  {
    slug: "49jae-biyong",
    category: "49재",
    title: "49재 비용 총정리 — 얼마나 드나요?",
    desc: "규모별, 사찰별 49재 비용을 투명하게 공개합니다. 절충형 진행 방법도 안내드립니다.",
    readTime: "4분",
  },
  {
    slug: "chundojae-timing",
    category: "천도재",
    title: "천도재는 언제 지내야 할까요?",
    desc: "천도재가 필요한 구체적인 상황과 진행 방식을 알아봅니다. 49재와의 차이점도 정리했습니다.",
    readTime: "4분",
  },
  {
    slug: "jesa-history",
    category: "제사 문화",
    title: "제사는 왜 지내는 걸까요? — 유교와 제사의 역사",
    desc: "고려 말부터 조선시대까지 이어진 제사 문화의 기원과 의미를 쉽게 풀어드립니다.",
    readTime: "5분",
  },
  {
    slug: "bonandang",
    category: "납골봉안당",
    title: "납골봉안당, 사찰 봉안당이 왜 좋을까요?",
    desc: "일반 납골당과 사찰 봉안당의 차이점. 제사와 봉안을 한 곳에서 해결하는 방법을 안내합니다.",
    readTime: "3분",
  },
  {
    slug: "49jae-meaning",
    category: "49재",
    title: "49일, 왜 49일인가요? — 불교의 49재 의미",
    desc: "7번의 7일 심판, 중유의 개념. 불교에서 49재를 지내는 철학적 이유를 쉽게 설명합니다.",
    readTime: "5분",
  },
];

const categories = ["전체", "제사 문화", "제사 위탁", "49재", "천도재", "납골봉안당"];

export default function GuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredArticles =
    selectedCategory === "전체"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>GUIDE</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">제사 문화 가이드</h1>
            <p className="text-gray-500 text-lg">제사·49재·천도재에 대해 알기 쉽게 정리했습니다.</p>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-all"
                style={
                  selectedCategory === c
                    ? { backgroundColor: "#2D6A4F", color: "#ffffff", borderColor: "#2D6A4F" }
                    : { borderColor: "#2D6A4F", color: "#2D6A4F" }
                }
              >
                {c}
              </button>
            ))}
          </div>

          {/* 아티클 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/guide/${a.slug}`}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer block"
              >
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: "#F5F0E8", color: "#2D6A4F" }}
                >
                  {a.category}
                </span>
                <h3 className="font-serif font-bold text-base leading-snug mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">읽는 시간 {a.readTime}</span>
                  <span className="text-xs font-semibold" style={{ color: "#2D6A4F" }}>읽기 →</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg">해당 카테고리의 글이 아직 없습니다.</p>
            </div>
          )}

          <div className="text-center mt-14 p-10 rounded-2xl" style={{ backgroundColor: "#F5F0E8" }}>
            <h2 className="font-serif text-2xl font-bold mb-3">더 궁금한 게 있으신가요?</h2>
            <p className="text-gray-600 mb-6">직접 상담을 통해 상황에 맞는 답을 드립니다.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-white font-bold hover:opacity-90 transition-all"
              style={{ backgroundColor: "#2D6A4F" }}
            >
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
