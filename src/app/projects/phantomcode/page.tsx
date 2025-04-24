import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import TechnologiesProject from "@/components/TechnologiesProject";
import GridBackground from "@/components/ui/GridBackground";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import ShinyButtonProject from "@/components/ui/ShinyButtonProject";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Phantom Code | Esdras Portfolio",
  description:
    "A cross-platform desktop app that turns screenshots into solved code problems — instantly. Built for developers, students, and anyone who wants to speed through coding interview questions with the power of AI.",
  keywords: "ai coding, screenshot to solution, electron, invisible coding app",
  robots: "index, follow",
  authors: [{ name: "Esdras" }],
  creator: "Esdras",
  publisher: "Esdras",
};

export default function PhantomCode() {
  return (
    <main className="phantomcode mb-20 w-full min-h-screen">
      <GridBackground />
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-col w-full gap-2 items-center justify-center">
          <ScrollAnimation delayIndex={0}>
            <h1 className="font-extrabold uppercase text-6xl max-md:text-center md:text-7xl/tight">
              Phantom Code
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={1}>
            <p className="text-5xl sm:text-6xl uppercase md:text-7xl text-center font-normal w-fit md:w-300">
              A cross-platform desktop app that turns screenshots into solved
              code problems
            </p>
          </ScrollAnimation>
        </div>
        <div className="arrow-down w-full mt-40 flex items-center justify-center">
          <ScrollAnimation delayIndex={2}>
            <ArrowDownIcon />
          </ScrollAnimation>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-fundo">
        <ScrollAnimation delayIndex={3} className="rounded-lg">
          <Image
            id="image"
            src={"/projects-mockup/phantomcode.png"}
            alt="Phantom Code"
            width={1400}
            height={1400}
            className="rounded-lg select-none max-w-full box-border mx-auto bg-clip-border w-[90%] sm:w-[60%] lg:w-[70%] pointer-events-none -mt-20 sm:-mt-50 object-cover"
          />
        </ScrollAnimation>
        <div className="project-overview w-full gap-10 px-10 lg:px-70 mt-12 flex sm:flex-row flex-col items-center justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <ScrollAnimation delayIndex={4}>
                <h1 className="font-light max-sm:text-center text-5xl">
                  Project Overview
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delayIndex={5}>
                <TechnologiesProject
                  technologies={[
                    { name: "Electron" },
                    { name: "TailwindCSS" },
                    { name: "OpenAI API" },
                  ]}
                />
              </ScrollAnimation>
            </div>
            <ScrollAnimation delayIndex={6} className="max-sm:mb-10">
              <ShinyButtonProject demo="https://phantomcode.site" />
            </ScrollAnimation>
          </div>
          <div className="md:w-1/2">
            <ScrollAnimation delayIndex={6}>
              <p>
                Phantom Code is a desktop application developed with Electron
                and React that facilitates capturing code through screenshots
                and uses AI to extract and process this code, as well as
                generate solutions for programming problems.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </main>
  );
}
