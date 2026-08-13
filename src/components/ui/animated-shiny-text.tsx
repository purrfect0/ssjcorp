"use client";

import { CSSProperties, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <span
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        // Shimmer effect
        "animate-shine bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 via-neutral-900 to-neutral-500 dark:from-neutral-400 dark:via-white dark:to-neutral-400 bg-[length:200%_100%]",
        className
      )}
    >
      {children}
    </span>
  );
};
