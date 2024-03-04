import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "../../public/projects.json";
import arrowLeft from "../../public/arrowLeft.svg";
import { Navbar } from "../../components/Navbar";
import { Button } from "../../components/Button";

interface ProjectProps {
  params: { projectId: string };
}

const Project: FC<ProjectProps> = ({ params }) => {
  const project = projectsData.find((param) => param.url === params.projectId);

  if (!project) {
    return <div>Project not found</div>;
  }
  const icons = Object.values(project.technology);

  const {
    url,
    imageDesktop,
    imageMobile,
    title,
    description1,
    description2,
    link,
  } = project;

  return (
    <>
      <Navbar />

      <section className="flex flex-col bg-purple-dark justify-center items-center py-14">
        <h1 className="text-purple-light mb-12">{title}</h1>
        <div className="flex justify-between w-[60%]">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center w-[200px]">
              <Image
                key={index}
                className="h-9 w-9 p-1 bg-purple-light rounded-md mb-1"
                src={`/technologyIcons/${icon}.png`}
                alt="Technology icon"
                height={128}
                width={128}
              ></Image>
              <p key={index} className="text-orange">
                {icon}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6 py-16">
        <div className="mb-6">
          <Image
            className=""
            src={`/projectImages/${url}/${imageDesktop}.jpg`}
            alt="Technology icon"
            height={128}
            width={128}
          ></Image>
          <Image
            className=""
            src={`/projectImages/${url}/${imageMobile}.jpg`}
            alt="Technology icon"
            height={128}
            width={128}
          ></Image>
        </div>
        <p className="mb-6">{description1}</p>
        <p className="mb-10">{description2}</p>
        <Button
          href={link}
          variant="orange"
          size="default"
          text="GitHub Repo"
        />
        <Link href="/" className="flex mt-6">
          <Image
            className="mr-4"
            priority
            src={arrowLeft}
            alt="Left arrow"
            height={15}
            width={15}
          ></Image>
          <p>Back to all projects</p>
        </Link>
      </div>
    </>
  );
};

export default Project;
