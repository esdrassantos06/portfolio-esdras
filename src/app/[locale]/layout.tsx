import "../globals.css";
import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { siteUrl, localizedUrl, localeAlternates } from "@/i18n/url";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BuyMeACoffeeWidget from "@/components/BuyMeACoffeeWidget";
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
  const siteName = "Esdras Portfolio";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: "%s | Esdras Portfolio",
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
      title: t("title"),
      description: t("description"),
      creator: "@esdrasprft",
    },
    alternates: {
      canonical: url,
      languages: localeAlternates(),
    },
    icons: {
      icon: [
        {
          url: "/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: "/favicon/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    manifest: "/manifest.json",
    other: {
      "msapplication-TileColor": "#000000",
      "theme-color": "#000000",
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

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${GeistMono.variable} overflow-x-hidden scroll-smooth`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/satoshi/fonts/Satoshi-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdnjs.buymeacoffee.com" />
        <link rel="dns-prefetch" href="https://cdnjs.buymeacoffee.com" />
      </head>
      <body className="font-satoshi bg-fundo text-principal w-full overflow-x-hidden">
        <NextIntlClientProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
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
