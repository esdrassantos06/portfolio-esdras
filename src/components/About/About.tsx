"use client";

import ScrollAnimation from "../ui/ScrollAnimation";
import { useEffect, useState } from "react";
import Technologies from "../sections/Technologies";
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
      className="w-full min-h-screen h-fit gradient-bg flex justify-center items-center py-10 sm:py-20"
    >
      <div className="gradient-container">
        <div className="interactive max-md:hidden"></div>
      </div>

      <section className="flex mx-auto relative z-50 px-4 sm:px-10 md:px-20 lg:px-40 flex-col items-center justify-center w-full max-w-[1440px]">
        <div className="title mb-10 sm:mb-18 flex flex-col self-start items-center justify-center space-y-2 w-full">
          <ScrollAnimation delayIndex={0}>
            <h1 className="font-bold mb-4 sm:mb-6 text-center text-4xl sm:text-5xl lg:text-6xl">
              Current technologies
            </h1>
          </ScrollAnimation>
          <ScrollAnimation
            delayIndex={1}
            className="w-full flex justify-center"
          >
            <p className="text-sm sm:text-base text-principal/70 max-w-[600px] font-satoshi text-center">
              I&apos;m proficient in a range of modern technologies that empower
              me to build highly functional solutions. These are some of my main
              technologies.
            </p>
          </ScrollAnimation>
        </div>
        <Technologies />
      </section>
    </main>
  );
}
