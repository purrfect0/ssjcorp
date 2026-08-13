"use client";

import React from "react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { siteConfig } from "@/lib/site-config";
import { Bot, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

export function TelegramSection() {
  return (
    <section id="telegram" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-telegram uppercase tracking-widest mb-2">
            <span>{siteConfig.telegram.label}</span>
            <div className="h-[1px] w-8 bg-accent-telegram/40" />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {siteConfig.telegram.title}
            </h2>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-telegram/40 bg-accent-telegram/10 px-3.5 py-1 text-xs font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-telegram opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-telegram" />
              </span>
              <AnimatedShinyText className="font-semibold tracking-wide text-accent-telegram">
                {siteConfig.telegram.statusBadge}
              </AnimatedShinyText>
            </div>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            {siteConfig.telegram.description}
          </p>
        </BlurFade>

        {/* Dashed Accent Card & Flow Diagram */}
        <BlurFade delay={0.2} className="mt-10">
          <div className="relative rounded-2xl border-2 border-dashed border-accent-telegram/40 bg-surface/60 p-8 sm:p-12 backdrop-blur-sm">
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent-telegram/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Features List */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-accent-telegram font-mono text-sm font-semibold">
                  <Bot className="h-5 w-5" />
                  <span>Возможности Telegram-ботов</span>
                </div>
                <ul className="space-y-3">
                  {siteConfig.telegram.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent-telegram shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Flow Mini-Diagram */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl border border-border/60 bg-background/80">
                <div className="flex flex-col items-center p-3 rounded-lg border border-border/50 bg-surface text-center">
                  <span className="text-xs font-mono text-muted-foreground mb-1">Бизнес</span>
                  <div className="h-8 w-8 rounded-full bg-accent-telegram/10 flex items-center justify-center text-accent-telegram font-bold text-xs">
                    CRM
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 text-accent-telegram rotate-90 sm:rotate-0" />

                <div className="flex flex-col items-center p-4 rounded-xl border border-accent-telegram/50 bg-accent-telegram/10 text-center shadow-lg shadow-accent-telegram/10">
                  <Bot className="h-6 w-6 text-accent-telegram animate-pulse mb-1" />
                  <span className="text-xs font-bold text-accent-telegram font-mono">SSJ Telegram Bot</span>
                </div>

                <ArrowRight className="h-5 w-5 text-accent-telegram rotate-90 sm:rotate-0" />

                <div className="flex flex-col items-center p-3 rounded-lg border border-border/50 bg-surface text-center">
                  <span className="text-xs font-mono text-muted-foreground mb-1">Клиент</span>
                  <MessageSquare className="h-6 w-6 text-foreground" />
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
