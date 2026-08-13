"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { siteConfig } from "@/lib/site-config";
import { Globe, ShoppingCart, Building2, Code2, Smartphone, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="h-7 w-7 text-accent-portfolio" />,
  "shopping-cart": <ShoppingCart className="h-7 w-7 text-accent-portfolio" />,
  building: <Building2 className="h-7 w-7 text-accent-portfolio" />,
  code: <Code2 className="h-7 w-7 text-accent-portfolio" />,
  smartphone: <Smartphone className="h-7 w-7 text-accent-portfolio" />,
  zap: <Zap className="h-7 w-7 text-accent-portfolio" />,
};

export function PortfolioSection() {
  const placeholders = siteConfig.portfolio.placeholders;

  return (
    <section id="portfolio" className="relative py-24 px-4 overflow-hidden bg-transparent">
      {/* Section Header */}
      <div className="container max-w-5xl mx-auto mb-16 px-4">
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-portfolio uppercase tracking-widest mb-2">
            <span>{siteConfig.portfolio.label}</span>
            <div className="h-[1px] w-8 bg-accent-portfolio/40" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {siteConfig.portfolio.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-2 max-w-xl">
            {siteConfig.portfolio.subtitle}
          </p>
        </BlurFade>
      </div>

      {/* Marquee Container with Gradient Fade Masks on sides */}
      <div className="relative w-full overflow-hidden">
        {/* Edge Gradient Mask Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        {/* First Row Marquee */}
        <Marquee pauseOnHover className="[--duration:35s]">
          {placeholders.map((item, idx) => (
            <PortfolioCard key={item.id} item={item} showBeam={idx === 0 || idx === 3} />
          ))}
        </Marquee>

        {/* Second Row Marquee (Reverse) */}
        <Marquee reverse pauseOnHover className="[--duration:30s] mt-6">
          {[...placeholders].reverse().map((item, idx) => (
            <PortfolioCard key={`rev-${item.id}`} item={item} showBeam={idx === 1 || idx === 4} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  showBeam = false,
}: {
  item: (typeof siteConfig.portfolio.placeholders)[number];
  showBeam?: boolean;
}) {
  return (
    <MagicCard
      className="relative flex flex-col justify-between w-[320px] sm:w-[360px] h-[220px] p-6 rounded-xl border border-border/80 bg-surface/90 backdrop-blur-sm cursor-pointer select-none group"
      gradientColor="rgba(34, 197, 94, 0.12)"
    >
      {/* Background Dot Pattern Accent */}
      <DotPattern className="opacity-15 group-hover:opacity-30 transition-opacity" />

      {/* Top Header: Tag Badge */}
      <div className="flex items-center justify-between z-10">
        <span className="inline-flex items-center rounded-full border border-accent-portfolio/30 bg-accent-portfolio/10 px-2.5 py-0.5 text-xs font-mono font-medium text-accent-portfolio">
          {item.tag}
        </span>
        <span className="font-mono text-xs text-muted-foreground/60">
          #{item.id}
        </span>
      </div>

      {/* Center Icon */}
      <div className="my-auto flex items-center justify-center py-2 z-10 group-hover:scale-110 transition-transform duration-300">
        <div className="p-3 rounded-xl bg-accent-portfolio/10 border border-accent-portfolio/20">
          {iconMap[item.icon] || <Globe className="h-7 w-7 text-accent-portfolio" />}
        </div>
      </div>

      {/* Bottom Title & Description */}
      <div className="z-10 space-y-1">
        <h3 className="font-bold text-lg text-foreground group-hover:text-accent-portfolio transition-colors">
          {item.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {item.description}
        </p>
      </div>

      {/* Animated Border Beam on select cards */}
      {showBeam && (
        <BorderBeam
          size={180}
          duration={14}
          colorFrom="#22C55E"
          colorTo="#10B981"
          borderWidth={1.5}
        />
      )}
    </MagicCard>
  );
}
