import type { Metadata } from "next";
import GridBackground from "@/components/GridBackground";
import ArrowDownIcon from "@/components/ArrowDownIcon";
import Image from "next/image";
import ShinyButtonProject from "@/components/ShinyButtonProject";
import TechnologiesProject from "@/components/TechnologiesProject";

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
          <h1 className="font-extrabold text-7xl/tight">NOVA HORIZONTE</h1>
          <p className="text-7xl text-center font-normal w-300">
            A MODERN CIVIL CONSTRUCTION WEBSITE
          </p>
        </div>
        <div className="arrow-down w-full mt-40 flex items-center justify-center">
          <ArrowDownIcon />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-fundo">
        <Image
          id="image"
          src={"/projects-mockup/novahorizonte.png"}
          alt="Nova Horizonte"
          width={1400}
          height={1400}
          className="rounded-lg select-none pointer-events-none -mt-50 object-cover"
        />
        <div className="project-overview w-full px-70 mt-12 flex items-center justify-between">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
            <h1 className="font-light text-5xl">Project Overview</h1>
            <TechnologiesProject />
            </div>
            <ShinyButtonProject />
          </div>
          <div className="w-140">
            <p>
            Nova Horizonte is a project focused on civil construction and engineering services, allowing clients to request quotes directly through the website. The project prioritizes an intuitive, responsive, and modern interface, ensuring the best user experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
