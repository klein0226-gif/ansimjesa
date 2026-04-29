"use client";

export default function KakaoButton() {
  return (
    <span
      aria-disabled="true"
      aria-label="카카오 채널 개설 예정"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-5 py-3 shadow-md"
      style={{
        background: "rgba(107, 112, 133, 0.12)",
        color: "var(--ink-mute, #6B7085)",
        border: "1px dashed rgba(107,112,133,0.45)",
        letterSpacing: "0.02em",
        cursor: "not-allowed",
        pointerEvents: "none",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="#6B7085"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3C6.5 3 2 6.5 2 10.7c0 2.7 1.8 5.1 4.5 6.5-.1.5-.9 3.4-1 3.6 0 0 0 .2.1.2.1.1.2 0 .2 0 .3 0 3.6-2.3 4.2-2.7.6.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.7C22 6.5 17.5 3 12 3z" />
      </svg>
      <span className="font-medium text-sm">카카오 채널 개설 예정</span>
    </span>
  );
}
