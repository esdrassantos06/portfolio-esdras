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
  medusa: "Medusa",
  strapi: "Strapi",
  expo: "Expo",
  reactNative: "React Native",
  meilisearch: "Meilisearch",
  s3: "AWS S3",
  paypal: "PayPal",
  sibs: "SIBS",
  multibanco: "Multibanco",
  mbway: "MB WAY",
  vitest: "Vitest",
  playwright: "Playwright",
  resend: "Resend",
  odoo: "Odoo",
  drizzle: "Drizzle ORM",
  capacitor: "Capacitor",
  zod: "Zod",
  gsap: "GSAP",
  polar: "Polar",
} as const;

type TechName = (typeof tech)[keyof typeof tech];

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  image: string;
  demo: string;
  code?: string;
  technologies: TechName[];
  metrics?: ProjectMetric[];
  namespace: string;
  featuredHome?: boolean;
}

export const projetos: Record<string, Project> = {
  folga: {
    slug: "folga",
    name: "Folga",
    image: "/projects-mockup/folga.webp",
    demo: "https://folga.online",
    technologies: [
      tech.next,
      tech.ts,
      tech.react,
      tech.betterAuth,
      tech.drizzle,
      tech.pg,
      tech.tailwind,
      tech.zod,
      tech.gsap,
      tech.polar,
      tech.resend,
    ],
    namespace: "Folga",
    featuredHome: true,
  },
  jweb: {
    slug: "jweb",
    name: "JWeb",
    image: "/projects-mockup/jweb.avif",
    demo: "https://jweb.pt",
    technologies: [
      tech.next,
      tech.ts,
      tech.react,
      tech.tailwind,
      tech.pg,
      tech.drizzle,
      tech.capacitor,
      tech.redis,
    ],
    namespace: "JWeb",
    featuredHome: true,
  },
  pcbyte: {
    slug: "pcbyte",
    name: "PCByte",
    image: "/projects-mockup/pcbyte.webp",
    demo: "https://pcbyte.pt",
    technologies: [
      tech.medusa,
      tech.next,
      tech.strapi,
      tech.reactNative,
      tech.expo,
      tech.pg,
      tech.redis,
      tech.meilisearch,
      tech.paypal,
      tech.sibs,
      tech.multibanco,
      tech.mbway,
      tech.s3,
    ],
    metrics: [
      { value: "10k+", label: "products" },
      { value: "3130", label: "tests" },
      { value: "92", label: "performance" },
      { value: "96-100", label: "quality" },
    ],
    namespace: "PCByte",
    featuredHome: true,
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
    featuredHome: true,
  },
  nexebratrail: {
    slug: "nexebratrail",
    name: "Nexebra Trail",
    image: "/projects-mockup/nexebratrail.webp",
    demo: "https://nexebratrail.com",
    technologies: [tech.next, tech.tailwind, tech.ts, tech.shadcn],
    namespace: "NexebraTrail",
    featuredHome: true,
  },
  zipway: {
    slug: "zipway",
    name: "Zipway",
    image: "/projects-mockup/zipway.webp",
    demo: "https://www.shly.pt/",
    code: "https://github.com/esdrassantos06/zipway",
    technologies: [tech.next, tech.ts, tech.go, tech.tailwind, tech.redis],
    namespace: "Zipway",
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
};

export const homeProjects = Object.values(projetos).filter(
  (p) => p.featuredHome,
);

export const allProjects = Object.values(projetos);
