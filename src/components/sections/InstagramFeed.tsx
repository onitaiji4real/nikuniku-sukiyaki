"use client";

import Image from "next/image";
import { Section } from "../ui/Section";
import { brandInfo, instagramPosts } from "@/lib/data";
import { Instagram } from "lucide-react";

export function InstagramFeed() {
  return (
    <Section id="instagram" className="bg-sumi-900 py-10">
      <div className="flex flex-col items-center mb-10">
        <Instagram className="text-gold-500 mb-4" size={32} />
        <h3 className="text-xl font-serif text-sumi-50 tracking-widest mb-2">FOLLOW US</h3>
        <a 
          href={brandInfo.social.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sumi-400 hover:text-gold-500 text-sm tracking-wider"
        >
          @nikuniku_sukiyaki
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {instagramPosts.map((src, index) => (
          <a 
            key={index}
            href={brandInfo.social.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative aspect-square bg-sumi-800 group overflow-hidden"
          >
            <Image 
              src={src} 
              alt={`Instagram post ${index + 1}`} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </Section>
  );
}
