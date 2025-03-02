import GridBackground from "@/components/GridBackground";
import ArrowIcon from "@/components/ArrowIcon";
import CvDownload from "@/components/CvDownload";
import Navbar from "@/components/Navbar";



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

            <span className="text-center text-lg w-full">Hi, I&apos;m Esdras, I create intuitive, visually stunning and highly functional web applications.</span>

            <div className="buttons flex mt-2 gap-2 items-center">

              <a href="#work" aria-label="See My Work" className="w-50 border-gray-200/50 border-1 h-12 gap-3 relative overflow-hidden text-lg flex items-center before:absolute before:top-0 before:left-[-100%] before:h-[150%] before:w-5 before:rotate-45 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:animate-shine justify-center rounded-lg bg-fundo2 hover:bg-fundo2/80 transition-all duration-300">See My Work <ArrowIcon /></a>
              <CvDownload />
            </div>
        </div>
      </main>

      <main
        id="about"
        className="w-full min-h-screen flex justify-center items-center"
      >
        <div className="flex container flex-col items-center justify-center">
          <div className="title space-y-2">
            <h2 className="font-bold text-center text-sm">BASED IN PORTUGAL</h2>
            <h1 className="font-bold text-center text-7xl">
              Quality <span className="text-secundaria">Design & Web</span>
            </h1>
            <h1 className="font-bold text-center text-7xl">
              <span className="text-secundaria">Development</span> Synergy
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
