import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectSection />
      <footer className="absolute flex flex-col justify-center items-center bg-purple-dark h-40 w-full z-20 mt-[3130px] md:mt-[1300px] rounded-t-xl">
            <p className="text-sm mb-4 text-purple-light">
                Lisa Mari Myrene – Portfolio BWU 2024
            </p>
            <p className="text-sm text-purple-light">
                Created in Next.js with Tailwind CSS and hosted on Vercel
            </p>
        </footer>
    </>
  );
}
