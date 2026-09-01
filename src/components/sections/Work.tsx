import ShinyButton from "../ui/ShinyButton";
import ProjectsHome from "./ProjectsHome";
import { FadeIn } from "../ui/ScrollAnimation";
import { getTranslations } from "next-intl/server";

export default async function Work() {
  const t = await getTranslations("Work");
  return (
    <section
      className="shell flex min-h-screen items-center justify-center pt-20 sm:py-20"
      aria-label="Work portfolio section"
    >
      <div className="flex w-full flex-col items-center justify-center py-12 sm:py-20">
        <header className="title-and-button mb-12 flex w-full flex-col items-center justify-between gap-4 self-start md:gap-6 lg:mb-20 lg:flex-row">
          <FadeIn direction="up" once>
            <h2 className="text-center text-4xl font-bold sm:mb-6 sm:text-5xl lg:text-6xl">
              {t("title")}
            </h2>
          </FadeIn>
          <FadeIn direction="up" once>
            <ShinyButton
              text={t("shinyText")}
              link="/projects"
              ariaLabel={t("ariaLabel")}
            />
          </FadeIn>
        </header>
        <ProjectsHome />
      </div>
    </section>
  );
}
