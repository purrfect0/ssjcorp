"use client";

import React, { useEffect, useState } from "react";
import { EyeLogo } from "@/components/ui/eye-logo";
import { HyperText } from "@/components/ui/hyper-text";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-md"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container max-w-7xl mx-auto flex h-24 sm:h-28 items-center justify-between px-6 sm:px-8">
          {/* Logo & Company Name with exact photo font style: less bold (font-medium), monospaced, wide tracking */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="SSJCorp Home"
          >
            <EyeLogo size={60} className="group-hover:scale-105 transition-transform shrink-0" />

            <HyperText
              startOnView
              animateOnHover
              className="text-3xl sm:text-4xl font-mono font-medium tracking-[0.2em] uppercase text-foreground group-hover:text-accent-hero transition-colors"
            >
              SSJ
            </HyperText>
          </a>

          {/* Navigation Links: less bold (font-normal), tall monospaced font, wide tracking */}
          <nav className="hidden lg:flex items-center gap-10">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg sm:text-xl font-mono font-normal tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground hover:scale-105 active:scale-95 focus-visible:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-5">
            <ThemeToggle className="h-12 w-12" />
            <a
              href="#contacts"
              className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-surface/90 px-6 py-3 text-sm sm:text-base font-mono font-medium tracking-wider text-foreground transition-all duration-200 hover:border-accent-hero/60 hover:bg-accent-hero/10 hover:text-accent-hero active:scale-95 shadow-sm"
            >
              <span>Связаться</span>
              <Send className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle className="h-10 w-10" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-foreground hover:bg-surface focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-border/80 bg-surface/95 backdrop-blur-xl px-8 py-8 space-y-6 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-4">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-mono font-normal tracking-wider text-foreground hover:text-accent-hero transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-4">
              <a
                href="#contacts"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 rounded-full bg-accent-hero px-6 py-3.5 text-lg font-mono font-bold text-white shadow-lg"
              >
                <span>Связаться</span>
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
