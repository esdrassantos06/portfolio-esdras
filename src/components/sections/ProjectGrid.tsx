"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { FadeIn } from "../ui/ScrollAnimation";
import type { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
  headingLevel?: "h2" | "h3";
  priorityCount?: number;
}

export default function ProjectGrid({
  projects,
  headingLevel: Heading = "h2",
  priorityCount = 0,
}: ProjectGridProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <ul
        className="grid w-full gap-2 lg:grid-cols-2 lg:items-stretch"
        role="list"
      >
        {projects.map((project, index) => {
          const link = `/projects/${project.slug}`;
          const isPriority = index < priorityCount;
          return (
            <li key={project.slug} className="flex h-full">
              <FadeIn direction="up" className="flex size-full flex-col" once>
                <article className="card bg-fundo2 mb-2 flex flex-1 flex-col gap-4 rounded-2xl p-8">
                  <Link
                    href={link}
                    className="group bg-fundo3 relative mb-6 block h-auto w-full overflow-hidden rounded-xl"
                    aria-label={`View ${project.name} project`}
                  >
                    <div className="relative aspect-4/3 w-full">
                      <Image
                        src={project.image}
                        alt={`${project.name} project preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={isPriority}
                        loading={isPriority ? undefined : "lazy"}
                        className="pointer-events-none rounded-xl object-cover transition-all duration-500 select-none group-hover:scale-[1.03]"
                      />
                    </div>
                  </Link>
                  <header className="project-name flex w-full shrink-0">
                    <Heading className="text-xl font-semibold md:text-2xl">
                      {project.name}
                    </Heading>
                  </header>

                  <div className="mt-auto flex w-full items-start justify-between gap-2">
                    <ul
                      className="technologies flex min-h-25 flex-1 flex-wrap content-start gap-2 md:min-h-34 xl:min-h-30"
                      role="list"
                      aria-label="Technologies used"
                    >
                      {project.technologies.map((tech) => (
                        <li key={tech}>
                          <span
                            className="bg-fundo4 flex h-10 w-20 items-center justify-center rounded-md border border-gray-200/20 p-1 text-center text-xs font-light transition-all duration-300 select-none hover:bg-gray-200/20 sm:text-sm md:w-30"
                            aria-label={tech}
                          >
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="redirect-btn flex">
                      <Link
                        href={link}
                        aria-label={`View ${project.name} project details`}
                        className="group active:bg-secundaria/70 hover:bg-secundaria/70 bg-secundaria flex size-18 items-center justify-center rounded-md transition-all duration-300"
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
