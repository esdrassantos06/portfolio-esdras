const tech = {
  react: "React",
  tailwind: "TailwindCSS",
  shadcn: "shadcn/ui",
  vite: "Vite",
  electron: "Electron",
  openai: "OpenAI API",
  next: "NextJS",
  ts: "Typescript",
  pg: "Postgres",
  redis: "Redis",
  nextauth: "NextAuth",
  betterAuth: "Better Auth",
  jest: "Jest",
  rtl: "React Testing Library",
  docker: "Docker",
  nestjs: "NestJS",
  prisma: "Prisma",
};

type TechName = (typeof tech)[keyof typeof tech];

interface Project {
  slug: string;
  image: string;
  demo: string;
  code?: string;
  technologies: TechName[];
  namespace: string;
}

export const projetos: Record<string, Project> = {
  novahorizonte: {
    slug: "novahorizonte",
    image: "/projects-mockup/novahorizonte.png",
    demo: "https://novahorizonte.vercel.app/",
    code: "https://github.com/esdrassantos06/novahorizonte",
    technologies: [tech.react, tech.tailwind, tech.shadcn, tech.vite],
    namespace: "NovaHorizonte",
  },
  phantomcode: {
    slug: "phantomcode",
    image: "/projects-mockup/phantomcode.png",
    demo: "https://phantomcode.site",
    code: "https://github.com/esdrassantos06/phantomcode",
    technologies: [
      tech.electron,
      tech.react,
      tech.nestjs,
      tech.tailwind,
      tech.openai,
    ],
    namespace: "PhantomCode",
  },
  tarevity: {
    slug: "tarevity",
    image: "/projects-mockup/tarevity.png",
    demo: "https://www.tarevity.pt/",
    code: "https://github.com/esdrassantos06/tarevity",
    technologies: [
      tech.next,
      tech.tailwind,
      tech.ts,
      tech.prisma,
      tech.redis,
      tech.betterAuth,
    ],
    namespace: "Tarevity",
  },
  zipway: {
    slug: "zipway",
    image: "/projects-mockup/zipway.png",
    demo: "https://shly.pt",
    code: "https://github.com/esdrassantos06/zipway",
    technologies: [
      tech.next,
      tech.tailwind,
      tech.ts,
      tech.pg,
      tech.redis,
      tech.betterAuth,
      tech.jest,
      tech.rtl,
      tech.docker,
    ],
    namespace: "Zipway",
  },
};
