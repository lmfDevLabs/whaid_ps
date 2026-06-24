import {ImageResponse} from "next/og";

export const runtime = "edge";
export const alt = "Whaid";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #07101f 0%, #0d1b2f 56%, #102a37 100%)",
          color: "#f7fbff",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "72px 84px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 16,
            background: "#12d6ab",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -140,
            width: 440,
            height: 440,
            borderRadius: 440,
            background: "rgba(18, 214, 171, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 88,
            bottom: 72,
            width: 260,
            height: 260,
            borderRadius: 260,
            border: "2px solid rgba(18, 214, 171, 0.34)",
          }}
        />
        <div style={{display: "flex", alignItems: "center", gap: 28}}>
          <div
            style={{
              width: 118,
              height: 118,
              borderRadius: 30,
              background: "#12d6ab",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#07101f",
              fontSize: 68,
              fontWeight: 900,
              letterSpacing: -5,
            }}
          >
            W
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{fontSize: 92, fontWeight: 900, letterSpacing: -5, lineHeight: 1}}>Whaid</div>
            <div style={{fontSize: 28, color: "#12d6ab", letterSpacing: 6, textTransform: "uppercase", marginTop: 10}}>Blog</div>
          </div>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: 20, maxWidth: 820}}>
          <div style={{fontSize: 58, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2}}>IA para responder por tus activos desde WhatsApp</div>
          <div style={{fontSize: 30, lineHeight: 1.3, color: "#b8c7d9"}}>Ideas, guías y novedades sobre asistentes inteligentes para equipos operativos.</div>
        </div>
        <div style={{fontSize: 28, color: "#d8e4f0", fontWeight: 700}}>whaid.co</div>
      </div>
    ),
    size,
  );
}
