"use client";

import CvDownload from "../CvDownload";
import GridBackground from "../ui/GridBackground";
import ShinyButton from "../ui/ShinyButton";
import Icons from "../icons/Icons";
import MaskedCursor from "../MaskedCursor/MaskedCursor";
import ScrollAnimation from "../ui/ScrollAnimation";
import { useTranslations } from "next-intl";

export default function HomeComponent() {
  const t = useTranslations("HomeComponent");
  return (
    <main
      id="home"
      className="z-10 flex min-h-screen w-full max-w-full flex-grow flex-col items-center justify-center gap-4 pt-30 inset-shadow-sm sm:pt-0"
    >
      <MaskedCursor
        width="full"
        height="screen"
        maskedContent={
          <div className="flex flex-col items-center justify-center gap-4" />
        }
        normalContent={(isHovered, setIsHovered) => (
          <div className="mx-auto w-3/4">
            <div className="relative flex w-full flex-col items-center justify-center gap-4">
              <div
                className={`title relative z-40 space-y-2`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <ScrollAnimation delayIndex={0}>
                  <h2 className="text-principal text-center text-sm font-bold uppercase">
                    {t("based")}
                  </h2>
                </ScrollAnimation>
                <div>
                  <ScrollAnimation delayIndex={1}>
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
                  </ScrollAnimation>
                  <ScrollAnimation delayIndex={2}>
                    <h1 className="z-99 text-center text-5xl font-bold sm:text-6xl md:text-7xl">
                      <span
                        className={`${
                          isHovered ? "text-principal" : "text-secundaria"
                        } transition-all duration-300`}
                      >
                        Developer
                      </span>
                    </h1>
                  </ScrollAnimation>
                </div>
              </div>

              <ScrollAnimation
                delayIndex={3}
                className="relative z-40 w-3/4 text-center"
              >
                <span className="text-lg">{t("description")}</span>
              </ScrollAnimation>
              <ScrollAnimation
                delayIndex={4}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="buttons relative z-20 mt-2 flex flex-col items-center gap-4 sm:flex-row sm:gap-2">
                  <ShinyButton text={t("shinyWork")} link="#work" />
                  <CvDownload />
                </div>
                <div className="icons mt-4">
                  <Icons />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        )}
      />

      <GridBackground />
    </main>
  );
}
