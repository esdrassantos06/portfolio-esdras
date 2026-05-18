export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          background: "#0a0a0a",
          color: "#e0e0e0",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <main style={{ textAlign: "center", maxWidth: "32rem" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 700, margin: 0 }}>
            404
          </h1>
          <p
            style={{
              color: "#a927bf",
              fontSize: "1.125rem",
              marginTop: "0.5rem",
            }}
          >
            Page Not Found
          </p>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>
            The page you are looking for does not exist or has moved.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              padding: "0.5rem 1.25rem",
              borderRadius: "0.75rem",
              border: "1px solid #a927bf",
              color: "#e0e0e0",
              textDecoration: "none",
            }}
          >
            Return to main page
          </a>
        </main>
      </body>
    </html>
  );
}
