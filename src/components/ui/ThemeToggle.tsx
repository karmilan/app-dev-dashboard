// "use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

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
        <button onClick={() => setTheme("light")} className="cursor-pointer">
          <CiLight className="w-6 h-6" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")} className="cursor-pointer">
          <CiDark className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
