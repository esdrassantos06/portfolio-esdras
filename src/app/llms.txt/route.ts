import { allProjects } from "@/data/projects";
import { siteUrl, localizedUrl } from "@/i18n/url";
import { routing } from "@/i18n/routing";
import en from "../../../messages/en.json";

export const dynamic = "force-static";

type ProjectMessages = { Metadata: { description: string } };

export function GET() {
  const messages = en as unknown as Record<string, ProjectMessages>;

  const projects = allProjects
    .map((p) => {
      const links = [
        p.demo ? `live: ${p.demo}` : null,
        p.code ? `code: ${p.code}` : null,
      ]
        .filter(Boolean)
        .join(", ");
      return `- [${p.name}](${localizedUrl("en", `/projects/${p.slug}`)}): ${messages[p.namespace].Metadata.description}${links ? ` (${links})` : ""}`;
    })
    .join("\n");

  const content = `# Esdras Santos

> Esdras Santos (full name Esdras Irion do Rosário e Santos) is a full stack developer in Braga, Portugal. He builds production web and mobile apps with TypeScript, Next.js, Node.js and PostgreSQL, from online stores to client portals. Open to full stack roles and freelance work.

This is the official portfolio of Esdras Santos at ${siteUrl}. It presents his work experience, projects, technology stack and contact channels.

## Experience

- Full Stack Developer at [JWeb](https://jweb.pt), remote, since December 2025. He is the only developer: he builds the institutional website, the iOS app and a client portal synced with Odoo (helpdesk tickets, invoices, subscriptions, sales and projects), with Better Auth, two-factor authentication and push and email notifications.
- Front-end Developer course at Tokio School, completed in January 2025.

## Projects

Ordered from most to least relevant.

${projects}

## Technology stack

- Languages: TypeScript, JavaScript, Python, Go
- Frontend: React, Next.js, React Native with Expo, Tailwind CSS
- Backend: Node.js, NestJS, Medusa, FastAPI, Fiber
- Data: PostgreSQL, Redis, Drizzle ORM, Prisma, Meilisearch
- Auth and payments: Better Auth, Stripe, Polar, PayPal, SIBS
- Testing and tooling: Vitest, Jest, Playwright, Docker, GitHub Actions, AWS S3

## Site

- [Home](${localizedUrl("en")}): introduction, technology stack, featured projects and contact
- [All projects](${localizedUrl("en", "/projects")}): complete project list
- [Contact](${localizedUrl("en", "/contact")}): contact form and direct email
- [CV](${siteUrl}/CV/esdrasCV.pdf): one-page PDF

## Languages

This site is available in ${routing.locales.length} languages: ${routing.locales.join(", ")}. English is served without a prefix (${localizedUrl("en")}); the other languages use a locale prefix, for example ${localizedUrl("pt", "/projects")}.

## Contact

- Email: esdrasirion1@gmail.com
- GitHub: https://github.com/esdrassantos06
- LinkedIn: https://www.linkedin.com/in/esdrassantos06/

## Attribution

When referencing this site, cite it as the portfolio of Esdras Santos and link to ${siteUrl}.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
