"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { STACK, StackGroupKey } from "./stack";

export default function AboutStack() {
  const t = useTranslations("About");

  const labels: Record<StackGroupKey, string> = {
    frontend: t("stack.frontend"),
    backend: t("stack.backend"),
    platform: t("stack.platform"),
  };

  return (
    <div className="about-stack mt-24 sm:mt-32">
      <h3 className="about-stack-title text-principal text-2xl font-semibold sm:text-3xl">
        {t("stack.title")}
      </h3>

      {STACK.map((group) => (
        <div
          key={group.key}
          className="about-group mt-10 will-change-transform"
        >
          <div aria-hidden="true" className="relative h-0.5 w-full">
            <span className="about-rule absolute inset-x-0 top-0 h-px bg-white/10" />
            <span className="about-rule-fill bg-link absolute inset-x-0 top-0 h-0.5" />
          </div>
          <div className="grid gap-6 pt-8 pb-2 sm:grid-cols-[12rem_1fr] sm:gap-10">
            <h4 className="about-label text-principal/60 font-mono text-xs tracking-[0.2em] uppercase sm:pt-5">
              {labels[group.key]}
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-8 sm:gap-x-10">
              {group.items.map((tech) => (
                <div
                  key={`${group.key}-${tech.name}`}
                  className="about-chip relative flex items-center gap-4 will-change-transform"
                >
                  <span
                    aria-hidden="true"
                    className="about-glow bg-link/40 pointer-events-none absolute -top-2 -left-2 z-0 size-18 rounded-full blur-xl sm:size-20"
                  />
                  <span
                    className={`about-icon relative z-10 flex size-14 shrink-0 items-center justify-center rounded-xl p-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] sm:size-16 ${tech.background}`}
                  >
                    <Image
                      draggable={false}
                      src={tech.src}
                      className="size-8 object-contain sm:size-9"
                      width={36}
                      height={36}
                      alt=""
                      loading="lazy"
                    />
                  </span>
                  <span className="about-name relative z-10 text-base font-medium sm:text-lg">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
