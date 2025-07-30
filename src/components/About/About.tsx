"use client";

import ScrollAnimation from "../ui/ScrollAnimation";
import { useEffect, useState } from "react";
import Technologies from "../sections/Technologies";
import "./aboutgradient.css";
import { useTranslations } from "next-intl";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interBubble = document.querySelector(".interactive");
    const aboutSection = document.getElementById("about");
    if (!interBubble || !aboutSection) return;

    if (mounted && typeof window !== "undefined") {
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;
      let animationFrameId: number;

      const interBubble =
        document.querySelector<HTMLDivElement>(".interactive");
      const aboutSection = document.getElementById("about");

      let isActive = false;

      if (interBubble && aboutSection) {
        const move = () => {
          if (!isActive) return;

          curX += (tgX - curX) / 20;
          curY += (tgY - curY) / 20;

          interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
          animationFrameId = requestAnimationFrame(move);
        };

        const handleMouseMove = (event: MouseEvent) => {
          if (!isActive) return;

          const rect = aboutSection.getBoundingClientRect();
          tgX = event.clientX - rect.left;
          tgY = event.clientY - rect.top;
        };

        const handleMouseEnter = () => {
          isActive = true;
          move();
        };

        const handleMouseLeave = () => {
          isActive = false;
          cancelAnimationFrame(animationFrameId);
        };

        aboutSection.addEventListener("mousemove", handleMouseMove);
        aboutSection.addEventListener("mouseenter", handleMouseEnter);
        aboutSection.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          aboutSection.removeEventListener("mousemove", handleMouseMove);
          aboutSection.removeEventListener("mouseenter", handleMouseEnter);
          aboutSection.removeEventListener("mouseleave", handleMouseLeave);
          cancelAnimationFrame(animationFrameId);
        };
      }
    }
  }, [mounted]);

  const t = useTranslations("About");

  return (
    <main
      id="about"
      className="gradient-bg flex h-fit min-h-screen w-full items-center justify-center py-10 sm:py-20"
    >
      <div className="gradient-container">
        <div className="interactive max-md:hidden" />
      </div>

      <section className="relative z-50 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-4 sm:px-10">
        <div className="title mb-10 flex w-full flex-col items-center justify-center space-y-2 self-start sm:mb-18">
          <ScrollAnimation delayIndex={0}>
            <h1 className="mb-4 text-center text-4xl font-bold sm:mb-6 sm:text-5xl lg:text-6xl">
              {t("currentTech")}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation
            delayIndex={1}
            className="flex w-full justify-center"
          >
            <p className="text-principal/70 font-satoshi max-w-[600px] text-center text-sm sm:text-base">
              {t("description")}
            </p>
          </ScrollAnimation>
        </div>
        <Technologies />
      </section>
    </main>
  );
}
