"use client";

import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Icons() {
  return (
    <ul className="flex transition-all duration-300 gap-1 group hover:gap-4">
      <a href="https://github.com/esdrassantos06" className="bg-fundo2 group-hover:scale-105 hover:text-secundaria p-2 w-12 h-12 rounded-full" rel="noopener noreferrer" target="_blank">
        <GithubLogo size={32} className="transition-all duration-300" />
      </a>
      <a href="https://linkedin.com/in/esdrassantos06" rel="noopener noreferrer" className="bg-fundo2 group-hover:scale-105  hover:text-secundaria p-2 w-12 h-12 rounded-full" target="_blank">
        <LinkedinLogo size={32} className="transition-all duration-300" />
        </a>
    </ul>
  );
}
