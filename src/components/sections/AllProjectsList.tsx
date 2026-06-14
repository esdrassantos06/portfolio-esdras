import ProjectGrid from "./ProjectGrid";
import { allProjects } from "@/data/projects";

export default function AllProjectsList() {
  return (
    <ProjectGrid projects={allProjects} headingLevel="h2" priorityCount={2} />
  );
}
