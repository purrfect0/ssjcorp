"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlyphMatrixProps {
  className?: string;
  rows?: number;
  cols?: number;
  speed?: number;
  glyphSet?: string;
}

const DEMO_GLYPHS = "\\ / < > 0 1 * = + . - :";

export function GlyphMatrix({
  className,
  rows = 18,
  cols = 40,
  speed = 90,
  glyphSet = DEMO_GLYPHS,
}: GlyphMatrixProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const glyphArray = glyphSet.split(" ").filter(Boolean);

  useEffect(() => {
    setMounted(true);
    const container = containerRef.current;
    if (!container) return;

    const spanElements = Array.from(container.querySelectorAll<HTMLSpanElement>("span.glyph"));

    const interval = setInterval(() => {
      // Rapidly update ~20% of the glyphs to create continuous matrix flicker
      const countToUpdate = Math.floor(spanElements.length * 0.22);
      for (let i = 0; i < countToUpdate; i++) {
        const randomIndex = Math.floor(Math.random() * spanElements.length);
        const span = spanElements[randomIndex];
        if (span) {
          const randomGlyph = glyphArray[Math.floor(Math.random() * glyphArray.length)];
          span.textContent = randomGlyph;
          
          // Random opacity per character matching demo image (from 0.15 to 0.8)
          const randomOpacity = (Math.random() * 0.65 + 0.15).toFixed(2);
          span.style.opacity = randomOpacity;
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [speed, glyphArray]);

  const totalGlyphs = rows * cols;

  if (!mounted) {
    return <div className={cn("pointer-events-none absolute inset-0 select-none overflow-hidden", className)} />;
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden font-mono text-sm leading-none grid gap-x-2 gap-y-3 p-4 opacity-40 dark:opacity-50 transition-opacity",
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: totalGlyphs }).map((_, i) => {
        const initialGlyph = glyphArray[i % glyphArray.length];
        const initialOpacity = ((i * 37) % 70 + 15) / 100;
        return (
          <span
            key={i}
            className="glyph inline-block text-center font-mono text-muted-foreground transition-opacity duration-200"
            style={{ opacity: initialOpacity }}
          >
            {initialGlyph}
          </span>
        );
      })}
    </div>
  );
}
