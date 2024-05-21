import { ProjectCard } from "./ProjectCard";
import projectsData from "../public/projects.json";

export function ProjectSection() {
  return (
    <div className="bg-purple-light w-full h-auto pb-32 md:pb-16 pt-16 z-1 absolute rounded-t-3xl mt-[250px]">
      <div className="w-full flex flex-row flex-wrap gap-6 justify-center items-start ">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            url={project.url}
            image={project.image}
            icons={Object.values(project.technology)}
            title={project.title}
            intro={project.intro}
          />
        ))}
      </div>
    </div>
  );
}
