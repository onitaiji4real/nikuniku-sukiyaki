import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function MenuPage() {
  return (
    <main className="bg-sumi-950 min-h-screen">
      <Navbar />
      <Section className="pt-32 min-h-[60vh]">
        <SectionHeading title="完整菜單" subtitle="Full Menu" center />
        <div className="flex flex-col justify-center items-center h-full text-sumi-300 gap-8">
          <p>菜單內容建置中... (Coming Soon)</p>
          <a href="/" className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500/10 transition-colors text-sm tracking-wider">
            ← 返回首頁 (Back to Home)
          </a>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
