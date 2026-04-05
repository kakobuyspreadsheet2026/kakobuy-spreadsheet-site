import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #fff7ed 0%, #fffbeb 50%, #fef3c7 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          color: "#0f172a",
        }}
      >
        <div style={{ fontSize: 28, textTransform: "uppercase", letterSpacing: 6, color: "#b45309" }}>Better Picks Faster</div>
        <div style={{ marginTop: 24, fontSize: 72, fontWeight: 700 }}>Kakobuy Spreadsheet 2026</div>
        <div style={{ marginTop: 24, fontSize: 32, lineHeight: 1.4, maxWidth: 900 }}>
          Category shortcuts, QC help, shipping answers, and buying guides in English, Polish, and Spanish.
        </div>
      </div>
    ),
    size,
  );
}
