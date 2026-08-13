"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps {
  theme?: "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
  variant?: "circle" | "fade";
  duration?: number;
  className?: string;
}

export function AnimatedThemeToggler({
  theme,
  onThemeChange,
  variant = "circle",
  duration = 500,
  className,
}: AnimatedThemeTogglerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = isDark ? "light" : "dark";

    // View Transitions API if supported
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (document as any).startViewTransition(() => {
        onThemeChange?.(nextTheme);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        document.documentElement.animate(
          {
            clipPath: isDark ? clipPath : [...clipPath].reverse(),
          },
          {
            duration,
            easing: "ease-in-out",
            pseudoElement: isDark
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
          }
        );
      });
    } else {
      onThemeChange?.(nextTheme);
    }
  };

  if (!mounted) {
    return (
      <div className={cn("h-9 w-9 rounded-full border border-border/50 bg-background/50", className)} />
    );
  }

  return (
    <button
      onClick={handleToggle}
      type="button"
      aria-label="Toggle Theme"
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface/80 text-foreground transition-all hover:bg-surface hover:border-border hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      {isDark ? (
        <Moon className="h-4 w-4 text-indigo-400 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      ) : (
        <Sun className="h-4 w-4 text-amber-500 transition-transform duration-300 rotate-0 hover:rotate-45" />
      )}
    </button>
  );
}
