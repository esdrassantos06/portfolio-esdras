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
  normalContent:
    | ReactNode
    | ((
        isHovered: boolean,
        setIsHovered: (value: boolean) => void,
      ) => ReactNode);
  width?: string;
  height?: string;
}

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
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const container = containerRef.current;
    container?.addEventListener("mousemove", setFromEvent);
    container?.addEventListener("mousedown", handleMouseDown);
    container?.addEventListener("mouseup", handleMouseUp);

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      container?.removeEventListener("mousemove", setFromEvent);
      container?.removeEventListener("mousedown", handleMouseDown);
      container?.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const size: number = isPressed && !isHovered ? 25 : isHovered ? 400 : 30;

  return (
    <div
      ref={containerRef}
      className={`cursor-container w-${width} h-${height} relative flex flex-col items-center justify-center select-none`}
    >
      <div className="normal relative">
        {typeof normalContent === "function"
          ? normalContent(isHovered, setIsHovered)
          : normalContent}
      </div>

      <motion.div
        style={{
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
            mousePosition.y - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          ease: "backOut",
          duration: 0.2,
          maskSize: { duration: 0.15, ease: "easeOut" },
          maskPosition: { duration: 0.1 },
        }}
        className={`cursor bg-secundaria pointer-events-none absolute inset-0`}
      >
        <div>{maskedContent}</div>
      </motion.div>
    </div>
  );
}
