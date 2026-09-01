"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import AboutFacts from "./AboutFacts";
import AboutStack from "./AboutStack";
import { useAboutMotion } from "./useAboutMotion";

const PARAGRAPHS = ["lead", "body", "detail", "closing"] as const;

export default function About() {
  const t = useTranslations("About");
  const rootRef = useRef<HTMLElement>(null);

  useAboutMotion(rootRef);

  return (
    <section
      ref={rootRef}
      className="mx-auto flex min-h-screen w-full items-center justify-center pt-30 pb-24 sm:py-28"
      aria-label="About Esdras and his stack"
    >
      <div className="shell relative z-50">
        <div className="about-heading-mask overflow-hidden pb-2">
          <h2 className="about-heading max-w-[19ch] text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.08] font-bold tracking-[-0.03em] text-balance">
            {t.rich("heading", {
              accent: (chunks) => <span className="text-link">{chunks}</span>,
            })}
          </h2>
        </div>

        <div className="about-body mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] lg:gap-20">
          <div className="flex flex-col gap-5">
            {PARAGRAPHS.map((key) => (
              <p
                key={key}
                className="about-para text-principal/80 max-w-[62ch] text-base text-pretty sm:text-lg"
              >
                {t(key)}
              </p>
            ))}
          </div>

          <AboutFacts />
        </div>

        <AboutStack />
      </div>
    </section>
  );
}
