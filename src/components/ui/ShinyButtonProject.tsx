"use client";

import { GlobeIcon, CodeIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

interface ShinyButtonProjectProps {
  demo: string;
  code?: string;
}

export default function ShinyButtonProject({
  demo,
  code,
}: ShinyButtonProjectProps) {
  const t = useTranslations("ProjectCTA");

  return (
    <div className="buttons flex flex-wrap gap-4 sm:flex-nowrap">
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("viewDemo")}
        href={demo}
        className="view-demo bg-secundaria hover:bg-link focus-visible:ring-link inline-flex h-13 w-fit items-center justify-center gap-3 rounded-full px-6 text-lg font-semibold text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
      >
        <GlobeIcon size={25} aria-hidden="true" />
        <span>{t("viewDemo")}</span>
      </a>

      {code && (
        <a
          href={code}
          aria-label={t("sourceCode")}
          rel="noopener noreferrer"
          target="_blank"
          className="source-code hover:border-secundaria/50 focus-visible:ring-link inline-flex h-13 w-fit items-center justify-center gap-3 rounded-full border border-white/15 bg-white/3 px-6 text-lg transition-colors duration-200 hover:bg-white/7 focus-visible:ring-2 focus-visible:outline-none"
        >
          <CodeIcon size={25} aria-hidden="true" />
          <span>{t("sourceCode")}</span>
        </a>
      )}
    </div>
  );
}
