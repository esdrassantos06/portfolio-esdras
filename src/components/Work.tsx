"use client";

import ShinyButton from "./ShinyButton";
import ProjectsHome from "./ProjectsHome";
import ScrollAnimation from "./ScrollAnimation";

export default function Work() {
  return (
    <main
      id="work"
      className="w-full min-h-screen mb-20 flex justify-center items-center"
    >
      <div className="flex w-full lg:mx-auto px-5 flex-col items-center justify-center">
        <div className="title-and-button mb-20 w-full flex flex-col gap-10 md:flex-row self-start items-center justify-around">
          <ScrollAnimation delayIndex={0}>
            <h1 className="font-bold text-center text-5xl sm:text-6xl">My portfolio</h1>
          </ScrollAnimation>
          <ScrollAnimation delayIndex={1}>
            <ShinyButton
              text="All projects"
              link="https://github.com/esdrassantos06"
              rel="noopener noreferrer"
              target="_blank"
              ariaLabel="See All Projects"
            />
          </ScrollAnimation>
        </div>
        <ProjectsHome />
      </div>
    </main>
  );
}
