import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TelegramSection } from "@/components/sections/telegram-section";
import { Footer } from "@/components/sections/footer";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Shared FlickeringGrid background for Portfolio and Telegram sections */}
        <div className="relative overflow-hidden">
          <FlickeringGrid
            squareSize={4}
            gridGap={6}
            flickerChance={0.2}
            color="#7C6CF6"
            maxOpacity={0.2}
            className="absolute inset-0 z-0 pointer-events-none"
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
