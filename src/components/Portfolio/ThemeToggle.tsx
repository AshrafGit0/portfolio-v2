import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-2 cursor-pointer hover:bg-slate-400 rounded-lg p-2">
      {isDark ? (
        <Moon
          onClick={() => setTheme("light")}
          className={`h-4 w-4 transition-colors text-foreground`}
        />
      ) : (
        <Sun
          onClick={() => setTheme("dark")}
          className={`h-4 w-4 transition-colors text-foreground`}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
