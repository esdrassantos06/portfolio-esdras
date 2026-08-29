import { allProjects } from "@/data/projects";
import { siteUrl } from "@/i18n/url";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export function GET() {
  const projects = allProjects
    .map(
      (p) =>
        `- [${p.name}](${siteUrl}/en/projects/${p.slug}): ${p.technologies.join(", ")}`,
    )
    .join("\n");

  const content = `# Esdras Santos

> Full Stack Developer based in Portugal. Builds end-to-end web applications, from APIs and databases to polished frontend and mobile interfaces. Available for freelance work and new collaborations.

## About

Personal portfolio of Esdras Santos, a full stack developer working with TypeScript, React, Next.js, Node.js, Python and Go. The site presents his projects, technology stack and contact channels.

## Site

- [Home](${siteUrl}/en): hero, technology stack, featured projects and contact call to action
- [All projects](${siteUrl}/en/projects): complete project list
- [Contact](${siteUrl}/en/contact): contact form and direct email

## Projects

${projects}

## Technology stack

- Frontend: React, React Native, Next.js, Vue.js, TailwindCSS, TypeScript
- Backend: Node.js, NestJS, Go, Python, Flask, FastAPI
- Databases: PostgreSQL, MySQL, MongoDB, SQLite, Redis
- Cloud and infrastructure: AWS, Docker, Git, GitHub

## Languages

This site is available in ${routing.locales.length} languages: ${routing.locales.join(", ")}. Each page is served under a locale prefix, for example ${siteUrl}/pt/projects.

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
