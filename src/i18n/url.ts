import { routing } from "./routing";

export const siteUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://portfolioesdras.com";

export function localizedUrl(locale: string, path = "") {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteUrl}${prefix}${path}`;
}

export function localeAlternates(path = "") {
  const languages: Record<string, string> = {
    "x-default": localizedUrl(routing.defaultLocale, path),
  };
  for (const locale of routing.locales) {
    languages[locale] = localizedUrl(locale, path);
  }
  return languages;
}
