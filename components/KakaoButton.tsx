"use client";

export default function KakaoButton() {
  return (
    <a
      href="https://pf.kakao.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡으로 상담하기"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      style={{ backgroundColor: "#FEE500", color: "#3C1E1E" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3C6.477 3 2 6.463 2 10.691c0 2.726 1.802 5.117 4.512 6.467-.144.521-.928 3.36-.963 3.567 0 0-.02.166.088.229.108.063.235.015.235.015.31-.043 3.592-2.34 4.156-2.74.636.093 1.294.143 1.972.143 5.523 0 10-3.463 10-7.691C22 6.463 17.523 3 12 3Z"
          fill="#3C1E1E"
        />
      </svg>
      <span className="font-bold text-sm">카카오톡 상담</span>
    </a>
  );
}
