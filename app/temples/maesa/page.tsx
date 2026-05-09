import type { Metadata } from "next";
import TempleDetail from "@/components/TempleDetail";

export const metadata: Metadata = {
  title: "함안 마애사 — 안심제사",
  description:
    "함안 마애사 — 보물 제159호 방어산 마애약사여래삼존입상과 동양 최대 청룡상. 함안군 공설봉안당이 바로 옆에 있어 관리도 안전합니다.",
  openGraph: {
    title: "함안 마애사 — 안심제사",
    description: "1,200년 된 국보급 마애불 + 38m 청룡상. 지자체 연계 봉안.",
    url: "https://ansimjesa.co.kr/temples/maesa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/temples/maesa" },
};

export default function MaesaPage() {
  return (
    <TempleDetail
      slug="maesa"
      name="마애사"
      hanja="磨崖寺"
      region="경남 함안군 군북면"
      tagline="1,200년 된 국보급 마애불 + 38m 청룡"
      oneliner="통일신라 때부터 지켜온 보물 제159호 마애불과 동양 최대 청룡상이 함께. 함안군 공설봉안당이 바로 옆이라 관리도 안전합니다."
      heroImage="/temples/maesa_hero.jpg"
      subImage="/temples/maesa_sub.jpg"
      address="경상남도 함안군 군북면 하림2길 181-78"
      lotNumber="군북면 하림리 181-78"
      accessCar="남해고속도로 지수IC 또는 군북IC에서 방어산 방향 15분."
      accessTransit="경전선 군북역에서 택시 이용 권장."
      foundedYear="1995년 중창"
      foundedFounder="무진 스님"
      foundedHistory="통일신라 시대 마애불이 있는 방어산 자락에 자리 잡았다. 2023년 동양 최대 규모의 호국 청룡상을 완공하며 현대 불교 예술의 정점을 보여준다."
      highlights={[
        {
          title: "방어산 마애약사여래삼존입상",
          body:
            "보물 제159호, 801년(애장왕 2년) 작. 약사여래를 모셔 병고에서 벗어나길 비는 신도의 발길이 끊이지 않는다.",
        },
        {
          title: "호국 청룡상",
          body: "길이 38m의 거대 청룡 조각상. 마애사의 새로운 랜드마크다.",
        },
        {
          title: "극락보전",
          body: "아미타불을 모신 중심 법당. 화려한 단청이 특징이다.",
        },
      ]}
      facilities={[
        {
          title: "함안군 공설봉안당",
          body:
            "마애사 바로 옆 부지에 함안군이 운영하는 공설봉안당이 있다. 사찰의 기도 소리를 들으며 지자체의 안정적 관리를 받는 독특한 구조.",
        },
        {
          title: "윤회의 탑",
          body: "고인의 명복을 비는 도자기 형태의 특색 있는 납골탑들이 조성되어 있다.",
        },
      ]}
      stories={[
        {
          title: "부처님 약손 바위",
          body: "'불수암'이라 불리는 바위를 만지면 건강해진다는 전설이 있어 가족 단위 방문객이 많다.",
        },
        {
          title: "108계단",
          body: "극락보전으로 오르는 108계단은 수행의 의미와 함께 사진 명소로도 꼽힌다.",
        },
      ]}
      best="문화재적 가치와 격식을 중시하는 분, 지자체 연계 봉안 안정성을 원하는 분"
      sources={["함안군청 문화관광", "국가유산청(구 문화재청)", "마애사 홍보 리플릿"]}
    />
  );
}
