import Image from "next/image";
import Marquee from "react-fast-marquee";
import skillsData from "../public/skills.json";
import { FC } from "react";

interface SkillsDataType {
  skillsRow1?: string[];
}

export const SkillsSection: FC<SkillsDataType> = () => {
  return (
    <div className="bg-purple-medium w-full h-auto pb-28 pt-16 z-1 rounded-t-3xl absolute mt-[-25px] flex flex-col items-center">
      <div className=" w-full md:w-[70%]">
      {skillsData.map((skillsRow, rowIndex) => (
        <Marquee
          key={`marquee-${rowIndex}`}
          speed={20}
          pauseOnHover={true}
          pauseOnClick={true}
          gradient={true}
          gradientColor="233, 228, 239"
          gradientWidth={100}
        >
          <div key={`row-${rowIndex}`} className="flex pb-2">
            {skillsRow.skillsRow1?.map((filename, iconIndex) => (
              <div
                key={`icon-${rowIndex}-${iconIndex}`}
                className="px-4 flex flex-col items-center text-purple-medium hover:text-purple-dark"
              >
                <Image
                  key={`image-${rowIndex}-${iconIndex}`}
                  src={`/technologyIcons/${filename}.png`}
                  alt={`${filename} Icon`}
                  width={45}
                  height={45}
                />
                <p
                  key={`text-${rowIndex}-${iconIndex}`}
                  className="pt-1 text-sm"
                >
                  {filename}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      ))}

      {skillsData.map((skillsRow, rowIndex) => (
        <Marquee
          key={`marquee-${rowIndex}`}
          speed={20}
          direction="right"
          pauseOnHover={true}
          pauseOnClick={true}
          gradient={true}
          gradientColor="233, 228, 239"
          gradientWidth={100}
        >
          <div key={`row-${rowIndex}`} className="flex pb-4">
            {skillsRow.skillsRow2?.map((filename, iconIndex) => (
              <div
                key={`icon-${rowIndex}-${iconIndex}`}
                className="px-4 flex flex-col items-center text-purple-medium hover:text-purple-dark"
              >
                <Image
                  key={`image-${rowIndex}-${iconIndex}`}
                  src={`/technologyIcons/${filename}.png`}
                  alt={`${filename} Icon`}
                  width={45}
                  height={45}
                />
                <p
                  key={`text-${rowIndex}-${iconIndex}`}
                  className="pt-1 text-sm"
                >
                  {filename}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      ))}
      </div>
    </div>
  );
};
