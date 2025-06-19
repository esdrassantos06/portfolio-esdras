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
import { routing } from "@/i18n/routing";
import { localeFlagMap } from "@/i18n/localeFlagMap";
import { useRouter, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { SelectLabel } from "@radix-ui/react-select";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger className="group text-principal hover:border-primary focus:ring-primary relative w-fit rounded-xl border-none px-4 py-2 shadow-sm transition-all duration-300 hover:bg-white/10 focus:ring-2">
        <SelectValue placeholder={t("label")} />

        {/* Active indicator dot */}
        <div className="bg-principal absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 transform rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </SelectTrigger>

      <SelectContent className="text-principal relative min-w-[140px] overflow-hidden rounded-xl border border-gray-200/30 bg-gradient-to-b from-white/5 to-transparent p-1 shadow-xl backdrop-blur-xl">
        <SelectGroup>
          <SelectLabel className="text-secundaria/80 px-3 py-2 text-xs font-semibold tracking-wider uppercase">
            {t("label")}
          </SelectLabel>

          {routing.locales.map((cur) => (
            <SelectItem
              key={cur}
              value={cur}
              className="group data-[state=checked]:bg-principal/10 relative flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-white/10 focus:bg-white/15 data-[highlighted]:bg-white/10"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Image
                    src={localeFlagMap[cur]}
                    alt={cur}
                    width={18}
                    height={18}
                  />
                </div>
                <span className="text-principal/90 group-hover:text-principal text-sm transition-colors duration-200">
                  {t("locale", { locale: cur })}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
