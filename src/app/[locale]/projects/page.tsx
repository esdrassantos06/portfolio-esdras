import Preloader from "@/components/motion/Preloader";
import HeroDive from "@/components/motion/HeroDive";
import AllProjectsList from "@/components/sections/AllProjectsList";
import { allProjects } from "@/data/projects";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale } from "next-intl";
import { siteUrl, localizedUrl, localeAlternates } from "@/i18n/url";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { graph, breadcrumbSchema, PERSON_ID, WEBSITE_ID } from "@/lib/schema";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AllProjects" });

  const url = localizedUrl(locale, "/projects");

  return {
    metadataBase: new URL(siteUrl),
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      type: "website",
      locale,
      url,
      siteName: "Esdras Portfolio",
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
      creator: "@esdrasprft",
    },
    alternates: {
      canonical: url,
      languages: localeAlternates("/projects"),
    },
  };
}

export default async function AllProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AllProjects" });

  const url = localizedUrl(locale, "/projects");
  const structuredData = graph(
    {
      "@type": "CollectionPage",
      "@id": `${url}#collectionpage`,
      url,
      name: t("metaTitle"),
      description: t("metaDescription"),
      inLanguage: locale,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: allProjects.length,
        itemListElement: allProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.name,
          url: localizedUrl(locale, `/projects/${project.slug}`),
        })),
      },
    },
    breadcrumbSchema(locale, [{ name: t("title"), path: "/projects" }]),
  );

  return (
    <>
      <Preloader />
      <JsonLd data={structuredData} />
      <section
        className="mx-auto flex w-3/4 flex-col pt-32 pb-24 sm:pt-40"
        aria-label="All projects"
      >
        <HeroDive>
          <header className="mb-16 flex w-full flex-col items-start sm:mb-24">
            <p className="hero-dive text-principal/50 font-mono text-xs tracking-[0.25em] uppercase">
              {t("count", { count: allProjects.length })}
            </p>
            <h1 className="hero-dive mt-6 text-left text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] font-bold tracking-[-0.03em] text-balance">
              {t("title")}
            </h1>
            <div
              aria-hidden="true"
              className="hero-dive via-secundaria/60 mt-8 h-px w-full max-w-md bg-linear-to-r from-white/25 to-transparent"
            />
            <p className="hero-dive text-principal/70 mt-8 max-w-xl text-lg text-pretty">
              {t("subtitle")}
            </p>
          </header>
        </HeroDive>

        <AllProjectsList />
      </section>
    </>
  );
}
