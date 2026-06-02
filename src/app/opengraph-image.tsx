import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Akshaya Community Pharmacy — Medicines at Up to 60% Discount";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #065F46 0%, #047857 50%, #064E3B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Background circles */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
        }} />
        <div style={{
          position: "absolute", bottom: -100, right: 200,
          width: 300, height: 300, borderRadius: "50%",
          background: "rgba(245,158,11,0.15)",
        }} />

        {/* Cross icon */}
        <div style={{
          width: 64, height: 64, borderRadius: 16,
          background: "rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 32,
          border: "2px solid rgba(255,255,255,0.2)",
        }}>
          <div style={{ color: "white", fontSize: 36, fontWeight: 900 }}>✚</div>
        </div>

        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 32 }}>
          <div style={{ color: "white", fontSize: 52, fontWeight: 900, lineHeight: 1.1 }}>
            Akshaya Community
          </div>
          <div style={{ color: "white", fontSize: 52, fontWeight: 900, lineHeight: 1.1 }}>
            Pharmacy
          </div>
        </div>

        {/* Tagline */}
        <div style={{
          color: "#FCD34D", fontSize: 30, fontWeight: 700, marginBottom: 40,
        }}>
          Medicines at Up to 60% Discount
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 32 }}>
          {[
            { num: "75+", label: "Stores" },
            { num: "3", label: "Districts" },
            { num: "60%", label: "Max Savings" },
          ].map(({ num, label }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: 12, padding: "16px 28px",
              display: "flex", flexDirection: "column", alignItems: "center",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              <div style={{ color: "#FCD34D", fontSize: 32, fontWeight: 900 }}>{num}</div>
              <div style={{ color: "#A7F3D0", fontSize: 16 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{
          position: "absolute", bottom: 48, right: 80,
          color: "rgba(255,255,255,0.5)", fontSize: 20,
        }}>
          akshaya-pharmacy.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
