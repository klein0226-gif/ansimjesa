import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "🙏",
    title: "제사 영구위탁",
    subtitle: "기일마다 대신 모셔드립니다",
    desc: "돌아가신 분의 기일에 맞춰 계약된 사찰에서 제사를 지내드립니다. 한 번 계약으로 매년 자동으로 진행되며, 사진과 함께 결과를 전달해드립니다.",
    items: ["매년 기일 자동 진행", "제수 음식 준비 포함", "사진 전달 서비스", "스님 집전 보장"],
  },
  {
    icon: "⚱️",
    title: "납골봉안당",
    subtitle: "쾌적하고 품격 있는 안치",
    desc: "사찰 내 납골봉안당에 안치하여 언제든 참배하실 수 있습니다. 연중 관리가 이루어지며 명절·기일에는 사찰에서 함께 추모합니다.",
    items: ["연중 청결 관리", "참배 공간 제공", "명절 합동 제사", "다양한 안치 옵션"],
  },
  {
    icon: "🪔",
    title: "49재",
    subtitle: "49일간의 영혼 여정을 함께",
    desc: "돌아가신 후 49일 동안 매 7일마다 재를 올려 영혼의 극락왕생을 기원합니다. 사정에 따라 마지막 49일째만 진행하는 절충형도 가능합니다.",
    items: ["7일마다 정성껏 진행", "막재(49일) 단독 가능", "유족 참석 가능", "경전 독송·법문 포함"],
  },
  {
    icon: "🌸",
    title: "천도재",
    subtitle: "이승에 남은 영혼을 극락으로",
    desc: "고인이 꿈에 자주 나타나거나, 갑작스러운 사고로 돌아가신 경우, 또는 집안에 원인 모를 불운이 반복될 때 천도재를 통해 해결하세요.",
    items: ["개인 천도재", "합동 천도재 (절충형)", "사고사·급사 전문", "집안 안녕 기원"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "#2D6A4F" }}>SERVICES</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">서비스 안내</h1>
            <p className="text-gray-500 text-lg">안심제사의 모든 서비스는 계약된 사찰을 통해 정성껏 진행됩니다.</p>
          </div>

          <div className="space-y-8">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-gray-100 p-8 md:p-10 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="text-5xl">{s.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium mb-1" style={{ color: "#2D6A4F" }}>{s.subtitle}</p>
                    <h2 className="font-serif text-2xl font-bold mb-3">{s.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-5">{s.desc}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                          <span style={{ color: "#2D6A4F" }}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-500 mb-4">어떤 서비스가 필요한지 잘 모르시겠다면 상담을 통해 결정하세요.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-white font-bold shadow-md hover:opacity-90 transition-all"
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
