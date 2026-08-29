import { DownloadSimpleIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

export default function CvDownload() {
  const t = useTranslations();
  return (
    <a
      href="/CV/esdrasCV.pdf"
      download="esdrasCV.pdf"
      aria-label={`${t("DownloadCV")} - Curriculum Vitae`}
      className="group hover:border-secundaria/50 focus-visible:ring-link relative flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/3 px-7 text-[0.95rem] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/7 focus-visible:ring-2 focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <DownloadSimpleIcon
        className="text-secundaria transition-transform duration-300 group-hover:translate-y-0.5"
        size={20}
        aria-hidden="true"
      />
      <span>{t("DownloadCV")}</span>
    </a>
  );
}
