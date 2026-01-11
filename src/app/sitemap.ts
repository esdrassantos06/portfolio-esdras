import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { projetos } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://www.portfolio-esdrassantos06.site";

  const routes: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
  });

  routing.locales.forEach((locale) => {
    Object.values(projetos).forEach((project) => {
      routes.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  return routes;
}
