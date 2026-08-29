import { siteUrl, localizedUrl } from "@/i18n/url";

export const PERSON_ID = `${siteUrl}/#person`;
export const WEBSITE_ID = `${siteUrl}/#website`;

type Crumb = { name: string; path?: string };

/**
 * Person entity for Esdras Santos, referenced by every other schema node.
 */
export function personSchema(locale: string) {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Esdras Santos",
    givenName: "Esdras",
    familyName: "Santos",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer based in Portugal, specializing in React, Next.js, TypeScript, and Node.js.",
    image: `${siteUrl}/opengraph-image`,
    email: "mailto:esdrasirion1@gmail.com",
    url: localizedUrl(locale),
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
      addressLocality: "Portugal",
    },
    sameAs: [
      "https://github.com/esdrassantos06",
      "https://www.linkedin.com/in/esdrassantos06/",
      "https://x.com/esdrasprft",
    ],
    knowsAbout: [
      "Full Stack Development",
      "TypeScript",
      "Next.js",
      "React",
      "React Native",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "Python",
      "Go",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
  };
}

export function websiteSchema(locale: string) {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: localizedUrl(locale),
    name: "Esdras Santos Portfolio",
    inLanguage: locale,
    publisher: { "@id": PERSON_ID },
  };
}

/**
 * Breadcrumb trail starting at the localized home page.
 */
export function breadcrumbSchema(locale: string, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...crumbs].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: localizedUrl(locale, crumb.path ?? ""),
      }),
    ),
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
