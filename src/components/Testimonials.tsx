"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const { testimonials } = SITE_CONFIG;

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
            Real Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] mt-1">
            Words From Homeowners
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] mt-3 font-light">
            Here's what it feels like to hand over your keys and step back into your transformed sanctuary.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-[#E7E5E4] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#C5A880]/30 mb-2" />
                <p className="text-sm text-[#44403C] font-light leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#E7E5E4]">
                <p className="font-serif text-base font-medium text-[#1C1917]">
                  {t.clientName}
                </p>
                <p className="text-xs text-[#78716C] font-light">
                  {t.projectType}
                </p>
                <div className="mt-2 inline-block px-2.5 py-1 rounded-full bg-amber-50 text-[10px] font-medium text-amber-800 border border-amber-200/60">
                  ✨ {t.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
