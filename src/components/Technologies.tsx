"use client";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function Technologies() {
  const technologies = [
    {
      name: "AWS",
      src: "/technologies/aws.svg",
      alt: "aws",
      background: "bg-white",
      description: "Cloud services",
    },
    {
      name: "Next.js",
      src: "/technologies/next.svg",
      alt: "Next.js",
      background: "bg-[#313131]",
      description: "React framework",
    },
    {
      name: "NodeJS",
      src: "/technologies/node.svg",
      alt: "NodeJS",
      background: "bg-[#20625C]",
      description: "Server-side JavaScript",
    },
    {
      name: "Postgres",
      src: "/technologies/postgres.svg",
      alt: "Postgres",
      background: "bg-[#024795]",
      description: "Relational database",
    },
    {
      name: "Python",
      src: "/technologies/python.svg",
      alt: "Python",
      background: "bg-[#AE9B07]",
      description: "Backend language",
    },
    {
      name: "React",
      src: "/technologies/react.svg",
      alt: "React",
      background: "bg-[#284147]",
      description: "JavaScript Library",
    },
    {
      name: "Git",
      src: "/technologies/git.svg",
      alt: "Git",
      background: "bg-[#284147]",
      description: "Version control",
    },
    {
      name: "Tailwind CSS",
      src: "/technologies/tailwind.svg",
      alt: "Tailwind CSS",
      background: "bg-[#183644]",
      description: "CSS framework",
    },
    {
      name: "Typescript",
      src: "/technologies/ts.svg",
      alt: "Typescript",
      background: "bg-[#1F2D3D]",
      description: "JavaScript but better",
    },
  ];

  return (
    <div className="grid w-full gap-8 h-fit mb-8 self-start lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:grid-cols-4">
      {technologies.map((tech, index) => {
        return (
          <ScrollAnimation key={index} delayIndex={index + 2}>
            <div
              className={`tech-${tech.name.split(" ").join("_").toLowerCase()}
 bg-fundo2 gap-5 w-75 h-20 hover:border-gray-200/50 hover:bg-fundo2hover border-transparent transition-all duration-300 border-1 rounded-2xl flex items-center py-2 pl-4`}
            >
              <span
                className={`icon flex items-center justify-center rounded-lg p-2 h-16 w-16 ${tech.background}`}
              >
                <Image src={tech.src} className="max-w-full" width={50} height={50} alt={tech.alt} />
              </span>
              <div className="text h-full flex flex-col">
                <h1 className="font-semibold text-lg">{tech.name}</h1>
                <p className="text-principal/80 text-base">
                  {tech.description}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        );
      })}
    </div>
  );
}
