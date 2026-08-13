"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export function AuroraText({ children, className, ...props }: AuroraTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-rainbow bg-[length:200%_auto]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
