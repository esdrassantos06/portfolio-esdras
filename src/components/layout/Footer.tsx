"use client";

import ShinyButton from "../ui/ShinyButton";
import { Link } from "@/i18n/navigation";
import ScrollAnimation from "../ui/ScrollAnimation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="w-[70%] relative mb-8 mx-auto bottom-4 rounded-2xl flex flex-col items-center justify-between border-gray-200/20 border-1 h-fit overflow-hidden">
      <footer id="contact" className="w-full h-fit">
        <div className="first-part-footer p-8 pt-10 flex flex-col w-full items-start justify-start gap-8">
          <ScrollAnimation delayIndex={1} initialY={10}>
            <h1 className="text-4xl md:text-5xl max-w-full w-fit lg:w-160 font-bold">
              {t("like")}{" "}
              <a
                href="mailto:esdrasirion1@gmail.com"
                className="underline decoration-2 max-md:text-center hover:text-blue-800 underline-offset-8 text-blue-600 transition-all duration-300"
              >
                {t("viaEmail")}
              </a>{" "}
              {t("toColabor")}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={2} initialY={10}>
            <ShinyButton
              showArrow={false}
              text={t("schedule")}
              link="mailto:esdrasirion1@gmail.com"
            />
          </ScrollAnimation>
        </div>

        <div className="border-t w-full border-gray-200/20" />

        <div className="second-part-footer p-8 flex md:flex-row flex-col gap-10 justify-between w-full">
          <ScrollAnimation delayIndex={3} initialY={10}>
            <div className="name-and-copy flex flex-col gap-2">
              <h1 className="text-xl font-bold">Esdras Santos</h1>
              <span className="text-principal/70 text-base">
                © {new Date().getFullYear()} | {t("rights")}
              </span>
            </div>
          </ScrollAnimation>

          <nav className="footer-navbar flex md:flex-nowrap flex-wrap justify-between gap-6 md:gap-2 md:w-1/3">
            <ScrollAnimation delayIndex={4} initialY={10}>
              <div className="navigate">
                <h1 className="text-principal text-xl font-semibold">
                  {t("footerNav.title1")}
                </h1>
                <ul className="flex flex-col mt-1 gap-2">
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="Home" href={"/#home"}>
                      {t("footerNav.home")}
                    </Link>
                  </li>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="About Me" href={"/#about"}>
                      {t("footerNav.about")}
                    </Link>
                  </li>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="My Work" href={"/#work"}>
                      {t("footerNav.work")}
                    </Link>
                  </li>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="Contact" href={"/#contact"}>
                      {t("footerNav.contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delayIndex={5} initialY={10}>
              <div className="projects">
                <h1 className="text-principal text-xl font-semibold">
                  {t("footerNav.title2")}
                </h1>
                <ul className="flex flex-col mt-1 gap-2">
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link
                      aria-label="Project Nova Horizonte"
                      href={"/projects/novahorizonte"}
                    >
                      Nova Horizonte
                    </Link>
                  </li>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="Tarevity" href={"/projects/tarevity"}>
                      Tarevity
                    </Link>
                  </li>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link
                      aria-label="Phantom Code"
                      href={"/projects/phantomcode"}
                    >
                      Phantom Code
                    </Link>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delayIndex={6} initialY={10}>
              <div className="socials">
                <h1 className="text-principal text-xl font-semibold">
                  {t("footerNav.title3")}
                </h1>
                <ul className="flex flex-col mt-1 gap-2">
                  <li className="hover:text-principal font-light text-principal/70">
                    <a
                      rel="noopener noreferrer"
                      aria-label="Linkedin"
                      target="_blank"
                      href="https://www.linkedin.com/in/esdrassantos06/"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="hover:text-principal font-light text-principal/70">
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
            </ScrollAnimation>
          </nav>
        </div>
      </footer>
    </div>
  );
}
