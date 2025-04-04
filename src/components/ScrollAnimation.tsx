"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delayIndex?: number;
  initialY?: number;
}
// Sempre que for inserir o delay index, colocar 0 como primeiro valor, mais por legibilidade do código, pq é o valor padrão

export default function ScrollAnimation({
  children,
  className,
  delayIndex = 0,
  initialY = 100,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: initialY }}
      transition={{ duration: 0.5, delay: delayIndex * 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
