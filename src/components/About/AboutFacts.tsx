"use client";

import { useTranslations } from "next-intl";

export default function AboutFacts() {
  const t = useTranslations("About");

  const facts = [
    { label: t("facts.currentlyLabel"), value: t("facts.currently") },
    { label: t("facts.basedLabel"), value: t("facts.based") },
    { label: t("facts.ownsLabel"), value: t("facts.owns") },
    { label: t("facts.openLabel"), value: t("facts.open"), accent: true },
  ];

  return (
    <div className="about-panel will-change-transform">
      <dl className="flex flex-col">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="about-fact relative pt-5 pb-7 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-px w-full bg-white/10"
            />
            <span
              aria-hidden="true"
              className="about-fact-fill bg-link absolute top-0 left-0 h-0.5 w-full"
            />
            <dt className="about-fact-label text-principal/60 font-mono text-[0.6875rem] tracking-[0.2em] uppercase">
              {fact.label}
            </dt>
            <dd
              className={`about-fact-value mt-2.5 text-lg font-medium text-pretty sm:text-xl ${
                fact.accent ? "text-link" : "text-principal"
              }`}
            >
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
