import CvDownload from "./CvDownload";
import GridBackground from "./GridBackground";
import ShinyButton from "./ShinyButton";
import Icons from "./Icons";

export default function HomeComponent() {
  return(
    <main
        id="home"
        className="w-full min-h-screen z-10 inset-shadow-sm flex justify-center items-center"
      >
        <GridBackground />
        <div className="flex w-200 gap-4 flex-col items-center justify-center">
          <div className="title space-y-2">
            <h2 className="font-bold text-center text-sm">BASED IN PORTUGAL</h2>
            <div>
              <h1 className="font-bold text-center text-7xl">
                Quality <span className="text-secundaria">Design & Web</span>
              </h1>
              <h1 className="font-bold text-center text-7xl">
                <span className="text-secundaria">Development</span> Synergy
              </h1>
            </div>
          </div>

          <span className="text-center text-lg w-full">
            Hi, I&apos;m Esdras, I create intuitive, visually stunning and
            highly functional web applications.
          </span>

          <div className="buttons flex mt-2 gap-2 items-center">
            <ShinyButton text="See My Work" link="#work" />
            <CvDownload />
          </div>
          <div className="icons">
            <Icons />
          </div>
        </div>
      </main>
  )
}