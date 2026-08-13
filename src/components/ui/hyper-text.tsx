"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  animateOnHover?: boolean;
  characterSet?: string;
}

const DEFAULT_CHARACTER_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&@";

export function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState<string[]>(children.split(""));
  const [isAnimating, setIsAnimating] = useState(false);
  const iterations = useRef(0);
  const elementRef = useRef<HTMLElement>(null);

  const triggerAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    iterations.current = 0;

    const totalSteps = children.length;
    const intervalTime = duration / (totalSteps * 3);

    const interval = setInterval(() => {
      if (iterations.current < totalSteps * 3) {
        setDisplayText((current) =>
          current.map((char, index) => {
            if (char === " ") return " ";
            if (index < Math.floor(iterations.current / 3)) {
              return children[index];
            }
            return characterSet[Math.floor(Math.random() * characterSet.length)];
          })
        );
        iterations.current += 1;
      } else {
        setDisplayText(children.split(""));
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, intervalTime);
  };

  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            triggerAnimation();
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startOnView, delay, children]);

  return (
    <Component
      ref={elementRef as any}
      onMouseEnter={() => animateOnHover && triggerAnimation()}
      className={cn("inline-flex overflow-hidden font-mono select-none cursor-pointer", className)}
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </Component>
  );
}
