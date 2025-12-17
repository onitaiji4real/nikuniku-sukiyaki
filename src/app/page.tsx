import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { MenuHighlights } from "@/components/sections/MenuHighlights";
import { MenuCTA } from "@/components/sections/MenuCTA"; 
import { Locations } from "@/components/sections/Locations";
import { MediaCoverage } from "@/components/sections/MediaCoverage";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-sumi-950 min-h-screen selection:bg-gold-500 selection:text-sumi-950">
      <Navbar />
      <Hero />
      <BrandStory />
      <MenuHighlights />
      <MenuCTA />
      <Locations />
      <MediaCoverage />
      <Reviews />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
