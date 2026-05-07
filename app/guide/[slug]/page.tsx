import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const articleMeta: Record<string, { title: string; description: string }> = {
  "jesa-wital": {
    title: "제사를 절에 맡기면 어떻게 진행되나요?",
    description: "영구위탁 제사의 전 과정을 쉽게 설명합니다. 계약부터 매년 기일 진행까지 한눈에 확인하세요.",
  },
  "49jae-biyong": {
    title: "49재 비용 총정리 — 얼마나 드나요?",
    description: "규모별, 사찰별 49재 비용을 투명하게 공개합니다. 절충형 진행 방법도 안내합니다.",
  },
  "chundojae-timing": {
    title: "천도재는 언제 지내야 할까요?",
    description: "천도재가 필요한 구체적인 상황과 진행 방식을 알아봅니다. 49재와의 차이점도 정리했습니다.",
  },
  "jesa-history": {
    title: "제사는 왜 지내는 걸까요? — 유교와 제사의 역사",
    description: "고려 말부터 조선시대까지 이어진 제사 문화의 기원과 의미를 쉽게 풀어드립니다.",
  },
  "bonandang": {
    title: "납골봉안당, 사찰 봉안당이 왜 좋을까요?",
    description: "일반 납골당과 사찰 봉안당의 차이점. 제사와 봉안을 한 곳에서 해결하는 방법을 안내합니다.",
  },
  "49jae-meaning": {
    title: "49일, 왜 49일인가요? — 불교의 49재 의미",
    description: "7번의 7일 심판, 중유의 개념. 불교에서 49재를 지내는 철학적 이유를 쉽게 설명합니다.",
  },
  "mixed-religion": {
    title: "기독교 집안인데 일부만 제사를 원해요",
    description: "종교가 다른 가족 사이에서 제사·추도를 풀어가는 방법. 흔한 케이스와 선택할 수 있는 방식을 정리합니다.",
  },
  "overseas-family": {
    title: "해외 거주 중인데, 부모님 기일은 어떡하죠?",
    description: "직접 참석이 어려운 자녀가 정성을 잇는 방법 — 사찰 영구위탁·원격 참배·절충안을 정직하게 안내합니다.",
  },
  "sibling-conflict": {
    title: "형제 간 의견이 갈릴 때, 어떻게 정리하나요?",
    description: "장남이 모든 부담을 지던 시대는 지났습니다. 흔한 갈등 유형과 합의를 만드는 5단계를 안내합니다.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = articleMeta[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.title} — 안심제사`,
      description: meta.description,
      url: `https://ansimjesa.co.kr/guide/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates: { canonical: `https://ansimjesa.co.kr/guide/${slug}` },
  };
}

// Shared typography classes using new palette
const h2Class = "font-myeongjo mt-12 mb-5 pb-3";
const h2Style: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 24,
  color: "var(--ink)",
  letterSpacing: "-0.01em",
  borderBottom: "1px solid var(--line-gold)",
};
const leadStyle: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.9,
  color: "var(--ink-soft)",
};
const bodyStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.9,
  color: "var(--ink-soft)",
};

// Step number badge (navy background, gold border/text)
const stepBadgeStyle: React.CSSProperties = {
  width: 32,
  height: 32,
  flexShrink: 0,
  background: "var(--navy-800)",
  color: "var(--gold-400)",
  border: "1px solid var(--gold-500)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 13,
  fontWeight: 700,
  fontFamily: "var(--font-latin), serif",
  marginTop: 2,
};

// CTA block used at the end of every article
function ArticleCTA({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="mt-12"
      style={{
        padding: "40px 36px",
        background: "var(--navy-800)",
        color: "#EFE9DA",
        border: "1px solid rgba(184,153,104,0.4)",
      }}
    >
      <span className="eyebrow" style={{ color: "var(--gold-400)" }}>
        Free Consultation
      </span>
      <p
        className="font-myeongjo mt-5"
        style={{
          fontWeight: 600,
          fontSize: 20,
          color: "#F6EED9",
          letterSpacing: "-0.01em",
          marginBottom: 10,
        }}
      >
        {title}
      </p>
      <p style={{ color: "#C9C2AE", fontSize: 14, lineHeight: 1.8, marginBottom: 22 }}>
        {desc}
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-3"
        style={{
          padding: "14px 26px",
          background: "var(--gold-500)",
          color: "var(--navy-900)",
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: "0.14em",
          border: "1px solid var(--gold-500)",
        }}
      >
        무료 상담 신청하기
      </Link>
    </div>
  );
}

const articles: Record<string, {
  category: string;
  title: string;
  readTime: string;
  content: React.ReactNode;
}> = {
  "jesa-wital": {
    category: "제사 위탁",
    title: "제사를 절에 맡기면 어떻게 진행되나요?",
    readTime: "3분",
    content: (
      <div className="space-y-6">
        <p style={leadStyle}>
          바쁜 일상 속에서 부모님의 기일을 놓치거나, 형편상 제사를 제대로 챙기기 어려운 분들이 늘고 있습니다.
          이런 분들을 위해 사찰에 제사를 영구위탁하는 서비스가 있습니다.
        </p>

        <h2 className={h2Class} style={h2Style}>영구위탁 제사란?</h2>
        <p style={bodyStyle}>
          계약된 사찰에서 고인의 기일마다 대신 제사를 모셔드리는 서비스입니다.
          한 번 계약하면 매년 자동으로 진행되며, 가족이 직접 참석하지 않아도 됩니다.
          스님이 집전하고 제수 음식을 준비하여 정성껏 모셔드립니다.
        </p>

        <h2 className={h2Class} style={h2Style}>진행 과정</h2>
        <ol className="space-y-5">
          {[
            { step: "1", title: "상담 및 사찰 선택", desc: "안심제사에 연락하시면 고인의 기일, 원하시는 서비스 형태, 지역 등을 파악하여 적합한 사찰을 추천해드립니다." },
            { step: "2", title: "사찰과 계약 체결", desc: "추천된 사찰을 직접 방문하거나 안심제사를 통해 계약을 체결합니다. 서비스 범위와 비용을 명확히 확인합니다." },
            { step: "3", title: "기일마다 자동 진행", desc: "매년 기일이 되면 사찰에서 제사를 지내드립니다. 제수 음식 준비, 스님 집전, 제사 진행이 모두 포함됩니다." },
            { step: "4", title: "결과 전달", desc: "제사가 완료되면 사진과 함께 진행 내용을 전달해드립니다. 마음 편히 확인하실 수 있습니다." },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span style={stepBadgeStyle}>{item.step}</span>
              <div>
                <p className="font-myeongjo" style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)" }}>
                  {item.title}
                </p>
                <p style={{ ...bodyStyle, fontSize: 14, marginTop: 4 }}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className={h2Class} style={h2Style}>왜 절에 맡기는 게 좋을까요?</h2>
        <ul className="space-y-3">
          {[
            "스님이 직접 집전하여 격식 있는 제사 진행",
            "제수 음식 준비 걱정 없음",
            "가족이 참석하기 어려운 상황에서도 기일을 놓치지 않음",
            "매년 자동으로 진행되어 잊어버릴 걱정 없음",
            "납골봉안당과 함께 이용 시 한 곳에서 모든 것을 해결",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3" style={bodyStyle}>
              <span style={{ color: "var(--gold-500)", marginTop: 2, flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        <ArticleCTA
          title="궁금하신 점이 있으신가요?"
          desc="어떤 사찰이 맞는지, 비용이 얼마인지 부담 없이 물어보세요."
        />
      </div>
    ),
  },

  "49jae-biyong": {
    category: "49재",
    title: "49재 비용 총정리 — 얼마나 드나요?",
    readTime: "4분",
    content: (
      <div className="space-y-6">
        <p style={leadStyle}>
          49재를 준비하면서 가장 궁금한 것이 비용입니다. 사찰마다, 규모마다 다르기 때문에
          미리 파악해두는 것이 중요합니다. 투명하게 정리해드립니다.
        </p>

        <h2 className={h2Class} style={h2Style}>49재 비용 기준표</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ background: "var(--navy-800)", color: "var(--gold-400)" }}>
                <th className="px-4 py-3 text-left font-myeongjo" style={{ border: "1px solid var(--line-gold)", fontSize: 13, letterSpacing: "0.04em" }}>규모</th>
                <th className="px-4 py-3 text-left font-myeongjo" style={{ border: "1px solid var(--line-gold)", fontSize: 13, letterSpacing: "0.04em" }}>비용 (1회)</th>
                <th className="px-4 py-3 text-left font-myeongjo" style={{ border: "1px solid var(--line-gold)", fontSize: 13, letterSpacing: "0.04em" }}>비고</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "경기도 소규모 사찰", cost: "30~50만원", note: "간소한 형식" },
                { type: "서울 대형 사찰", cost: "70~100만원", note: "격식 있는 진행" },
                { type: "7번 전체 진행", cost: "830만원 이상", note: "원칙적 방식" },
                { type: "초재+막재 절충형", cost: "약 200만원", note: "가장 일반적" },
              ].map((row) => (
                <tr key={row.type}>
                  <td className="px-4 py-3 font-myeongjo" style={{ border: "1px solid var(--line)", fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>
                    {row.type}
                  </td>
                  <td className="px-4 py-3 font-myeongjo" style={{ border: "1px solid var(--line)", fontSize: 15, color: "var(--gold-600)", fontWeight: 700 }}>
                    {row.cost}
                  </td>
                  <td className="px-4 py-3" style={{ border: "1px solid var(--line)", fontSize: 14, color: "var(--ink-mute)" }}>
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={h2Class} style={h2Style}>원칙과 현실의 차이</h2>
        <p style={bodyStyle}>
          불교 원칙상 49재는 <strong style={{ color: "var(--ink)" }}>7일마다 총 7번</strong> 올려야 합니다.
          하지만 현실적으로 시간과 비용이 많이 들기 때문에 대부분의 가정에서는{" "}
          <strong style={{ color: "var(--ink)" }}>마지막 49일째 한 번</strong>만 지냅니다.
          형편에 따라 첫 번째 재(초재)와 마지막 재(막재) 두 번만 진행하는 절충형도 많이 선택합니다.
        </p>

        <h2 className={h2Class} style={h2Style}>비용에 영향을 주는 요소</h2>
        <ul className="space-y-3">
          {[
            "사찰의 규모와 지역 (서울일수록 비쌈)",
            "참여 스님의 수 (여러 스님이 참여할수록 비용 증가)",
            "제수 음식 포함 여부",
            "특별 경전 독송 여부",
            "유족 참석 인원에 따른 공양 비용",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3" style={bodyStyle}>
              <span style={{ color: "var(--gold-500)", marginTop: 2, flexShrink: 0 }}>•</span>
              {item}
            </li>
          ))}
        </ul>

        <ArticleCTA
          title="비용이 부담되신다면"
          desc="안심제사는 예산에 맞는 사찰을 추천해드립니다. 부담 없이 상담해보세요."
        />
      </div>
    ),
  },

  "chundojae-timing": {
    category: "천도재",
    title: "천도재는 언제 지내야 할까요?",
    readTime: "4분",
    content: (
      <div className="space-y-6">
        <p style={leadStyle}>
          천도재는 49재와 달리 언제든 지낼 수 있습니다. 하지만 어떤 상황에서 필요한지 모르는 분들이 많습니다.
          천도재가 필요한 구체적인 상황을 알려드립니다.
        </p>

        <h2 className={h2Class} style={h2Style}>이런 상황이라면 천도재를 고려하세요</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "😔", title: "고인이 꿈에 자주 나타날 때", desc: "돌아가신 분이 반복적으로 꿈에 나타날 때, 가족이 고인을 다시 떠올리게 되는 계기로 받아들이는 분들이 있습니다." },
            { icon: "⚡", title: "갑작스러운 사고사인 경우", desc: "준비 없이 갑작스럽게 돌아가신 경우 한(恨)이 남아 있을 수 있어 천도재로 편히 보내드립니다." },
            { icon: "🏚️", title: "삶의 어려움이 거듭될 때", desc: "사업 부진, 가족 간 갈등, 거듭되는 어려움이 이어질 때 — 마음을 정돈하기 위해 천도재를 청하시는 분들이 있습니다." },
            { icon: "📅", title: "기일을 오래 챙기지 못한 경우", desc: "여러 해 동안 제사를 못 챙겼다면 천도재로 한꺼번에 정성을 올릴 수 있습니다." },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: 22,
                background: "var(--paper)",
                border: "1px solid var(--line)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
              <p className="font-myeongjo" style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)", marginBottom: 6 }}>
                {item.title}
              </p>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className={h2Class} style={h2Style}>49재와 천도재의 차이</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ background: "var(--navy-800)", color: "var(--gold-400)" }}>
                <th className="px-4 py-3 text-left font-myeongjo" style={{ border: "1px solid var(--line-gold)", fontSize: 13, letterSpacing: "0.04em" }}>구분</th>
                <th className="px-4 py-3 text-left font-myeongjo" style={{ border: "1px solid var(--line-gold)", fontSize: 13, letterSpacing: "0.04em" }}>49재</th>
                <th className="px-4 py-3 text-left font-myeongjo" style={{ border: "1px solid var(--line-gold)", fontSize: 13, letterSpacing: "0.04em" }}>천도재</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "시기", jae: "사망 직후 49일 이내", chundo: "언제든 가능" },
                { label: "횟수", jae: "한 번 (사망 시 1회)", chundo: "여러 번 가능" },
                { label: "기간", jae: "49일", chundo: "하루" },
                { label: "목적", jae: "사후 심판 보조", chundo: "이승에 남은 영혼 천도" },
              ].map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-3 font-myeongjo" style={{ border: "1px solid var(--line)", fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>
                    {row.label}
                  </td>
                  <td className="px-4 py-3" style={{ border: "1px solid var(--line)", fontSize: 14, color: "var(--ink-soft)" }}>{row.jae}</td>
                  <td className="px-4 py-3" style={{ border: "1px solid var(--line)", fontSize: 14, color: "var(--ink-soft)" }}>{row.chundo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={h2Class} style={h2Style}>천도재의 종류</h2>
        <ul className="space-y-4">
          {[
            { name: "개인 천도재", desc: "특정 고인 한 분을 위해 지내는 천도재. 가장 정성을 다할 수 있는 형태입니다." },
            { name: "합동 천도재", desc: "백중(7월 15일) 등 특정 날에 여러 영가를 함께 천도합니다. 비용이 절반 이하로 줄어듭니다." },
            { name: "정월 천도재", desc: "새해 첫 달에 조상의 은덕에 감사하며 올리는 천도재. 한 해의 안녕을 기원합니다." },
          ].map((item) => (
            <li key={item.name} className="flex gap-3">
              <span style={{ color: "var(--gold-500)", fontWeight: 700, flexShrink: 0 }}>▸</span>
              <div>
                <p className="font-myeongjo" style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>
                  {item.name}
                </p>
                <p style={{ ...bodyStyle, fontSize: 14, marginTop: 2 }}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <ArticleCTA
          title="천도재가 필요한지 모르겠다면"
          desc="상황을 말씀해주시면 49재와 천도재 중 어떤 것이 맞는지 안내해드립니다."
        />
      </div>
    ),
  },

  "jesa-history": {
    category: "제사 문화",
    title: "제사는 왜 지내는 걸까요? — 유교와 제사의 역사",
    readTime: "5분",
    content: (
      <div className="space-y-6">
        <p style={leadStyle}>
          제사는 단순한 관습이 아닙니다. 수백 년의 역사 속에서 형성된 효(孝)의 실천이자
          돌아가신 분과 산 자를 잇는 문화입니다.
        </p>

        <h2 className={h2Class} style={h2Style}>제사의 철학적 본질</h2>
        <p style={bodyStyle}>
          유교에서 제사는 종교 행위가 아닙니다. 초월적 신에 대한 의례가 아니라,
          <strong style={{ color: "var(--ink)" }}> 혈통의 연속선상에 있는 조상에 대한 인격적 예우</strong>입니다.
          쉽게 말해, 살아계실 때 잘 모시듯 돌아가신 후에도 공경을 다하는 것이 제사의 본질입니다.
        </p>
        <p style={bodyStyle}>
          민간에서는{" "}
          <strong style={{ color: "var(--ink)" }}>&ldquo;돌아가신 분이 일 년에 한 번 차려준 음식을 드시러 오신다&rdquo;</strong>
          고 믿어왔습니다. 기일에 제사를 지내지 않으면 그 한 끼를 굶으신다는 믿음이 대대로 이어져 온 것입니다.
        </p>

        <h2 className={h2Class} style={h2Style}>제사 문화의 역사</h2>
        <div className="space-y-4">
          {[
            { period: "고대~고려 초", desc: "기일에 제사를 지내는 풍속이 없었습니다. 당시 불교가 국교였고, 제사보다는 불교식 추모 의식이 일반적이었습니다." },
            { period: "고려 말", desc: "중국 송나라에서 주자학(朱子學)이 전래되면서 제사 의식이 유입되기 시작했습니다. 이때부터 기일에 조상을 추모하는 문화가 생겨났습니다." },
            { period: "조선 건국 이후", desc: "유교가 국교로 확립되면서 주희의 『가례(家禮)』를 기준으로 제사가 제도화됩니다. 처음에는 양반 계층 중심으로 시행되었습니다." },
            { period: "조선 중기 이후", desc: "제사 문화가 평민에게까지 확산되어 전 계층의 문화로 자리 잡았습니다. 오늘날 우리가 아는 제사 형태가 이 시기에 완성되었습니다." },
            { period: "현대", desc: "바쁜 생활과 핵가족화로 제사를 간소화하는 흐름이 나타났습니다. 밀키트 제사상, 대행 서비스, 사찰 위탁 등 새로운 방식이 등장했습니다." },
          ].map((item) => (
            <div key={item.period} className="flex gap-4">
              <div className="flex-shrink-0">
                <span
                  className="font-myeongjo inline-block"
                  style={{
                    padding: "6px 14px",
                    fontSize: 12,
                    fontWeight: 600,
                    background: "var(--navy-800)",
                    color: "var(--gold-400)",
                    border: "1px solid var(--gold-500)",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.period}
                </span>
              </div>
              <p style={{ ...bodyStyle, fontSize: 14, paddingTop: 4 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className={h2Class} style={h2Style}>기제사와 차례의 차이</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div style={{ padding: 24, border: "1px solid var(--gold-500)", background: "var(--paper)" }}>
            <p
              className="font-myeongjo"
              style={{ fontWeight: 600, fontSize: 18, color: "var(--gold-600)", marginBottom: 8 }}
            >
              기제사(忌祭)
            </p>
            <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.8 }}>
              고인이 돌아가신 기일(忌日)에 지내는 제사. 연중 한 번, 엄격한 절차로 진행합니다. 가장 중요한 제사입니다.
            </p>
          </div>
          <div style={{ padding: 24, border: "1px solid var(--line)", background: "var(--paper)" }}>
            <p className="font-myeongjo" style={{ fontWeight: 600, fontSize: 18, color: "var(--ink)", marginBottom: 8 }}>
              차례(茶禮)
            </p>
            <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.8 }}>
              설날과 추석에 지내는 약식 제사. 기제사보다 간소하며 한국 고유의 발전된 형태입니다.
            </p>
          </div>
        </div>

        <ArticleCTA
          title="바쁜 현실, 정성은 그대로"
          desc="직접 챙기기 어렵다면 안심제사가 대신 모셔드립니다."
        />
      </div>
    ),
  },

  "bonandang": {
    category: "납골봉안당",
    title: "납골봉안당, 사찰 봉안당이 왜 좋을까요?",
    readTime: "3분",
    content: (
      <div className="space-y-6">
        <p style={leadStyle}>
          납골봉안당을 선택할 때 사찰 봉안당을 고려하는 분들이 늘고 있습니다.
          일반 납골당과 어떤 차이가 있는지 알아봅니다.
        </p>

        <h2 className={h2Class} style={h2Style}>사찰 봉안당의 장점</h2>
        <div className="space-y-4">
          {[
            { icon: "🙏", title: "제사와 봉안을 한 곳에서", desc: "납골봉안당과 제사 위탁을 같은 사찰에서 해결할 수 있습니다. 기일마다 따로 제사를 준비할 필요가 없습니다." },
            { icon: "🌿", title: "자연 속 청정한 환경", desc: "대부분의 사찰 봉안당은 산 속에 위치해 자연 환경이 좋습니다. 참배 시 마음의 평안을 얻을 수 있습니다." },
            { icon: "📿", title: "스님의 상시 기도", desc: "사찰에 상주하는 스님이 연중 기도를 올립니다. 일반 납골당과 달리 종교적 돌봄이 함께합니다." },
            { icon: "🏛️", title: "체계적인 관리", desc: "사찰에서 직접 관리하기 때문에 청결하고 안전합니다. 연중 참배 공간도 깔끔하게 유지됩니다." },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4"
              style={{
                padding: 20,
                background: "var(--paper)",
                border: "1px solid var(--line)",
              }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p className="font-myeongjo" style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)", marginBottom: 4 }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className={h2Class} style={h2Style}>안치 후 이용 방법</h2>
        <ul className="space-y-3">
          {[
            "연중 언제든 사찰을 방문해 참배 가능",
            "명절(설·추석)에는 합동 차례 참여 가능",
            "기일에는 스님이 직접 기도 올림",
            "온라인으로 원격 참배 서비스 제공 사찰도 있음",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3" style={bodyStyle}>
              <span style={{ color: "var(--gold-500)", marginTop: 2, flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        <ArticleCTA
          title="어느 봉안당이 맞는지 모르겠다면"
          desc="위치, 시설, 비용 등 조건을 말씀해주시면 맞는 사찰을 추천해드립니다."
        />
      </div>
    ),
  },

  "49jae-meaning": {
    category: "49재",
    title: "49일, 왜 49일인가요? — 불교의 49재 의미",
    readTime: "5분",
    content: (
      <div className="space-y-6">
        <p style={leadStyle}>
          왜 하필 49일일까요? 단순한 관습이 아닙니다. 불교의 깊은 세계관에서 나온 숫자입니다.
        </p>

        <h2 className={h2Class} style={h2Style}>중유(中有) — 죽음과 다음 생 사이</h2>
        <p style={bodyStyle}>
          불교에서는 사람이 죽으면 바로 다음 생을 받는 것이 아니라,{" "}
          <strong style={{ color: "var(--ink)" }}>중유(中有)</strong>라는 중간 상태에 머문다고 가르칩니다.
          이 기간이 바로 49일입니다. 이 기간 동안 영혼은 자신의 업(業)에 따라 다음 생이 결정되는 심판을 받습니다.
        </p>

        <h2 className={h2Class} style={h2Style}>7 × 7 = 49의 의미</h2>
        <p style={bodyStyle} className="mb-4">
          7은 불교에서 완결과 전환을 상징하는 숫자입니다. 49일은 7번의 7일로 구성되며,
          매 7일마다 다른 심판왕(시왕) 앞에 서게 됩니다.
        </p>
        <div className="space-y-2">
          {[
            "7일째 — 첫 번째 심판",
            "14일째 — 두 번째 심판",
            "21일째 — 세 번째 심판",
            "28일째 — 네 번째 심판",
            "35일째 — 다섯 번째 심판",
            "42일째 — 여섯 번째 심판",
            "49일째 — 마지막 심판 → 다음 생 결정",
          ].map((item, i) => {
            const isFinal = i === 6;
            return (
              <div key={item} className="flex items-center gap-3">
                <div
                  className="font-latin"
                  style={{
                    width: 28,
                    height: 28,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0,
                    background: isFinal ? "var(--navy-800)" : "var(--paper)",
                    color: isFinal ? "var(--gold-400)" : "var(--ink-soft)",
                    border: `1px solid ${isFinal ? "var(--gold-500)" : "var(--line)"}`,
                  }}
                >
                  {i + 1}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: isFinal ? "var(--ink)" : "var(--ink-soft)",
                    fontWeight: isFinal ? 600 : 400,
                  }}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        <h2 className={h2Class} style={h2Style}>산 자의 기도가 중요한 이유</h2>
        <p style={bodyStyle}>
          불교에서는 이 49일 동안{" "}
          <strong style={{ color: "var(--ink)" }}>산 자가 올리는 기도와 공덕이 망자의 심판에 영향을 미친다</strong>
          고 가르칩니다. 재를 올리고 경전을 읽으며 지장보살에게 간구하면, 돌아가신 분이 좋은 곳에 태어날 수
          있도록 도움이 된다는 것입니다.
        </p>
        <p style={bodyStyle}>
          이것이 49재를 지내는 핵심적인 의미입니다. 가족이 고인을 위해 마음을 모으는 마지막 49일 — 그 시간을
          정성껏 지나는 일이라 전해집니다.
        </p>

        <h2 className={h2Class} style={h2Style}>49재 절차</h2>
        <ol className="space-y-4">
          {[
            { title: "시련(侍輦)", desc: "영가(영혼)를 영단에 초청합니다." },
            { title: "대령(對靈)", desc: "의식 진행 내용을 영가에게 고합니다." },
            { title: "관욕(灌浴)", desc: "영가의 업장을 씻겨드립니다. 가장 먼저, 가장 중요한 의식입니다." },
            { title: "헌공(獻供)", desc: "영가와 불보살에게 공양을 올립니다." },
            { title: "신중헌공(神衆獻供)", desc: "천지신명에게 선처를 기원합니다." },
            { title: "봉송(奉送)", desc: "극락왕생을 발원하며 영가를 환송하는 의식입니다." },
          ].map((item, i) => (
            <li key={item.title} className="flex gap-3">
              <span style={{ ...stepBadgeStyle, width: 28, height: 28, fontSize: 12 }}>{i + 1}</span>
              <div>
                <p className="font-myeongjo" style={{ fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>
                  {item.title}
                </p>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <ArticleCTA
          title="49재를 준비하고 계신가요?"
          desc="상황에 맞는 사찰과 진행 방식을 안내해드립니다."
        />
      </div>
    ),
  },

  "mixed-religion": {
    category: "가족 의사결정",
    title: "기독교 집안인데 일부만 제사를 원해요",
    readTime: "4분",
    content: (
      <div className="space-y-6">
        <p style={leadStyle}>
          기독교 신앙과 전통 제사 풍습이 한 가족 안에 섞여 있는 경우는 한국에서 드물지 않습니다.
          무엇이 정답인지를 가르는 글이 아니라, 갈등을 줄이며 가족 모두가 마음 편할 수 있는
          선택지를 함께 정리해 드립니다.
        </p>

        <h2 className={h2Class} style={h2Style}>흔한 케이스 3가지</h2>
        <div className="space-y-4">
          {[
            {
              label: "케이스 1",
              title: "부모는 기독교, 자녀가 전통 제사를 원하는 경우",
              desc: "부모님이 살아계실 때 기독교 신앙을 가지셨더라도, 자녀가 부모를 기리는 방식으로 제사를 원할 수 있습니다.",
            },
            {
              label: "케이스 2",
              title: "조부모·부모는 제사를 원했지만, 자녀 세대 일부가 기독교인 경우",
              desc: "형제 중 한 명만 교회를 다닐 때 흔히 생기는 갈등입니다. 합의 방법은 형제 갈등 가이드를 함께 보세요.",
            },
            {
              label: "케이스 3",
              title: "한 가족 안에서 제사파·추도식파가 나뉘는 경우",
              desc: "각자의 신앙을 존중하면서 부모를 기리는 행사를 함께 또는 따로 어떻게 진행할지 결정해야 합니다.",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: 22,
                background: "var(--paper)",
                border: "1px solid var(--line)",
              }}
            >
              <span
                className="font-latin inline-block"
                style={{
                  padding: "4px 10px",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  background: "var(--navy-800)",
                  color: "var(--gold-400)",
                  border: "1px solid var(--gold-500)",
                  marginBottom: 10,
                  fontStyle: "italic",
                }}
              >
                {item.label}
              </span>
              <p
                className="font-myeongjo"
                style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)", marginBottom: 6 }}
              >
                {item.title}
              </p>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className={h2Class} style={h2Style}>선택할 수 있는 방식</h2>
        <ul className="space-y-3">
          {[
            "전통 제사를 원하는 가족은 사찰 영구위탁으로, 기독교 가족은 추도예배로 — 같은 날 또는 다른 날 각자 진행",
            "사찰 봉안당에 안치한 후, 양측 가족이 각자 방식으로 참배 (봉안당 자체는 종교 행위를 강요하지 않는 곳이 많습니다)",
            "형제가 합의해 한 명이 사찰 위탁을 진행하고, 다른 형제는 별도 추모하는 방식",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3" style={bodyStyle}>
              <span style={{ color: "var(--gold-500)", marginTop: 2, flexShrink: 0 }}>•</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className={h2Class} style={h2Style}>사찰에 상황을 미리 알리는 것이 좋은 이유</h2>
        <p style={bodyStyle}>
          가족 일부가 기독교라는 점을 사찰에 미리 말씀드리면, 안내 톤이나 절차를 조정해 드리는
          경우가 많습니다. 추도식·제사·봉안 중 어떤 형식이든 가능한지는 사찰별로 다르므로
          상담 단계에서 함께 의논하시는 편이 좋습니다.
        </p>

        <ArticleCTA
          title="가족마다 입장이 다른가요?"
          desc="상황을 들려주시면, 갈등을 줄이는 선택지를 함께 정리해 드립니다."
        />
      </div>
    ),
  },

  "overseas-family": {
    category: "가족 의사결정",
    title: "해외 거주 중인데, 부모님 기일은 어떡하죠?",
    readTime: "4분",
    content: (
      <div className="space-y-6">
        <p style={leadStyle}>
          직장·결혼·이민으로 해외에 거주하는 자녀가 점점 늘고 있습니다. 직접 참석하지 못한다는
          이유로 죄책감을 느끼시는 분들이 많지만, 거리와 정성은 비례하지 않습니다.
          현실적으로 선택할 수 있는 방식을 정리해 드립니다.
        </p>

        <h2 className={h2Class} style={h2Style}>현실적인 방식 4가지</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              num: "1",
              title: "사찰 영구위탁",
              desc: "기일마다 사찰에서 제사를 모시고 사진·영상으로 결과를 전달받습니다. 직접 참석은 0회로도 진행 가능합니다.",
            },
            {
              num: "2",
              title: "원격 참배 / 사진·영상 보고",
              desc: "사찰에 따라 화상 참배를 지원하거나 진행 영상을 제공받을 수 있습니다. 사전에 사찰과 협의가 필요합니다.",
            },
            {
              num: "3",
              title: "기일에 맞춰 현지에서 별도 추모",
              desc: "한국에서 사찰이 진행하는 시간에 맞춰, 해외 거주지에서도 따로 마음을 담는 시간을 갖는 방식입니다.",
            },
            {
              num: "4",
              title: "한국 방문 시 합동 추모",
              desc: "장기 미참여한 기일을 한 번에 정리하기 위해, 천도재 또는 합동 추모를 따로 의뢰할 수 있습니다.",
            },
          ].map((item) => (
            <div
              key={item.num}
              style={{
                padding: 22,
                background: "var(--paper)",
                border: "1px solid var(--line)",
              }}
            >
              <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                <span style={{ ...stepBadgeStyle, width: 28, height: 28, fontSize: 12 }}>{item.num}</span>
                <p
                  className="font-myeongjo"
                  style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)" }}
                >
                  {item.title}
                </p>
              </div>
              <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className={h2Class} style={h2Style}>가장 흔한 죄책감, 정직하게 짚어 보면</h2>
        <p style={bodyStyle}>
          멀리 산다고 해서 불효가 되는 것은 아닙니다. 부모님이 자녀의 안위를 가장 우선하셨다면,
          무리하게 한국을 오가는 것보다 안정적으로 살아가는 모습이 부모님께도 더 마음 편한 일일
          수 있습니다. 사찰 영구위탁은 이 현실을 인정한 위에 정성을 잇는 방식 중 하나일 뿐,
          정답은 가족마다 다릅니다.
        </p>

        <h2 className={h2Class} style={h2Style}>사찰과 의논해 두면 좋은 사항</h2>
        <ul className="space-y-3">
          {[
            "시차에 맞춘 진행 시간 조정 가능 여부",
            "사진·영상 등 보고 방식과 전달 채널 (이메일·메신저 등)",
            "한국 방문 일정에 맞춘 별도 의례 가능 여부",
            "비용 송금 방법 (해외 송금·국내 가족 대납 등)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3" style={bodyStyle}>
              <span style={{ color: "var(--gold-500)", marginTop: 2, flexShrink: 0 }}>•</span>
              {item}
            </li>
          ))}
        </ul>

        <ArticleCTA
          title="해외 거주 중이신가요?"
          desc="시차·연락 방식·진행 보고까지, 처음부터 함께 설계해 드립니다."
        />
      </div>
    ),
  },

  "sibling-conflict": {
    category: "가족 의사결정",
    title: "형제 간 의견이 갈릴 때, 어떻게 정리하나요?",
    readTime: "5분",
    content: (
      <div className="space-y-6">
        <p style={leadStyle}>
          장남이 제사를 모두 책임지던 시대는 사실상 지났습니다. 형편·종교·세대 차이가 얽혀
          제사·49재·봉안 결정에서 갈등이 생기는 일이 흔합니다. 정답을 강요하기보다,
          합의를 만드는 절차를 안내드립니다.
        </p>

        <h2 className={h2Class} style={h2Style}>흔한 갈등 4가지 유형</h2>
        <ul className="space-y-3">
          {[
            { k: "비용 분담", v: "누가 얼마나 부담할지. 형편 차이가 클 때 특히 첨예합니다." },
            { k: "주관자 문제", v: "누가 진행을 챙길지. 장남에게 자동 부여되던 책임이 모호해진 시대입니다." },
            { k: "종교·신념 차이", v: "형제 중 일부가 기독교인 경우. 별도 가이드를 함께 보세요." },
            { k: "세대 승계", v: "자녀 세대로 어떻게 이어갈지. 미루다 보면 다음 세대에 같은 갈등이 반복됩니다." },
          ].map((item) => (
            <li key={item.k} className="flex items-start gap-3" style={bodyStyle}>
              <span style={{ color: "var(--gold-500)", marginTop: 2, flexShrink: 0 }}>•</span>
              <span>
                <strong style={{ color: "var(--ink)" }}>{item.k}</strong> — {item.v}
              </span>
            </li>
          ))}
        </ul>

        <h2 className={h2Class} style={h2Style}>합의를 만드는 5단계</h2>
        <ol className="space-y-5">
          {[
            {
              step: "1",
              title: "현재 상황 정리",
              desc: "지금까지 누가 무엇을 챙겨왔는지 사실관계를 먼저 공유합니다. 감정보다 사실이 먼저입니다.",
            },
            {
              step: "2",
              title: "각자 가능한 부담 솔직히 공유",
              desc: "비용·시간·참석 여부를 솔직하게 말합니다. 무리한 약속은 다음 갈등의 씨앗이 됩니다.",
            },
            {
              step: "3",
              title: "형식보다 본질 합의",
              desc: "제사 형식은 다양합니다. 모두가 동의할 수 있는 본질(부모를 기억하는 것)을 먼저 합의합니다.",
            },
            {
              step: "4",
              title: "외부 위탁(사찰)을 옵션으로 검토",
              desc: "사찰 영구위탁은 비용 분담이 명확하고, 누가 주관인지 다툴 일이 줄어듭니다. 갈등을 줄이는 선택지 중 하나입니다.",
            },
            {
              step: "5",
              title: "결정 사항 글로 기록",
              desc: "구두 합의는 시간이 지나면 흐려집니다. 메모·메신저·계약서로 남겨두면 다음 세대 갈등도 줄어듭니다.",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span style={stepBadgeStyle}>{item.step}</span>
              <div>
                <p
                  className="font-myeongjo"
                  style={{ fontWeight: 600, fontSize: 16, color: "var(--ink)" }}
                >
                  {item.title}
                </p>
                <p style={{ ...bodyStyle, fontSize: 14, marginTop: 4 }}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className={h2Class} style={h2Style}>사찰 위탁이 갈등 해소에 도움이 되는 이유</h2>
        <ul className="space-y-3">
          {[
            "비용 분담이 명확해집니다 — 사찰 청구서 1장에 합의된 비율로 분담",
            "주관자 분쟁이 사라집니다 — 사찰이 대신 진행하므로 누가 책임지는지 다툴 일이 없습니다",
            "모두에게 같은 보고 — 사진·영상이 모든 형제에게 동일하게 전달되어 정보 비대칭이 줄어듭니다",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3" style={bodyStyle}>
              <span style={{ color: "var(--gold-500)", marginTop: 2, flexShrink: 0 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        <ArticleCTA
          title="형제 간 합의가 어려우신가요?"
          desc="비슷한 고민을 정리한 가이드를 토대로, 갈등을 줄이는 선택지를 함께 정리해 드립니다."
        />
      </div>
    ),
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <Header />
      <main>
        {/* Dark hero */}
        <section
          style={{
            padding: "180px 0 80px",
            color: "#F1EBD8",
            background:
              "radial-gradient(800px 400px at 80% 20%, rgba(184,153,104,0.15), transparent 60%), linear-gradient(180deg, #0B1628 0%, #0F1A2E 100%)",
            borderBottom: "1px solid rgba(184,153,104,0.25)",
          }}
        >
          <div className="max-w-[820px] mx-auto px-6 md:px-10">
            <Link
              href="/guide"
              className="font-latin"
              style={{
                fontSize: 13,
                color: "var(--gold-400)",
                letterSpacing: "0.12em",
                display: "inline-block",
                marginBottom: 28,
              }}
            >
              ← GUIDE
            </Link>
            <span className="eyebrow" style={{ color: "var(--gold-400)" }}>
              {article.category}
            </span>
            <h1
              className="font-myeongjo"
              style={{
                fontWeight: 500,
                fontSize: "clamp(32px, 3.8vw, 52px)",
                color: "#F6EED9",
                lineHeight: 1.2,
                margin: "20px 0 18px",
                letterSpacing: "-0.01em",
              }}
            >
              {article.title}
            </h1>
            <p
              className="font-latin"
              style={{ color: "var(--gold-400)", fontSize: 14, letterSpacing: "0.1em" }}
            >
              읽는 시간 · {article.readTime}
            </p>
          </div>
        </section>

        {/* Body */}
        <section style={{ background: "var(--ivory)", padding: "80px 0 120px" }}>
          <div className="max-w-[820px] mx-auto px-6 md:px-10">
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                padding: "56px 40px",
              }}
            >
              {article.content}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
