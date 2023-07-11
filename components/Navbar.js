"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-tr from-blue-500 to-orange-500 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/tow-truck-logo.png"
          width={50}
          height={50}
          alt="Picture of Tow Truck"
        />
        <h1 className="text-3xl font-light text-white">Crown Roadside</h1>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-3 lg:space-x-6">
        <li>
          <Link
            href="/"
            className="text-white font-bold text-xl"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white font-bold text-xl"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/opportunity"
            className="text-white font-bold text-xl"
          >
            Opportunity
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white font-bold text-xl"
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Mobile menu */}
      <section className="flex md:hidden">
        <div
          className="space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-2"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line
                x1="18"
                y1="6"
                x2="6"
                y2="18"
              />
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
              />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[200px] py-6">
            <li onClick={() => setIsNavOpen(false)}>
              <Link
                href="/"
                className="text-white font-bold text-xl"
              >
                Home
              </Link>
            </li>
            <li onClick={() => setIsNavOpen(false)}>
              <Link
                href="/about"
                className="text-white font-bold text-xl"
              >
                Services
              </Link>
            </li>
            <li onClick={() => setIsNavOpen(false)}>
              <Link
                href="/opportunity"
                className="text-white font-bold text-xl"
              >
                Opportunity
              </Link>
            </li>
            <li onClick={() => setIsNavOpen(false)}>
              <Link
                href="/contact"
                className="text-white font-bold text-xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
