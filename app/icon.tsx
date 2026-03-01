import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs"; // needed for fs access
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  // If a hand-crafted PNG has been placed at public/favicon.png, serve it
  // directly — most reliable cross-browser approach.
  try {
    const png = readFileSync(join(process.cwd(), "public", "favicon.png"));
    return new Response(png, { headers: { "Content-Type": "image/png" } });
  } catch {
    // No PNG uploaded yet — fall through to generated icon.
  }

  // Fallback: geometric Z drawn as SVG paths (no font required).
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
        <svg width="20" height="22" viewBox="0 0 20 22" fill="#BC934E">
          <rect x="0" y="0" width="20" height="3.5" />
          <polygon points="20,3.5 20,8 0,18.5 0,14" />
          <rect x="0" y="18.5" width="20" height="3.5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
