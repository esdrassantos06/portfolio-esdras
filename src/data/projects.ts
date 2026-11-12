import type { StaticImageData } from "next/image";
import pcbyteMockup from "../../public/projects-mockup/pcbyte.webp";
import jwebMockup from "../../public/projects-mockup/jweb.webp";
import moduloserviceMockup from "../../public/projects-mockup/moduloservice.webp";
import folgaMockup from "../../public/projects-mockup/folga.webp";
import phantomcodeMockup from "../../public/projects-mockup/phantomcode.webp";
import vagastechptMockup from "../../public/projects-mockup/vagastechpt.webp";
import liftboxMockup from "../../public/projects-mockup/liftbox.webp";
import swarmscopeMockup from "../../public/projects-mockup/swarmscope.webp";
import zipwayMockup from "../../public/projects-mockup/zipway.webp";
import tarevityMockup from "../../public/projects-mockup/tarevity.webp";
import nexebratrailMockup from "../../public/projects-mockup/nexebratrail.webp";

const tech = {
  react: "React",
  tailwind: "Tailwind CSS",
  shadcn: "shadcn/ui",
  vite: "Vite",
  electron: "Electron",
  openai: "OpenAI API",
  aiSdk: "Vercel AI SDK",
  next: "Next.js",
  ts: "TypeScript",
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
  three: "Three.js",
  stripe: "Stripe",
  supabase: "Supabase",
  tanstackQuery: "TanStack Query",
  python: "Python",
  fastapi: "FastAPI",
  fiber: "Fiber",
  openapi: "OpenAPI",
  locust: "Locust",
  flask: "Flask",
  pywebview: "pywebview",
  pyinstaller: "PyInstaller",
} as const;

type TechName = (typeof tech)[keyof typeof tech];

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  image: StaticImageData;
  demo?: string;
  code?: string;
  technologies: TechName[];
  metrics?: ProjectMetric[];
  namespace: string;
  featuredHome?: boolean;
  unreleased?: boolean;
}

const catalog: Record<string, Project> = {
  pcbyte: {
    slug: "pcbyte",
    name: "PCByte",
    image: pcbyteMockup,
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
      { value: "70k+", label: "products" },
      { value: "3130", label: "tests" },
      { value: "92", label: "performance" },
      { value: "96-100", label: "quality" },
    ],
    namespace: "PCByte",
    featuredHome: true,
  },
  jweb: {
    slug: "jweb",
    name: "JWeb",
    image: jwebMockup,
    demo: "https://jweb.pt",
    technologies: [
      tech.next,
      tech.ts,
      tech.react,
      tech.tailwind,
      tech.pg,
      tech.drizzle,
      tech.betterAuth,
      tech.capacitor,
      tech.redis,
      tech.odoo,
      tech.zod,
      tech.resend,
      tech.shadcn,
    ],
    namespace: "JWeb",
    featuredHome: true,
  },
  moduloservice: {
    slug: "moduloservice",
    name: "ModuloService PT",
    image: moduloserviceMockup,
    demo: "https://www.moduloservice.pt",
    technologies: [
      tech.next,
      tech.ts,
      tech.react,
      tech.tailwind,
      tech.three,
      tech.gsap,
      tech.zod,
      tech.resend,
      tech.vitest,
      tech.docker,
    ],
    metrics: [
      { value: "7", label: "trades" },
      { value: "3", label: "languages" },
      { value: "75", label: "tests" },
    ],
    namespace: "ModuloService",
    featuredHome: true,
    unreleased: true,
  },
  folga: {
    slug: "folga",
    name: "Folga",
    image: folgaMockup,
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
  phantomcode: {
    slug: "phantomcode",
    name: "Phantom Code",
    image: phantomcodeMockup,
    demo: "https://phantomcode.pt",
    technologies: [
      tech.next,
      tech.ts,
      tech.three,
      tech.tailwind,
      tech.electron,
      tech.react,
      tech.nestjs,
      tech.aiSdk,
      tech.betterAuth,
      tech.prisma,
      tech.pg,
      tech.stripe,
      tech.supabase,
      tech.redis,
      tech.docker,
      tech.jest,
    ],
    metrics: [
      { value: "324", label: "tests" },
      { value: "17", label: "docs" },
      { value: "2", label: "platforms" },
    ],
    namespace: "PhantomCode",
    featuredHome: true,
  },
  vagastechpt: {
    slug: "vagastechpt",
    name: "Vagas Tech PT",
    image: vagastechptMockup,
    demo: "https://vagas.portfolioesdras.com/docs",
    code: "https://github.com/esdrassantos06/vagas-tech-pt",
    technologies: [
      tech.python,
      tech.fastapi,
      tech.pg,
      tech.playwright,
      tech.docker,
    ],
    metrics: [
      { value: "375", label: "tests" },
      { value: "92%", label: "coverage" },
      { value: "3", label: "sources" },
    ],
    namespace: "VagasTechPt",
    featuredHome: true,
  },
  liftbox: {
    slug: "liftbox",
    name: "liftbox",
    image: liftboxMockup,
    demo: "https://liftbox.digital",
    code: "https://github.com/esdrassantos06/liftbox",
    technologies: [
      tech.react,
      tech.ts,
      tech.vitest,
      tech.playwright,
      tech.next,
    ],
    metrics: [
      { value: "13 kB", label: "size" },
      { value: "0", label: "deps" },
      { value: "1k+", label: "downloads" },
    ],
    namespace: "Liftbox",
    featuredHome: true,
  },
  swarmscope: {
    slug: "swarmscope",
    name: "Swarmscope",
    image: swarmscopeMockup,
    code: "https://github.com/esdrassantos06/swarmscope",
    technologies: [
      tech.python,
      tech.locust,
      tech.flask,
      tech.playwright,
      tech.pywebview,
      tech.pyinstaller,
    ],
    metrics: [
      { value: "56", label: "tests" },
      { value: "3", label: "builds" },
    ],
    namespace: "Swarmscope",
    featuredHome: true,
  },
  zipway: {
    slug: "zipway",
    name: "Zipway",
    image: zipwayMockup,
    code: "https://github.com/esdrassantos06/zipway",
    technologies: [
      tech.go,
      tech.fiber,
      tech.openapi,
      tech.next,
      tech.ts,
      tech.react,
      tech.redis,
      tech.pg,
      tech.prisma,
      tech.betterAuth,
      tech.tailwind,
      tech.shadcn,
      tech.zod,
      tech.jest,
      tech.docker,
    ],
    metrics: [
      { value: "<5µs", label: "session" },
      { value: "3", label: "layers" },
      { value: "32", label: "tests" },
    ],
    namespace: "Zipway",
    featuredHome: true,
  },
  tarevity: {
    slug: "tarevity",
    name: "Tarevity",
    image: tarevityMockup,
    demo: "https://www.tarevity.me/",
    code: "https://github.com/esdrassantos06/tarevity",
    technologies: [
      tech.next,
      tech.ts,
      tech.react,
      tech.tailwind,
      tech.shadcn,
      tech.tanstackQuery,
      tech.prisma,
      tech.pg,
      tech.betterAuth,
      tech.redis,
      tech.supabase,
      tech.resend,
      tech.zod,
      tech.vitest,
      tech.docker,
    ],
    metrics: [
      { value: "105", label: "tests" },
      { value: "3", label: "languages" },
      { value: "3", label: "trays" },
    ],
    namespace: "Tarevity",
  },
  nexebratrail: {
    slug: "nexebratrail",
    name: "Nexebra Trail",
    image: nexebratrailMockup,
    demo: "https://nexebratrail.com",
    technologies: [tech.next, tech.tailwind, tech.ts, tech.shadcn],
    namespace: "NexebraTrail",
  },
};

const showUnreleased = process.env.NODE_ENV === "development";

/** Projects published in this build, keyed by slug. */
export const projetos: Record<string, Project> = Object.fromEntries(
  Object.entries(catalog).filter(([, p]) => showUnreleased || !p.unreleased),
);

/** Message namespaces of projects left out of this build. */
export const hiddenNamespaces = Object.values(catalog)
  .filter((p) => !projetos[p.slug])
  .map((p) => p.namespace);

export const homeProjects = Object.values(projetos).filter(
  (p) => p.featuredHome,
);

export const allProjects = Object.values(projetos);

/** The published project for a slug, or undefined when there is none. */
export function getProject(slug: string): Project | undefined {
  return Object.hasOwn(projetos, slug) ? projetos[slug] : undefined;
}

/** The project after `slug` in listing order, wrapping to the first. */
export function nextProject(slug: string): Project {
  const index = allProjects.findIndex((p) => p.slug === slug);
  return allProjects[(index + 1) % allProjects.length];
}
