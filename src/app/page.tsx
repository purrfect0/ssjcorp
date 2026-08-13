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

        {/* High performance AnimatedGridPattern background for Portfolio and Telegram sections */}
        <div className="relative overflow-hidden">
          <AnimatedGridPattern
            numSquares={24}
            maxOpacity={0.18}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(600px_ellipse_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-20%] h-[140%] skew-y-6"
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
