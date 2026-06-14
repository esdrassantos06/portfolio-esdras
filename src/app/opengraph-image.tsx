import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Esdras Santos · Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontPath = (family: string, file: string) =>
  join(process.cwd(), "node_modules/geist/dist/fonts", family, file);

const COLORS = {
  bg: "#0a0a0a",
  ink: "#f5f5f5",
  muted: "#8a8a8a",
  faint: "#3a3a3a",
  accent: "#bd5fff",
  accentDeep: "#a927bf",
  border: "rgba(255,255,255,0.08)",
};

const stack = ["React", "Next.js", "TypeScript", "Node.js"];

export default async function OpengraphImage() {
  const [geistBold, geistMedium, monoMedium, monoSemibold] = await Promise.all([
    readFile(fontPath("geist-sans", "Geist-Bold.ttf")),
    readFile(fontPath("geist-sans", "Geist-Medium.ttf")),
    readFile(fontPath("geist-mono", "GeistMono-Medium.ttf")),
    readFile(fontPath("geist-mono", "GeistMono-SemiBold.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: COLORS.bg,
        fontFamily: "Geist",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -240,
          right: -180,
          width: 720,
          height: 720,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(169,39,191,0.42) 0%, rgba(189,95,255,0.10) 45%, rgba(10,10,10,0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -300,
          left: -160,
          width: 620,
          height: 620,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(189,95,255,0.20) 0%, rgba(10,10,10,0) 68%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 8,
          background: `linear-gradient(180deg, ${COLORS.accent}, ${COLORS.accentDeep})`,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "44px 64px 0 80px",
          fontFamily: "GeistMono",
          fontSize: 24,
          color: COLORS.muted,
          letterSpacing: "0.02em",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ color: COLORS.accent }}>~/</span>
          <span>esdras-santos</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 999,
            padding: "8px 18px",
            fontSize: 20,
            color: COLORS.ink,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: 999,
              backgroundColor: "#34d399",
            }}
          />
          Available · Portugal
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            fontFamily: "GeistMono",
            fontSize: 26,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: COLORS.accent,
            marginBottom: 22,
          }}
        >
          Full Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 116,
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: COLORS.ink,
          }}
        >
          Esdras Santos
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 500,
            color: COLORS.muted,
            marginTop: 26,
            maxWidth: 880,
          }}
        >
          End-to-end web applications, designed and shipped.
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 44 }}>
          {stack.map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                fontFamily: "GeistMono",
                fontSize: 24,
                color: COLORS.ink,
                border: `1px solid ${COLORS.border}`,
                backgroundColor: "rgba(255,255,255,0.02)",
                borderRadius: 12,
                padding: "12px 20px",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 64px 44px 80px",
          fontFamily: "GeistMono",
          fontSize: 22,
          color: COLORS.faint,
        }}
      >
        <span>{"// freelance & collaboration"}</span>
        <span style={{ color: COLORS.muted }}>portfolioesdras.com</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
        { name: "Geist", data: geistMedium, weight: 500, style: "normal" },
        { name: "GeistMono", data: monoMedium, weight: 500, style: "normal" },
        { name: "GeistMono", data: monoSemibold, weight: 600, style: "normal" },
      ],
    },
  );
}
