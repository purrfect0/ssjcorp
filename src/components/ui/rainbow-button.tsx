"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center rounded-full border border-accent-hero/40 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 shadow-md shadow-accent-hero/25 hover:shadow-xl hover:shadow-accent-hero/40 hover:scale-105 active:scale-95 focus-visible:outline-none",
        "bg-[linear-gradient(110deg,#7C6CF6,45%,#a78bfa,55%,#7C6CF6)] bg-[length:200%_100%] animate-rainbow",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
