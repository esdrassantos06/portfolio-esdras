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
      className="group bg-secundaria hover:bg-link focus-visible:ring-link focus-visible:ring-offset-fundo inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full px-7 text-[0.95rem] font-semibold text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <span>{text}</span>
      {showArrow && (
        <CaretRightIcon
          size={20}
          weight="bold"
          aria-hidden="true"
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
};

export default ShinyButton;
