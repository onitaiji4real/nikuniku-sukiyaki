"use client";

import { useState } from "react";
import Image from "next/image"; // Added import statement
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { locations } from "@/lib/data";
import { MapPin, Phone, Clock } from "lucide-react";
import clsx from "clsx";
import { Button } from "../ui/Button";

export function Locations() {
  const [activeTab, setActiveTab] = useState(locations[0].id);
  const activeLocation = locations.find((l) => l.id === activeTab) || locations[0];

  return (
    <Section id="locations" dark>
      <SectionHeading title="店鋪資訊" subtitle="Locations" center />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setActiveTab(loc.id)}
            className={clsx(
              "px-6 py-3 text-sm md:text-base tracking-widest transition-all duration-300 border border-gold-500/30",
              activeTab === loc.id
                ? "bg-gold-500 text-sumi-950 font-bold"
                : "bg-transparent text-sumi-200 hover:text-gold-500 hover:border-gold-500"
            )}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-sumi-900 border border-sumi-800 p-6 shadow-xl rounded-sm">
        {/* Info */}
        <div className="flex flex-col justify-center space-y-8 p-6">
          <div>
            <h3 className="text-3xl font-serif font-bold text-sumi-50 mb-2">
              {activeLocation.name}
            </h3>
            <div className="w-16 h-1 bg-gold-500" />
            
             {activeLocation.note && (
                <p className="mt-4 text-sumi-400 italic">
                    {activeLocation.note}
                </p>
            )}
          </div>

          <div className="space-y-4 text-sumi-200">
             <div className="flex items-start gap-4">
              <MapPin className="text-gold-500 shrink-0 mt-1" />
              <p className="text-lg tracking-wide">{activeLocation.address}</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-gold-500 shrink-0" />
              <p className="text-lg tracking-wide">{activeLocation.phone}</p>
            </div>
            <div className="flex items-center gap-4"> 
               <Clock className="text-gold-500 shrink-0" />
               <p className="text-lg tracking-wide">17:30–00:00 (請依現場為主)</p>
            </div>
          </div>

           <Button 
             variant="primary" 
             className="w-fit mt-4"
             onClick={() => window.open(activeLocation.directionUrl, '_blank')}
           >
            Google Maps 導航
           </Button>
        </div>

        {/* Map/Image */}
        <div className="relative h-[400px] w-full bg-sumi-100 rounded-sm overflow-hidden">
             {/* If we had a real map Embed component, we'd use it here. 
                 For now, using iframe for Google Maps or an Image if preferred. 
                 Using iframe as per data.
             */}
             <iframe
              src={activeLocation.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
        </div>
      </div>
    </Section>
  );
}
