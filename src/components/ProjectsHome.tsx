"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function ProjectsHome() {
  const projects = [
    {
      name: "Nova Horizonte",
      description: "A website for a real estate company.",
      image: "/projects-mockup/novahorizonte.png",
      link: "/projects/novahorizonte",
      technologies: ["React", "TailwindCSS", "shadcn/ui", "Vite"],
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            className="card flex gap-4 flex-col items-center justify-center bg-fundo2 rounded-2xl p-8 w-155 h-155"
          >
            <Link
              href={project.link}
              className="flex group rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt="Nova Horizonte"
                width={600}
                height={600}
                className="object-cover group-hover:scale-110 transition-all duration-800 select-none pointer-events-none rounded-lg"
              />
            </Link>
            <div className="project-name flex w-full">
              <h1 className="font-semibold text-2xl">{project.name}</h1>
            </div>

            <div className="w-full flex">
              <div className="technologies flex w-1/2 items-start gap-2">
                {project.technologies.map((tech, i) => {
                  return (
                    <div
                      key={i}
                      className="${tech.toLowerCase()} flex font-light rounded-md border-gray-200/20 transition-all duration-300 select-none border-1 hover:bg-gray-200/20 items-center justify-center bg-[#262626] px-3 py-1.5"
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="redirect-btn w-1/2 flex items-center justify-end">
                <Link
                  href={"/projects/novahorizonte"} aria-label="Nova Horizonte"
                  className="flex group items-center rounded-md justify-center w-18 h-18 hover:bg-secundaria/70 transition-all duration-300 bg-secundaria"
                >
                  <ArrowUpRight
                    className="group-hover:rotate-45 rotate-0 transition-all duration-300"
                    size={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
