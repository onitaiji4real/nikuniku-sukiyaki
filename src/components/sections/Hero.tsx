"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { brandInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
           src={ASSETS.food.hero}
           alt="Mouth-watering Sukiyaki Beef"
           fill
           priority
           className="object-cover"
           sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-sumi-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start md:items-end">
        <div className="flex flex-row-reverse md:flex-row items-start gap-8 md:gap-16 mt-20">
             {/* Vertical Text Group 1 */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-vertical text-sumi-50 font-serif tracking-[0.5em] text-2xl md:text-4xl leading-loose"
             style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            一期一會
          </motion.div>

          {/* Vertical Text Group 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-vertical text-gold-500 font-serif font-bold tracking-[0.3em] text-5xl md:text-7xl leading-none"
             style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            極致關西風
          </motion.div>

           {/* Vertical Text Group 3 */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-vertical text-sumi-100 font-serif tracking-[0.3em] text-xl md:text-3xl leading-loose h-[300px]"
             style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            職人手作壽喜燒
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-6 md:left-auto md:right-12 text-sumi-200 text-sm tracking-widest"
        >
          {brandInfo.tagline}
        </motion.p>
      </div>
    </section>
  );
}
