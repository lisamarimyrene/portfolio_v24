"use client";
import Link from "next/link";
import { useState } from "react";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  const iconStyle = { fontSize: "1.5em" };
  const iconStyleMobile = { fontSize: "1.3em" };

  return (
    <nav className="w-full bg-purple-dark">
      {/* nav desktop */}
      <div className="hidden md:flex w-full flex justify-between items-center bg-purple-dark text-purple-light px-20 py-4">
        <div className="flex justify-between w-24">
          <Link href="/" className="hover:text-orange transition duration-200">home</Link>
          <Link href="/about" className="hover:text-orange transition duration-200">about</Link>
        </div>
        <h4>Lisa Mari Myrene</h4>
        <div className="flex justify-between w-32">
          <a href="https://www.linkedin.com/in/lisamarimyrene/"><FiLinkedin style={iconStyle}/></a>
          <a href="mailto:lisammyrene@outlook.com"><FiMail style={iconStyle}/></a>
          <a href="https://github.com/lisamarimyrene"><FiGithub style={iconStyle} /></a>
        </div>
      </div>

      {/* nav mobile */}
      <div className="md:hidden w-full flex items-center items-center justify-end px-6 pt-8">
        <button
          onClick={handleNav}
          className="text-purple-light rounded-full w-auto px-4 py-2 border border-[#F7F3FF] hover:border-transparent hover:bg-purple-light hover:text-purple-dark"
        >
          menu
        </button>
      </div>
      <div
        className={
          menuOpen
            ? "z-10 fixed left-0 top-0 w-full h-screen md:hidden bg-purple-dark ease-in px-6 py-4 duration-500"
            : "z-10 fixed left-[100%] w-full h-screen top-0 ease-in px-6 py-4 duration-500"
        }
      >
        <div className="flex flex-col w-full items-end pt-5 ">
          <button
            onClick={handleNav}
            className="text-purple-dark bg-purple-light rounded-full w-auto px-4 py-2 border-transparent hover:border hover:border-[#F7F3FF] hover:text-purple-light hover:bg-purple-dark"
          >
            close
          </button>
          <div className="mt-14 pr-4 text-xl flex flex-col items-end text-purple-light">
            <Link href="/" className="mb-6">
              Home
            </Link>
            <Link href="/about" className="mb-12">
              About
            </Link>
            <div className="flex gap-7">
            <a href="https://www.linkedin.com/in/lisamarimyrene/"><FiLinkedin style={iconStyleMobile}/></a>
            <a href="mailto:lisammyrene@outlook.com"><FiMail style={iconStyleMobile}/></a>
            <a href="https://github.com/lisamarimyrene"><FiGithub style={iconStyleMobile} /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
