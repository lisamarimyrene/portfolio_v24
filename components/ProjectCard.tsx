import Image from "next/image";
import Link from "next/link";
import arrowRight from "../public/arrowRight.svg";
import { FC } from "react";

interface ProjectCardProps {
  url: string;
  image: string;
  icons: string[];
  title: string;
  intro: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  url,
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
              className="h-9 w-9 p-1 bg-purple-light rounded-md mr-[6px]"
              src={`/technologyIcons/${icon}.png`}
              alt="Technology icon"
              height={128}
              width={128}
            ></Image>
          ))}
        </div>
        <Link href={`/${url}`}>
          <Image
            priority
            className="aspect-video rounded-t-md"
            src={`/projectImages/${url}/${image}.jpg`}
            alt="Project image"
            height={250}
            width={400}
          ></Image>
        </Link>
      </div>

      <div className="bg-purple-dark text-purple-light px-4 py-5 rounded-b-md">
        <Link href={`/${url}`}>
          <h3 className="mb-2">
            {title}{" "}
            <button className="ml-2">
              <Image
                priority
                src={arrowRight}
                alt="Right arrow"
                height={15}
                width={15}
              ></Image>
            </button>
          </h3>
        </Link>
        <p>{intro}</p>
      </div>
    </div>
  );
};
