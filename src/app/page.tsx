import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TelegramSection } from "@/components/sections/telegram-section";
import { Footer } from "@/components/sections/footer";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* High performance AnimatedGridPattern background with smooth top & bottom blend */}
        <div className="relative overflow-hidden pt-8">
          {/* Top smooth blend gradient */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/40 to-transparent z-10" />

          <AnimatedGridPattern
            numSquares={28}
            maxOpacity={0.22}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]",
              "inset-x-0 inset-y-[-10%] h-[120%] skew-y-3"
            )}
          />
          <div className="relative z-10">
            <PortfolioSection />
            <TelegramSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
