"use client";

import ShinyButton from "./ShinyButton";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function Footer() {
  return (
    <ScrollAnimation delayIndex={0}>
      <footer
        id="contact"
        className="w-[65%] relative mb-8 mx-auto bottom-4 rounded-2xl flex flex-col items-center justify-between border-gray-200/20 border-1 h-120"
      >
        <div className="first-part-footer p-8 pt-10 flex flex-col w-full items-start justify-start gap-8">
          <ScrollAnimation delayIndex={1}>
            <h1 className="text-5xl w-160 font-bold">
              Like what you see? Reach out{" "}
              <a
                href="mailto:esdrasirion1@gmail.com"
                className="underline decoration-2 hover:text-blue-800 underline-offset-8 text-blue-600 transition-all duration-300"
              >
                via email
              </a>{" "}
              to collaborate!
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={2}>
            <ShinyButton
              showArrow={false}
              text="Schedule call"
              link="mailto:esdrasirion1@gmail.com"
            />
          </ScrollAnimation>
        </div>

        <div className="border-t w-full border-gray-200/20"></div>

        <div className="second-part-footer p-8 flex justify-between w-full">
          <div className="name-and-copy flex flex-col gap-2">
            <ScrollAnimation delayIndex={3}>
              <h1 className="text-xl font-bold">Esdras Santos</h1>
              <span className="text-principal/70 text-base">
                © {new Date().getFullYear()} | All rights reserved.
              </span>
            </ScrollAnimation>
          </div>

          <nav className="footer-navbar flex justify-between w-1/3">
            <div className="navigate">
              <ScrollAnimation delayIndex={4}>
                <h1 className="text-principal text-xl font-semibold">
                  Navigate
                </h1>
              </ScrollAnimation>
              <ul className="flex flex-col mt-1 gap-2">
                <ScrollAnimation delayIndex={4}>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="Home" href={"/#home"}>
                      Home
                    </Link>
                  </li>
                </ScrollAnimation>
                <ScrollAnimation delayIndex={5}>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="About Me" href={"/#about"}>
                      About
                    </Link>
                  </li>
                </ScrollAnimation>
                <ScrollAnimation delayIndex={6}>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="My Work" href={"/#work"}>
                      Work
                    </Link>
                  </li>
                </ScrollAnimation>
                <ScrollAnimation delayIndex={7}>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="Contact" href={"/#contact"}>
                      Contact
                    </Link>
                  </li>
                </ScrollAnimation>
              </ul>
            </div>

            <div className="projects">
              <ScrollAnimation delayIndex={5}>
                <h1 className="text-principal text-xl font-semibold">
                  Projects
                </h1>
              </ScrollAnimation>
              <ul className="flex flex-col mt-1 gap-2">
                <ScrollAnimation delayIndex={5}>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link
                      aria-label="Project Nova Horizonte"
                      href={"/projects/novahorizonte"}
                    >
                      Nova Horizonte
                    </Link>
                  </li>
                </ScrollAnimation>
                <ScrollAnimation delayIndex={6}>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="Coming Soon" href={"/"}>
                      Coming Soon...
                    </Link>
                  </li>
                </ScrollAnimation>
                <ScrollAnimation delayIndex={7}>
                  <li className="hover:text-principal font-light text-principal/70">
                    <Link aria-label="Coming Soon" href={"/"}>
                      Coming Soon...
                    </Link>
                  </li>
                </ScrollAnimation>
              </ul>
            </div>

            <div className="socials">
              <ScrollAnimation delayIndex={6}>
                <h1 className="text-principal text-xl font-semibold">
                  Socials
                </h1>
              </ScrollAnimation>
              <ul className="flex flex-col mt-1 gap-2">
                <ScrollAnimation delayIndex={6}>
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
                </ScrollAnimation>
                <ScrollAnimation delayIndex={7}>
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
                </ScrollAnimation>
              </ul>
            </div>
          </nav>
        </div>
      </footer>
    </ScrollAnimation>
  );
}
