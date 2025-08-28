"use client";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-black text-white p-4 flex justify-between items-center shadow-md">
      <Link href={"/"}>
        <h1 className="text-2xl text-fuchsia-600 cursor-pointer">
          DEPENDENCY <span className="text-xl text-gray-600">App</span>
        </h1>
      </Link>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-white text-fuchsia-600 px-3 py-1 rounded-md shadow hover:bg-gray-200 transition"
      >
        Toggle {theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
}
