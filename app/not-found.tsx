import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="de">
      <body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: "sans-serif",
          background: "#f9f7f4",
          margin: 0,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            style={{ fontSize: "3rem", fontWeight: "500", marginBottom: "1rem" }}
          >
            404
          </h1>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            Seite nicht gefunden / Page not found
          </p>
          <Link
            href="/de"
            style={{
              padding: "0.75rem 1.5rem",
              background: "#1a1a20",
              color: "#f9f7f4",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Zur Startseite
          </Link>
        </div>
      </body>
    </html>
  );
}
