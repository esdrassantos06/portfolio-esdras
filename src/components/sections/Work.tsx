"use client";

import ShinyButton from "../ui/ShinyButton";
import ProjectsHome from "./ProjectsHome";
import ScrollAnimation from "../ui/ScrollAnimation";
import { useTranslations } from "next-intl";

export default function Work() {
  const t = useTranslations("Work");
  return (
    <main
      id="work"
      className="w-full min-h-screen mb-20 flex justify-center items-center"
    >
      <div className="flex w-full lg:mx-auto px-5 flex-col items-center justify-center">
        <div className="title-and-button mb-20 w-full flex flex-col gap-10 md:flex-row self-start items-center justify-around">
          <ScrollAnimation delayIndex={0}>
            <h1 className="font-bold text-center text-5xl sm:text-6xl">
              {t("title")}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={1}>
            <ShinyButton
              text={t("shinyText")}
              link="https://github.com/esdrassantos06"
              rel="noopener noreferrer"
              target="_blank"
              ariaLabel={t("ariaLabel")}
            />
          </ScrollAnimation>
        </div>
        <ProjectsHome />
      </div>
    </main>
  );
}
