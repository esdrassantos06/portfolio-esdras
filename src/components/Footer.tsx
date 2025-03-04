"use client";

import ShinyButton from "./ShinyButton";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-[65%] bg-fundo mb-8 mx-auto bottom-4 rounded-2xl flex flex-col items-center justify-between border-gray-200/20 border-1 h-120"
    >
      <div className="first-part-footer p-8 pt-10 flex flex-col w-full items-start justify-start gap-8">
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
        <ShinyButton
          showArrow={false}
          text="Schedule call"
          link="mailto:esdrasirion1@gmail.com"
        />
      </div>

      <div className="border-t w-full border-gray-200/20"></div>

      <div className="second-part-footer p-8 flex justify-between w-full">
        <div className="name-and-copy flex flex-col gap-2">
          <h1 className="text-xl font-bold">Esdras Santos</h1>
          <span className="text-principal/70 text-base">
            © {new Date().getFullYear()} | All rights reserved.
          </span>
        </div>
        <nav className="footer-navbar flex justify-between w-1/3">
          <div className="navigate">
            <h1 className="text-principal text-xl font-semibold">Navigate</h1>
            <ul className="flex flex-col mt-1 gap-2">
              <li className="hover:text-principal font-light text-principal/70">
                <Link href={"/#home"}>Home</Link>
              </li>
              <li className="hover:text-principal font-light text-principal/70">
                <Link href={"/#about"}>About</Link>
              </li>
              <li className="hover:text-principal font-light text-principal/70">
                <Link href={"/#work"}>Work</Link>
              </li>
              <li className="hover:text-principal font-light text-principal/70">
                <Link href={"/#contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="projects">
            <h1 className="text-principal text-xl font-semibold">Projects</h1>
            <ul className="flex flex-col mt-1 gap-2">
              <li className="hover:text-principal font-light text-principal/70">
                <Link href={"/projects/novahorizonte"}>Nova Horizonte</Link>
              </li>
              <li className="hover:text-principal font-light text-principal/70">
                <Link href={"/"}>Coming Soon...</Link>
              </li>
              <li className="hover:text-principal font-light text-principal/70">
                <Link href={"/"}>Coming Soon...</Link>
              </li>
              <li className="hover:text-principal font-light text-principal/70">
                <Link href={"/"}>Coming Soon...</Link>
              </li>
            </ul>
          </div>

          <div className="socials">
            <h1 className="text-principal text-xl font-semibold">Socials</h1>
            <ul className="flex flex-col mt-1 gap-2">
              <li className="hover:text-principal font-light text-principal/70">
                <a rel="noopener noreferrer" target="_blank"href="https://www.linkedin.com/in/esdrassantos06/">Linkedin</a>
              </li>
              <li className="hover:text-principal font-light text-principal/70">
                <a href="https://github.com/esdrassantos06" rel="noopener noreferrer" target="_blank">Github</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
