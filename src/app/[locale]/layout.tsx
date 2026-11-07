import "../globals.css";
import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteUrl, localizedUrl, localeAlternates } from "@/i18n/url";
import { SITE_NAME } from "@/lib/schema";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BuyMeACoffeeWidget from "@/components/BuyMeACoffeeWidget";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { PRELOADER_SKIP_SCRIPT } from "@/components/motion/appReady";
import AuroraMount from "@/components/ui/AuroraMount";
import AuroraFallback from "@/components/ui/AuroraFallback";
import { Metadata } from "next";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(
  props: Omit<Props, "children">,
): Promise<Metadata> {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  const url = localizedUrl(locale);
  const siteName = SITE_NAME;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `%s | ${SITE_NAME}`,
    },
    description: t("description"),
    keywords: t("keywords")?.split(", "),
    authors: [{ name: t("creator") }],
    creator: t("creator"),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      siteName: siteName,
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      site: "@esdrasprft",
      title: t("title"),
      description: t("description"),
      creator: "@esdrasprft",
    },
    alternates: {
      canonical: url,
      languages: localeAlternates(),
    },
    manifest: "/manifest.json",
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
    other: {
      "msapplication-TileColor": "#0a0a0a",
      "theme-color": "#0a0a0a",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${GeistMono.variable} overflow-x-clip`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: PRELOADER_SKIP_SCRIPT }} />
        <link rel="preconnect" href="https://cdnjs.buymeacoffee.com" />
        <link rel="dns-prefetch" href="https://cdnjs.buymeacoffee.com" />
      </head>
      <body className="font-satoshi bg-fundo text-principal w-full overflow-x-clip">
        <NextIntlClientProvider>
          <SmoothScroll />
          <AuroraFallback />
          <AuroraMount />
          <a href="#main-content" className="skip-link">
            {t("skipToContent")}
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <BuyMeACoffeeWidget />
      </body>
    </html>
  );
}
