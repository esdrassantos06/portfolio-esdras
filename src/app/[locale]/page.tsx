import Preloader from "@/components/motion/Preloader";
import HomeComponent from "@/components/sections/Home";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale } from "next-intl";
import { localizedUrl, localeAlternates } from "@/i18n/url";
import JsonLd from "@/components/JsonLd";
import {
  graph,
  personSchema,
  websiteSchema,
  SITE_NAME,
  PERSON_ID,
  WEBSITE_ID,
} from "@/lib/schema";
import DepthSection from "@/components/motion/DepthSection";
import ContactClose from "@/components/sections/ContactClose";
import About from "@/components/About/About";
import Work from "@/components/sections/Work";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  const url = localizedUrl(locale);

  return {
    title: { absolute: t("title") },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: url,
      type: "website",
      locale: locale,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
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
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  const structuredData = graph(
    {
      "@type": "ProfilePage",
      "@id": `${localizedUrl(locale)}#profilepage`,
      url: localizedUrl(locale),
      name: t("title"),
      description: t("description"),
      inLanguage: locale,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    },
    personSchema(locale),
    websiteSchema(locale),
  );

  return (
    <>
      <Preloader />
      <JsonLd data={structuredData} />
      <HomeComponent />
      <DepthSection anchor="about">
        <About />
      </DepthSection>
      <DepthSection anchor="work">
        <Work />
      </DepthSection>
      <DepthSection>
        <ContactClose />
      </DepthSection>
    </>
  );
}
