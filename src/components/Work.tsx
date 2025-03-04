'use client';

import ShinyButton from "./ShinyButton";
import ProjectsHome from "./ProjectsHome";

export default function Work(){
    return(
        <main
        id="work"
        className="w-full min-h-screen bg-fundo flex justify-center items-center"
      >
        <div className="flex w-[90%] px-40 flex-col items-center justify-center">
          <div className="title mb-20 w-full flex self-start items-center justify-between space-y-2">
            <h1 className="font-bold text-center text-6xl">My portfolio</h1>
            <ShinyButton
              text="All projects"
              link="https://github.com/esdrassantos06"
              rel="noopener noreferrer"
              target="_blank"
            />
          </div>
          <ProjectsHome />
        </div>
      </main>
    )
}