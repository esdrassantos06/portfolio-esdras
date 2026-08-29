"use client";

import { motion, useInView, useReducedMotion, Variants } from "motion/react";
import * as React from "react";
import { onAppReady } from "../motion/appReady";

export function FadeIn({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
  once = false,
}: {
  direction: "up" | "down";
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  once?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
    hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
  };

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });
  const [reached, setReached] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        setReached(true);
        window.removeEventListener("scroll", check);
      }
    };

    const stop = onAppReady(() => {
      check();
      window.addEventListener("scroll", check, { passive: true });
    });

    return () => {
      stop();
      window.removeEventListener("scroll", check);
    };
  }, []);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView || reached ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN as Variants} className="h-full">
            {child}
          </motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
}
