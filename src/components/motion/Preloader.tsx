"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { isAppReady, markAppReady } from "./appReady";

export default function Preloader() {
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

    const progress = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        unlock();
        setGone(true);
        markAppReady();
      },
    });

    tl.to(progress, {
      value: 100,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => {
        setCount(Math.round(progress.value));
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${progress.value / 100})`;
        }
      },
    })
      .to(rootRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .set(rootRef.current, { pointerEvents: "none" });

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
      className="bg-fundo fixed inset-0 z-9999999 flex flex-col items-center justify-center gap-6"
    >
      <span className="text-principal pointer-events-none font-mono text-6xl font-bold tabular-nums select-none sm:text-8xl">
        {String(count).padStart(3, "0")}
      </span>
      <span className="relative block h-px w-48 overflow-hidden bg-white/15">
        <span
          ref={barRef}
          className="bg-secundaria absolute inset-0 origin-left scale-x-0"
        />
      </span>
    </div>
  );
}
