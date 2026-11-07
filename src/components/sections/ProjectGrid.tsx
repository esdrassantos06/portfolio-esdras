"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { FadeIn } from "../ui/ScrollAnimation";
import type { Project } from "@/data/projects";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();
  return (
    <div className="flex w-full items-center justify-center">
      <ul
        className="grid w-full gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-5"
        role="list"
      >
        {projects.map((project, index) => {
          const link = `/projects/${project.slug}`;
          const isPriority = index < priorityCount;
          return (
            <li key={project.slug} className="flex h-full min-w-0">
              <FadeIn
                direction="up"
                className="flex size-full min-w-0 flex-col"
                once
              >
                <article className="group/card hover:border-secundaria/40 has-focus-visible:ring-link relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition-all duration-500 hover:-translate-y-2 hover:bg-white/6 hover:shadow-[0_24px_60px_-24px_rgba(169,39,191,0.4)] has-focus-visible:ring-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="bg-fundo3 relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      placeholder="blur"
                      preload={isPriority}
                      className="pointer-events-none object-cover transition-transform duration-700 select-none group-hover/card:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                  </div>

                  <div className="flex flex-1 flex-col gap-5 p-6">
                    <header className="flex w-full items-start justify-between gap-4">
                      <div className="min-w-0">
                        <Heading className="text-xl font-semibold md:text-2xl">
                          <Link
                            href={link}
                            className="after:absolute after:inset-0 focus-visible:ring-0 focus-visible:outline-none"
                          >
                            {project.name}
                          </Link>
                        </Heading>
                        <p className="text-principal/70 mt-1.5 line-clamp-2 min-h-[2lh] text-pretty">
                          {t(`${project.namespace}.title`)}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="border-secundaria/50 group-hover/card:bg-secundaria flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
                      >
                        <ArrowUpRightIcon
                          size={20}
                          className="transition-transform duration-300 group-hover/card:rotate-45"
                        />
                      </span>
                    </header>

                    <ul
                      className="technologies mt-auto flex flex-wrap items-center gap-2"
                      role="list"
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
