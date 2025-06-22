"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import ScrollAnimation from "../ui/ScrollAnimation";

export default function ProjectsHome() {
  class Project {
    constructor(
      public name: string,
      public image: string,
      public link: string,
      public technologies: string[],
    ) {}
  }

  const projects: Project[] = [
    new Project(
      "Nova Horizonte",
      "/projects-mockup/novahorizonte.png",
      "/projects/novahorizonte",
      ["React", "TailwindCSS", "shadcn/ui", "Vite"],
    ),
    new Project(
      "Tarevity",
      "/projects-mockup/tarevity.png",
      "/projects/tarevity",
      ["NextJS", "TailwindCSS", "Typescript", "Supabase", "Redis", "NextAuth"],
    ),
    new Project(
      "Phantom Code",
      "/projects-mockup/phantomcode.png",
      "/projects/phantomcode",
      ["Electron", "TailwindCSS", "OpenAI API"],
    ),
    new Project("Zipway", "/projects-mockup/zipway.png", "/projects/zipway", [
      "NextJS",
      "TailwindCSS",
      "Typescript",
      "Postgres",
      "Redis",
      "Better Auth",
      "Jest",
      "Docker"
    ]),
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {projects.map((project, i) => {
        return (
          <ScrollAnimation key={i} delayIndex={i + 2}>
            <div className="card bg-fundo2 flex size-fit flex-col items-center justify-center gap-4 rounded-2xl p-8 md:size-125">
              <Link
                href={project.link}
                className="group flex overflow-hidden rounded-lg"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={600}
                  priority
                  className="pointer-events-none max-w-full rounded-lg object-fill transition-all duration-800 select-none group-hover:scale-110 lg:w-150"
                />
              </Link>
              <div className="project-name flex w-full">
                <h1 className="text-xl font-semibold md:text-2xl">
                  {project.name}
                </h1>
              </div>

              <div className="flex w-full">
                <div className="technologies grid grid-cols-2 gap-4 md:grid-cols-3">
                  {project.technologies.map((tech, i) => {
                    return (
                      <div
                        key={i}
                        className={`${tech.toLowerCase()} border-opacity-20 flex h-10 items-center justify-center rounded-md border border-gray-200/20 bg-[#262626] p-1 text-center text-xs font-light transition-all duration-300 select-none hover:bg-gray-200/20 sm:text-sm md:w-20`}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>

                <div className="redirect-btn flex w-1/2 items-center justify-end">
                  <Link
                    key={i}
                    href={project.link}
                    aria-label={project.name}
                    className="group active:bg-secundaria/70 hover:bg-secundaria/70 bg-secundaria flex h-18 w-18 items-center justify-center rounded-md transition-all duration-300"
                  >
                    <ArrowUpRightIcon
                      className="rotate-0 transition-all duration-300 group-hover:rotate-45 group-active:rotate-45"
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
