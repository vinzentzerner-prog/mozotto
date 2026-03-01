import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Drawn as SVG paths — no font required (Satori needs a font to render text,
// and network fetches can silently fail at deploy time).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F8F6F1",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
        }}
      >
        {/* Bold geometric Z: top bar + diagonal parallelogram + bottom bar */}
        <svg width="20" height="22" viewBox="0 0 20 22" fill="#BC934E">
          {/* Top bar */}
          <rect x="0" y="0" width="20" height="3.5" />
          {/* Diagonal — parallelogram from top-right to bottom-left */}
          <polygon points="20,3.5 20,8 0,18.5 0,14" />
          {/* Bottom bar */}
          <rect x="0" y="18.5" width="20" height="3.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
