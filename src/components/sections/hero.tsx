"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Particles } from "@/components/ui/particles";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { AuroraText } from "@/components/ui/aurora-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { siteConfig } from "@/lib/site-config";
import { ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#111111";

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden py-16 px-4 sm:px-6"
    >
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={120}
        ease={50}
        color={particleColor}
      />

      {/* Radial Vignette Overlay to enhance contrast */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--background)_90%)]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Kicker Badge */}
        <BlurFade delay={0.1} yOffset={10}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-4 py-1.5 text-xs font-mono backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent-hero animate-pulse" />
            <AnimatedShinyText className="font-medium tracking-wide">
              {siteConfig.hero.kicker}
            </AnimatedShinyText>
          </div>
        </BlurFade>

        {/* H1 Heading */}
        <BlurFade delay={0.2} yOffset={15}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {siteConfig.hero.title}{" "}
            <AuroraText>{siteConfig.hero.highlightWord}</AuroraText>
          </h1>
        </BlurFade>

        {/* Subtitle */}
        <BlurFade delay={0.3} yOffset={15}>
          <p className="max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed font-normal">
            {siteConfig.hero.subtitle}
          </p>
        </BlurFade>

        {/* Services Badges Row */}
        <BlurFade delay={0.4} yOffset={15}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-xl">
            {siteConfig.hero.services.map((service, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full border border-border/60 bg-surface/60 px-3.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-accent-hero/40 hover:text-foreground"
              >
                {service}
              </span>
            ))}
          </div>
        </BlurFade>

        {/* CTA Buttons */}
        <BlurFade delay={0.5} yOffset={15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href={siteConfig.hero.ctaPrimary.href} target="_blank" rel="noopener noreferrer">
              <RainbowButton>
                {siteConfig.hero.ctaPrimary.text}
              </RainbowButton>
            </a>

            <a href={siteConfig.hero.ctaSecondary.href}>
              <InteractiveHoverButton>
                {siteConfig.hero.ctaSecondary.text}
              </InteractiveHoverButton>
            </a>
          </div>
        </BlurFade>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <a href="#portfolio" aria-label="Scroll to portfolio">
          <ChevronDown className="h-5 w-5 text-muted-foreground animate-bounce" />
        </a>
      </div>
    </section>
  );
}
