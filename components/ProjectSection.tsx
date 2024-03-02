import { ProjectCard } from "./ProjectCard";
import projectsData from "../public/projects.json";

export function ProjectSection() {
  return (
    <div className="bg-purple-light w-full h-auto py-16 z-1 absolute rounded-t-3xl mt-[270px]">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.imageStatic}
          icons={Object.values(project.technology)}
          title={project.title}
          intro={project.intro}
        />
      ))}
    </div>
  );
}
