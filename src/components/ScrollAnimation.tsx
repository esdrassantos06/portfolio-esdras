"use client";

import { motion } from "motion/react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delayIndex?: number;
}
// Sempre que for inserir o delay index, colocar 0 como primeiro valor, mais por legibilidade do código, pq é o valor padrão

export default function ScrollAnimation({
  children,
  className,
  delayIndex = 0,
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delayIndex * 0.3 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
