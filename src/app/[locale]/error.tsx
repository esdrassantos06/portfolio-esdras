"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import HeroDive from "@/components/motion/HeroDive";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorPage");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      aria-label="Error"
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-6"
    >
      <span
        aria-hidden="true"
        className="text-principal/4 pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-[30vw] leading-none font-bold tracking-tighter select-none"
      >
        500
      </span>

      <HeroDive className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
        <p
          aria-hidden="true"
          className="hero-dive text-secundaria font-mono text-xs tracking-[0.3em]"
        >
          500
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

        {error.digest && (
          <p className="hero-dive text-principal/40 mt-4 font-mono text-xs">
            {error.digest}
          </p>
        )}

        <div className="hero-dive mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={reset}
            className="bg-secundaria hover:bg-link focus-visible:ring-link focus-visible:ring-offset-fundo inline-flex h-12 w-fit items-center justify-center rounded-full px-7 text-[0.95rem] font-semibold text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {t("retry")}
          </button>

          <Link
            href="/"
            className="hover:border-secundaria/50 focus-visible:ring-link focus-visible:ring-offset-fundo inline-flex h-12 w-fit items-center justify-center rounded-full border border-white/15 bg-white/3 px-7 text-[0.95rem] transition-colors duration-200 hover:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {t("home")}
          </Link>
        </div>
      </HeroDive>
    </section>
  );
}
