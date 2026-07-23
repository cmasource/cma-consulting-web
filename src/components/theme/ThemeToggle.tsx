"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [manualTheme, setManualTheme] = useState<"light" | "dark">("light");
  const isDark = (resolvedTheme ?? manualTheme) === "dark";

  function toggleTheme() {
    const currentlyDark =
      resolvedTheme === "dark" || document.documentElement.classList.contains("dark");
    const nextTheme = currentlyDark ? "light" : "dark";

    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.classList.toggle("light", nextTheme === "light");
    setManualTheme(nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      suppressHydrationWarning
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#0D1B3D]/10 bg-white text-[#0D1B3D] transition hover:border-[#009A9A]/40 hover:text-[#007A7A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007A7A] dark:border-white/15 dark:bg-[#0F1B36] dark:text-[#F8FAFC] dark:hover:text-[#5EEAD4]",
        className,
      )}
      onClick={toggleTheme}
    >
      {isDark ? (
        <Sun aria-hidden="true" className="h-5 w-5" />
      ) : (
        <Moon aria-hidden="true" className="h-5 w-5" />
      )}
    </button>
  );
}
