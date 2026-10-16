import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Esdras Santos · Full Stack Developer based in Portugal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  bg: "#0a0a0a",
  ink: "#e0e0e0",
  muted: "#9a9a9a",
  accent: "#a927bf",
};

const AURORA = [
  "radial-gradient(60% 75% at 92% 18%, rgba(150, 66, 200, 0.7), transparent 70%)",
  "radial-gradient(60% 80% at 75% 110%, rgba(126, 42, 168, 0.55), transparent 70%)",
  "radial-gradient(45% 60% at 0% 0%, rgba(96, 30, 140, 0.30), transparent 70%)",
].join(",");

const stack = ["React", "Next.js", "TypeScript", "Node.js"];

const font = (file: string) =>
  readFile(join(process.cwd(), "assets/fonts", file));

export default async function OpengraphImage() {
  const [bold, medium] = await Promise.all([
    font("Satoshi-700.ttf"),
    font("Satoshi-500.ttf"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 88px 60px",
        backgroundColor: COLORS.bg,
        backgroundImage: AURORA,
        fontFamily: "Satoshi",
        color: COLORS.ink,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 150,
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: "-0.035em",
          }}
        >
          <span>Esdras</span>
          <span style={{ color: COLORS.accent }}>Santos</span>
        </div>

        <div
          style={{
            width: 440,
            height: 1,
            marginTop: 40,
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.3), rgba(169,39,191,0.7), rgba(169,39,191,0))",
          }}
        />

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 38,
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          Full Stack Developer in Portugal
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: 26,
          fontWeight: 500,
          color: COLORS.muted,
        }}
      >
        <span style={{ color: COLORS.ink }}>portfolioesdras.com</span>
        <span>{stack.join("  ·  ")}</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Satoshi", data: bold, weight: 700, style: "normal" },
        { name: "Satoshi", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
