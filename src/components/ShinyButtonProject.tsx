'use client';

import { Globe, Code } from "@phosphor-icons/react";

interface ShinyButtonProjectProps {
  demo:string
  code:string
}

export default function ShinyButtonProject({ demo, code }: ShinyButtonProjectProps) {
  return (
    <div className="buttons flex sm:flex-nowrap flex-wrap gap-4">
      <a target="_blank" rel="noopener noreferrer" aria-label="View Demo" href={demo} className="view-demo px-4 border-gray-200/50 border-1 h-12 gap-3 relative overflow-hidden text-lg flex items-center before:absolute before:top-0 before:left-[-100%] before:h-full before:w-4 before:scale-120 before:rotate-10 before:bg-gradient-to-r before:from-transparent before:to-white/5  before:animate-shine justify-center rounded-lg bg-fundo2 hover:bg-fundo2/80 transition-all duration-300">
      <Globe size={25} />
        <span>View Demo</span>
      </a>
      <a href={code} aria-label="Source Code" rel="noopener noreferrer" target="_blank" className="Source Code px-4 border-gray-200/50 border-1 h-12 gap-3 relative overflow-hidden text-lg flex items-center before:absolute before:top-0 before:left-[-100%] before:h-full before:w-4 before:scale-120 before:rotate-10 before:bg-gradient-to-r before:from-transparent before:to-white/5  before:animate-shine justify-center rounded-lg bg-fundo2 hover:bg-fundo2/80 transition-all duration-300">
      <Code size={25}/>
        <span>Source Code</span>
      </a>
    </div>
  );
}
