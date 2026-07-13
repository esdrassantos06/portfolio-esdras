import ShinyButton from "../ui/ShinyButton";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "../ui/ScrollAnimation";
import { getTranslations } from "next-intl/server";
import { projetos } from "@/data/projects";

const footerProjectSlugs = ["jweb", "pcbyte", "phantomcode"] as const;
export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <div className="relative bottom-4 mx-auto mb-8 flex h-fit w-3/4 flex-col items-center justify-between overflow-hidden rounded-2xl border border-gray-200/20">
      <footer id="contact" className="h-fit w-full">
        <div className="first-part-footer flex w-full flex-col items-start justify-start gap-8 p-8 pt-10">
          <FadeIn
            direction="up"
            className="flex flex-col gap-6"
            once
            staggerChildren={0.1}
          >
            <h2 className="w-fit max-w-full text-4xl font-bold md:text-5xl lg:w-160">
              {t("like")}{" "}
              <Link
                href="mailto:esdrasirion1@gmail.com"
                className="focus-visible:outline-principal text-link hover:text-linkhover underline decoration-2 underline-offset-4 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 max-md:text-center"
              >
                {t("viaEmail")}
              </Link>{" "}
              {t("toColabor")}
            </h2>
            <ShinyButton
              showArrow={false}
              text={t("schedule")}
              link="/contact"
            />
          </FadeIn>
        </div>

        <div className="w-full border-t border-gray-200/20" />

        <div className="second-part-footer flex w-full flex-col justify-between gap-10 p-8 md:flex-row">
          <FadeIn direction="up" once>
            <div className="name-and-copy flex flex-col gap-2">
              <h3 className="text-xl font-bold">Esdras Santos</h3>
              <p className="text-principal/70 text-base">
                © {new Date().getFullYear()} | {t("rights")}
              </p>
            </div>
          </FadeIn>

          <nav className="footer-navbar flex flex-wrap justify-between gap-6 md:w-1/3 md:flex-nowrap md:gap-2">
            <FadeIn direction="up" once>
              <div className="navigate">
                <h3 className="text-principal text-xl font-semibold">
                  {t("footerNav.title1")}
                </h3>
                <ul className="mt-1 flex flex-col gap-2">
                  <li className="hover:text-principal text-principal/70 font-light">
                    <Link aria-label="Home" href={"/#home"}>
                      {t("footerNav.home")}
                    </Link>
                  </li>
                  <li className="hover:text-principal text-principal/70 font-light">
                    <Link aria-label="About Me" href={"/#about"}>
                      {t("footerNav.about")}
                    </Link>
                  </li>
                  <li className="hover:text-principal text-principal/70 font-light">
                    <Link aria-label="My Work" href={"/#work"}>
                      {t("footerNav.work")}
                    </Link>
                  </li>
                  <li className="hover:text-principal text-principal/70 font-light">
                    <Link aria-label="Contact" href={"/contact"}>
                      {t("footerNav.contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" once>
              <div className="projects">
                <h3 className="text-principal text-xl font-semibold">
                  {t("footerNav.title2")}
                </h3>
                <ul className="mt-1 flex flex-col gap-2">
                  {footerProjectSlugs.map((slug) => {
                    const projeto = projetos[slug];
                    if (!projeto) return null;
                    return (
                      <li
                        key={projeto.slug}
                        className="hover:text-principal text-principal/70 font-light"
                      >
                        <Link
                          aria-label={projeto.name}
                          href={`/projects/${projeto.slug}`}
                        >
                          {projeto.name}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="hover:text-principal text-principal/70 font-light">
                    <Link
                      aria-label={t("footerNav.allProjects")}
                      href="/projects"
                    >
                      {t("footerNav.allProjects")}
                    </Link>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" once>
              <div className="socials">
                <h3 className="text-principal text-xl font-semibold">
                  {t("footerNav.title3")}
                </h3>
                <ul className="mt-1 flex flex-col gap-2">
                  <li className="hover:text-principal text-principal/70 font-light">
                    <a
                      rel="noopener noreferrer"
                      aria-label="Linkedin"
                      target="_blank"
                      href="https://www.linkedin.com/in/esdrassantos06/"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="hover:text-principal text-principal/70 font-light">
                    <a
                      href="https://github.com/esdrassantos06"
                      aria-label="Github"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </nav>
        </div>
      </footer>
    </div>
  );
}
