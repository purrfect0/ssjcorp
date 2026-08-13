"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface EyeLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function EyeLogo({ className, size = 60, ...props }: EyeLogoProps) {
  const width = size * 1.78;
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground transition-colors shrink-0", className)}
      {...props}
    >
      <path
        d="M 22 140 C 22 45 230 18 340 18 C 420 18 480 72 480 140 C 480 208 420 262 340 262 C 230 262 22 235 22 140 Z"
        stroke="currentColor"
        strokeWidth="32"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="340" cy="140" r="76" stroke="currentColor" strokeWidth="30" fill="none" />
      <circle cx="340" cy="140" r="38" fill="currentColor" />
    </svg>
  );
}
