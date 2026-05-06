import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NPS Acoustique — Isolation acoustique et anti-vibratoire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, hsl(220, 15%, 12%) 0%, hsl(107, 50%, 18%) 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <span>NPS Acoustique</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>Expert depuis 20+ ans</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            Isolation acoustique et anti-vibratoire
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.4,
              maxWidth: "780px",
            }}
          >
            Solutions pour le bâtiment, le sport, l'hôtellerie et le bricolage.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "22px",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          <span>nps-france.com</span>
          <span style={{ color: "hsl(107, 50%, 60%)" }}>05 58 77 55 89</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
