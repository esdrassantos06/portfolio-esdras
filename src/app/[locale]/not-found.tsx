import { Link } from "@/i18n/navigation";
import GridBackground from "@/components/ui/GridBackground";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-[--color-fundo]">
      <GridBackground />

      <div className="z-10 flex flex-col items-center gap-4 px-4 text-center">
        <h1 className="text-principal text-6xl font-bold">404</h1>
        <p className="text-secundaria text-xl">{t("title")}</p>
        <p className="text-principal max-w-md opacity-80">{t("description")}</p>
        <Link
          href="/"
          className="text-principal border-secundaria hover:bg-fundo2hover mt-4 rounded-xl border px-6 py-2 transition-all"
        >
          {t("return")}
        </Link>
      </div>
    </main>
  );
}
