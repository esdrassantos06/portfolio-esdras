"use client";

import { useEffect } from "react";
import "./globals.css";

const MESSAGES = {
  pt: {
    kicker: "Erro",
    title: "Algo correu mal",
    description:
      "Ocorreu um erro inesperado. Tente novamente ou volte à página principal.",
    retry: "Tentar novamente",
    home: "Página principal",
  },
  en: {
    kicker: "Error",
    title: "Something went wrong",
    description:
      "An unexpected error occurred. Try again or go back to the home page.",
    retry: "Try again",
    home: "Home page",
  },
  es: {
    kicker: "Error",
    title: "Algo salió mal",
    description:
      "Se produjo un error inesperado. Vuelve a intentarlo o regresa a la página principal.",
    retry: "Intentar de nuevo",
    home: "Página principal",
  },
  fr: {
    kicker: "Erreur",
    title: "Une erreur est survenue",
    description:
      "Une erreur inattendue s'est produite. Réessayez ou revenez à la page d'accueil.",
    retry: "Réessayer",
    home: "Page d'accueil",
  },
  de: {
    kicker: "Fehler",
    title: "Etwas ist schiefgelaufen",
    description:
      "Ein unerwarteter Fehler ist aufgetreten. Versuchen Sie es erneut oder kehren Sie zur Startseite zurück.",
    retry: "Erneut versuchen",
    home: "Startseite",
  },
} as const;

type Locale = keyof typeof MESSAGES;

function resolveLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const segment = window.location.pathname.split("/")[1];
  return segment in MESSAGES ? (segment as Locale) : "en";
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const locale = resolveLocale();
  const t = MESSAGES[locale];

  return (
    <html lang={locale}>
      <body className="font-satoshi bg-fundo text-principal">
        <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-6">
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              backgroundImage: [
                "radial-gradient(75% 60% at 18% 8%, rgba(126, 42, 168, 0.42), transparent 62%)",
                "radial-gradient(65% 55% at 88% 72%, rgba(96, 30, 140, 0.38), transparent 64%)",
              ].join(","),
            }}
          />

          <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-secundaria font-mono text-xs tracking-[0.3em] uppercase">
              {t.kicker}
            </p>

            <h1 className="mt-6 text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] font-bold tracking-[-0.03em] text-balance">
              {t.title}
            </h1>

            <div
              aria-hidden="true"
              className="via-secundaria/60 mt-8 h-px w-full max-w-sm bg-linear-to-r from-white/25 to-transparent"
            />

            <p className="text-principal/70 mt-8 max-w-md text-lg text-pretty">
              {t.description}
            </p>

            {error.digest && (
              <p className="text-principal/40 mt-4 font-mono text-xs">
                {error.digest}
              </p>
            )}

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={reset}
                className="bg-secundaria hover:bg-link focus-visible:ring-link focus-visible:ring-offset-fundo inline-flex h-12 w-fit items-center justify-center rounded-full px-7 text-[0.95rem] font-semibold text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {t.retry}
              </button>

              <a
                href={`/${locale}`}
                className="hover:border-secundaria/50 focus-visible:ring-link focus-visible:ring-offset-fundo inline-flex h-12 w-fit items-center justify-center rounded-full border border-white/15 bg-white/3 px-7 text-[0.95rem] transition-colors duration-200 hover:bg-white/[0.07] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {t.home}
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
