# Esdras Santos Portfolio

Personal portfolio at [portfolioesdras.com](https://portfolioesdras.com). Built with the Next.js App Router, localized in 3 languages, with a WebGL hero, a working contact form, and structured data for search engines.

## Features

- Multilingual routing with `next-intl` (English, Portuguese, Spanish), locale prefix only when needed
- Three.js hero scene and aurora background, with a static fallback
- GSAP and Motion scroll animations, Lenis smooth scrolling, custom preloader
- Project catalog with per-project detail pages generated from `src/data/projects.ts`
- Contact form backed by `/api/contact` (Nodemailer over SMTP, honeypot field, 5 requests per 10 minutes per IP)
- SEO: hreflang sitemap, `robots.txt`, JSON-LD (Person, WebSite, BreadcrumbList), dynamic OpenGraph image, `/llms.txt`
- CV download and Buy Me a Coffee widget

## Tech Stack

| Area        | Tools                                                                            |
| ----------- | -------------------------------------------------------------------------------- |
| Framework   | Next.js 16 (App Router), React 19, TypeScript                                    |
| Styling     | Tailwind CSS v4, `tailwind-merge`, Radix Select, Geist + Phosphor / Lucide icons |
| Motion & 3D | GSAP, Motion, Lenis, Three.js                                                    |
| i18n        | next-intl                                                                        |
| Backend     | Next.js Route Handlers, Nodemailer                                               |
| Tooling     | Bun, ESLint, Prettier                                                            |

## Getting Started

Requires Bun (or Node 18+ with npm/yarn).

```bash
git clone https://github.com/esdrassantos06/portfolio-esdras.git
cd portfolio-esdras
bun install
```

Create a `.env` file:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your-app-password
CONTACT_TO=where-messages-land@email.com
```

Only `NEXT_PUBLIC_BASE_URL` is needed to browse the site. The SMTP variables are required for the contact form; without them `/api/contact` returns `not_configured`.

Run the dev server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                |
| ---------------- | -------------------------- |
| `bun dev`        | Start the dev server       |
| `bun run build`  | Production build           |
| `bun start`      | Serve the production build |
| `bun run lint`   | ESLint                     |
| `bun run format` | Prettier write             |

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized pages: home, projects, project detail, contact
│   ├── api/               # contact + health route handlers
│   ├── llms.txt/          # Machine-readable site summary
│   ├── robots.ts          # robots.txt
│   ├── sitemap.ts         # Sitemap with hreflang alternates
│   └── opengraph-image.tsx
├── components/            # Sections, layout, motion, UI primitives
├── data/projects.ts       # Single source of truth for the project list
├── i18n/                  # Routing, request config, URL helpers
└── lib/schema.ts          # JSON-LD builders
messages/                  # Translation files, one per locale
public/                    # CV, fonts, models, mockups, flags, icons
```

## Adding a Project

1. Add an entry to `src/data/projects.ts` (`slug`, `name`, `image`, `demo`, optional `code`, `technologies`, `namespace`, optional `featuredHome`).
2. Add the matching `namespace` copy to every file in `messages/`.
3. Drop the mockup into `public/projects-mockup/`.

The sitemap, the projects grid, and `/llms.txt` pick it up automatically.

## License

MIT. See [LICENSE](LICENSE).

## Contact

- Email: esdrasirion1@gmail.com
- LinkedIn: [esdrassantos06](https://www.linkedin.com/in/esdrassantos06/)
- GitHub: [esdrassantos06](https://github.com/esdrassantos06)
