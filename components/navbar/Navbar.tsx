// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NavLink from "./Navlink";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="bg-background w-full shadow-lg z-10 fixed top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-offWhite focus:outline-none focus:ring-2 focus:ring-inset focus:ring-offWhite"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/" className="text-offWhite text-xl font-bold">
                <div>Your Logo</div>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink href="/" text="Home" />
                <NavLink href="/products" text="Products" />
                <NavLink href="/services" text="Services" />
                <NavLink href="/pages" text="Pages" />
              </div>
            </div>
          </div>
          <div className=" sm:flex sm:items-center sm:ml-6">
            <button
              onClick={toggleTheme}
              className="bg-darkBrown hover:bg-darkSlateGray text-offWhite font-medium py-2 px-4 rounded-md transition duration-300"
            >
              {theme === "light" ? <FaMoon /> : <MdSunny />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink href="/" text="Home" mobile onClick={closeNavbar} />
          <NavLink
            href="/products"
            text="Products"
            onClick={closeNavbar}
            mobile
          />
          <NavLink
            href="/services"
            text="Services"
            onClick={closeNavbar}
            mobile
          />
          <NavLink href="/pages" text="Pages" onClick={closeNavbar} mobile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
