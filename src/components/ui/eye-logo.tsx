"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface EyeLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
  useImage?: boolean;
}

export function EyeLogo({ className, size = 32, useImage = false, ...props }: EyeLogoProps) {
  if (useImage) {
    return (
      <Image
        src="/logo.jpg"
        alt="SSJCorp Logo"
        width={size}
        height={size}
        className={cn("rounded-full object-cover dark:invert", className)}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground transition-colors", className)}
      {...props}
    >
      {/* Almond eye outline shape */}
      <path
        d="M 12 50 C 26 22, 74 22, 88 50 C 74 78, 26 78, 12 50 Z"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center pupil circle */}
      <circle cx="58" cy="50" r="13" fill="currentColor" />
    </svg>
  );
}
