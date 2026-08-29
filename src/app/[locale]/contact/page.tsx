import Preloader from "@/components/motion/Preloader";
import HeroDive from "@/components/motion/HeroDive";
import ContactForm from "@/components/sections/ContactForm";
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
  const t = await getTranslations({ locale, namespace: "Contact" });

  const url = localizedUrl(locale, "/contact");

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
      languages: localeAlternates("/contact"),
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Contact" });

  const url = localizedUrl(locale, "/contact");
  const structuredData = graph(
    {
      "@type": "ContactPage",
      "@id": `${url}#contactpage`,
      url,
      name: t("metaTitle"),
      description: t("metaDescription"),
      inLanguage: locale,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
    },
    breadcrumbSchema(locale, [{ name: t("title"), path: "/contact" }]),
  );

  return (
    <>
      <Preloader />
      <JsonLd data={structuredData} />
      <section
        className="mx-auto grid w-3/4 grid-cols-1 items-start gap-14 pt-32 pb-24 sm:pt-40 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20"
        aria-label="Contact"
      >
        <HeroDive>
          <header className="flex flex-col items-center text-center lg:sticky lg:top-40 lg:items-start lg:text-left">
            <p className="hero-dive text-principal/50 font-mono text-xs tracking-[0.25em] uppercase">
              Portugal · {new Date().getFullYear()}
            </p>

            <h1 className="hero-dive mt-6 text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] font-bold tracking-[-0.03em] text-balance">
              {t("title")}
            </h1>

            <div
              aria-hidden="true"
              className="hero-dive via-secundaria/60 mt-8 h-px w-full max-w-sm bg-linear-to-r from-white/25 to-transparent"
            />

            <p className="hero-dive text-principal/70 mt-8 max-w-md text-lg text-pretty">
              {t("subtitle")}
            </p>

            <a
              href="mailto:esdrasirion1@gmail.com"
              className="hero-dive text-link hover:text-linkhover focus-visible:outline-principal mt-8 inline-block text-lg underline decoration-1 underline-offset-8 transition-colors duration-300"
            >
              esdrasirion1@gmail.com
            </a>
          </header>
        </HeroDive>

        <div className="w-full rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm sm:p-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
