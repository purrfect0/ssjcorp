"use client";

import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <AnimatedThemeToggler
      theme={(resolvedTheme as "light" | "dark") || "dark"}
      onThemeChange={(t) => setTheme(t)}
      variant="circle"
      duration={500}
      className={className}
    />
  );
}
