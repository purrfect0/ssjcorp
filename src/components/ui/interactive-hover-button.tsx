"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export function InteractiveHoverButton({
  children = "Button",
  className,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <button
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border border-border/80 bg-surface/80 px-6 py-3 text-center text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-hero/50 hover:bg-surface hover:shadow-lg hover:shadow-accent-hero/10 active:scale-95",
        className
      )}
      {...props}
    >
      <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {children}
      </span>
      <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center gap-2 rounded-full bg-accent-hero text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </button>
  );
}
