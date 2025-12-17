"use client";

import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { reviews } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export function Reviews() {
  return (
    <Section id="reviews" className="bg-sumi-950">
      <SectionHeading title="顧客好評" subtitle="Reviews" center />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-sumi-900 p-8 rounded-sm relative border border-sumi-800">
            <Quote className="absolute top-6 right-6 text-gold-500/20" size={48} />
            <div className="flex gap-1 mb-4 text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < Math.floor(review.rating) ? "currentColor" : "none"} 
                  className={i < Math.floor(review.rating) ? "" : "text-sumi-700"}
                />
              ))}
            </div>
            <p className="text-sumi-100 italic mb-6 leading-relaxed min-h-[80px]">
              "{review.comment}"
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-sumi-50 font-serif tracking-wider">{review.user}</span>
              <span className="text-xs text-sumi-500">{review.platform}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
