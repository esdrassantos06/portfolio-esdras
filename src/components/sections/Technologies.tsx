"use client";
import Image from "next/image";
import { FadeIn } from "../ui/ScrollAnimation";
import { useTranslations } from "next-intl";

interface Technology {
  name: string;
  src: string;
  alt: string;
  background: string;
  description: string;
}

interface TechnologyCategory {
  title: string;
  technologies: Technology[];
}

export default function Technologies() {
  const t = useTranslations("TechnologiesComponent");

  const technologyCategories: TechnologyCategory[] = [
    {
      title: t("categories.frontend"),
      technologies: [
        {
          name: "React",
          src: "/technologies/react.svg",
          alt: "React",
          background: "bg-[#284147]",
          description: t("react"),
        },
        {
          name: "React Native",
          src: "/technologies/react.svg",
          alt: "React Native",
          background: "bg-[#20232A]",
          description: t("reactNative"),
        },
        {
          name: "Next.js",
          src: "/technologies/next.svg",
          alt: "Next.js",
          background: "bg-[#313131]",
          description: t("next"),
        },
        {
          name: "Vue.js",
          src: "/technologies/vue.svg",
          alt: "Vue.js",
          background: "bg-[#3A6639]",
          description: t("vue"),
        },
        {
          name: "Tailwind CSS",
          src: "/technologies/tailwind.svg",
          alt: "Tailwind CSS",
          background: "bg-[#183644]",
          description: t("tailwind"),
        },
        {
          name: "Typescript",
          src: "/technologies/ts.svg",
          alt: "Typescript",
          background: "bg-[#1F2D3D]",
          description: t("typescript"),
        },
      ],
    },
    {
      title: t("categories.backend"),
      technologies: [
        {
          name: "NodeJS",
          src: "/technologies/node.svg",
          alt: "NodeJS",
          background: "bg-[#20625C]",
          description: t("node"),
        },
        {
          name: "NestJS",
          src: "/technologies/nestjs.svg",
          alt: "NestJS",
          background: "bg-[#DB8181]",
          description: t("nest"),
        },
        {
          name: "Go",
          src: "/technologies/go.svg",
          alt: "Go",
          background: "bg-[#1B3C5C]",
          description: t("go"),
        },
        {
          name: "Python",
          src: "/technologies/python.svg",
          alt: "Python",
          background: "bg-[#AE9B07]",
          description: t("python"),
        },
        {
          name: "MySQL",
          src: "/technologies/mysql.svg",
          alt: "MySQL",
          background: "bg-[#0F4C81]",
          description: t("mysql"),
        },
        {
          name: "Postgres",
          src: "/technologies/postgres.svg",
          alt: "Postgres",
          background: "bg-[#024795]",
          description: t("postgres"),
        },
        {
          name: "MongoDB",
          src: "/technologies/mongodb.svg",
          alt: "MongoDB",
          background: "bg-[#54714c]",
          description: t("mongo"),
        },
        {
          name: "SQLite",
          src: "/technologies/sqlite.svg",
          alt: "SQLite",
          background: "bg-[#172446]",
          description: t("sqlite"),
        },
        {
          name: "Flask",
          src: "/technologies/flask.svg",
          alt: "Flask",
          background: "bg-[#2A2A2A]",
          description: t("flask"),
        },
        {
          name: "FastAPI",
          src: "/technologies/fastapi.svg",
          alt: "FastAPI",
          background: "bg-[#009688]",
          description: t("fastapi"),
        },
        {
          name: "Redis",
          src: "/technologies/redis.svg",
          alt: "Redis",
          background: "bg-[#7A1414]",
          description: t("redis"),
        },
      ],
    },
    {
      title: t("categories.cloud"),
      technologies: [
        {
          name: "AWS",
          src: "/technologies/aws.svg",
          alt: "aws",
          background: "bg-white",
          description: t("aws"),
        },
      ],
    },
    {
      title: t("categories.infrastructure"),
      technologies: [
        {
          name: "Git",
          src: "/technologies/git.svg",
          alt: "Git",
          background: "bg-[#284147]",
          description: t("git"),
        },
        {
          name: "Docker",
          src: "/technologies/docker.svg",
          alt: "Docker",
          background: "bg-[#1F2937]",
          description: t("docker"),
        },
        {
          name: "GitHub",
          src: "/technologies/github.svg",
          alt: "GitHub",
          background: "bg-[#0D1117]",
          description: t("github"),
        },
      ],
    },
  ];

  return (
    <div className="flex w-full flex-col gap-2">
      {technologyCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="flex flex-col gap-4 py-4">
          <FadeIn direction="up" className="w-fit" once>
            <h3 className="text-principal text-xl font-semibold">
              {category.title}
            </h3>
          </FadeIn>
          <FadeIn
            direction="up"
            staggerChildren={0.05}
            once
            className="grid h-fit w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          >
            {category.technologies.map((tech) => {
              return (
                <div
                  className="bg-fundo2 hover:bg-fundo2hover flex h-22 w-full items-center rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 hover:border-gray-200/50 sm:px-5 sm:py-4 md:px-6"
                  key={`${category.title}-${tech.name}`}
                >
                  <div className="flex w-full items-center gap-3 sm:gap-4">
                    <span
                      className={`icon flex size-12 shrink-0 items-center justify-center rounded-lg p-2 sm:size-14 ${tech.background}`}
                    >
                      <Image
                        draggable={false}
                        src={tech.src}
                        className="size-8 object-contain sm:size-9"
                        width={36}
                        height={36}
                        alt={tech.alt}
                        loading="lazy"
                      />
                    </span>
                    <div className="text flex min-w-0 flex-1 flex-col justify-center">
                      <h4 className="line-clamp-1 text-sm font-semibold sm:text-base">
                        {tech.name}
                      </h4>
                      <p className="text-principal/80 line-clamp-2 text-xs sm:text-sm">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </FadeIn>
        </div>
      ))}
    </div>
  );
}
