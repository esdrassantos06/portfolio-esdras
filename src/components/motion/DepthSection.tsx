"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onAppReady } from "./appReady";

gsap.registerPlugin(ScrollTrigger);

interface DepthSectionProps {
  children: ReactNode;
  numeral?: string;
  className?: string;
  anchor?: string;
}

export default function DepthSection({
  children,
  numeral,
  className,
  anchor,
}: DepthSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const numeralRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    const stop = onAppReady(() => {
      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
        () => {
          gsap.set(el, {
            transformPerspective: 1400,
            transformOrigin: "50% 100%",
          });

          gsap.fromTo(
            el,
            { rotateX: 9, y: 90, z: -180 },
            {
              rotateX: 0,
              y: 0,
              z: 0,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "top 55%",
                scrub: 0.8,
              },
            },
          );

          if (numeralRef.current) {
            gsap.fromTo(
              numeralRef.current,
              { opacity: 0, y: 70, letterSpacing: "0.3em" },
              {
                opacity: 1,
                y: 0,
                letterSpacing: "0em",
                ease: "none",
                force3D: true,
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  end: "top 55%",
                  scrub: 0.6,
                },
              },
            );
          }
          ScrollTrigger.refresh();
        },
      );

      mm.add(
        "(prefers-reduced-motion: no-preference) and (max-width: 1023px)",
        () => {
          gsap.fromTo(
            el,
            { y: 48, opacity: 0.4 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "top 65%",
                scrub: 0.5,
              },
            },
          );
          ScrollTrigger.refresh();
        },
      );
    });

    return () => {
      stop();
      mm.revert();
    };
  }, []);

  return (
    <div id={anchor} className="relative">
      <div
        ref={ref}
        className={`relative will-change-transform ${className ?? ""}`}
      >
        {numeral && (
          <span
            ref={numeralRef}
            aria-hidden="true"
            className="text-principal/25 pointer-events-none absolute top-8 left-2 z-0 hidden font-mono text-[6rem] leading-none font-bold select-none lg:block xl:text-[7rem]"
          >
            {numeral}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}
