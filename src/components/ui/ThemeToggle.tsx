// "use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import IconButton from "./IconButton";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <IconButton onClick={() => setTheme("light")}>
          <LuSun className="w-4 h-4" />
        </IconButton>
      ) : (
        <IconButton onClick={() => setTheme("dark")}>
          <LuMoon className="w-4 h-4" />
        </IconButton>
      )}
    </div>
  );
};

export default ThemeToggle;
