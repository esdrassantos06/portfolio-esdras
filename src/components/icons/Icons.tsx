import { Link } from "@/i18n/navigation";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";


export default function Icons() {
  return (
    <ul className="flex transition-all duration-300 gap-1 group hover:gap-4">
      <Link href="https://github.com/esdrassantos06" aria-label="Github" className="bg-fundo2 group-hover:scale-105 hover:text-secundaria p-2 w-12 h-12 rounded-full" rel="noopener noreferrer" target="_blank">
        <GithubLogoIcon size={32} className="transition-all duration-300" />
      </Link>
      <Link href="https://linkedin.com/in/esdrassantos06" aria-label="Linkedin" rel="noopener noreferrer" className="bg-fundo2 group-hover:scale-105  hover:text-secundaria p-2 w-12 h-12 rounded-full" target="_blank">
        <LinkedinLogoIcon size={32} className="transition-all duration-300" />
        </Link>
    </ul>
  );
}
