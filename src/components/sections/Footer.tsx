import Link from "next/link";
import { brandInfo } from "@/lib/data";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sumi-950 py-12 border-t border-sumi-900 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
         <h2 className="text-2xl font-serif text-sumi-50 font-bold tracking-widest mb-6">
          {brandInfo.name}
        </h2>
        
        <div className="flex gap-6 mb-8">
            <a href={brandInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sumi-400 hover:text-gold-500 transition-colors">
                <Facebook size={24} />
            </a>
            <a href={brandInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sumi-400 hover:text-gold-500 transition-colors">
                <Instagram size={24} />
            </a>
        </div>

        <p className="text-sumi-500 text-xs tracking-wider mb-2">
          &copy; {new Date().getFullYear()} {brandInfo.fullName}. All Rights Reserved.
        </p>
        <p className="text-sumi-600 text-[10px] tracking-widest uppercase">
          Designed & Operated by 維度立方科技 Dimension Cube Tech
        </p>
      </div>
    </footer>
  );
}
