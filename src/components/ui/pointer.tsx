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

  const springConfig = { damping: 25, stiffness: 350 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with fine pointer (mouse)
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
        "pointer-events-none fixed left-0 top-0 z-[9999] flex items-center gap-1.5 rounded-full bg-foreground/90 text-background px-2.5 py-1.5 shadow-2xl backdrop-blur-md transition-transform duration-150",
        isPointer ? "scale-125 bg-accent-hero text-white" : "scale-100",
        className
      )}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    >
      {/* Eye Logo Icon as the custom cursor */}
      <EyeLogo size={20} className={isPointer ? "text-white animate-spin-slow" : "text-background"} />
      {children && (
        <span className="text-[10px] font-mono font-bold tracking-wider uppercase">
          {children}
        </span>
      )}
    </motion.div>
  );
}
