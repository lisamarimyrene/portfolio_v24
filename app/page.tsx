"use client";
import { NavbarDesktop } from "../components/NavbarDesktop";
import { Hero } from "../components/Hero";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";

export default function Home() {
  return (
    <>
      <NavbarDesktop />
      <Hero />
      <SkillsSection />
      <ProjectSection />
    </>
  );
}
