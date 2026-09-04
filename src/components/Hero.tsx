"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Sparkles, ArrowRight, MessageCircle, Compass, HardHat } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F1EB] via-[#FAF8F5] to-[#FAF8F5]">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <a
            href="#flagship"
            className="group inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#E7E5E4] shadow-sm hover:border-[#C5A880] transition-all duration-300"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-medium text-[#44403C] group-hover:text-[#1C1917]">
              <span className="font-semibold text-[#1C1917]">Live Project:</span> Transforming a massive 12,000 sq.ft. private estate
            </span>
            <span className="text-xs text-[#C5A880] group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#1C1917] leading-[1.12]">
            Spaces so good, you’ll{" "}
            <span className="italic font-light text-[#C5A880] underline decoration-[#C5A880]/40 underline-offset-8">
              cancel weekend plans
            </span>{" "}
            to stay in.
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#57534E] max-w-2xl mx-auto font-light leading-relaxed">
            High-end residential interior architecture crafted by{" "}
            <strong className="font-semibold text-[#1C1917]">Krina Shah</strong>. Deeply personal, architectural, and built with infectious energy—and{" "}
            <span className="font-medium text-[#1C1917] underline decoration-wavy decoration-[#C5A880]">zero boring rooms</span>.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Primary Action */}
            <a
              href="#flagship"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-sm font-semibold tracking-wide hover:bg-[#C5A880] hover:text-[#1C1917] transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>Tour The Massive Estate Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Fun Quiz Action */}
            <a
              href="#vibe-quiz"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-white border border-[#E7E5E4] text-[#1C1917] text-sm font-medium hover:border-[#C5A880] hover:bg-[#FBF9F6] transition-all shadow-sm group"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>What's Your Vibe? (30s Quiz)</span>
            </a>

            {/* Direct WhatsApp Action */}
            <a
              href={SITE_CONFIG.contact.getWhatsAppLink("Hi Krina! I'm loving your website and would love to consult with you on my home.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-all text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Krina</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Collage & Playful Badges */}
        <div className="relative max-w-5xl mx-auto mt-10 md:mt-14">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/9] md:aspect-[21/10] bg-[#E7E5E4]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
              alt="Luxury residence interior architecture by Krina Shah"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            
            {/* Image Overlay Caption */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex flex-col sm:flex-row sm:items-end justify-between text-white gap-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FAF8F5]/80 font-medium">
                  Current Masterpiece Underway
                </span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-white">
                  The Grand Pavilion Estate
                </h3>
              </div>
              <a
                href="#flagship"
                className="inline-flex items-center space-x-1 text-xs sm:text-sm font-medium text-amber-200 hover:text-white transition-colors"
              >
                <span>Peek Behind The Scenes</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Playful Floating Sticker Badge 1 (Top Left) */}
          <div className="hidden md:flex absolute -top-5 -left-6 items-center space-x-2 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur shadow-lg border border-[#E7E5E4] rotate-[-3deg] hover:rotate-0 transition-transform cursor-default">
            <span className="text-xl">🛋️</span>
            <div>
              <p className="text-xs font-bold text-[#1C1917]">100% Curated</p>
              <p className="text-[10px] text-[#78716C]">Zero cookie-cutter spaces</p>
            </div>
          </div>

          {/* Playful Floating Sticker Badge 2 (Top Right) */}
          <div className="hidden md:flex absolute -top-5 -right-6 items-center space-x-2 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur shadow-lg border border-[#E7E5E4] rotate-[3deg] hover:rotate-0 transition-transform cursor-default">
            <span className="text-xl">☕</span>
            <div>
              <p className="text-xs font-bold text-[#1C1917]">Iced Coffee Fuel</p>
              <p className="text-[10px] text-[#78716C]">Where big blueprints begin</p>
            </div>
          </div>

          {/* Playful Floating Sticker Badge 3 (Bottom Right Overlap) */}
          <div className="hidden sm:flex absolute -bottom-5 right-8 items-center space-x-2 px-4 py-2 rounded-xl bg-[#1C1917] text-white shadow-xl rotate-[1deg] hover:rotate-0 transition-transform cursor-default">
            <HardHat className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium tracking-wide">
              Hard Hat Mode: Live On Site
            </span>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {SITE_CONFIG.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-[#E7E5E4]/80 text-center hover:shadow-md transition-all group"
            >
              <p className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] group-hover:text-[#C5A880] transition-colors">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#44403C] mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-[#78716C] mt-0.5 font-light">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
