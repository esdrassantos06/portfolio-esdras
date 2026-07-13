import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { localizedUrl } from "@/i18n/url";
import { projetos } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    routes.push({
      url: localizedUrl(locale),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    });

    routes.push({
      url: localizedUrl(locale, "/projects"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    });

    routes.push({
      url: localizedUrl(locale, "/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    });

    Object.values(projetos).forEach((project) => {
      routes.push({
        url: localizedUrl(locale, `/projects/${project.slug}`),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  return routes;
}
