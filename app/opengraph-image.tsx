import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "안심제사 — 사찰 제사 위탁 전문";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1628",
          backgroundImage:
            "radial-gradient(800px 400px at 80% 20%, rgba(184,153,104,0.18), transparent 60%), linear-gradient(180deg, #0B1628 0%, #0F1A2E 100%)",
          color: "#F6EED9",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: "0.5em",
            color: "#B89968",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          SINCE 2026 · 영구봉안
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            border: "1.5px solid #B89968",
            color: "#D4B98A",
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          安
        </div>
        <div style={{ fontSize: 60, fontWeight: 600, marginBottom: 14, color: "#F6EED9" }}>
          안심제사
        </div>
        <div style={{ fontSize: 22, color: "#B89968", letterSpacing: "0.3em", marginBottom: 12 }}>
          安 心 祭 祀
        </div>
        <div style={{ fontSize: 20, color: "#C9C2AE" }}>
          사찰 제사 위탁 · 납골봉안 · 49재 · 천도재
        </div>
      </div>
    ),
    { ...size }
  );
}
