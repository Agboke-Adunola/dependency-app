"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-black shadow-md relative">
      <h1 className="text-2xl font-bold text-fuchsia-600">
        DEPENDENCY <span className="text-xl text-gray-600">App</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="#features" className="text-gray-600 hover:text-fuchsia-600">
          Features
        </Link>
        <Link
          href="#downloads"
          className="text-gray-600 hover:text-fuchsia-600"
        >
          Download
        </Link>
        <Link href="#about" className="text-gray-600 hover:text-fuchsia-600">
          About
        </Link>
        <Link
          href="#get-started"
          className="px-5 py-2 bg-fuchsia-600 text-white rounded-lg shadow hover:bg-fuchsia-700 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden rounded-xl bg-gray-100 shadow-md transition">
          <Link
            href="#features"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Features
          </Link>
          <Link
            href="#downloads"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Download
          </Link>
          <Link
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            About
          </Link>
          <Link
            href="#get-started"
            className="block px-4 py-2 text-white bg-fuchsia-600 hover:bg-fuchsia-700"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
