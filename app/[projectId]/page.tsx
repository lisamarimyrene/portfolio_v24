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
    keywords,
    description1,
    description2,
    link,
  } = project;

  return (
    <>
      <Navbar />

      <section className="flex flex-col text-center bg-purple-dark justify-center items-center pt-14 pb-20 md:pb-22 px-2">
        <h1 className="text-purple-light mb-10 text-3xl md:text-5xl">{title}</h1>
        <p className="mb-12 text-base text-orange">{keywords}</p>
        <div className="flex justify-between w-[60%] md:w-[20%]">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center w-[200px]">
              <Image
                key={index}
                className="h-9 w-9 p-1 bg-purple-light rounded-md mb-2"
                src={`/technologyIcons/${icon}.png`}
                alt="Technology icon"
                height={128}
                width={128}
              ></Image>
              <p key={index} className="text-orange text-base">
                {icon}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-medium w-full h-auto pb-28 pt-16 z-1 rounded-t-3xl absolute mt-[-25px]">
        <div className="px-6 md:px-[200px] lg:px-[400px] md:flex md:flex-col">
          <div className="mb-6">
            <Image
              className=""
              src={`/projectImages/${url}/${imageDesktop}.jpg`}
              alt="Project gif image mobile"
              height={600}
              width={700}
            ></Image>
            <Image
              className=""
              src={`/projectImages/${url}/${imageMobile}.jpg`}
              alt="Project gif image mobile"
              height={128}
              width={128}
            ></Image>
          </div>

          <p className="mb-6 text-base">{description1}</p>
          <p className="mb-10 text-base">{description2}</p>

          <Button
            href={link}
            variant="orange2"
            size="default"
            text="GitHub Repo"
          />

          <Link href="/" className="flex mt-6 md:mt-10">
            <Image
              className="mr-4"
              priority
              src={arrowLeft}
              alt="Left arrow"
              height={15}
              width={15}
            ></Image>
            <p className="hover:text-purple-deep transition duration-200 text-lg">Back to all projects</p>
          </Link>

        </div>
      </section>
    </>
  );
};

export default Project;
