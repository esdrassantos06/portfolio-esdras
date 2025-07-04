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

export default function Technologies() {
  const t = useTranslations("TechnologiesComponent");

  const technologies = [
    new Technology("AWS", "/technologies/aws.svg", "aws", "bg-white", t("aws")),
    new Technology(
      "Next.js",
      "/technologies/next.svg",
      "Next.js",
      "bg-[#313131]",
      t("next"),
    ),
    new Technology(
      "NodeJS",
      "/technologies/node.svg",
      "NodeJS",
      "bg-[#20625C]",
      t("node"),
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
      "Python",
      "/technologies/python.svg",
      "Python",
      "bg-[#AE9B07]",
      t("python"),
    ),
    new Technology(
      "React",
      "/technologies/react.svg",
      "React",
      "bg-[#284147]",
      t("react"),
    ),
    new Technology(
      "Git",
      "/technologies/git.svg",
      "Git",
      "bg-[#284147]",
      t("git"),
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
  ];

  return (
    <div className="mb-8 grid h-fit w-3/4 grid-cols-1 gap-4 max-md:place-items-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {technologies.map((tech, index) => {
        return (
          <ScrollAnimation
            delayIndex={index - 1}
            className={`tech-${tech.getSlugName()} bg-fundo2 hover:bg-fundo2hover flex h-[100px] w-full max-w-[320px] items-center rounded-2xl border-1 border-transparent px-6 py-4 transition-all duration-300 hover:border-gray-200/50`}
            key={index}
          >
            <div className="flex w-full items-center gap-4">
              <span
                className={`icon flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg p-2 ${tech.background}`}
              >
                <Image
                  src={tech.src}
                  className="h-9 w-9"
                  width={36}
                  height={36}
                  alt={tech.alt}
                />
              </span>
              <div className="text flex flex-col justify-center">
                <h1 className="text-base font-semibold">{tech.name}</h1>
                <p className="text-principal/80 text-sm">{tech.description}</p>
              </div>
            </div>
          </ScrollAnimation>
        );
      })}
    </div>
  );
}
