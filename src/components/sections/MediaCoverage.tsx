"use client";

import Image from "next/image";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { mediaCoverage } from "@/lib/data"; // Need to export this from data.ts
import { Button } from "../ui/Button";

export function MediaCoverage() {
  return (
    <Section id="media" className="bg-sumi-900">
      <SectionHeading title="媒體報導" subtitle="Media Coverage" center />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mediaCoverage.map((item) => (
          <div key={item.id} className="bg-sumi-800 rounded-sm overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <p className="text-gold-500 text-xs mb-2 tracking-widest uppercase">{item.source}</p>
              <h3 className="text-lg font-serif font-bold text-sumi-50 mb-3">{item.title}</h3>
              <p className="text-sumi-300 text-sm mb-4 line-clamp-2">{item.summary}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-sm text-gold-500 hover:text-gold-400 border-b border-gold-500 pb-0.5"
              >
                閱讀更多
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
