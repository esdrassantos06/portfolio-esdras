import { Link } from "@/i18n/navigation";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Icons() {
  return (
    <ul
      className="group flex gap-1 transition-all duration-300 hover:gap-4"
      role="list"
    >
      <li className="flex">
        <Link
          href="https://github.com/esdrassantos06"
          aria-label="Visit my GitHub profile (opens in new tab)"
          className="bg-fundo2 hover:text-secundaria focus-visible:outline-principal size-12 rounded-full p-2 transition-all duration-300 group-hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubLogoIcon
            size={32}
            className="transition-all duration-300"
            aria-hidden="true"
          />
        </Link>
      </li>
      <li className="flex">
        <Link
          href="https://linkedin.com/in/esdrassantos06"
          aria-label="Visit my LinkedIn profile (opens in new tab)"
          rel="noopener noreferrer"
          className="bg-fundo2 hover:text-secundaria focus-visible:outline-principal size-12 rounded-full p-2 transition-all duration-300 group-hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2"
          target="_blank"
        >
          <LinkedinLogoIcon
            size={32}
            className="transition-all duration-300"
            aria-hidden="true"
          />
        </Link>
      </li>
    </ul>
  );
}
