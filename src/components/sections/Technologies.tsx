"use client";
import Image from "next/image";
import ScrollAnimation from "../ui/ScrollAnimation";
import { useTranslations } from "next-intl";

class Technology {
  constructor(
    public name: string,
    public src: string,
    public alt: string,
    public background: string,
    public description: string,
  ) {}

  getSlugName(): string {
    return this.name.split(" ").join("_").toLowerCase();
  }
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
        new Technology(
          "React",
          "/technologies/react.svg",
          "React",
          "bg-[#284147]",
          t("react"),
        ),
        new Technology(
          "Next.js",
          "/technologies/next.svg",
          "Next.js",
          "bg-[#313131]",
          t("next"),
        ),
        new Technology(
          "Vue.js",
          "/technologies/vue.svg",
          "Vue.js",
          "bg-[#3A6639]",
          t("vue"),
        ),
        new Technology(
          "Tailwind CSS",
          "/technologies/tailwind.svg",
          "Tailwind CSS",
          "bg-[#183644]",
          t("tailwind"),
        ),
        new Technology(
          "Typescript",
          "/technologies/ts.svg",
          "Typescript",
          "bg-[#1F2D3D]",
          t("typescript"),
        ),
      ],
    },
    {
      title: t("categories.backend"),
      technologies: [
        new Technology(
          "NodeJS",
          "/technologies/node.svg",
          "NodeJS",
          "bg-[#20625C]",
          t("node"),
        ),
        new Technology(
          "NestJS",
          "/technologies/nestjs.svg",
          "NestJS",
          "bg-[#DB8181]",
          t("nest"),
        ),
        new Technology(
          "Python",
          "/technologies/python.svg",
          "Python",
          "bg-[#AE9B07]",
          t("python"),
        ),
        new Technology(
          "Postgres",
          "/technologies/postgres.svg",
          "Postgres",
          "bg-[#024795]",
          t("postgres"),
        ),
        new Technology(
          "MongoDB",
          "/technologies/mongodb.svg",
          "MongoDB",
          "bg-[#54714c]",
          t("mongo"),
        ),
        new Technology(
          "SQLite",
          "/technologies/sqlite.svg",
          "SQLite",
          "bg-[#172446]",
          t("sqlite"),
        ),
        new Technology(
          "Flask",
          "/technologies/flask.svg",
          "Flask",
          "bg-[#2A2A2A]",
          t("flask"),
        ),
        new Technology(
          "FastAPI",
          "/technologies/fastapi.svg",
          "FastAPI",
          "bg-[#009688]",
          t("fastapi"),
        ),
      ],
    },
    {
      title: t("categories.cloud"),
      technologies: [
        new Technology(
          "AWS",
          "/technologies/aws.svg",
          "aws",
          "bg-white",
          t("aws"),
        ),
      ],
    },
    {
      title: t("categories.infrastructure"),
      technologies: [
        new Technology(
          "Git",
          "/technologies/git.svg",
          "Git",
          "bg-[#284147]",
          t("git"),
        ),
        new Technology(
          "Docker",
          "/technologies/docker.svg",
          "Docker",
          "bg-[#1F2937]",
          t("docker"),
        ),
        new Technology(
          "GitHub",
          "/technologies/github.svg",
          "GitHub",
          "bg-[#0D1117]",
          t("github"),
        ),
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {technologyCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="flex flex-col gap-4">
          <ScrollAnimation delayIndex={categoryIndex} className="w-fit">
            <h3 className="text-principal text-xl font-semibold">
              {category.title}
            </h3>
          </ScrollAnimation>
          <div className="grid h-fit w-full grid-cols-1 gap-4 max-md:place-items-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {category.technologies.map((tech, techIndex) => {
              return (
                <ScrollAnimation
                  delayIndex={categoryIndex}
                  className={`tech-${tech.getSlugName()} bg-fundo2 hover:bg-fundo2hover flex h-[100px] items-center rounded-2xl border-1 border-transparent px-6 py-4 transition-all duration-300 hover:border-gray-200/50`}
                  key={`${categoryIndex}-${techIndex}`}
                >
                  <div className="flex w-full items-center gap-4">
                    <span
                      className={`icon flex size-14 items-center justify-center rounded-lg p-2 ${tech.background}`}
                    >
                      <Image
                        src={tech.src}
                        className="size-9"
                        width={36}
                        height={36}
                        alt={tech.alt}
                      />
                    </span>
                    <div className="text flex flex-col justify-center">
                      <h1 className="text-base font-semibold">{tech.name}</h1>
                      <p className="text-principal/80 text-sm">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
