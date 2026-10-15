"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onAppReady } from "./appReady";

gsap.registerPlugin(ScrollTrigger);

interface DepthSectionProps {
  children: ReactNode;
  className?: string;
  anchor?: string;
}

export default function DepthSection({
  children,
  className,
  anchor,
}: DepthSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

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
        {children}
      </div>
    </div>
  );
}
