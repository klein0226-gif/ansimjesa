import type { Metadata } from "next";
import TempleDetail from "@/components/TempleDetail";

export const metadata: Metadata = {
  title: "사천 백천사 — 안심제사",
  description:
    "사천 와룡산 백천사 — 신라 663년 창건의 1,300년 고찰. 15m 목조 와불과 몸속 법당, 영남권 탑클래스 봉안 시설.",
  openGraph: {
    title: "사천 백천사 — 안심제사",
    description: "1,300년 고찰, 몸속 법당의 기적. 영구 봉안 전문.",
    url: "https://ansimjesa.co.kr/temples/baekcheonsa",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://ansimjesa.co.kr/temples/baekcheonsa" },
};

export default function BaekcheonsaPage() {
  return (
    <TempleDetail
      slug="baekcheonsa"
      name="백천사"
      hanja="白川寺"
      region="경남 사천시 와룡산"
      tagline="1,300년 고찰, 몸속 법당의 기적"
      oneliner="신라 663년 창건, 1,300년 역사. 15m 목조 와불 몸 안에 들어가 예불하고, TV 나온 목탁 치는 소(우보살)까지. 영남권 탑클래스 봉안 시설."
      heroImage="/temples/baekcheonsa_hero.jpg"
      subImage="/temples/baekcheonsa_sub.jpg"
      address="경상남도 사천시 백천길 326-2"
      lotNumber="사천시 백천동 108-1"
      accessCar="사천IC에서 약 20분, 삼천포항에서 약 10분. 주차 시설 완비."
      accessTransit="사천·삼천포 터미널에서 100번대 시내버스, 백천동 종점 하차."
      foundedYear="663년 (신라 문무왕 3년)"
      foundedFounder="의선대사"
      foundedHistory="임진왜란 때 사명대사가 승군을 지휘하던 호국 도량이었으나 소실되었다. 현대에 성밀 스님의 대불사로 사천을 대표하는 대도량으로 재건되었다."
      highlights={[
        {
          title: "약사여래 와불",
          body:
            "소나무를 깎아 만든 길이 15m의 세계 최대급 목조 와불. 부처님 몸속에 작은 법당이 있어 직접 들어가 예불할 수 있는 희귀 공간이다.",
        },
        {
          title: "목조보살좌상",
          body: "고려 말 제작된 유형문화유산. 정교한 조각이 일품이다.",
        },
        {
          title: "대웅전과 산신각",
          body: "와룡산의 기운을 그대로 받는 명당 자리.",
        },
      ]}
      facilities={[
        {
          title: "극락전 추모관",
          body: "호텔급 시설을 갖춘 실내 봉안당. 쾌적한 참배 환경으로 이름이 높다.",
        },
        {
          title: "야외 납골탑",
          body: "가족 단위로 모실 수 있는 납골탑이 경내 곳곳에 예술적으로 배치되어 있다.",
        },
        {
          title: "효심원",
          body: "체계적인 장례·제사 서비스를 제공하는 특화 시설.",
        },
      ]}
      stories={[
        {
          title: "우보살",
          body:
            "혀로 입천장을 쳐서 실제 목탁 소리를 내는 소들. 여러 방송에 소개된 백천사의 명물이다.",
        },
        {
          title: "산사 카페",
          body: "사찰 입구 계곡을 낀 카페가 있어 방문객들의 휴식처가 된다.",
        },
      ]}
      best="영구 봉안을 원하는 분, 전통과 시설·볼거리 모두 중시하는 분"
      sources={["사천시청 문화관광", "백천사 공식 홈페이지", "연합뉴스·뉴스1 보도"]}
    />
  );
}
