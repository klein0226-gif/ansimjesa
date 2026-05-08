import type { Metadata } from "next";
import TempleDetail from "@/components/TempleDetail";

export const metadata: Metadata = {
  title: "김해 덕운사 — 안심제사",
  description:
    "경남 김해 주촌면의 추모 도량. 김해 시내에서 차로 15분, 사찰 특유의 경건한 분위기 속에서 가족끼리 조용히 조상을 모실 수 있습니다.",
  openGraph: {
    title: "김해 덕운사 — 안심제사",
    description: "김해 시내에서 차로 15분, 조용한 추모 도량. 법성 스님 직접 집전.",
    url: "https://ansimjesa.co.kr/temples/deokunsa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/temples/deokunsa" },
};

export default function DeokunsaPage() {
  return (
    <TempleDetail
      slug="deokunsa"
      name="덕운사"
      hanja="德雲寺"
      region="경남 김해시 주촌면"
      tagline="도심 근처, 조용한 한 칸"
      oneliner="김해 시내에서 차로 15분. 번잡한 공설 추모원과 달리, 절 안에서 가족끼리 조용히 모실 수 있는 곳. 법성 스님 직접 집전."
      heroImage="/temples/deokunsa_hero.jpg"
      subImage="/temples/deokunsa_sub.jpg"
      address="경상남도 김해시 주촌면 서부로1701번길 294-62"
      lotNumber="주촌면 덕암리 149"
      accessCar="남해고속도로 서김해IC에서 주촌 방향 10~15분. 김해추모의공원 인근."
      accessTransit="김해 경전철 봉황역·부원역에서 택시 이용 (주촌면 덕암리 방향)."
      foundedYear="현대 — 2017년 대웅전 중창"
      foundedFounder="법성 스님 (현 주지)"
      foundedHistory="2017년 11월 대웅전 부처님 점안대법회와 산사음악회를 봉행하며 현재의 면모를 갖추었다. 지역 포교와 추모 도량으로 꾸준히 성장하고 있다."
      highlights={[
        { title: "대웅전", body: "아미타불·미륵불·지장보살을 모신 중심 법당. 단청과 조각이 정교하다." },
        { title: "산신각", body: "사찰 뒤편 높은 터에 있어 주촌면 일대를 한눈에 조망할 수 있다." },
        { title: "범종각", body: "사물을 갖추고 정기 타종 의식을 봉행한다." },
      ]}
      facilities={[
        {
          title: "추모의 집 (봉안당)",
          body:
            "사찰에서 직접 관리하는 현대식 실내 봉안 시설. 불교 예법에 따라 영구 안치하며 매일의 기도로 극락왕생을 발원한다.",
        },
        {
          title: "극락전",
          body: "지장보살을 모시고 기일 제사·49재·천도재를 상시 봉행하는 전용 공간.",
        },
      ]}
      stories={[
        {
          title: "조용한 추모",
          body:
            "인근에 김해시 공설 추모원이 있으나, 덕운사는 사찰 특유의 경건한 분위기 속에서 가족끼리 조용히 조상을 모실 수 있어 선호도가 높다.",
        },
        {
          title: "덕암산의 사계",
          body:
            "대웅전 앞마당에서 바라보는 덕암산의 사계절 풍광이 일품. 특히 가을 단풍이 아름답다.",
        },
      ]}
      best="접근성과 프라이버시를 함께 원하는 분"
      price="제사 위탁 연 30만원 · 영구위탁 150만원"
      sources={["김해시청 문화관광", "BBS불교방송 뉴스", "덕운사 공식 홍보 자료"]}
    />
  );
}
