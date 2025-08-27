"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <Link href={"/"}>
        <h1 className="text-2xl text-fuchsia-600 cursor-pointer ">
          DEPENDENCY <span className="text-xl text-gray-600">App</span>
        </h1>
      </Link>
      <button
        onClick={() => setDark(!dark)}
        className="bg-white text-fuchsia-600 px-3 py-1 rounded-md shadow hover:bg-gray-200 transition"
      >
        Toggle Theme
      </button>
    </header>
  );
}
