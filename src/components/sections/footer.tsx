"use client";

import React from "react";
import { EyeLogo } from "@/components/ui/eye-logo";
import { DotPattern } from "@/components/ui/dot-pattern";
import { siteConfig } from "@/lib/site-config";
import { Send, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacts" className="relative border-t border-border/60 bg-surface/60 pt-16 pb-12 overflow-hidden">
      {/* Background DotPattern */}
      <DotPattern className="opacity-5" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand Info */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2.5">
              <EyeLogo size={24} />
              <span className="text-xl font-bold tracking-wider text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social / Contact Icons */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border/80 bg-background/80 text-muted-foreground hover:text-accent-hero hover:border-accent-hero/50 hover:bg-accent-hero/10 transition-all hover:scale-110"
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" />
            </a>

            <a
              href={siteConfig.contacts.email}
              className="p-2.5 rounded-full border border-border/80 bg-background/80 text-muted-foreground hover:text-accent-hero hover:border-accent-hero/50 hover:bg-accent-hero/10 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>

            <a
              href={siteConfig.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border/80 bg-background/80 text-muted-foreground hover:text-accent-hero hover:border-accent-hero/50 hover:bg-accent-hero/10 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground/80">
          <p>{siteConfig.copyright}</p>
          <p className="flex items-center gap-1.5">
            <span>Взгляд на детали</span>
            <EyeLogo size={14} className="inline-block text-accent-hero" />
          </p>
        </div>
      </div>
    </footer>
  );
}
