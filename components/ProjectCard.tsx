import Image from "next/image";
import Link from "next/link";
import arrowRight from "../public/arrowRight.svg";
import { FC } from "react";

interface ProjectCardProps {
  image: string;
  icons: string[];
  title: string;
  intro: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  image,
  icons,
  title,
  intro,
}) => {
  return (
    <div className="px-6 mb-8">
      <div>
        <div className="flex absolute mt-2 ml-2">
          {icons.map((icon, index) => (
            <Image
              key={index}
              className="h-9 w-9 p-1 bg-purple-light rounded-md mr-2"
              src={`/technologyIcons/${icon}.png`}
              alt="Technology icon"
              height={128}
              width={128}
            ></Image>
          ))}
        </div>
        <Link href="/project">
          <Image
            className="aspect-video rounded-t-md"
            src={`/projectImages/${image}.jpg`}
            alt="Project image"
            height={200}
            width={500}
          ></Image>
        </Link>
      </div>

      <div className="bg-purple-dark text-purple-light p-3 rounded-b-md">
        <Link href="/project">
          <div className="flex mb-2">
            <h3 className="mr-4">{title}</h3>
            <button>
              <Image
                priority
                src={arrowRight}
                alt="Right arrow"
                height={15}
                width={15}
              ></Image>
            </button>
          </div>
        </Link>
        <p>{intro}</p>
      </div>
    </div>
  );
};
