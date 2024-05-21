import { Navbar } from "../../components/Navbar";
import Image from "next/image";
import LisaMariMyrene from "../../public/LisaMariMyrene.png"
import Timeline from "../../public/timeline.png"
import { Button } from "../../components/Button";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="pt-10 md:pt-14 pb-20 md:pb-28 px-6 md:px-20 bg-purple-dark text-purple-light flex flex-col md:flex-row justify-between items-center">
        <div className="w-fit">
          <h1 className="leading-[100%] md:w-[50%] sm:text-[3rem] lg:text-[4rem]">Hi, I&apos;m Lisa!</h1>
          <h1 className="text-orange mb-4 md:w-fit sm:text-[3.5rem] lg:text-[4.5rem]">Fullstack Developer</h1>
          <h3 className="w-full md:w-[50%] md:text-xl">
            I approach my work with creativity and structured methodology,
            focusing on developing innovative web concepts using user-centered
            methods.
          </h3>
        </div>
        <div className="flex justify-center items-center w-60 md:w-[350px] mt-8 md:mt-0 xl:mr-32">
          <Image
              className="aspect-square"
              src={LisaMariMyrene}
              alt="Picture of Lisa Mari Myrene"
              height={300}
              width={300}
            />
        </div>
      </section>


      <div className="px-6 md:px-20 bg-purple-medium w-full pt-16 md:pt-20 z-1 absolute b-0 rounded-t-3xl mt-[-26px]">
        <div className="flex flex-col lg:flex-row w-full items-top pb-20">

          <div className="md:max-w-[70%] lg:max-w-[50%] md:mr-20">
            <p className="mb-6 text-base">Hello! My name is Lisa Mari and I am currently completing a bachelor&apos;s degree in Web Development at NTNU Gjøvik, as my interest in technology and design has always been a great motivation. After completing my studies, I will leave with competence in modern full-stack web technologies, user-centred methods and design.</p>
            <p className="text-base mb-16 md:mb-16">What inspires me to pursue a career in development is the joy of creating meaningful digital experiences with a focus on accessibility and usability. I believe that working creatively and systematically with people is the key to developing innovative concepts for the web. I look forward to acquiring more knowledge and experience in working life after finishing my studies!</p>
          </div>
            
          <div className="w-full h-fit pt-6 pb-4 md:pb-8 bg-purple-dark rounded-xl px-6 text-purple-light">
            <h4 className="text-lg mb-6">Connect with me!</h4>
            <p className="text-base">I am always looking to further develop my skillset an broaden my knowledge.</p>
            <p className="text-base mb-8">If you want to have a chat or get to know me more, let’s link!</p>
            <div className="flex flex-col md:flex-row gap-0 md:gap-3">
              <Button
                href="mailto:lisammyrene@outlook.com"
                variant="whiteStroke"
                size="default"
                text="Write me an email"
              />
              <Button
                href="https://www.linkedin.com/in/lisamarimyrene/"
                variant="whiteStroke"
                size="default"
                text="Add me on LinkedIn"
              />
            </div>
          </div>
            
        </div>
      </div>

      <div className="px-6 md:px-20 bg-purple-deep w-full pt-16 md:pt-20 z-1 absolute b-0 rounded-t-3xl mt-[860px] md:mt-[370px]">
        
        <div className="w-full flex justify-center pb-20">
          <Image
                src={Timeline}
                alt="Picture of BWU Timeline"
                height={300}
                width={1000}
            />
        </div>
      </div>
    </>
  );
}
