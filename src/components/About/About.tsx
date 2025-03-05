"use client";

import ScrollAnimation from "../ScrollAnimation";
import { useEffect, useState } from "react";
import Technologies from "../Technologies";
import "./aboutgradient.css";

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

      const interBubble =
        document.querySelector<HTMLDivElement>(".interactive");
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
      className="w-full min-h-screen h-fit gradient-bg flex justify-center items-center"
    >
      <div className="gradient-container">
        <div className="interactive"></div>
      </div>

      <div className="flex w-full relative z-50 px-40 flex-col items-center justify-center">
        <div className="title mb-18 w-full flex flex-col self-start md:items-start items-center justify-center space-y-2">
          <ScrollAnimation delayIndex={0}>
            <h1 className="font-bold mb-6 text-center text-6xl">
              Current technologies
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={1} className="w-full flex items-center max-md:justify-center max-md:text-center">
            <span className="text-[15px] text-principal/70 w-180 font-satoshi">
              I&apos;m proficient in a range of modern technologies that empower
              me to build highly functional solutions. These are some of my main
              technologies.
            </span>
          </ScrollAnimation>
        </div>
        <Technologies />
      </div>
    </main>
  );
}
