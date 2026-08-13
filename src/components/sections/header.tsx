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
            ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="SSJCorp Home"
          >
            <EyeLogo size={30} className="group-hover:scale-105 transition-transform" />
            <HyperText
              startOnView
              animateOnHover
              className="text-lg font-bold tracking-wider text-foreground group-hover:text-accent-hero transition-colors"
            >
              SSJ
            </HyperText>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/90 px-4 py-2 text-xs font-semibold text-foreground transition-all duration-200 hover:border-accent-hero/60 hover:bg-accent-hero/10 hover:text-accent-hero active:scale-95 shadow-sm"
            >
              <span>Связаться</span>
              <Send className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-surface focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border/80 bg-surface/95 backdrop-blur-lg px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-accent-hero transition-colors py-1.5"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <a
                href="#contacts"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-accent-hero px-4 py-2.5 text-sm font-medium text-white shadow-md"
              >
                <span>Связаться</span>
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
