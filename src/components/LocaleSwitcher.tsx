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
        className="group text-principal focus-visible:outline-principal relative w-full rounded-full border-none px-4 py-2 transition-all duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 max-sm:w-11 max-sm:px-0 max-sm:[&_.locale-name]:hidden max-sm:[&>svg]:hidden"
      >
        <SelectValue className="sr-only" placeholder={t("label")} />

        <div
          className="bg-principal absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 transform rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </SelectTrigger>

      <SelectContent className="text-principal bg-fundo/90 relative z-999999 w-44 overflow-hidden rounded-2xl border border-white/10 p-1.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:w-52">
        <SelectGroup>
          <SelectLabel className="text-principal/50 pointer-events-none hidden px-3 pt-2 pb-3 text-[0.7rem] font-medium tracking-wider uppercase select-none sm:block">
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
                className="group data-[state=checked]:bg-secundaria/20 data-[state=checked]:text-principal flex w-full cursor-pointer items-center gap-3 rounded-xl py-3 transition-all duration-200 hover:bg-white/10 focus:bg-white/15 data-[state=checked]:font-medium sm:p-3"
              >
                <div className="pointer-events-none absolute left-3">
                  <Image
                    draggable={false}
                    src={language.flag}
                    alt={language.code}
                    width={20}
                    height={12}
                    className="size-5 object-contain sm:h-3 sm:w-5"
                  />
                </div>
                <span className="locale-name text-principal/90 group-hover:text-principal pl-7 text-sm transition-colors duration-200">
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
