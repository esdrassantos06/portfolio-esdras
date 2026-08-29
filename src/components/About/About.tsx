"use client";

import { FadeIn } from "../ui/ScrollAnimation";
import Technologies from "../sections/Technologies";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="mx-auto flex h-fit min-h-screen w-full items-center justify-center pt-30 sm:py-20"
      aria-label="About and technologies section"
    >
      <div className="relative z-50 mx-auto flex w-3/4 flex-col items-center justify-center">
        <header className="title mb-10 flex w-full flex-col items-center justify-center space-y-2 self-start sm:mb-18">
          <FadeIn direction="up" once staggerChildren={0.1}>
            <h2 className="mb-4 text-center text-4xl font-bold sm:mb-6 sm:text-5xl lg:text-6xl">
              {t("currentTech")}
            </h2>
            <p className="text-principal/70 font-satoshi text-center text-sm sm:text-base">
              {t("description")}
            </p>
          </FadeIn>
        </header>
        <Technologies />
      </div>
    </section>
  );
}
