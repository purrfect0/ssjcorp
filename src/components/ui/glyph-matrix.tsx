"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlyphMatrixProps {
  className?: string;
  rows?: number;
  cols?: number;
  speed?: number;
  glyphSet?: string;
}

const DEFAULT_GLYPHS = "0123456789ABCDEF<>[]{}/\\*+=~#!@$%^&";

export function GlyphMatrix({
  className,
  rows = 12,
  cols = 32,
  speed = 100,
  glyphSet = DEFAULT_GLYPHS,
}: GlyphMatrixProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spanElements = Array.from(container.querySelectorAll<HTMLSpanElement>("span.glyph"));

    const interval = setInterval(() => {
      // Randomly change ~15% of glyphs
      const countToUpdate = Math.floor(spanElements.length * 0.15);
      for (let i = 0; i < countToUpdate; i++) {
        const randomIndex = Math.floor(Math.random() * spanElements.length);
        const randomGlyph = glyphSet[Math.floor(Math.random() * glyphSet.length)];
        if (spanElements[randomIndex]) {
          spanElements[randomIndex].textContent = randomGlyph;
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [speed, glyphSet]);

  const totalGlyphs = rows * cols;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 select-none overflow-hidden font-mono text-xs opacity-15 leading-none grid gap-2 p-4",
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: totalGlyphs }).map((_, i) => (
        <span key={i} className="glyph inline-block text-center text-muted-foreground/80 transition-colors duration-300">
          {glyphSet[i % glyphSet.length]}
        </span>
      ))}
    </div>
  );
}
