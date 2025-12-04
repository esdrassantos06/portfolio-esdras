import HomeComponent from "@/components/sections/Home";
import About from "@/components/About/About";
import Work from "@/components/sections/Work";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  const homeT = await getTranslations({ locale, namespace: "HomeComponent" });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://www.portfolio-esdrassantos06.site";
  const url = `${baseUrl}/${locale}`;

  return {
    title: t("title"),
    description: homeT("description"),
    openGraph: {
      title: t("title"),
      description: homeT("description"),
      url: url,
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: homeT("description"),
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://www.portfolio-esdrassantos06.site";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Esdras",
    jobTitle: "Full Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
      addressLocality: "Portugal",
    },
    url: `${baseUrl}/${locale}`,
    sameAs: ["https://github.com/esdrassantos06"],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeComponent />
      <About />
      <Work />
    </main>
  );
}
