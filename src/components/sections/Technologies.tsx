"use client";
import Image from "next/image";
import ScrollAnimation from "../ui/ScrollAnimation";

class Technology {
  constructor(
    public name: string,
    public src: string,
    public alt: string,
    public background: string,
    public description: string
  ) {}

  getSlugName(): string {
    return this.name.split(" ").join("_").toLowerCase();
  }
}

export default function Technologies() {
  const technologies = [
    new Technology(
      "AWS",
      "/technologies/aws.svg",
      "aws",
      "bg-white",
      "Cloud services"
    ),
    new Technology(
      "Next.js",
      "/technologies/next.svg",
      "Next.js",
      "bg-[#313131]",
      "React SSR framework"
    ),
    new Technology(
      "NodeJS",
      "/technologies/node.svg",
      "NodeJS",
      "bg-[#20625C]",
      "JavaScript runtime"
    ),
    new Technology(
      "Postgres",
      "/technologies/postgres.svg",
      "Postgres",
      "bg-[#024795]",
      "SQL database"
    ),
    new Technology(
      "MongoDB",
      "/technologies/mongodb.svg",
      "MongoDB",
      "bg-[#54714c]",
      "NoSQL database"
    ),
    new Technology(
      "SQLite",
      "/technologies/sqlite.svg",
      "SQLite",
      "bg-[#172446]",
      "Embedded database"
    ),
    new Technology(
      "Python",
      "/technologies/python.svg",
      "Python",
      "bg-[#AE9B07]",
      "Backend language"
    ),
    new Technology(
      "React",
      "/technologies/react.svg",
      "React",
      "bg-[#284147]",
      "JavaScript Library"
    ),
    new Technology(
      "Git",
      "/technologies/git.svg",
      "Git",
      "bg-[#284147]",
      "Version control"
    ),
    new Technology(
      "Tailwind CSS",
      "/technologies/tailwind.svg",
      "Tailwind CSS",
      "bg-[#183644]",
      "CSS framework"
    ),
    new Technology(
      "Typescript",
      "/technologies/ts.svg",
      "Typescript",
      "bg-[#1F2D3D]",
      "JavaScript but better"
    ),
  ];

  return (
    <div className="grid gap-4 h-fit mb-8 max-md:place-items-center lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:grid-cols-4">
      {technologies.map((tech, index) => {
        return (
          <ScrollAnimation
            delayIndex={index - 1}
            className={`tech-${tech.getSlugName()}
          bg-fundo2 w-full max-w-[320px] h-[100px] hover:border-gray-200/50 hover:bg-fundo2hover border-transparent transition-all duration-300 border-1 rounded-2xl flex items-center py-4 px-6`}
            key={index}
          >
            <ScrollAnimation
              delayIndex={index}
              className="flex gap-4 w-full items-center"
            >
              <span
                className={`icon flex items-center justify-center rounded-lg p-2 h-14 w-14 flex-shrink-0 ${tech.background}`}
              >
                <Image
                  src={tech.src}
                  className="w-9 h-9"
                  width={36}
                  height={36}
                  alt={tech.alt}
                />
              </span>
              <div className="text flex flex-col justify-center">
                <h1 className="font-semibold text-base">{tech.name}</h1>
                <p className="text-principal/80 text-sm">{tech.description}</p>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        );
      })}
    </div>
  );
}
