"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { isAppReady, markAppReady, PRELOADER_SEEN_KEY } from "./appReady";

const AURORA = [
  "radial-gradient(75% 60% at 18% 8%, rgba(126, 42, 168, 0.42), transparent 62%)",
  "radial-gradient(65% 55% at 88% 72%, rgba(96, 30, 140, 0.38), transparent 64%)",
  "radial-gradient(90% 65% at 55% 108%, rgba(150, 66, 200, 0.30), transparent 66%)",
].join(",");

function alreadySeen() {
  try {
    return sessionStorage.getItem(PRELOADER_SEEN_KEY) !== null;
  } catch {
    return false;
  }
}

function rememberSeen() {
  try {
    sessionStorage.setItem(PRELOADER_SEEN_KEY, "1");
  } catch {}
}

function hidePreloader() {
  document.documentElement.dataset.preloaded = "";
}

/**
 * Intro reveal for the home page. Plays once per browser session and never
 * for reduced-motion users; every other visit marks the app ready at once.
 */
export default function Preloader() {
  const t = useTranslations();
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [readyOnMount] = useState(
    () => typeof window !== "undefined" && isAppReady(),
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (
      isAppReady() ||
      alreadySeen() ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      hidePreloader();
      markAppReady();
      return;
    }

    const html = document.documentElement;
    const setScrollLock = (locked: boolean) => {
      html.style.overflow = locked ? "hidden" : "";
      document.body.style.overflow = locked ? "hidden" : "";
    };
    window.scrollTo(0, 0);
    setScrollLock(true);

    const lineEls = root.querySelectorAll(".pre-line");
    const roleEl = root.querySelector(".pre-role");
    const ruleEl = root.querySelector(".pre-rule");

    gsap.set(lineEls, { yPercent: 115 });
    gsap.set(roleEl, { opacity: 0, y: 14 });
    gsap.set(ruleEl, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => {
        setScrollLock(false);
        hidePreloader();
      },
    });

    tl.to(lineEls, { yPercent: 0, duration: 1, stagger: 0.08 }, 0)
      .to(roleEl, { opacity: 1, y: 0, duration: 0.8 }, 0.1)
      .to(ruleEl, { scaleX: 1, duration: 1.1 }, 0.3)
      .to(
        barRef.current,
        { scaleX: 1, duration: 1.5, ease: "power2.inOut" },
        0.15,
      )
      .call(() => {
        rememberSeen();
        markAppReady();
      })
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
        [roleEl, ruleEl, barRef.current],
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
      setScrollLock(false);
    };
  }, []);

  if (readyOnMount) return null;

  return (
    <div
      ref={rootRef}
      data-preloader=""
      data-lenis-prevent=""
      aria-hidden="true"
      className="bg-fundo fixed inset-0 z-9999999 flex flex-col justify-center will-change-transform"
      style={{ backgroundImage: AURORA }}
    >
      <div className="shell">
        <p className="text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-bold tracking-[-0.03em]">
          <span className="block overflow-hidden">
            <span className="pre-line block">Esdras</span>
          </span>
          <span className="block overflow-hidden">
            <span className="pre-line text-secundaria block">Santos</span>
          </span>
        </p>

        <span className="pre-rule via-secundaria/60 mt-8 block h-px w-full max-w-sm bg-linear-to-r from-white/25 to-transparent" />

        <p className="pre-role text-principal/70 mt-6 text-sm">{t("Role")}</p>
      </div>

      <span className="absolute inset-x-0 bottom-0 block h-px overflow-hidden bg-white/10">
        <span
          ref={barRef}
          className="from-secundaria via-link to-linkhover absolute inset-0 origin-left scale-x-0 bg-linear-to-r"
        />
      </span>
    </div>
  );
}
