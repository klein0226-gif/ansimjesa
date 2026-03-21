import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — 안심제사",
  description: "안심제사 개인정보 처리방침",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm prose-gray">
          <h1 className="font-serif text-3xl font-bold mb-8" style={{ color: "#2D6A4F" }}>
            개인정보 처리방침
          </h1>

          <p className="text-sm text-gray-500 mb-8">시행일: 2026년 3월 21일</p>

          <p>
            안심제사(이하 &quot;회사&quot;)는 「개인정보 보호법」에 따라 이용자의 개인정보를
            보호하고 이와 관련한 고충을 신속하게 처리하기 위하여 다음과 같이
            개인정보 처리방침을 수립·공개합니다.
          </p>

          <h2>1. 수집하는 개인정보 항목 및 수집 목적</h2>
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left">수집 항목</th>
                <th className="border border-gray-200 px-3 py-2 text-left">수집 목적</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">성함, 연락처(전화번호)</td>
                <td className="border border-gray-200 px-3 py-2">상담 신청 접수 및 회신</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">서비스 선택, 문의 내용</td>
                <td className="border border-gray-200 px-3 py-2">맞춤 상담 및 서비스 안내</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-1">
            * 종교적 신념에 관한 정보(불교 제사/봉안 관련)는 「개인정보 보호법」 제23조에 따른
            민감정보에 해당하며, 별도의 동의를 받아 처리합니다.
          </p>

          <h2>1-2. 민감정보의 처리</h2>
          <p>
            안심제사는 서비스 특성상 이용자의 종교적 신념이 추론될 수 있는 정보를 처리합니다.
          </p>
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left">민감정보 항목</th>
                <th className="border border-gray-200 px-3 py-2 text-left">처리 목적</th>
                <th className="border border-gray-200 px-3 py-2 text-left">동의 방법</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">서비스 선택(제사/봉안/49재/천도재), 문의 내용 중 종교 관련 사항</td>
                <td className="border border-gray-200 px-3 py-2">사찰 연결 상담 및 맞춤 서비스 제공</td>
                <td className="border border-gray-200 px-3 py-2">상담 신청 시 별도 체크박스로 동의</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-1">
            * 민감정보 동의를 거부할 권리가 있으나, 거부 시 상담 서비스 이용이 제한됩니다.
          </p>

          <h2>2. 개인정보의 수집 방법</h2>
          <p>웹사이트 상담 신청 폼, 카카오톡 상담을 통해 수집합니다.</p>

          <h2>3. 개인정보의 보유 및 이용 기간</h2>
          <p>
            상담 완료 후 <strong>3년간 보유</strong> 후 지체 없이 파기합니다.
            다만, 관련 법령에 따라 보존이 필요한 경우 해당 법령이 정한 기간 동안 보관합니다.
          </p>
          <ul>
            <li>전자상거래법에 따른 계약·청약철회 기록: 5년</li>
            <li>소비자 불만·분쟁 처리 기록: 3년</li>
          </ul>

          <h2>4. 개인정보의 제3자 제공</h2>
          <p>
            이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
            다만, 상담 진행을 위해 연결 사찰에 성함·연락처를 공유할 수 있으며,
            이 경우 사전에 별도 동의를 받습니다.
          </p>

          <h2>5. 개인정보 처리의 위탁</h2>
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left">수탁자</th>
                <th className="border border-gray-200 px-3 py-2 text-left">위탁 업무</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">Vercel Inc.</td>
                <td className="border border-gray-200 px-3 py-2">웹사이트 호스팅</td>
              </tr>
            </tbody>
          </table>


          <h2>5-2. 개인정보의 국외 이전</h2>
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-2 text-left">항목</th>
                <th className="border border-gray-200 px-3 py-2 text-left">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2">이전받는 자</td>
                <td className="border border-gray-200 px-3 py-2">Vercel Inc.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">이전 국가</td>
                <td className="border border-gray-200 px-3 py-2">미국</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">이전 항목</td>
                <td className="border border-gray-200 px-3 py-2">상담 신청 시 입력된 성함, 연락처, 서비스 선택, 문의 내용</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">이전 시점 및 방법</td>
                <td className="border border-gray-200 px-3 py-2">상담 신청 즉시, 네트워크를 통한 전송</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">이전 목적</td>
                <td className="border border-gray-200 px-3 py-2">웹사이트 호스팅 및 서비스 제공</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2">보유 기간</td>
                <td className="border border-gray-200 px-3 py-2">상담 완료 후 3년 또는 서비스 이용 기간</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-1">
            * 이용자는 국외 이전에 동의하지 않을 수 있으나, 이 경우 웹사이트를 통한 상담 신청이
            제한될 수 있습니다. 「개인정보 보호법」 제28조의8에 따라 처리됩니다.
          </p>

          <h2>6. 개인정보의 파기 절차 및 방법</h2>
          <p>보유 기간이 경과하거나 처리 목적이 달성된 경우 지체 없이 파기합니다.</p>
          <ul>
            <li>전자 파일: 복원 불가능한 방법으로 영구 삭제</li>
            <li>종이 문서: 분쇄기로 분쇄 또는 소각</li>
          </ul>

          <h2>7. 안전성 확보 조치</h2>
          <p>회사는 개인정보의 안전성 확보를 위해 다음 조치를 취하고 있습니다.</p>
          <ul>
            <li>HTTPS(SSL/TLS)를 통한 데이터 전송 암호화</li>
            <li>접근 권한 최소화 및 관리자 인증</li>
            <li>개인정보 접근 기록 보관</li>
            <li>Supabase 이관 시 행 수준 보안(RLS) 및 저장 암호화 적용 예정</li>
          </ul>

          <h2>8. 이용자의 권리·의무 및 행사 방법</h2>
          <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
          <ul>
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리 정지 요구</li>
          </ul>
          <p>위 권리는 다음 방법으로 행사할 수 있습니다.</p>
          <ul>
            <li><strong>카카오톡 채널</strong>: &quot;안심제사&quot; 검색 후 1:1 채팅</li>
            <li><strong>웹사이트 상담 폼</strong>: ansimjesa.co.kr/contact 에서 &quot;개인정보 권리행사&quot; 선택</li>
          </ul>
          <p className="text-xs text-gray-500">
            접수 후 10일 이내 처리 결과를 회신합니다. 정당한 사유 없이 거부하지 않습니다.
          </p>

          <h2>9. 개인정보보호책임자</h2>
          <table className="w-full text-sm border-collapse border border-gray-200">
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-2 bg-gray-50 font-medium">성명</td>
                <td className="border border-gray-200 px-3 py-2">{process.env.NEXT_PUBLIC_CPO_NAME || "대표자"}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 bg-gray-50 font-medium">직위</td>
                <td className="border border-gray-200 px-3 py-2">대표 (개인정보보호책임자)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 bg-gray-50 font-medium">연락처</td>
                <td className="border border-gray-200 px-3 py-2">카카오톡 채널 &quot;안심제사&quot; 또는 웹사이트 상담 폼</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-2 bg-gray-50 font-medium">접수 부서</td>
                <td className="border border-gray-200 px-3 py-2">안심제사 고객지원팀</td>
              </tr>
            </tbody>
          </table>

          <h2>10. 개인정보 처리방침의 변경</h2>
          <p>
            이 개인정보 처리방침은 시행일로부터 적용되며, 변경 사항이 있을 경우
            웹사이트를 통해 공지합니다.
          </p>

          <h2>11. 개인정보 침해 구제</h2>
          <p>개인정보 침해에 대한 신고·상담이 필요한 경우 아래 기관에 문의하실 수 있습니다.</p>
          <ul>
            <li>개인정보 침해신고센터 (한국인터넷진흥원): 118</li>
            <li>개인정보 분쟁조정위원회: 1833-6972</li>
            <li>대검찰청 사이버수사과: 1301</li>
            <li>경찰청 사이버수사국: 182</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
