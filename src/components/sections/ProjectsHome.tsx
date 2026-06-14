import ProjectGrid from "./ProjectGrid";
import { homeProjects } from "@/data/projects";

export default function ProjectsHome() {
  return <ProjectGrid projects={homeProjects} headingLevel="h3" />;
}
