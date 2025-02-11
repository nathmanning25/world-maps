"use client";

import Link from "next/link";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useTheme } from "@/app/contexts/Theme-context";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="py-2 border-b-2">
      <div className="flex-col gap-4 md:flex-row md:gap-0 container flex justify-between">
        <Link href="/" className="font-bold text-2xl">
          Where in the world?
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          className="font-bold max-w-max"
        >
          {theme === "dark" ? (
            <div className="flex items-center gap-3">
              <FaRegMoon /> Light mode
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <FaMoon /> Dark mode
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
