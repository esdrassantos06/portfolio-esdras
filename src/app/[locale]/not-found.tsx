import { Link } from "@/i18n/navigation";
import HeroDive from "@/components/motion/HeroDive";
import { useTranslations } from "next-intl";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-6">
      <span
        aria-hidden="true"
        className="text-principal/4 pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-[38vw] leading-none font-bold tracking-tighter select-none"
      >
        404
      </span>

      <HeroDive className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
        <p
          aria-hidden="true"
          className="hero-dive text-secundaria font-mono text-xs tracking-[0.3em]"
        >
          404
        </p>

        <h1 className="hero-dive mt-6 text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] font-bold tracking-[-0.03em] text-balance">
          {t("title")}
        </h1>

        <div
          aria-hidden="true"
          className="hero-dive via-secundaria/60 mt-8 h-px w-full max-w-sm bg-linear-to-r from-white/25 to-transparent"
        />

        <p className="hero-dive text-principal/70 mt-8 max-w-md text-lg text-pretty">
          {t("description")}
        </p>

        <Link
          href="/"
          className="hero-dive group bg-secundaria hover:bg-link focus-visible:ring-link mt-10 inline-flex h-12 w-fit items-center gap-3 rounded-full px-7 text-[0.95rem] font-semibold text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
        >
          <ArrowLeftIcon
            size={18}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          {t("return")}
        </Link>
      </HeroDive>
    </main>
  );
}
