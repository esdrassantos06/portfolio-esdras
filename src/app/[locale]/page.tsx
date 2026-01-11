import HomeComponent from "@/components/sections/Home";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About/About"), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
});

const Work = dynamic(() => import("@/components/sections/Work"), {
  loading: () => <div className="min-h-screen" />,
  ssr: true,
});

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
      siteName: "Esdras Portfolio",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: homeT("description"),
      creator: "@esdrasprft",
      images: [`${baseUrl}/og-image.png`],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en`,
        pt: `${baseUrl}/pt`,
        es: `${baseUrl}/es`,
        fr: `${baseUrl}/fr`,
        de: `${baseUrl}/de`,
      },
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
    sameAs: [
      "https://github.com/esdrassantos06",
      "https://www.linkedin.com/in/esdrassantos06/",
    ],
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeComponent />
      <About />
      <Work />
    </>
  );
}
