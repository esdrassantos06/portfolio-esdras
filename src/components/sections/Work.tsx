import ShinyButton from "../ui/ShinyButton";
import ProjectsHome from "./ProjectsHome";
import ScrollAnimation from "../ui/ScrollAnimation";
import { getTranslations } from "next-intl/server";

export default async function Work() {
  const t = await getTranslations("Work");
  return (
    <main
      id="work"
      className="mb-20 flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex w-full flex-col items-center justify-center px-5 lg:mx-auto">
        <div className="title-and-button mb-20 flex w-full flex-col items-center justify-around gap-10 self-start md:flex-row">
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
