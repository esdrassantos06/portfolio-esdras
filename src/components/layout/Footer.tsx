"use client";

import ShinyButton from "../ui/ShinyButton";
import { Link } from "@/i18n/navigation";
import ScrollAnimation from "../ui/ScrollAnimation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="relative bottom-4 mx-auto mb-8 flex h-fit w-3/4 flex-col items-center justify-between overflow-hidden rounded-2xl border-1 border-gray-200/20">
      <footer id="contact" className="h-fit w-full">
        <div className="first-part-footer flex w-full flex-col items-start justify-start gap-8 p-8 pt-10">
          <ScrollAnimation delayIndex={1} initialY={10}>
            <h1 className="w-fit max-w-full text-4xl font-bold md:text-5xl lg:w-160">
              {t("like")}{" "}
              <a
                href="mailto:esdrasirion1@gmail.com"
                className="text-blue-600 underline decoration-2 transition-all duration-300 hover:text-blue-800 max-md:text-center"
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

        <div className="w-full border-t border-gray-200/20" />

        <div className="second-part-footer flex w-full flex-col justify-between gap-10 p-8 md:flex-row">
          <ScrollAnimation delayIndex={3} initialY={10}>
            <div className="name-and-copy flex flex-col gap-2">
              <h1 className="text-xl font-bold">Esdras Santos</h1>
              <span className="text-principal/70 text-base">
                © {new Date().getFullYear()} | {t("rights")}
              </span>
            </div>
          </ScrollAnimation>

          <nav className="footer-navbar flex flex-wrap justify-between gap-6 md:w-1/3 md:flex-nowrap md:gap-2">
            <ScrollAnimation delayIndex={4} initialY={10}>
              <div className="navigate">
                <h1 className="text-principal text-xl font-semibold">
                  {t("footerNav.title1")}
                </h1>
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
                <ul className="mt-1 flex flex-col gap-2">
                  <li className="hover:text-principal text-principal/70 font-light">
                    <Link
                      aria-label="Project Nova Horizonte"
                      href={"/projects/novahorizonte"}
                    >
                      Nova Horizonte
                    </Link>
                  </li>
                  <li className="hover:text-principal text-principal/70 font-light">
                    <Link aria-label="Tarevity" href={"/projects/tarevity"}>
                      Tarevity
                    </Link>
                  </li>
                  <li className="hover:text-principal text-principal/70 font-light">
                    <Link
                      aria-label="Phantom Code"
                      href={"/projects/phantomcode"}
                    >
                      Phantom Code
                    </Link>
                  </li>
                  <li className="hover:text-principal text-principal/70 font-light">
                    <Link aria-label="Zipway" href={"/projects/zipway"}>
                      Zipway
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
            </ScrollAnimation>
          </nav>
        </div>
      </footer>
    </div>
  );
}
