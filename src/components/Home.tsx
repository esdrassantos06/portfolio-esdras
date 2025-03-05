"use client";

import CvDownload from "./CvDownload";
import GridBackground from "./GridBackground";
import ShinyButton from "./ShinyButton";
import Icons from "./Icons";
import MaskedCursor from "./MaskedCursor/MaskedCursor";
import ScrollAnimation from "./ScrollAnimation";

export default function HomeComponent() {
  return (
    <main
      id="home"
      className="w-full min-h-screen max-w-full z-10 inset-shadow-sm flex flex-col gap-4 justify-center items-center"
    >
      <MaskedCursor
        width="full"
        height="screen"
        maskedContent={
          <div className="flex gap-4 flex-col items-center justify-center"></div>
        }
        normalContent={(isHovered, setIsHovered) => (
          <div className="flex w-200 gap-4 relative flex-col items-center justify-center">
            <div
              className={`title space-y-2`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ScrollAnimation delayIndex={0}>
                <h2 className="font-bold text-principal text-center text-sm">
                  BASED IN PORTUGAL
                </h2>
              </ScrollAnimation>
              <div>
                <ScrollAnimation delayIndex={1}>
                  <h1 className="font-bold max-w-screen text-center text-5xl sm:text-6xl md:text-7xl">
                    Quality{" "}
                    <span
                      className={`${
                        isHovered ? "text-principal" : "text-secundaria"
                      } transition-all duration-300`}
                    >
                      Design & Web
                    </span>
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation delayIndex={2}>
                  <h1 className="font-bold max-w-screen text-center text-5xl sm:text-6xl md:text-7xl">
                    <span
                      className={`${
                        isHovered ? "text-principal" : "text-secundaria"
                      } transition-all duration-300`}
                    >
                      Development
                    </span>{" "}
                    Synergy
                  </h1>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation delayIndex={3} className="flex items-center justify-center">
              <span className="text-center flex lg:w-full md:w-[80%] sm:w-[60%] w-1/2 items-center justify-center text-lg">
                Hi, I&apos;m Esdras, I create intuitive, visually stunning and
                highly functional web applications.
              </span>
            </ScrollAnimation>
            <ScrollAnimation delayIndex={4} className="flex flex-col items-center justify-center gap-4">
              <div className="buttons z-30 relative sm:flex-row flex-col flex mt-2 gap-4 sm:gap-2 items-center">
                <ShinyButton text="See My Work" link="#work" />
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
