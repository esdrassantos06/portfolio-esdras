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
  go: "Go",
};

type TechName = (typeof tech)[keyof typeof tech];

interface Project {
  slug: string;
  name: string;
  image: string;
  demo: string;
  code?: string;
  technologies: TechName[];
  namespace: string;
}

export const projetos: Record<string, Project> = {
  jweb: {
    slug: "jweb",
    name: "JWeb",
    image: "/projects-mockup/jweb.avif",
    demo: "https://jweb.pt",
    technologies: [tech.next, tech.ts, tech.react, tech.tailwind, tech.shadcn],
    namespace: "JWeb",
  },
  phantomcode: {
    slug: "phantomcode",
    name: "Phantom Code",
    image: "/projects-mockup/phantomcode.webp",
    demo: "https://phantomcode.pt",
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
    name: "Tarevity",
    image: "/projects-mockup/tarevity.webp",
    demo: "https://www.tarevity.me/",
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
  nexebratrail: {
    slug: "nexebratrail",
    name: "Nexebra Trail",
    image: "/projects-mockup/nexebratrail.webp",
    demo: "https://nexebratrail.com",
    technologies: [tech.next, tech.tailwind, tech.ts, tech.shadcn],
    namespace: "NexebraTrail",
  },
};
