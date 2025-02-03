"use client";

import { useState } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav
      className={`flex justify-between ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-bold text-2xl">Where in the world?</h1>
      <button type="button" onClick={toggleDarkMode} className="font-bold">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
