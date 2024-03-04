"use client";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <nav className="w-full bg-purple-dark">
      {/* nav desktop */}
      <div className="hidden md:flex w-full flex justify-between items-center bg-purple-dark text-purple-light px-20 py-2">
        <div className="flex justify-between w-24">
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
        </div>
        <div className="flex flex-col items-center">
          <h4>Lisa Mari Myrene</h4>
          <h4>Developer</h4>
        </div>
        <div className="flex justify-between w-32">
          <p>SoMe1</p>
          <p>SoMe2</p>
        </div>
      </div>

      {/* nav mobile */}
      <div className="md:hidden w-full flex items-center items-center justify-end px-6 pt-4">
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
        <div className="flex flex-col w-full items-end">
          <button
            onClick={handleNav}
            className="text-purple-dark bg-purple-light rounded-full w-auto px-4 py-2 border-transparent hover:border hover:border-[#F7F3FF] hover:text-purple-light hover:bg-purple-dark"
          >
            close
          </button>
          <div className="mt-16 pr-4 text-xl flex flex-col items-end text-purple-light">
            <Link href="/" className="mb-4">
              Home
            </Link>
            <Link href="/about" className="mb-8">
              About
            </Link>
            <div className="flex gap-4">
              <p>linkedin</p>
              <p>mail</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
