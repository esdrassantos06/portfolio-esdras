"use client";

import { useEffect, useState } from "react";
import Technologies from "./Technologies";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== "undefined") {
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      const interBubble = document.querySelector<HTMLDivElement>(".interactive");
      if (interBubble) {
        function move() {
          if (interBubble) {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;

            interBubble.style.transform = `translate(${Math.round(
              curX
            )}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
          }
        }

        const handleMouseMove = (event: MouseEvent) => {
          tgX = event.clientX;
          tgY = event.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        move();

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }
  }, [mounted]);

  return (
    <main
      id="about"
      className="w-full min-h-screen gradient-bg flex justify-center items-center"
    >
      <div className="gradient-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>

      <div className="flex w-[90%] relative z-50 px-40 flex-col items-center justify-center">
        <div className="title mb-18 flex flex-col self-start items-start justify-center space-y-2">
          <h1 className="font-bold mb-6 text-center text-6xl">
            Current technologies
          </h1>
          <span className="text-[15px] text-principal/70 w-180 font-satoshi">
            I&apos;m proficient in a range of modern technologies that empower
            me to build highly functional solutions. These are some of my main
            technologies.
          </span>
        </div>
        <Technologies />
      </div>
    </main>
  );
}