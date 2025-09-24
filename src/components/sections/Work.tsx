import ShinyButton from "../ui/ShinyButton";
import ProjectsHome from "./ProjectsHome";
import ScrollAnimation from "../ui/ScrollAnimation";
import { getTranslations } from "next-intl/server";

export default async function Work() {
  const t = await getTranslations("Work");
  return (
    <main
      id="work"
      className="mx-auto my-20 flex min-h-screen w-3/4 items-center justify-center"
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div className="title-and-button mb-20 flex w-full flex-col items-center justify-between gap-4 self-start px-2 lg:flex-row md:gap-6">
          <ScrollAnimation delayIndex={0}>
            <h1 className="mt-2 text-center text-5xl font-bold sm:text-6xl">
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
