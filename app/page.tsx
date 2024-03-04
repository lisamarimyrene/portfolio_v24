import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectSection />
    </>
  );
}
