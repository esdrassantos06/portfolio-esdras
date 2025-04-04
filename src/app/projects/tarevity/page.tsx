import type { Metadata } from "next";
import GridBackground from "@/components/ui/GridBackground";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import Image from "next/image";
import ShinyButtonProject from "@/components/ui/ShinyButtonProject";
import TechnologiesProject from "@/components/TechnologiesProject";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export const metadata: Metadata = {
  title: "Tarevity | Esdras Portfolio",
  description:
    "Tarevity is a modern task management application built with Next.js 15, React 19, TypeScript, and Supabase. The application provides an intuitive and secure interface to help users organize their daily tasks with efficiency and style.",
  robots: "index, follow",
  authors: [{ name: "Esdras" }],
  creator: "Esdras",
  publisher: "Esdras",
};

export default function Tarevity() {
  return (
    <main className="novahorizonte mb-20 w-full min-h-screen">
      <GridBackground />
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-col w-full gap-2 items-center justify-center">
          <ScrollAnimation delayIndex={0}>
            <h1 className="font-extrabold text-6xl uppercase max-md:text-center md:text-7xl/tight">
              TAREVITY
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={1}>
            <p className="text-5xl sm:text-6xl uppercase md:text-7xl text-center font-normal w-fit md:w-300">
              a modern task management application
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
            src={"/projects-mockup/tarevity.png"}
            alt="Tarevity"
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
                    { name: "NextJS" },
                    { name: "TailwindCSS" },
                    { name: "Typescript" },
                    { name: "Supabase" },
                    { name: "Redis" },
                    { name: "NextAuth" },
                  ]}
                />
              </ScrollAnimation>
            </div>
            <ScrollAnimation delayIndex={6} className="max-sm:mb-10">
              <ShinyButtonProject demo="https://www.tarevity.pt/" code="https://github.com/esdrassantos06/tarevity"/>
            </ScrollAnimation>
          </div>
          <div className="md:w-1/2">
            <ScrollAnimation delayIndex={6}>
              <p>
                Tarevity is a modern task management application built with
                Next.js 15, React 19, TypeScript, and Supabase. The application
                provides an intuitive and secure interface to help users
                organize their daily tasks with efficiency and style.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </main>
  );
}
