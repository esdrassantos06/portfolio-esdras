type Projeto = {
  slug: string;
  image: string;
  demo: string;
  code?: string;
  technologies: string[];
  namespace: string;
};

export const projetos: Record<string, Projeto> = {
  novahorizonte: {
    slug: "novahorizonte",
    image: "/projects-mockup/novahorizonte.png",
    demo: "https://novahorizonte.vercel.app/",
    code: "https://github.com/esdrassantos06/novahorizonte",
    technologies: ["React", "TailwindCSS", "shadcn/ui", "Vite"],
    namespace: "NovaHorizonte",
  },
  phantomcode: {
    slug: "phantomcode",
    image: "/projects-mockup/phantomcode.png",
    demo: "https://phantomcode.site",
    technologies: ["Electron", "TailwindCSS", "OpenAI API"],
    namespace: "PhantomCode",
  },
  tarevity: {
    slug: "tarevity",
    image: "/projects-mockup/tarevity.png",
    demo: "https://phantomcode.site",
    code: "https://github.com/esdrassantos06/tarevity",
    technologies: [
      "NextJS",
      "TailwindCSS",
      "Typescript",
      "Postgres",
      "Redis",
      "NextAuth",
    ],
    namespace: "Tarevity",
  },
  zipway: {
    slug: "zipway",
    image: "/projects-mockup/zipway.png",
    demo: "https://shly.spt",
    code: "https://github.com/esdrassantos06/zipway",
    technologies: [
      "NextJS",
      "TailwindCSS",
      "Typescript",
      "Postgres",
      "Redis",
      "Better Auth",
      "Jest",
      "React Testing Library",
      "Docker",
    ],
    namespace: "Zipway",
  },
};
