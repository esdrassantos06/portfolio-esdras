import { Link } from "@/i18n/navigation";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export default function Icons() {
  return (
    <ul className="group flex gap-1 transition-all duration-300 hover:gap-4">
      <Link
        href="https://github.com/esdrassantos06"
        aria-label="Github"
        className="bg-fundo2 hover:text-secundaria h-12 w-12 rounded-full p-2 group-hover:scale-105"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubLogoIcon size={32} className="transition-all duration-300" />
      </Link>
      <Link
        href="https://linkedin.com/in/esdrassantos06"
        aria-label="Linkedin"
        rel="noopener noreferrer"
        className="bg-fundo2 hover:text-secundaria h-12 w-12 rounded-full p-2 group-hover:scale-105"
        target="_blank"
      >
        <LinkedinLogoIcon size={32} className="transition-all duration-300" />
      </Link>
    </ul>
  );
}
