"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { menuHighlights } from "@/lib/data";

export function MenuHighlights() {
  return (
    <Section id="menu" dark>
      <SectionHeading title="美味極致" subtitle="Taste of Perfection" center />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {menuHighlights.map((item, index) => (
          <motion.div
            key={item.name}
            className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
             {/* Image */}
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-sumi-950 via-sumi-950/60 to-transparent opacity-90 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500">
               <div className="w-12 h-[1px] bg-gold-500 mb-4" />
              <h3 className="text-2xl font-serif text-sumi-50 mb-2 font-bold tracking-wider">
                {item.name}
              </h3>
              <p className="text-sumi-300 text-sm leading-relaxed opacity-100 transition-opacity duration-500 delay-100">
                {item.description}
              </p>
            </div>
            
             {/* Border Effect */}
            <div className="absolute inset-4 border border-gold-500/30 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
