"use client";

import { LuBell, LuSquareMenu, LuUser } from "react-icons/lu";
import SearchBar from "./ui/SearchBar";
import ThemeToggle from "./ui/ThemeToggle";

const Topbar = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <header className="flex justify-between px-6 py-4 border-b border-gray-300 ">
      <button onClick={toggleMenu} className="md:hidden">
        <LuSquareMenu className="w-6 h-6" />
      </button>
      <SearchBar />
      <div className="flex items-center space-x-2 md:space-x-6">
        <LuBell className="w-4 h-4" />
        <ThemeToggle />
        <LuUser className="w-4 h-4" />
      </div>
    </header>
  );
};

export default Topbar;
