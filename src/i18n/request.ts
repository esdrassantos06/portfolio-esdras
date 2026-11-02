import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { hiddenNamespaces } from "@/data/projects";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const messages: Record<string, unknown> = (
    await import(`../../messages/${locale}.json`)
  ).default;

  return {
    locale,
    messages: Object.fromEntries(
      Object.entries(messages).filter(
        ([namespace]) => !hiddenNamespaces.includes(namespace),
      ),
    ),
  };
});
