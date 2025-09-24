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
      aria-label={ariaLabel}
      className={`before:animate-shine bg-fundo2 hover:bg-fundo2/80 relative flex h-12 w-50 items-center justify-center gap-3 overflow-hidden rounded-lg border-1 border-gray-200/50 text-lg transition-all duration-300 before:absolute before:top-0 before:left-[-100%] before:h-full before:w-4 before:scale-120 before:rotate-10 before:bg-gradient-to-r before:from-transparent before:to-white/5`}
    >
      {text} {showArrow && <CaretRightIcon size={20} weight="bold" />}
    </Link>
  );
};

export default ShinyButton;
