import ShinyButton from "../ui/ShinyButton";
import ProjectsHome from "./ProjectsHome";
import ScrollAnimation from "../ui/ScrollAnimation";
import { getTranslations } from "next-intl/server";

export default async function Work() {
  const t = await getTranslations("Work");
  return (
    <main
      id="work"
      className="mx-auto flex min-h-screen w-3/4 items-center justify-center pt-8 sm:py-20"
    >
      <div className="flex w-full flex-col items-center justify-center py-20">
        <div className="title-and-button mb-20 flex w-full flex-col items-center justify-between gap-4 self-start px-2 md:gap-6 lg:flex-row">
          <ScrollAnimation delayIndex={0}>
            <h1 className="text-center text-4xl font-bold sm:mb-6 sm:text-5xl lg:text-6xl">
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
