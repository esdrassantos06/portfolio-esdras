import Link from "next/link";
import GridBackground from "@/components/ui/GridBackground";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-[--color-fundo] relative">
      <GridBackground />

      <div className="z-10 flex flex-col items-center gap-4 text-center px-4">
        <h1 className="text-6xl font-bold text-principal">404</h1>
        <p className="text-xl text-secundaria">{t("title")}</p>
        <p className="text-principal opacity-80 max-w-md">{t("description")}</p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 rounded-xl text-principal border border-secundaria hover:bg-fundo2hover transition-all"
        >
          {t("return")}
        </Link>
      </div>
    </main>
  );
}
