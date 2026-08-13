"use client";

import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "#7C6CF6",
  width,
  height,
  className,
  maxOpacity = 0.25,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const memoizedColor = useMemo(() => {
    if (typeof window === "undefined") return "124, 108, 246";
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return "124, 108, 246";
    ctx.fillStyle = color;
    const computedColor = ctx.fillStyle;
    if (computedColor.startsWith("#")) {
      const hex = computedColor.replace("#", "");
      const bigint = parseInt(hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex, 16);
      return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`;
    }
    return "124, 108, 246";
  }, [color]);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, width: number, height: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      return {
        cols: Math.floor((width + gridGap) / (squareSize + gridGap)),
        rows: Math.floor((height + gridGap) / (squareSize + gridGap)),
      };
    },
    [squareSize, gridGap]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let gridParams = setupCanvas(canvas, container.offsetWidth, container.offsetHeight);

    const squares = new Float32Array(gridParams.cols * gridParams.rows);
    for (let i = 0; i < squares.length; i++) {
      squares[i] = Math.random() * maxOpacity;
    }

    const draw = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < gridParams.cols; i++) {
        for (let j = 0; j < gridParams.rows; j++) {
          const index = i * gridParams.rows + j;

          if (Math.random() < flickerChance) {
            squares[index] = Math.random() * maxOpacity;
          }

          const opacity = squares[index];
          if (opacity > 0.01) {
            ctx.fillStyle = `rgba(${memoizedColor}, ${opacity})`;
            ctx.fillRect(
              i * (squareSize + gridGap),
              j * (squareSize + gridGap),
              squareSize,
              squareSize
            );
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      if (container && canvas) {
        gridParams = setupCanvas(canvas, container.offsetWidth, container.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [setupCanvas, memoizedColor, squareSize, gridGap, flickerChance, maxOpacity]);

  return (
    <div ref={containerRef} className={cn("pointer-events-none absolute inset-0 size-full", className)}>
      <canvas ref={canvasRef} />
    </div>
  );
}
