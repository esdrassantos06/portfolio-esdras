"use client";

import { CaretRightIcon } from "@phosphor-icons/react";
import { Link } from "@/i18n/navigation";

interface ShinyButtonProps {
  text: string;
  link: string;
  target?: string;
  showArrow?: boolean;
  rel?: string;
  ariaLabel?: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({
  text,
  link,
  target,
  rel,
  ariaLabel,
  showArrow = true,
}) => {
  return (
    <Link
      rel={rel}
      href={link}
      target={target}
      aria-label={ariaLabel || text}
      className={`before:animate-shine bg-fundo2 hover:bg-fundo2/80 focus-visible:outline-principal relative flex h-12 w-50 items-center justify-center gap-3 overflow-hidden rounded-lg border border-gray-200/50 text-lg transition-all duration-300 before:absolute before:top-0 before:-left-full before:h-full before:w-4 before:scale-120 before:rotate-10 before:bg-linear-to-r before:from-transparent before:to-white/5 focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {text}{" "}
      {showArrow && (
        <CaretRightIcon size={20} weight="bold" aria-hidden="true" />
      )}
    </Link>
  );
};

export default ShinyButton;
