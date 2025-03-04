"use client";
import ArrowIcon from "./ArrowIcon";
import React from "react";

interface ShinyButtonProps {
  text: string;
  link?: string;
  target?: string;
  showArrow?: boolean;
  rel?: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({
  text,
  link,
  target,
  rel,
  showArrow = true,
}) => {
  return (
    <a
      rel={rel}
      href={link}
      target={target}
      aria-label="See My Work"
      className="w-50 see-work  border-gray-200/50 border-1 h-12 gap-3 relative overflow-hidden text-lg flex items-center before:absolute before:top-0 before:left-[-100%] before:h-full before:w-4 before:scale-120 before:rotate-10 before:bg-gradient-to-r before:from-transparent before:to-white/5  before:animate-shine justify-center rounded-lg bg-fundo2 hover:bg-fundo2/80 transition-all duration-300"
    >
      {text} {showArrow && <ArrowIcon />}
    </a>
  );
};

export default ShinyButton;
