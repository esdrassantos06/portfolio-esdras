import DownloadButton from "./ui/DownloadButton";
import { useTranslations } from "next-intl";

export default function CvDownload() {
  const t = useTranslations();
  return (
    <a
      href="/CV/esdrasCV.pdf"
      download="esdrasCV.pdf"
      aria-label="Curriculum Vitae"
      className="hover:border-secundaria relative z-25 flex h-12 w-50 items-center justify-center gap-3 rounded-lg border-1 border-transparent text-lg transition-all duration-300"
    >
      <DownloadButton />
      <span>{t("DownloadCV")}</span>
    </a>
  );
}
