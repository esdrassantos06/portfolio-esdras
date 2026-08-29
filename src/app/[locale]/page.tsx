import Preloader from "@/components/motion/Preloader";
import HomeComponent from "@/components/sections/Home";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale } from "next-intl";
import { siteUrl, localizedUrl, localeAlternates } from "@/i18n/url";
import DepthSection from "@/components/motion/DepthSection";
import ContactClose from "@/components/sections/ContactClose";
import About from "@/components/About/About";
import Work from "@/components/sections/Work";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [t, homeT] = await Promise.all([
    getTranslations({ locale, namespace: "LocaleLayout" }),
    getTranslations({ locale, namespace: "HomeComponent" }),
  ]);

  const url = localizedUrl(locale);

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
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: homeT("description"),
      creator: "@esdrasprft",
    },
    alternates: {
      canonical: url,
      languages: localeAlternates(),
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Esdras Santos",
    givenName: "Esdras",
    familyName: "Santos",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer based in Portugal, specializing in React, Next.js, TypeScript, and Node.js.",
    image: `${siteUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
      addressLocality: "Portugal",
    },
    url: localizedUrl(locale),
    sameAs: [
      "https://github.com/esdrassantos06",
      "https://www.linkedin.com/in/esdrassantos06/",
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
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
  };

  return (
    <>
      <Preloader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeComponent />
      <DepthSection numeral="01" anchor="about">
        <About />
      </DepthSection>
      <DepthSection numeral="02" anchor="work">
        <Work />
      </DepthSection>
      <DepthSection numeral="03">
        <ContactClose />
      </DepthSection>
    </>
  );
}
