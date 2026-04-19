import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — 안심제사",
  description: "안심제사 개인정보 처리방침",
};

const thClass =
  "px-4 py-3 text-left font-myeongjo font-semibold text-[color:var(--ink)]";
const thStyle: React.CSSProperties = {
  border: "1px solid var(--line)",
  background: "var(--ivory-2)",
  fontSize: 13,
  letterSpacing: "0.02em",
};
const tdClass = "px-4 py-3 text-[color:var(--ink-soft)]";
const tdStyle: React.CSSProperties = {
  border: "1px solid var(--line)",
  fontSize: 14,
  lineHeight: 1.8,
};

const h2Class = "font-myeongjo mt-12 mb-5 pb-3";
const h2Style: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 22,
  color: "var(--ink)",
  letterSpacing: "-0.01em",
  borderBottom: "1px solid var(--line-gold)",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Dark hero */}
        <section
          style={{
            padding: "180px 0 90px",
            color: "#F1EBD8",
            background:
              "radial-gradient(800px 400px at 80% 20%, rgba(184,153,104,0.15), transparent 60%), linear-gradient(180deg, #0B1628 0%, #0F1A2E 100%)",
            borderBottom: "1px solid rgba(184,153,104,0.25)",
          }}
        >
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            <span className="eyebrow">Privacy Policy</span>
            <h1
              className="font-myeongjo"
              style={{
                fontWeight: 500,
                fontSize: "clamp(34px, 4vw, 54px)",
                color: "#F6EED9",
                lineHeight: 1.15,
                margin: "24px 0 18px",
              }}
            >
              개인정보 처리방침
            </h1>
            <p
              className="font-latin"
              style={{ color: "var(--gold-400)", fontSize: 15, letterSpacing: "0.08em" }}
            >
              시행일 · 2026년 3월 21일
            </p>
          </div>
        </section>

        {/* Body */}
        <section style={{ background: "var(--ivory)", padding: "90px 0 120px" }}>
          <div className="max-w-[900px] mx-auto px-6 md:px-10">
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                padding: "56px 40px",
                color: "var(--ink-soft)",
                fontSize: 15,
                lineHeight: 1.9,
              }}
            >
              <p>
                안심제사(이하 &quot;회사&quot;)는 「개인정보 보호법」에 따라 이용자의 개인정보를
                보호하고 이와 관련한 고충을 신속하게 처리하기 위하여 다음과 같이
                개인정보 처리방침을 수립·공개합니다.
              </p>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  一. 수집하는 개인정보 항목 및 수집 목적
                </h2>
                <table className="w-full border-collapse mb-3">
                  <thead>
                    <tr>
                      <th className={thClass} style={thStyle}>수집 항목</th>
                      <th className={thClass} style={thStyle}>수집 목적</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={tdClass} style={tdStyle}>성함, 연락처(전화번호)</td>
                      <td className={tdClass} style={tdStyle}>상담 신청 접수 및 회신</td>
                    </tr>
                    <tr>
                      <td className={tdClass} style={tdStyle}>서비스 선택, 문의 내용</td>
                      <td className={tdClass} style={tdStyle}>맞춤 상담 및 서비스 안내</td>
                    </tr>
                  </tbody>
                </table>
                <p style={{ fontSize: 13, color: "var(--ink-mute)" }}>
                  * 종교적 신념에 관한 정보(불교 제사/봉안 관련)는 「개인정보 보호법」 제23조에 따른
                  민감정보에 해당하며, 별도의 동의를 받아 처리합니다.
                </p>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  一 · 二. 민감정보의 처리
                </h2>
                <p className="mb-3">
                  안심제사는 서비스 특성상 이용자의 종교적 신념이 추론될 수 있는 정보를 처리합니다.
                </p>
                <table className="w-full border-collapse mb-3">
                  <thead>
                    <tr>
                      <th className={thClass} style={thStyle}>민감정보 항목</th>
                      <th className={thClass} style={thStyle}>처리 목적</th>
                      <th className={thClass} style={thStyle}>동의 방법</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={tdClass} style={tdStyle}>
                        서비스 선택(제사/봉안/49재/천도재), 문의 내용 중 종교 관련 사항
                      </td>
                      <td className={tdClass} style={tdStyle}>사찰 연결 상담 및 맞춤 서비스 제공</td>
                      <td className={tdClass} style={tdStyle}>상담 신청 시 별도 체크박스로 동의</td>
                    </tr>
                  </tbody>
                </table>
                <p style={{ fontSize: 13, color: "var(--ink-mute)" }}>
                  * 민감정보 동의를 거부할 권리가 있으나, 거부 시 상담 서비스 이용이 제한됩니다.
                </p>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  二. 개인정보의 수집 방법
                </h2>
                <p>웹사이트 상담 신청 폼, 카카오톡 상담을 통해 수집합니다.</p>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  三. 개인정보의 보유 및 이용 기간
                </h2>
                <p>
                  상담 완료 후 <strong style={{ color: "var(--gold-600)" }}>3년간 보유</strong> 후
                  지체 없이 파기합니다. 다만, 관련 법령에 따라 보존이 필요한 경우 해당 법령이 정한
                  기간 동안 보관합니다.
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>전자상거래법에 따른 계약·청약철회 기록: 5년</li>
                  <li>소비자 불만·분쟁 처리 기록: 3년</li>
                </ul>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  四. 개인정보의 제3자 제공
                </h2>
                <p>
                  이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
                  다만, 상담 진행을 위해 연결 사찰에 성함·연락처를 공유할 수 있으며,
                  이 경우 사전에 별도 동의를 받습니다.
                </p>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  五. 개인정보 처리의 위탁
                </h2>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className={thClass} style={thStyle}>수탁자</th>
                      <th className={thClass} style={thStyle}>위탁 업무</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={tdClass} style={tdStyle}>Vercel Inc.</td>
                      <td className={tdClass} style={tdStyle}>웹사이트 호스팅</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  五 · 二. 개인정보의 국외 이전
                </h2>
                <table className="w-full border-collapse mb-3">
                  <tbody>
                    <tr>
                      <td className={thClass} style={thStyle}>이전받는 자</td>
                      <td className={tdClass} style={tdStyle}>Vercel Inc.</td>
                    </tr>
                    <tr>
                      <td className={thClass} style={thStyle}>이전 국가</td>
                      <td className={tdClass} style={tdStyle}>미국</td>
                    </tr>
                    <tr>
                      <td className={thClass} style={thStyle}>이전 항목</td>
                      <td className={tdClass} style={tdStyle}>
                        상담 신청 시 입력된 성함, 연락처, 서비스 선택, 문의 내용
                      </td>
                    </tr>
                    <tr>
                      <td className={thClass} style={thStyle}>이전 시점 및 방법</td>
                      <td className={tdClass} style={tdStyle}>상담 신청 즉시, 네트워크를 통한 전송</td>
                    </tr>
                    <tr>
                      <td className={thClass} style={thStyle}>이전 목적</td>
                      <td className={tdClass} style={tdStyle}>웹사이트 호스팅 및 서비스 제공</td>
                    </tr>
                    <tr>
                      <td className={thClass} style={thStyle}>보유 기간</td>
                      <td className={tdClass} style={tdStyle}>상담 완료 후 3년 또는 서비스 이용 기간</td>
                    </tr>
                  </tbody>
                </table>
                <p style={{ fontSize: 13, color: "var(--ink-mute)" }}>
                  * 이용자는 국외 이전에 동의하지 않을 수 있으나, 이 경우 웹사이트를 통한 상담 신청이
                  제한될 수 있습니다. 「개인정보 보호법」 제28조의8에 따라 처리됩니다.
                </p>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  六. 개인정보의 파기 절차 및 방법
                </h2>
                <p>보유 기간이 경과하거나 처리 목적이 달성된 경우 지체 없이 파기합니다.</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>전자 파일: 복원 불가능한 방법으로 영구 삭제</li>
                  <li>종이 문서: 분쇄기로 분쇄 또는 소각</li>
                </ul>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  七. 안전성 확보 조치
                </h2>
                <p>회사는 개인정보의 안전성 확보를 위해 다음 조치를 취하고 있습니다.</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>HTTPS(SSL/TLS)를 통한 데이터 전송 암호화</li>
                  <li>접근 권한 최소화 및 관리자 인증</li>
                  <li>개인정보 접근 기록 보관</li>
                  <li>AES-256-GCM 암호화를 통한 저장 개인정보 보호</li>
                </ul>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  八. 이용자의 권리 · 의무 및 행사 방법
                </h2>
                <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>개인정보 열람 요구</li>
                  <li>오류 등이 있을 경우 정정 요구</li>
                  <li>삭제 요구</li>
                  <li>처리 정지 요구</li>
                </ul>
                <p className="mt-4">위 권리는 다음 방법으로 행사할 수 있습니다.</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>
                    <strong>카카오톡 채널</strong>: &quot;안심제사&quot; 검색 후 1:1 채팅
                  </li>
                  <li>
                    <strong>웹사이트 상담 폼</strong>: ansimjesa.co.kr/contact 에서
                    &quot;개인정보 권리행사&quot; 선택
                  </li>
                </ul>
                <p style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 12 }}>
                  접수 후 10일 이내 처리 결과를 회신합니다. 정당한 사유 없이 거부하지 않습니다.
                </p>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  九. 개인정보보호책임자
                </h2>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <td className={thClass} style={thStyle}>성명</td>
                      <td className={tdClass} style={tdStyle}>
                        {process.env.NEXT_PUBLIC_CPO_NAME || "대표자"}
                      </td>
                    </tr>
                    <tr>
                      <td className={thClass} style={thStyle}>직위</td>
                      <td className={tdClass} style={tdStyle}>대표 (개인정보보호책임자)</td>
                    </tr>
                    <tr>
                      <td className={thClass} style={thStyle}>연락처</td>
                      <td className={tdClass} style={tdStyle}>
                        카카오톡 채널 &quot;안심제사&quot; 또는 웹사이트 상담 폼
                      </td>
                    </tr>
                    <tr>
                      <td className={thClass} style={thStyle}>접수 부서</td>
                      <td className={tdClass} style={tdStyle}>안심제사 고객지원팀</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  十. 개인정보 처리방침의 변경
                </h2>
                <p>
                  이 개인정보 처리방침은 시행일로부터 적용되며, 변경 사항이 있을 경우
                  웹사이트를 통해 공지합니다.
                </p>
              </section>

              <section>
                <h2 className={h2Class} style={h2Style}>
                  十 · 一. 개인정보 침해 구제
                </h2>
                <p>개인정보 침해에 대한 신고·상담이 필요한 경우 아래 기관에 문의하실 수 있습니다.</p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>개인정보 침해신고센터 (한국인터넷진흥원): 118</li>
                  <li>개인정보 분쟁조정위원회: 1833-6972</li>
                  <li>대검찰청 사이버수사과: 1301</li>
                  <li>경찰청 사이버수사국: 182</li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
