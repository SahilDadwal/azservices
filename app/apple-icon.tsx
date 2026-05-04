import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 180, height: 180 };

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6B5B2D 0%, #AD8330 52%, #C6AE73 100%)",
          color: "#FFFFFF",
          fontSize: 72,
          fontWeight: 900,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          letterSpacing: "-0.04em",
          borderRadius: 40
        }}
      >
        AZ
      </div>
    ),
    { ...size }
  );
}
