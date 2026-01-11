import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://www.portfolio-esdrassantos06.site";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/_vercel/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
