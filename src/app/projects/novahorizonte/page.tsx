import type { Metadata } from "next";
import GridBackground from "@/components/GridBackground";
import ArrowDownIcon from "@/components/ArrowDownIcon";
import Image from "next/image";
import ShinyButtonProject from "@/components/ShinyButtonProject";
import TechnologiesProject from "@/components/TechnologiesProject";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Nova Horizonte | Esdras Portfolio",
  description:
    "Nova Horizonte is a project focused on civil construction and engineering services, allowing clients to request quotes directly through the website. The project prioritizes an intuitive, responsive, and modern interface, ensuring the best user experience.",
  keywords: "civil construction, projects, skills, construction, engineering",
  robots: "index, follow",
  authors: [{ name: "Esdras" }],
  creator: "Esdras",
  publisher: "Esdras",
};

export default function Novahorizonte() {
  return (
    <main className="novahorizonte mb-20 w-full min-h-screen">
      <GridBackground />
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="flex flex-col w-full gap-2 items-center justify-center">
          <ScrollAnimation delayIndex={0}>
            <h1 className="font-extrabold text-7xl/tight">NOVA HORIZONTE</h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={1}>
            <p className="text-7xl text-center font-normal w-300">
              A MODERN CIVIL CONSTRUCTION WEBSITE
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
        <ScrollAnimation delayIndex={3}>
          <Image
            id="image"
            src={"/projects-mockup/novahorizonte.png"}
            alt="Nova Horizonte"
            width={1400}
            height={1400}
            className="rounded-lg select-none max-w-full pointer-events-none -mt-50 object-cover"
          />
        </ScrollAnimation>
        <div className="project-overview w-full px-70 mt-12 flex items-center justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <ScrollAnimation delayIndex={4}>
                <h1 className="font-light text-5xl">Project Overview</h1>
              </ScrollAnimation>
              <ScrollAnimation delayIndex={5}>
                <TechnologiesProject />
              </ScrollAnimation>
            </div>
            <ScrollAnimation delayIndex={6}>
              <ShinyButtonProject />
            </ScrollAnimation>
          </div>
          <div className="w-140">
            <ScrollAnimation delayIndex={6}>
              <p>
                Nova Horizonte is a project focused on civil construction and
                engineering services, allowing clients to request quotes
                directly through the website. The project prioritizes an
                intuitive, responsive, and modern interface, ensuring the best
                user experience.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </main>
  );
}
