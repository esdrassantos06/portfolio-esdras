"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { isAppReady, markAppReady } from "./appReady";

const AURORA = [
  "radial-gradient(75% 60% at 18% 8%, rgba(126, 42, 168, 0.42), transparent 62%)",
  "radial-gradient(65% 55% at 88% 72%, rgba(96, 30, 140, 0.38), transparent 64%)",
  "radial-gradient(90% 65% at 55% 108%, rgba(150, 66, 200, 0.30), transparent 66%)",
].join(",");

export default function Preloader() {
  const t = useTranslations("Preloader");
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(
    () =>
      typeof window !== "undefined" &&
      (isAppReady() ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches),
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const unlock = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    if (
      isAppReady() ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      markAppReady();
      return;
    }

    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const lineEls = root.querySelectorAll(".pre-line");
    const eyebrowEl = root.querySelector(".pre-eyebrow");
    const ruleEl = root.querySelector(".pre-rule");
    const meterEl = root.querySelector(".pre-meter");

    gsap.set(lineEls, { yPercent: 115 });
    gsap.set([eyebrowEl, meterEl], { opacity: 0, y: 14 });
    gsap.set(ruleEl, { scaleX: 0, transformOrigin: "left center" });

    const progress = { value: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => {
        unlock();
        setGone(true);
      },
    });

    tl.to(lineEls, { yPercent: 0, duration: 1, stagger: 0.08 }, 0)
      .to(eyebrowEl, { opacity: 1, y: 0, duration: 0.8 }, 0.1)
      .to(meterEl, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
      .to(ruleEl, { scaleX: 1, duration: 1.1 }, 0.3)
      .to(
        progress,
        {
          value: 100,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            setCount(Math.round(progress.value));
            if (barRef.current) {
              barRef.current.style.transform = `scaleX(${progress.value / 100})`;
            }
          },
        },
        0.15,
      )
      .call(markAppReady)
      .to(
        lineEls,
        {
          yPercent: -115,
          duration: 0.8,
          stagger: 0.06,
          ease: "expo.inOut",
        },
        ">-0.1",
      )
      .to(
        [eyebrowEl, meterEl, ruleEl],
        { opacity: 0, duration: 0.4, ease: "power2.in" },
        "<",
      )
      .to(
        root,
        { yPercent: -100, duration: 1.1, ease: "expo.inOut", force3D: true },
        "<0.2",
      );

    return () => {
      tl.kill();
      unlock();
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={rootRef}
      data-preloader=""
      aria-hidden="true"
      className="bg-fundo fixed inset-0 z-9999999 flex flex-col justify-center will-change-transform"
      style={{ backgroundImage: AURORA }}
    >
      <div className="shell">
        <p className="pre-eyebrow text-principal/70 font-mono text-xs tracking-[0.25em] uppercase">
          {t("role")}
        </p>

        <p className="mt-6 text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-bold tracking-[-0.03em]">
          <span className="block overflow-hidden">
            <span className="pre-line block">Esdras</span>
          </span>
          <span className="block overflow-hidden">
            <span className="pre-line text-secundaria block">Santos</span>
          </span>
        </p>

        <span className="pre-rule via-secundaria/60 mt-8 block h-px w-full max-w-sm bg-linear-to-r from-white/25 to-transparent" />
      </div>

      <div className="pre-meter absolute right-0 bottom-0 left-0">
        <div className="shell flex items-end justify-between pb-5">
          <span className="text-principal/45 font-mono text-[0.7rem] tracking-[0.25em] uppercase">
            {t("loading")}
          </span>
          <span className="text-principal font-mono text-4xl leading-none font-bold tabular-nums sm:text-6xl">
            {String(count).padStart(3, "0")}
            <span className="text-principal/40 ml-1 text-base sm:text-xl">
              %
            </span>
          </span>
        </div>
        <span className="relative block h-px w-full overflow-hidden bg-white/10">
          <span
            ref={barRef}
            className="from-secundaria via-link to-linkhover absolute inset-0 origin-left scale-x-0 bg-linear-to-r"
          />
        </span>
      </div>
    </div>
  );
}
