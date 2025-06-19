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
      className="z-10 flex min-h-screen w-full max-w-full flex-grow flex-col items-center justify-center gap-4 inset-shadow-sm"
    >
      <MaskedCursor
        width="full"
        height="screen"
        maskedContent={
          <div className="flex flex-col items-center justify-center gap-4" />
        }
        normalContent={(isHovered, setIsHovered) => (
          <div className="relative flex w-200 flex-col items-center justify-center gap-4">
            <div
              className={`title space-y-2`}
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
                  <h1 className="max-w-screen text-center text-5xl font-bold sm:text-6xl md:text-7xl">
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
              className="flex w-[40%] items-center justify-center sm:w-[60%] md:w-[80%] lg:w-full"
            >
              <span className="flex items-center justify-center text-center text-lg">
                {t("description")}
              </span>
            </ScrollAnimation>
            <ScrollAnimation
              delayIndex={4}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="buttons relative z-30 mt-2 flex flex-col items-center gap-4 sm:flex-row sm:gap-2">
                <ShinyButton text={t("shinyWork")} link="#work" />
                <CvDownload />
              </div>
              <div className="icons mt-4">
                <Icons />
              </div>
            </ScrollAnimation>
          </div>
        )}
      />

      <GridBackground />
    </main>
  );
}
