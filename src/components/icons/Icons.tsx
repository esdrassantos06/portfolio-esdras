import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Icons() {
  const t = useTranslations();
  return (
    <ul
      className="group flex gap-1 transition-all duration-300 hover:gap-4"
      role="list"
    >
      <li className="flex">
        <Link
          href="https://github.com/esdrassantos06"
          aria-label={`GitHub (${t("OpensInNewTab")})`}
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
          aria-label={`LinkedIn (${t("OpensInNewTab")})`}
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
