import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteUrl, localizedUrl, localeAlternates } from "@/i18n/url";
import { projetos } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-03");
  const routes: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    routes.push({
      url: localizedUrl(locale),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: localeAlternates() },
    });

    routes.push({
      url: localizedUrl(locale, "/projects"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: localeAlternates("/projects") },
    });

    routes.push({
      url: localizedUrl(locale, "/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: { languages: localeAlternates("/contact") },
    });

    Object.values(projetos).forEach((project) => {
      const path = `/projects/${project.slug}`;
      routes.push({
        url: localizedUrl(locale, path),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: localeAlternates(path) },
        images: [`${siteUrl}${project.image}`],
      });
    });
  });

  return routes;
}
