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
        className="view-demo before:animate-shine bg-fundo2 hover:bg-fundo2/80 focus-visible:outline-principal relative flex h-12 items-center justify-center gap-3 overflow-hidden rounded-lg border border-gray-200/50 px-4 text-lg transition-all duration-300 before:absolute before:top-0 before:-left-full before:h-full before:w-4 before:scale-120 before:rotate-10 before:bg-linear-to-r before:from-transparent before:to-white/5 focus-visible:outline-2 focus-visible:outline-offset-2"
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
          className="source-code before:animate-shine bg-fundo2 hover:bg-fundo2/80 focus-visible:outline-principal relative flex h-12 items-center justify-center gap-3 overflow-hidden rounded-lg border border-gray-200/50 px-4 text-lg transition-all duration-300 before:absolute before:top-0 before:-left-full before:h-full before:w-4 before:scale-120 before:rotate-10 before:bg-linear-to-r before:from-transparent before:to-white/5 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <CodeIcon size={25} aria-hidden="true" />
          <span>{t("sourceCode")}</span>
        </a>
      )}
    </div>
  );
}
