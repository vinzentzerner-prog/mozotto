import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs"; // needed for fs access
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  // Serve a hand-crafted PNG if one exists in public/ — try both common names.
  for (const name of ["favicon-32x32.png", "favicon.png"]) {
    try {
      const png = readFileSync(join(process.cwd(), "public", name));
      return new Response(png, { headers: { "Content-Type": "image/png" } });
    } catch {
      // try next
    }
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
