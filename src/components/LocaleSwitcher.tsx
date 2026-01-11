"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { SelectLabel } from "@radix-ui/react-select";

const languages = [
  {
    code: "en" as const,
    name: "English",
    flag: "/flags/gb.svg",
  },
  {
    code: "pt" as const,
    name: "Português",
    flag: "/flags/pt.svg",
  },
  {
    code: "es" as const,
    name: "Español",
    flag: "/flags/es.svg",
  },
  {
    code: "fr" as const,
    name: "Français",
    flag: "/flags/fr.svg",
  },
  {
    code: "de" as const,
    name: "Deutsch",
    flag: "/flags/de.svg",
  },
] as const;

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger
        aria-label={t("label")}
        className="group text-principal hover:border-primary focus:ring-primary focus-visible:outline-principal relative w-full rounded-xl border-none px-4 py-2 transition-all duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <SelectValue className="sr-only" placeholder={t("label")} />

        <div
          className="bg-principal absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 transform rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </SelectTrigger>

      <SelectContent className="text-principal relative z-[999999] w-40 overflow-hidden rounded-xl border border-gray-200/30 bg-gradient-to-b from-white/5 to-transparent p-1 backdrop-blur-md sm:w-50">
        <SelectGroup>
          <SelectLabel className="text-secundaria/80 hidden px-3 py-2 text-xs font-semibold tracking-wider uppercase sm:block">
            {t("label")}
          </SelectLabel>

          {languages.map((language) => {
            const isActive = locale === language.code;
            const languageName = t("locale", { locale: language.code });
            return (
              <SelectItem
                key={language.code}
                value={language.code}
                disabled={isActive}
                className="group data-[state=checked]:bg-principal/10 flex w-full cursor-pointer items-center gap-3 rounded-lg py-3 transition-all duration-200 hover:bg-white/10 focus:bg-white/15 sm:p-3"
              >
                <div className="pointer-events-none absolute left-3">
                  <Image
                    src={language.flag}
                    alt={language.code}
                    width={20}
                    height={12}
                    className="size-5 object-contain sm:h-3 sm:w-5"
                  />
                </div>
                <span className="text-principal/90 group-hover:text-principal pl-7 text-sm transition-colors duration-200">
                  {languageName}
                </span>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
