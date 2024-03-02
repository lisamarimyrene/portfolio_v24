import Image from "next/image";
import Marquee from "react-fast-marquee";
import skillsData from "../public/skills.json";
import { FC } from "react";

interface SkillsDataType {
  skillsRow1?: string[];
}

export const SkillsSection: FC<SkillsDataType> = () => {
  return (
    <div className="bg-purple-medium w-full h-auto pb-28 pt-16  z-1 rounded-t-3xl absolute mt-[-25px]">
      {skillsData.map((skillsRow, index) => (
        <Marquee
          speed={20}
          pauseOnHover={true}
          pauseOnClick={true}
          gradient={true}
          gradientColor="233, 228, 239"
          gradientWidth={100}
        >
          <div key={index} className="flex pb-4">
            {skillsRow.skillsRow1?.map((filename) => (
              <div
                key={filename}
                className="px-4 flex flex-col items-center text-purple-medium hover:text-purple-dark"
              >
                <Image
                  src={`/technologyIcons/${filename}.png`}
                  alt={`${filename} Icon`}
                  width={45}
                  height={45}
                />
                <p className="pt-1 text-sm">{filename}</p>
              </div>
            ))}
          </div>
        </Marquee>
      ))}

      {skillsData.map((skillsRow, index) => (
        <Marquee
          direction="right"
          speed={20}
          pauseOnHover={true}
          pauseOnClick={true}
          gradient={true}
          gradientColor="233, 228, 239"
          gradientWidth={100}
        >
          <div key={index} className="flex">
            {skillsRow.skillsRow2?.map((filename) => (
              <div
                key={filename}
                className="px-4 flex flex-col items-center text-purple-medium hover:text-purple-dark"
              >
                <Image
                  src={`/technologyIcons/${filename}.png`}
                  alt={`${filename} Icon`}
                  width={45}
                  height={45}
                />
                <p className="pt-1 text-sm">{filename}</p>
              </div>
            ))}
          </div>
        </Marquee>
      ))}
    </div>
  );
};
