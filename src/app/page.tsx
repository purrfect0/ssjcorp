import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TelegramSection } from "@/components/sections/telegram-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <PortfolioSection />
        <TelegramSection />
      </main>
      <Footer />
    </div>
  );
}
