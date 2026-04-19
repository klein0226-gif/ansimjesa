import type { Metadata } from "next";
import TempleDetail from "@/components/TempleDetail";

export const metadata: Metadata = {
  title: "의령 수암사 — 안심제사",
  description:
    "의령 수암사 — 3.8m 관음상 333기가 줄지어 선 진입로와 250평 대적광전. 영남권 최고 규모의 납골 시설.",
  openGraph: {
    title: "의령 수암사 — 안심제사",
    description: "관음상 333기, 압도적 스케일. 3,500기 봉안 가능.",
    url: "https://ansimjesa.co.kr/temples/suamsa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/temples/suamsa" },
};

export default function SuamsaPage() {
  return (
    <TempleDetail
      slug="suamsa"
      name="수암사"
      hanja="修岩寺"
      region="경남 의령군 의령읍"
      tagline="관음상 333기, 압도적 스케일"
      oneliner="진입로 650m에 3.8m 관음상 333기가 줄지어 선 풍경. 여기만큼 사진으로 보여드리기 좋은 곳은 없습니다. 3,500기 봉안 가능."
      heroImage="/temples/suamsa_hero.jpg"
      subImage="/temples/suamsa_sub.jpg"
      address="경상남도 의령군 의령읍 수암로 248-17"
      lotNumber="의령읍 하리 744"
      accessCar="의령군청에서 약 5km, 수암로를 따라 벽화산 방향으로 진입."
      accessTransit="의령버스터미널에서 농어촌버스 '하리' 정류장 하차 후 도보."
      foundedYear="1995년 창건 (2012년 수암사로 개칭)"
      foundedHistory="본래 '용국사'로 창건되었다가 2012년 '수암사'로 명칭을 바꾸었다. 짧은 역사에도 웅장한 불사로 영남권의 주요 기도처로 자리 잡았다."
      highlights={[
        {
          title: "333 노천 관세음보살상",
          body:
            "진입로 650m 구간에 3.8m 높이의 옥석 관음상 333기가 줄지어 선 수암사의 상징. 걷는 동안 자연스레 마음이 가다듬어진다.",
        },
        {
          title: "대적광전",
          body: "약 250평 규모의 초대형 법당. 금동만불상이 봉안되어 압도적인 위엄을 자랑한다.",
        },
        {
          title: "보천사지 삼층석탑·승탑",
          body: "사찰 입구 옛 절터의 국가 보물(제373호·제472호). 수암사의 역사적 깊이를 더한다.",
        },
      ]}
      facilities={[
        {
          title: "영혼의 쉼터",
          body:
            "약 3,500기를 안치할 수 있는 대규모 현대식 납골 시설. 웅장한 불상들의 가호 아래 고인을 모시는 상징성이 크다.",
        },
      ]}
      stories={[
        {
          title: "88올림픽 법고",
          body: "천왕문 위에 1988 서울올림픽 개회식에 쓰였던 거대 법고가 안치되어 방문객의 눈길을 끈다.",
        },
        {
          title: "규모의 불사",
          body:
            "지상 10층 높이의 미륵삼존불 건립이 진행 중. 규모 면에서 국내 최고 수준을 지향한다.",
        },
      ]}
      best="규모와 영험을 중시하는 분, 자녀에게 뚜렷이 보여줄 수 있는 랜드마크를 원하는 분"
      price="제사 위탁 연 30만원 · 영구위탁 150만원"
      sources={["한국관광공사 대한민국 구석구석", "의령군청 문화관광", "수암사 공식 홈페이지"]}
    />
  );
}
