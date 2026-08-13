"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface EyeLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function EyeLogo({ className, size = 60, ...props }: EyeLogoProps) {
  // Calculate proportional width based on 1.8:1 aspect ratio of the eye icon
  const width = size * 1.8;
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground transition-colors shrink-0", className)}
      {...props}
    >
      {/* Outer almond shape stroke */}
      <path
        d="M 8 27.5 C 22 7, 72 7, 92 27.5 C 72 48, 22 48, 8 27.5 Z"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner ring circle */}
      <circle cx="63" cy="27.5" r="15" stroke="currentColor" strokeWidth="7" fill="none" />
      {/* Center pupil solid circle */}
      <circle cx="63" cy="27.5" r="7.5" fill="currentColor" />
    </svg>
  );
}
