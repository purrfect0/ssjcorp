"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 30,
  className,
  maxOpacity = 0.15,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getPos = () => {
    return [
      Math.floor((Math.random() * (dimensions.width || 1000)) / width),
      Math.floor((Math.random() * (dimensions.height || 1000)) / height),
    ];
  };

  const generateSquares = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  };

  const [squares, setSquares] = useState<Array<{ id: number; pos: number[] }>>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setSquares(generateSquares(numSquares));
    }
  }, [numSquares, width, height]);

  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq
      )
    );
  };

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-accent-hero/20 stroke-neutral-400/20 dark:stroke-neutral-600/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ id, pos: [sqX, sqY] }, index) => (
          <motion.rect
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay,
              delay: index * 0.1,
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            key={`${id}-${sqX}-${sqY}`}
            width={width - 1}
            height={height - 1}
            x={sqX * width + 1}
            y={sqY * height + 1}
            className="fill-accent-hero/30 dark:fill-accent-hero/40 transition-colors"
          />
        ))}
      </svg>
    </svg>
  );
}
