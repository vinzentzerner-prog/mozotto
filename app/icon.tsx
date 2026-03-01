import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  // Fetch Cormorant Garamond Medium from Google Fonts
  let fontData: ArrayBuffer | undefined;
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500",
      { headers: { "User-Agent": "Mozilla/5.0 (compatible; Googlebot)" } }
    ).then((r) => r.text());
    const match = css.match(/src:\s*url\(([^)]+\.woff2)\)/);
    if (match?.[1]) {
      fontData = await fetch(match[1]).then((r) => r.arrayBuffer());
    }
  } catch {
    // Falls back to Georgia below
  }

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
        <span
          style={{
            fontFamily: fontData ? "Cormorant Garamond" : "Georgia, serif",
            fontSize: 22,
            fontWeight: 500,
            color: "#BC934E",
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          Z
        </span>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: "Cormorant Garamond",
                data: fontData,
                style: "normal" as const,
                weight: 500,
              },
            ],
          }
        : {}),
    }
  );
}
