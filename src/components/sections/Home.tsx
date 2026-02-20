"use client";

import CvDownload from "../CvDownload";
import GridBackground from "../ui/GridBackground";
import ShinyButton from "../ui/ShinyButton";
import Icons from "../icons/Icons";
import MaskedCursor from "../MaskedCursor/MaskedCursor";
import { FadeIn } from "../ui/ScrollAnimation";
import { useTranslations } from "next-intl";

export default function HomeComponent() {
  const t = useTranslations("HomeComponent");
  return (
    <section
      id="home"
      className="z-10 flex min-h-screen w-full max-w-full grow flex-col items-center justify-center gap-4 pt-30 inset-shadow-sm sm:pt-0"
      aria-label="Home section"
    >
      <MaskedCursor
        width="full"
        height="screen"
        maskedContent={
          <div className="flex flex-col items-center justify-center gap-4" />
        }
        normalContent={(isHovered, setIsHovered) => (
          <div className="mx-auto w-3/4">
            <header className="relative flex w-full flex-col items-center justify-center gap-4">
              <div
                className="title relative z-10000 space-y-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <FadeIn direction="up" once>
                  <p className="text-principal text-center text-sm font-bold uppercase">
                    {t("based")}
                  </p>
                </FadeIn>
                <div>
                  <FadeIn direction="up" once staggerChildren={0.1}>
                    <h1 className="max-w-screen text-center text-5xl font-bold sm:text-6xl md:text-7xl">
                      Full{" "}
                      <span
                        className={`${
                          isHovered ? "text-principal" : "text-secundaria"
                        } transition-all duration-300`}
                      >
                        Stack
                      </span>
                    </h1>
                    <h1 className="text-center text-5xl font-bold sm:text-6xl md:text-7xl">
                      <span
                        className={`${
                          isHovered ? "text-principal" : "text-secundaria"
                        } transition-all duration-300`}
                      >
                        Developer
                      </span>
                    </h1>
                  </FadeIn>
                </div>
              </div>

              <FadeIn
                direction="up"
                className="relative z-10000 w-3/4 text-center"
                once
              >
                <p className="text-lg">{t("description")}</p>
              </FadeIn>
              <nav
                aria-label="Main navigation actions"
                className="flex flex-col items-center justify-center gap-4"
              >
                <FadeIn
                  direction="up"
                  className="flex flex-col items-center justify-center gap-4"
                  once
                >
                  <div className="buttons relative mt-2 flex flex-col items-center gap-4 sm:flex-row sm:gap-2">
                    <ShinyButton text={t("shinyWork")} link="#work" />
                    <CvDownload />
                  </div>
                  <div className="icons mt-4" aria-label="Social media links">
                    <Icons />
                  </div>
                </FadeIn>
              </nav>
            </header>
          </div>
        )}
      />

      <GridBackground />
    </section>
  );
}
