import { FadeIn } from "@/components/ui/ScrollAnimation";
import GridBackground from "@/components/ui/GridBackground";
import ContactForm from "@/components/sections/ContactForm";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale } from "next-intl";
import { siteUrl, localizedUrl, localeAlternates } from "@/i18n/url";
import { Metadata } from "next";

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

  return (
    <>
      <GridBackground />
      <section
        className="mx-auto flex w-3/4 flex-col items-center justify-center pt-30 pb-20 sm:pt-40"
        aria-label="Contact"
      >
        <header className="mb-12 flex w-full flex-col items-center gap-4 text-center sm:mb-16">
          <FadeIn direction="up" once>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              {t("title")}
            </h1>
          </FadeIn>
          <FadeIn direction="up" once>
            <p className="text-principal/70 max-w-2xl text-base sm:text-lg">
              {t("subtitle")}
            </p>
          </FadeIn>
        </header>

        <ContactForm />
      </section>
    </>
  );
}
