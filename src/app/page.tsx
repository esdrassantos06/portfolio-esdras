import GridBackground from "@/components/GridBackground";
import CvDownload from "@/components/CvDownload";
import Navbar from "@/components/Navbar";
import Icons from "@/components/Icons";
import Technologies from "@/components/Technologies";
import ShinyButton from "@/components/ShinyButton";

export default function Home() {
  return (
    <>
      <main
        id="home"
        className="w-full min-h-screen z-10 inset-shadow-sm flex justify-center items-center"
      >
        <Navbar />
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

      <main
        id="about"
        className="w-full min-h-screen bg-fundo flex justify-center items-center"
      >
        <div className="flex w-[80%] px-40 flex-col items-center justify-center">
          <div className="title mb-20 flex flex-col self-start items-start justify-center space-y-2">
            <h1 className="font-bold text-center text-6xl">
              Current technologies
            </h1>
            <span className="text-[15px] text-principal/70 w-180 font-satoshi">
              I&apos;m proficient in a range of modern technologies that empower
              me to build highly functional solutions. These are some of my main
              technologies.
            </span>
          </div>
          <Technologies />
        </div>
      </main>

      <main
        id="work"
        className="w-full min-h-screen bg-fundo flex justify-center items-center"
      >
        <div className="flex w-[80%] px-40 flex-col items-center justify-center">
          <div className="title mb-20 w-full flex self-start items-center justify-between space-y-2">
            <h1 className="font-bold text-center text-6xl">
              My portfolio
            </h1>
            <ShinyButton text="All projects" link="https://github.com/esdrassantos06" target="_blank" />
          </div>

          
        </div>
      </main>
    </>
  );
}
