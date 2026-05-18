"use client";

import "./maskedcursor.css";
import { useState, useEffect, ReactNode, useRef } from "react";

interface MaskedCursorProps {
  maskedContent: ReactNode;
  normalContent:
    | ReactNode
    | ((
        isHovered: boolean,
        setIsHovered: (value: boolean) => void,
      ) => ReactNode);
  className?: string;
}

export default function MaskedCursor({
  maskedContent,
  normalContent,
  className = "h-screen w-full",
}: MaskedCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const size = isPressed && !isHovered ? 25 : isHovered ? 400 : 30;

  useEffect(() => {
    const container = containerRef.current;
    const mask = maskRef.current;
    if (!container || !mask) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const tick = () => {
      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * 0.25;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * 0.25;
      const x = Math.round(currentPos.current.x - size / 2);
      const y = Math.round(currentPos.current.y - size / 2);
      mask.style.setProperty("--mask-x", `${x}px`);
      mask.style.setProperty("--mask-y", `${y}px`);
      mask.style.setProperty("--mask-size", `${size}px`);
      rafId.current = requestAnimationFrame(tick);
    };

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetPos.current.x = e.clientX - rect.left;
      targetPos.current.y = e.clientY - rect.top;
    };

    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    container.addEventListener("mousemove", handleMove, { passive: true });
    container.addEventListener("mousedown", handleDown);
    container.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseup", handleUp);

    rafId.current = requestAnimationFrame(tick);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mousedown", handleDown);
      container.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseup", handleUp);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className={`cursor-container relative flex flex-col items-center justify-center select-none ${className}`}
    >
      <div className="normal relative">
        {typeof normalContent === "function"
          ? normalContent(isHovered, setIsHovered)
          : normalContent}
      </div>

      <div
        ref={maskRef}
        aria-hidden="true"
        className="cursor bg-secundaria pointer-events-none absolute inset-0"
      >
        <div>{maskedContent}</div>
      </div>
    </div>
  );
}
