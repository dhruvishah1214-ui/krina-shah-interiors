"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { MessageCircle, Sparkles, Heart } from "lucide-react";
import { InstagramIcon } from "./Icons";

export default function AboutFounder() {
  const { founder } = SITE_CONFIG.brand;
  const { contact } = SITE_CONFIG;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F2EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with playful overlay sticker */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-200">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-2xl font-medium text-white">{founder.name}</p>
                <p className="text-xs text-amber-200 tracking-wider uppercase">{founder.role}</p>
              </div>
            </div>

            {/* Floating Fun Sticker */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E7E5E4] flex items-center space-x-3 rotate-2 hover:rotate-0 transition-transform">
              <span className="text-2xl">🪄</span>
              <div>
                <p className="text-xs font-bold text-[#1C1917]">Turning chaos into calm</p>
                <p className="text-[10px] text-[#78716C]">One room at a time</p>
              </div>
            </div>
          </div>

          {/* Right Column: Krina's Story & Fun Facts */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
                Behind the Blueprints
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] mt-1">
                Hi, I'm Krina.
              </h2>
              <p className="text-sm sm:text-base text-[#44403C] mt-4 font-light leading-relaxed">
                {founder.bio}
              </p>
            </div>

            {/* Quote Block */}
            <div className="p-5 rounded-2xl bg-white/90 border-l-4 border-[#C5A880] shadow-sm italic text-sm text-[#292524]">
              "{founder.quote}"
            </div>

            {/* Fun Facts 2x2 Grid */}
            <div className="pt-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#78716C] mb-3 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Krina's Studio Truths & Superpowers</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {founder.funFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-[#E7E5E4] flex items-center space-x-3 hover:border-[#C5A880] transition-colors"
                  >
                    <span className="text-2xl">{fact.emoji}</span>
                    <div>
                      <span className="text-[11px] font-bold text-[#78716C] uppercase tracking-wider block">
                        {fact.label}
                      </span>
                      <span className="text-xs font-semibold text-[#1C1917]">
                        {fact.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={contact.getWhatsAppLink("Hi Krina! I read your story on your website and would love to consult with you.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#1C1917] text-[#FAF8F5] text-xs font-semibold hover:bg-[#C5A880] hover:text-[#1C1917] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Say Hello on WhatsApp</span>
              </a>

              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white border border-[#E7E5E4] text-[#1C1917] text-xs font-medium hover:border-[#C5A880] transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-rose-500" />
                <span>Follow Along Behind The Scenes</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
