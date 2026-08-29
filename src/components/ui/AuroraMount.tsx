"use client";

import dynamic from "next/dynamic";

const AuroraBackground = dynamic(() => import("./AuroraBackground"), {
  ssr: false,
});

export default function AuroraMount() {
  return <AuroraBackground />;
}
