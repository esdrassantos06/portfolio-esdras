"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onAppReady } from "../motion/appReady";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "#bd5fff";
const ACCENT_BRIGHT = "#d589ff";
const MUTED = "#8a8a8a";
const INK = "#e0e0e0";
const RING_IDLE = "0 0 0 1px rgba(255,255,255,0.1)";
const RING_ACTIVE = "0 0 0 1px rgba(189,95,255,0.45)";

/**
 * Drives the scroll reveals and hover choreography for the About section.
 * Targets are resolved by class name inside the given root, so the markup can
 * live in separate components.
 */
export function useAboutMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const q = gsap.utils.selector(el);
    const mm = gsap.matchMedia();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!reduced.matches) {
      gsap.set(q(".about-heading"), { yPercent: 106 });
      gsap.set(q(".about-para, .about-panel"), { opacity: 0, y: 30 });
      gsap.set(q(".about-fact"), { opacity: 0, y: 14 });
      gsap.set(q(".about-stack-title"), { opacity: 0, y: 20 });
      gsap.set(q(".about-rule"), { scaleX: 0, transformOrigin: "left top" });
      gsap.set(q(".about-rule-fill, .about-fact-fill"), {
        scaleX: 0,
        transformOrigin: "left center",
      });
      gsap.set(q(".about-label"), { opacity: 0, x: -12 });
      gsap.set(q(".about-chip"), { opacity: 0, y: 20, scale: 0.92 });
      gsap.set(q(".about-glow"), { opacity: 0, scale: 0.55 });
    }

    const stop = onAppReady(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ctx = gsap.context(() => {
          gsap.to(".about-heading", {
            yPercent: 0,
            duration: 1.25,
            ease: "expo.out",
            scrollTrigger: {
              trigger: ".about-heading-mask",
              start: "top 88%",
              once: true,
            },
          });

          gsap
            .timeline({
              defaults: { ease: "expo.out" },
              scrollTrigger: {
                trigger: ".about-body",
                start: "top 84%",
                once: true,
              },
            })
            .to(".about-para", { opacity: 1, y: 0, duration: 1, stagger: 0.12 })
            .to(".about-panel", { opacity: 1, y: 0, duration: 1.1 }, 0.15)
            .to(
              ".about-fact",
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
              0.4,
            );

          gsap.to(".about-stack-title", {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "expo.out",
            scrollTrigger: {
              trigger: ".about-stack",
              start: "top 86%",
              once: true,
            },
          });

          gsap.utils.toArray<HTMLElement>(".about-group").forEach((group) => {
            gsap.to(group.querySelector(".about-rule"), {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: group,
                start: "top 95%",
                end: "top 55%",
                scrub: 0.4,
              },
            });

            gsap
              .timeline({
                defaults: { ease: "expo.out" },
                scrollTrigger: { trigger: group, start: "top 88%", once: true },
              })
              .to(group.querySelector(".about-label"), {
                opacity: 1,
                x: 0,
                duration: 0.7,
              })
              .to(
                group.querySelectorAll(".about-chip"),
                { opacity: 1, y: 0, scale: 1, duration: 0.85, stagger: 0.06 },
                0.1,
              );
          });

          gsap.to(".about-panel", {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.9,
            },
          });

          ScrollTrigger.refresh();
        }, el);

        return () => ctx.revert();
      });

      mm.add(
        "(prefers-reduced-motion: no-preference) and (hover: hover)",
        () => {
          const detach: Array<() => void> = [];

          const bind = (
            target: HTMLElement,
            enter: () => void,
            leave: () => void,
          ) => {
            target.addEventListener("pointerenter", enter);
            target.addEventListener("pointerleave", leave);
            detach.push(() => {
              target.removeEventListener("pointerenter", enter);
              target.removeEventListener("pointerleave", leave);
            });
          };

          const sweep = (
            fill: Element | null,
            to: number,
            duration: number,
          ) => {
            gsap.set(fill, { transformOrigin: "left center" });
            gsap.to(fill, {
              scaleX: to,
              duration,
              ease: "power3.out",
              overwrite: true,
            });
          };

          const groups = q<HTMLElement>(".about-group");

          groups.forEach((group) => {
            const fill = group.querySelector(".about-rule-fill");
            const label = group.querySelector(".about-label");
            const chips = group.querySelectorAll(".about-chip");
            const icons = group.querySelectorAll(".about-icon");
            const others = groups.filter((other) => other !== group);

            bind(
              group,
              () => {
                gsap.to(group, {
                  scale: 1.015,
                  duration: 0.7,
                  ease: "expo.out",
                  transformOrigin: "left center",
                });
                sweep(fill, 1, 0.75);
                gsap.to(label, {
                  color: ACCENT,
                  x: 6,
                  duration: 0.55,
                  ease: "expo.out",
                });
                gsap.to(chips, {
                  y: -8,
                  duration: 0.7,
                  stagger: 0.04,
                  ease: "expo.out",
                });
                gsap.to(icons, {
                  boxShadow: RING_ACTIVE,
                  duration: 0.6,
                  stagger: 0.04,
                  ease: "expo.out",
                });
                gsap.to(others, {
                  opacity: 0.4,
                  duration: 0.5,
                  ease: "expo.out",
                });
              },
              () => {
                gsap.to(group, { scale: 1, duration: 0.85, ease: "expo.out" });
                sweep(fill, 0, 0.7);
                gsap.to(label, {
                  color: MUTED,
                  x: 0,
                  duration: 0.6,
                  ease: "expo.out",
                });
                gsap.to(chips, {
                  y: 0,
                  duration: 0.85,
                  stagger: 0.03,
                  ease: "expo.out",
                });
                gsap.to(icons, {
                  boxShadow: RING_IDLE,
                  duration: 0.7,
                  ease: "expo.out",
                });
                gsap.to(others, {
                  opacity: 1,
                  duration: 0.6,
                  ease: "expo.out",
                });
              },
            );
          });

          const factRows = q<HTMLElement>(".about-fact");

          factRows.forEach((row) => {
            const fill = row.querySelector(".about-fact-fill");
            const label = row.querySelector(".about-fact-label");
            const value = row.querySelector(".about-fact-value");
            const others = factRows.filter((other) => other !== row);

            bind(
              row,
              () => {
                sweep(fill, 1, 0.7);
                gsap.to(label, {
                  color: ACCENT,
                  x: 5,
                  duration: 0.5,
                  ease: "expo.out",
                });
                gsap.to(value, { x: 5, duration: 0.55, ease: "expo.out" });
                gsap.to(others, {
                  opacity: 0.45,
                  duration: 0.45,
                  ease: "expo.out",
                });
              },
              () => {
                sweep(fill, 0, 0.65);
                gsap.to(label, {
                  color: MUTED,
                  x: 0,
                  duration: 0.55,
                  ease: "expo.out",
                });
                gsap.to(value, { x: 0, duration: 0.6, ease: "expo.out" });
                gsap.to(others, {
                  opacity: 1,
                  duration: 0.55,
                  ease: "expo.out",
                });
              },
            );
          });

          const chips = q<HTMLElement>(".about-chip");

          chips.forEach((chip) => {
            const icon = chip.querySelector(".about-icon");
            const glow = chip.querySelector(".about-glow");
            const name = chip.querySelector(".about-name");
            const siblings = chips.filter(
              (other) =>
                other !== chip &&
                chip.closest(".about-group") === other.closest(".about-group"),
            );

            bind(
              chip,
              () => {
                gsap.to(icon, {
                  scale: 1.18,
                  rotate: -7,
                  duration: 0.55,
                  ease: "expo.out",
                });
                gsap.to(glow, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.55,
                  ease: "expo.out",
                });
                gsap.to(name, {
                  x: 5,
                  color: ACCENT_BRIGHT,
                  duration: 0.45,
                  ease: "expo.out",
                });
                gsap.to(siblings, {
                  opacity: 0.32,
                  duration: 0.45,
                  ease: "expo.out",
                });
              },
              () => {
                gsap.to(icon, {
                  scale: 1,
                  rotate: 0,
                  duration: 0.75,
                  ease: "expo.out",
                });
                gsap.to(glow, {
                  opacity: 0,
                  scale: 0.55,
                  duration: 0.55,
                  ease: "expo.out",
                });
                gsap.to(name, {
                  x: 0,
                  color: INK,
                  duration: 0.55,
                  ease: "expo.out",
                });
                gsap.to(siblings, {
                  opacity: 1,
                  duration: 0.55,
                  ease: "expo.out",
                });
              },
            );
          });

          return () => detach.forEach((off) => off());
        },
      );
    });

    return () => {
      stop();
      mm.revert();
    };
  }, [rootRef]);
}
