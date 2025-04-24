"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import ScrollAnimation from "../ui/ScrollAnimation";

export default function ProjectsHome() {
  class Project {
    constructor(
      public name: string,
      public image: string,
      public link: string,
      public technologies: string[]
    ) {}
  }

  const projects: Project[] = [
    new Project(
      "Nova Horizonte",
      "/projects-mockup/novahorizonte.png",
      "/projects/novahorizonte",
      ["React", "TailwindCSS", "shadcn/ui", "Vite"]
    ),
    new Project(
      "Tarevity",
      "/projects-mockup/tarevity.png",
      "/projects/tarevity",
      ["NextJS", "TailwindCSS", "Typescript", "Supabase", "Redis", "NextAuth"]
    ),
    new Project(
      "Phantom Code",
      "/projects-mockup/phantomcode.png",
      "/projects/phantomcode",
      ["Electron", "TailwindCSS", "OpenAI API"]
    ),
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
      {projects.map((project, i) => {
        return (
          <ScrollAnimation key={i} delayIndex={i + 2}>
            <div className="card flex gap-4 flex-col items-center justify-center bg-fundo2 rounded-2xl p-8 lg:w-155 lg:h-155 md:w-125 md:h-125 w-fit h-fit">
              <Link
                href={project.link}
                className="flex group rounded-lg overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={600}
                  priority
                  className="object-cover max-w-full lg:w-150 group-hover:scale-110 transition-all duration-800 select-none pointer-events-none rounded-lg"
                />
              </Link>
              <div className="project-name flex w-full">
                <h1 className="font-semibold text-2xl">{project.name}</h1>
              </div>

              <div className="w-full flex">
                <div className="technologies grid grid-cols-3 gap-2">
                  {project.technologies.map((tech, i) => {
                    return (
                      <div
                        key={i}
                        className={`${tech.toLowerCase()} flex font-light rounded-md border-gray-200/20 transition-all duration-300 select-none border border-opacity-20 hover:bg-gray-200/20 items-center justify-center bg-[#262626] p-1 text-sm text-center`}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>

                <div className="redirect-btn w-1/2 flex items-center justify-end">
                  <Link
                    key={i}
                    href={project.link}
                    aria-label={project.name}
                    className="flex group items-center rounded-md justify-center w-18 h-18 active:bg-secundaria/70 hover:bg-secundaria/70 transition-all duration-300 bg-secundaria"
                  >
                    <ArrowUpRight
                      className="group-hover:rotate-45 group-active:rotate-45 rotate-0 transition-all duration-300"
                      size={30}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        );
      })}
    </div>
  );
}
