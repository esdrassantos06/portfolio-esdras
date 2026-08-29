"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { onAppReady } from "./appReady";

interface HeroDiveProps {
  children: ReactNode;
  className?: string;
}

export default function HeroDive({ children, className }: HeroDiveProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    const items = el.querySelectorAll(".hero-dive");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reduced.matches) {
      gsap.set(items, { yPercent: 40, opacity: 0 });
    }

    const stop = onAppReady(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(items, {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out",
          clearProps: "all",
        });
      });
    });

    return () => {
      stop();
      mm.revert();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
