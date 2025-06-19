"use client";

import { GlobeIcon, CodeIcon } from "@phosphor-icons/react";

interface ShinyButtonProjectProps {
  demo: string;
  code?: string;
}

export default function ShinyButtonProject({
  demo,
  code,
}: ShinyButtonProjectProps) {
  return (
    <div className="buttons flex flex-wrap gap-4 sm:flex-nowrap">
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Demo"
        href={demo}
        className="view-demo before:animate-shine bg-fundo2 hover:bg-fundo2/80 relative flex h-12 items-center justify-center gap-3 overflow-hidden rounded-lg border-1 border-gray-200/50 px-4 text-lg transition-all duration-300 before:absolute before:top-0 before:left-[-100%] before:h-full before:w-4 before:scale-120 before:rotate-10 before:bg-gradient-to-r before:from-transparent before:to-white/5"
      >
        <GlobeIcon size={25} />
        <span>View Demo</span>
      </a>

      {code && (
        <a
          href={code}
          aria-label="Source Code"
          rel="noopener noreferrer"
          target="_blank"
          className="source-code before:animate-shine bg-fundo2 hover:bg-fundo2/80 relative flex h-12 items-center justify-center gap-3 overflow-hidden rounded-lg border-1 border-gray-200/50 px-4 text-lg transition-all duration-300 before:absolute before:top-0 before:left-[-100%] before:h-full before:w-4 before:scale-120 before:rotate-10 before:bg-gradient-to-r before:from-transparent before:to-white/5"
        >
          <CodeIcon size={25} />
          <span>Source Code</span>
        </a>
      )}
    </div>
  );
}
