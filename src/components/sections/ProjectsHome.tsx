"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import ScrollAnimation from "../ui/ScrollAnimation";

class Project {
  constructor(
    public name: string,
    public image: string,
    public link: string,
    public technologies: string[],
  ) {}
}
export default function ProjectsHome() {
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
      [
        "NextJS",
        "TailwindCSS",
        "Typescript",
        "Prisma",
        "Postgres",
        "Redis",
        "Better Auth",
      ],
    ),
    new Project(
      "Phantom Code",
      "/projects-mockup/phantomcode.png",
      "/projects/phantomcode",
      ["Electron", "React", "TailwindCSS", "OpenAI API", "NestJS"],
    ),
    new Project("Zipway", "/projects-mockup/zipway.png", "/projects/zipway", [
      "NextJS",
      "TailwindCSS",
      "Typescript",
      "Go",
      "Postgres",
      "Redis",
      "Docker",
    ]),
  ];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid gap-2 lg:grid-cols-2">
        {projects.map((project, i) => {
          return (
            <ScrollAnimation
              key={i}
              className="flex flex-col items-center justify-center"
              delayIndex={i + 2}
            >
              <div className="card bg-fundo2 mb-2 flex size-full flex-col gap-4 rounded-2xl p-8">
                <Link
                  href={project.link}
                  className="group relative mb-6 flex aspect-video w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    sizes="100%"
                    fill
                    priority
                    className="pointer-events-none rounded-lg object-cover transition-all duration-800 select-none group-hover:scale-110"
                  />
                </Link>
                <div className="project-name flex w-full">
                  <h1 className="text-xl font-semibold md:text-2xl">
                    {project.name}
                  </h1>
                </div>

                <div className="flex w-full flex-1 items-center justify-between gap-2">
                  <div className="technologies flex flex-1 flex-wrap gap-2">
                    {project.technologies.map((tech, i) => {
                      return (
                        <div
                          key={i}
                          className={`${tech.toLowerCase()} border-opacity-20 flex h-10 w-20 items-center justify-center rounded-md border border-gray-200/20 bg-[#262626] p-1 text-center text-xs font-light transition-all duration-300 select-none hover:bg-gray-200/20 sm:text-sm md:w-30`}
                        >
                          {tech}
                        </div>
                      );
                    })}
                  </div>

                  <div className="redirect-btn flex">
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
    </div>
  );
}
