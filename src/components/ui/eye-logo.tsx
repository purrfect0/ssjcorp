"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface EyeLogoProps {
  className?: string;
  size?: number;
}

export function EyeLogo({ className, size = 60 }: EyeLogoProps) {
  return (
    <div
      style={{ width: size, height: "auto", aspectRatio: "1.8 / 1" }}
      className={cn("relative inline-flex items-center justify-center shrink-0", className)}
    >
      <Image
        src="/logo.png"
        alt="SSJCorp Logo"
        width={size * 2}
        height={size * 2}
        className="h-full w-full object-contain dark:invert transition-all duration-300"
        priority
      />
    </div>
  );
}
