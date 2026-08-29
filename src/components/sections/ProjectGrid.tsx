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
                <article className="group/card hover:border-secundaria/40 flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition-all duration-500 hover:-translate-y-2 hover:bg-white/6 hover:shadow-[0_24px_60px_-24px_rgba(169,39,191,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <Link
                    href={link}
                    className="bg-fundo3 relative block w-full overflow-hidden"
                    aria-label={`View ${project.name} project`}
                  >
                    <div className="relative aspect-video w-full">
                      <Image
                        src={project.image}
                        alt={`${project.name} project preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={isPriority}
                        loading={isPriority ? undefined : "lazy"}
                        className="pointer-events-none object-cover transition-transform duration-700 select-none group-hover/card:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <header className="flex w-full items-center justify-between gap-3">
                      <Heading className="text-xl font-semibold md:text-2xl">
                        {project.name}
                      </Heading>
                      <Link
                        href={link}
                        aria-label={`View ${project.name} project details`}
                        className="group/arrow border-secundaria/50 hover:bg-secundaria focus-visible:ring-link flex size-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 focus-visible:ring-2 focus-visible:outline-none"
                      >
                        <ArrowUpRightIcon
                          size={20}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover/arrow:rotate-45"
                        />
                      </Link>
                    </header>

                    <ul
                      className="technologies mt-auto flex h-8 flex-nowrap items-center gap-2 overflow-hidden"
                      role="list"
                      aria-label="Technologies used"
                    >
                      {project.technologies.slice(0, 4).map((tech) => (
                        <li key={tech} className="shrink-0">
                          <span className="text-principal/80 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-light whitespace-nowrap select-none">
                            {tech}
                          </span>
                        </li>
                      ))}
                      {project.technologies.length > 4 && (
                        <li className="text-principal/60 shrink-0 text-xs font-light">
                          +{project.technologies.length - 4}
                        </li>
                      )}
                    </ul>
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
