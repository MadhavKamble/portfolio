import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Madhav Kamble — Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b0b0d",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 100px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left — text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
          <div style={{ fontSize: 18, color: "#d6c074", letterSpacing: 4, textTransform: "uppercase" }}>
            Portfolio
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#f1ede4", lineHeight: 1.1 }}>
            Madhav Kamble
          </div>
          <div style={{ fontSize: 28, color: "#7c776c", marginTop: 8 }}>
            Full-Stack Developer · Data Engineering
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {["React", "Next.js", "Python", "Node.js"].map((t) => (
              <div
                key={t}
                style={{
                  background: "#121215",
                  border: "1px solid #25252b",
                  borderRadius: 8,
                  padding: "6px 16px",
                  color: "#c9c3b6",
                  fontSize: 18,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right — portrait */}
        <div
          style={{
            width: 340,
            height: 420,
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid #25252b",
            flexShrink: 0,
            marginLeft: 80,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://madhav-kamble.vercel.app/portrait.jpg"
            alt="Madhav Kamble"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
