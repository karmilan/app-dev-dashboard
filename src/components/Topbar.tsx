"use client";

import { LuBell, LuUser } from "react-icons/lu";
import SearchBar from "./ui/SearchBar";
import ThemeToggle from "./ui/ThemeToggle";

const Topbar = () => {
  return (
    <header className="flex justify-between p-4 border-b border-gray-300">
      <SearchBar />
      <div className="flex items-center space-x-6">
        <LuBell className="w-4 h-4" />
        <ThemeToggle />
        <LuUser className="w-4 h-4" />
      </div>
    </header>
  );
};

export default Topbar;
