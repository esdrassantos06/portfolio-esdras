"use client";

import CvDownload from "../CvDownload";
import dynamic from "next/dynamic";
import ShinyButton from "../ui/ShinyButton";
import Icons from "../icons/Icons";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { onAppReady } from "../motion/appReady";

const HeroScene = dynamic(() => import("../ui/HeroScene"), { ssr: false });

export default function HomeComponent() {
  const t = useTranslations("HomeComponent");
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    const lineEls = el.querySelectorAll(".hero-line");
    const eyebrowEl = el.querySelector(".hero-eyebrow");
    const ruleEl = el.querySelector(".hero-rule");
    const fadeEls = el.querySelectorAll(".hero-fade");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reduced.matches) {
      gsap.set(lineEls, { yPercent: 115 });
      gsap.set(eyebrowEl, { opacity: 0, y: 14 });
      gsap.set(ruleEl, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(fadeEls, { opacity: 0, y: 22 });
    }

    const stop = onAppReady(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.to(lineEls, {
          yPercent: 0,
          duration: 1.25,
          stagger: 0.09,
        })
          .to(eyebrowEl, { opacity: 1, y: 0, duration: 0.9 }, 0.15)
          .to(ruleEl, { scaleX: 1, duration: 1.1 }, 0.5)
          .to(fadeEls, { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 0.65);

        return () => tl.kill();
      });

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
        () => {
          const loop = gsap.timeline({ repeat: -1, yoyo: true, delay: 2.4 });

          loop
            .to(
              lineEls,
              {
                y: -7,
                duration: 3.2,
                ease: "sine.inOut",
                stagger: 0.35,
              },
              0,
            )
            .to(
              ruleEl,
              {
                scaleX: 0.82,
                opacity: 0.55,
                duration: 3.2,
                ease: "sine.inOut",
              },
              0,
            );

          const accent = el.querySelector<HTMLElement>(".hero-accent");
          if (accent) {
            loop.to(
              accent,
              {
                color: "#d589ff",
                textShadow: "0 0 28px rgba(189,95,255,0.35)",
                duration: 3.2,
                ease: "sine.inOut",
              },
              0,
            );
          }

          return () => loop.kill();
        },
      );
    });

    return () => {
      stop();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      aria-label="Home section"
      className="relative z-10 flex min-h-screen w-full items-center pt-32 pb-16 sm:pt-24"
    >
      <div className="shell grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-8">
        <header className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="hero-eyebrow text-principal/70 font-mono text-xs tracking-[0.25em] uppercase">
            {t("based")}
          </p>

          <h1 className="mt-6 text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-bold tracking-[-0.03em] text-balance">
            <span className="block overflow-hidden">
              <span className="hero-line block">Full Stack</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line hero-accent text-secundaria block">
                Developer
              </span>
            </span>
          </h1>

          <div
            aria-hidden="true"
            className="hero-rule via-secundaria/60 mt-8 h-px w-full max-w-sm bg-linear-to-r from-white/25 to-transparent"
          />

          <p className="hero-fade text-principal/80 mt-8 max-w-lg text-lg text-pretty">
            {t("description")}
          </p>

          <nav
            aria-label="Main navigation actions"
            className="hero-fade mt-10 flex flex-col items-center gap-6 lg:items-start"
          >
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <ShinyButton text={t("shinyWork")} link="#work" />
              <CvDownload />
            </div>
            <div aria-label="Social media links">
              <Icons />
            </div>
          </nav>
        </header>

        <div className="hero-fade relative order-last h-[38vh] max-h-96 min-h-56 w-full lg:order-0 lg:mr-[-13vw] lg:h-[80vh] lg:max-h-none">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
