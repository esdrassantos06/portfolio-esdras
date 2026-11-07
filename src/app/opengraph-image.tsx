import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Esdras Santos, full stack developer in Portugal: I build the whole thing, from the database to the app.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  bg: "#0a0a0a",
  ink: "#e0e0e0",
  muted: "#9a9a9a",
  accent: "#bd5fff",
};

const AURORA = [
  "radial-gradient(60% 75% at 92% 18%, rgba(150, 66, 200, 0.6), transparent 70%)",
  "radial-gradient(60% 80% at 75% 110%, rgba(126, 42, 168, 0.5), transparent 70%)",
  "radial-gradient(45% 60% at 0% 0%, rgba(96, 30, 140, 0.25), transparent 70%)",
].join(",");

export default async function OpengraphImage() {
  const [bold, medium, mark] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Satoshi-700.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Satoshi-500.ttf")),
    readFile(join(process.cwd(), "src/app/icon.svg")),
  ]);
  const markSrc = `data:image/svg+xml;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 80px 56px",
        backgroundColor: COLORS.bg,
        backgroundImage: AURORA,
        fontFamily: "Satoshi",
        color: COLORS.ink,
      }}
    >
      <img src={markSrc} width={96} height={96} alt="" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
          }}
        >
          Esdras Santos
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            fontSize: 44,
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
          }}
        >
          <div style={{ display: "flex" }}>
            <span>I build&nbsp;</span>
            <span style={{ color: COLORS.accent }}>the whole thing</span>
            <span>,</span>
          </div>
          <span>from the database to the app.</span>
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
        <span>Full stack developer · Portugal</span>
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
