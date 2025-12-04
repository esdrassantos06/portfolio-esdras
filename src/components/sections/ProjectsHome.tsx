"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { FadeIn } from "../ui/ScrollAnimation";

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
      "/projects-mockup/novahorizonte.webp",
      "/projects/novahorizonte",
      ["React", "TailwindCSS", "shadcn/ui", "Vite"],
    ),
    new Project(
      "Tarevity",
      "/projects-mockup/tarevity.webp",
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
      "/projects-mockup/phantomcode.webp",
      "/projects/phantomcode",
      ["Electron", "React", "TailwindCSS", "OpenAI API", "NestJS"],
    ),
    new Project("Zipway", "/projects-mockup/zipway.webp", "/projects/zipway", [
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
      <ul className="grid gap-2 lg:grid-cols-2 lg:items-stretch" role="list">
        {projects.map((project, i) => {
          return (
            <li key={i} className="flex h-full">
              <FadeIn
                direction="up"
                className="flex h-full w-full flex-col"
                once
              >
                <article className="card bg-fundo2 mb-2 flex h-full w-full flex-col gap-4 rounded-2xl p-8">
                  <Link
                    href={project.link}
                    className="group relative mb-6 flex aspect-video w-full overflow-hidden rounded-lg"
                    aria-label={`View ${project.name} project`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      fill
                      priority={i < 2}
                      className="pointer-events-none rounded-lg object-cover transition-all duration-800 select-none group-hover:scale-110"
                    />
                  </Link>
                  <header className="project-name flex w-full flex-shrink-0">
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {project.name}
                    </h3>
                  </header>

                  <div className="mt-auto flex w-full flex-1 items-center justify-between gap-2">
                    <ul
                      className="technologies flex flex-1 flex-wrap gap-2"
                      role="list"
                      aria-label="Technologies used"
                    >
                      {project.technologies.map((tech, techIndex) => {
                        return (
                          <li key={techIndex}>
                            <span
                              className={`${tech.toLowerCase()} border-opacity-20 flex h-10 w-20 items-center justify-center rounded-md border border-gray-200/20 bg-[#262626] p-1 text-center text-xs font-light transition-all duration-300 select-none hover:bg-gray-200/20 sm:text-sm md:w-30`}
                              aria-label={tech}
                            >
                              {tech}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="redirect-btn flex">
                      <Link
                        href={project.link}
                        aria-label={`View ${project.name} project details`}
                        className="group active:bg-secundaria/70 hover:bg-secundaria/70 bg-secundaria flex h-18 w-18 items-center justify-center rounded-md transition-all duration-300"
                      >
                        <ArrowUpRightIcon
                          className="rotate-0 transition-all duration-300 group-hover:rotate-45 group-active:rotate-45"
                          size={30}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
