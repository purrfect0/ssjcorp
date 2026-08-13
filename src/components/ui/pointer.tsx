"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { EyeLogo } from "@/components/ui/eye-logo";
import { cn } from "@/lib/utils";

interface PointerProps {
  className?: string;
  children?: React.ReactNode;
}

export function Pointer({ className, children }: PointerProps) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.2 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine mouse pointer
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          window.getComputedStyle(target).cursor === "pointer";
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[99999] flex items-center gap-1.5 transition-transform duration-100",
        className
      )}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    >
      {/* Custom Mouse Pointer SVG Arrow */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "h-5 w-5 drop-shadow-md transition-transform duration-200",
          isPointer ? "scale-125 rotate-[-15deg] text-accent-hero fill-accent-hero" : "text-foreground fill-foreground"
        )}
      >
        <path
          d="M 3 3 L 10 21 L 13.5 13.5 L 21 10 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>

      {/* Custom Eye Logo Badge attached to pointer */}
      <div
        className={cn(
          "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-mono font-medium shadow-xl backdrop-blur-md transition-all duration-200 border",
          isPointer
            ? "border-accent-hero/60 bg-accent-hero text-white scale-110 shadow-accent-hero/30"
            : "border-border/80 bg-surface/90 text-foreground shadow-black/20"
        )}
      >
        <EyeLogo size={16} className={isPointer ? "text-white" : "text-foreground"} />
        <span className="text-[10px] tracking-wider uppercase">
          {children || "SSJ"}
        </span>
      </div>
    </motion.div>
  );
}
