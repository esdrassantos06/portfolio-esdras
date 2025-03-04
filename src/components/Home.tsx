'use client';

import CvDownload from "./CvDownload";
import GridBackground from "./GridBackground";
import ShinyButton from "./ShinyButton";
import Icons from "./Icons";
import MaskedCursor from "./MaskedCursor/MaskedCursor";

export default function HomeComponent() {
  return (
    <main
      id="home"
      className="w-full min-h-screen z-10 inset-shadow-sm flex flex-col gap-4 justify-center items-center"
    >
      <MaskedCursor
      width="full" height="screen"
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
              <h2 className="font-bold text-principal text-center text-sm">
                BASED IN PORTUGAL
              </h2>
              <div>
                <h1 className="font-bold text-center text-7xl">
                  Quality <span className={`${isHovered ? "text-principal" : "text-secundaria"} transition-all duration-300`}>Design & Web</span>
                </h1>
                <h1 className="font-bold text-center text-7xl">
                  <span className={`${isHovered ? "text-principal" : "text-secundaria"} transition-all duration-300`}>Development</span> Synergy
                </h1>
              </div>
            </div>

            <span className="text-center text-lg w-full">
              Hi, I&apos;m Esdras, I create intuitive, visually stunning and
              highly functional web applications.
            </span>
            <div className="buttons z-30 relative flex mt-2 gap-2 items-center">
              <ShinyButton text="See My Work" link="#work" />
              <CvDownload/>
            </div>
            <div className="icons">
              <Icons />
            </div>
          </div>
          )
        }
      />

      <GridBackground />
    </main>
  );
}
