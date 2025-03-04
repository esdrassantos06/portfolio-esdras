"use client";

import "./maskedcursor.css";
import { useState, useEffect, ReactNode, useRef } from "react";
import { motion } from "motion/react";

interface MousePosition {
  x: number;
  y: number;
}

interface MaskedCursorProps {
  maskedContent: ReactNode;
  normalContent: ReactNode | ((isHovered: boolean, setIsHovered: (value: boolean) => void) => ReactNode);
  width?: string;
  height?: string;
}

// Use Tailwind values for width and height

export default function MaskedCursor({
  maskedContent,
  normalContent,
  width,
  height,
}: MaskedCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      // Obter as coordenadas relativas ao container
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };
    
    const container = containerRef.current;
    container?.addEventListener("mousemove", setFromEvent);
    return () => {
      container?.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const size: number = isHovered ? 400 : 50;

  return (
    <div 
      ref={containerRef}
      className={`cursor-container w-${width} h-${height} select-none flex flex-col items-center justify-center relative`}
    >
      <motion.div
        animate={{
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
            mousePosition.y - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ ease: "backOut"}}
        className="cursor pointer-events-none z-11 bg-secundaria absolute inset-0"
      >
        <div>{maskedContent}</div>
      </motion.div>

      <div className="normal relative z-20">
        {typeof normalContent === "function" 
          ? normalContent(isHovered, setIsHovered) 
          : normalContent}
      </div>
    </div>
  );
}