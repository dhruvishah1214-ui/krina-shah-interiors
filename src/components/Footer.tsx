"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { MessageCircle, ArrowUp, Sparkles, Heart } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const { brand, contact } = SITE_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Global WhatsApp Pulse Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={contact.getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-all transform hover:scale-105"
          aria-label="Chat directly on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
          </div>
          <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline-block">
            Chat With Krina
          </span>
        </a>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#1C1917] text-[#FAF8F5] pt-16 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone-800">
            {/* Brand Column */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-widest font-medium text-white">
                  KRINA SHAH
                </span>
                <span className="text-xs tracking-[0.25em] uppercase text-[#A8A29E] font-light">
                  Interiors & Architecture
                </span>
              </div>
              <p className="text-sm text-[#A8A29E] font-light max-w-md leading-relaxed">
                {brand.tagline} High-end residential interior architecture tailored for real life, timeless elegance, and joyful living.
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-[#A8A29E] hover:text-white hover:bg-stone-700 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-[#A8A29E] hover:text-white hover:bg-stone-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={contact.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/30 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs uppercase font-bold tracking-wider text-[#C5A880]">
                Explore
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A8A29E]">
                <li>
                  <a href="#flagship" className="hover:text-white transition-colors">
                    The Massive Estate (Flagship)
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Selected Works
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Design Services
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-white transition-colors">
                    The 4-Step Journey
                  </a>
                </li>
                <li>
                  <a href="#vibe-quiz" className="hover:text-white transition-colors">
                    Style Vibe Quiz 🔮
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Krina Shah
                  </a>
                </li>
              </ul>
            </div>

            {/* Studio Hours & Contact */}
            <div className="md:col-span-3 space-y-3">
              <p className="text-xs uppercase font-bold tracking-wider text-[#C5A880]">
                Studio & Consultations
              </p>
              <div className="text-xs text-[#A8A29E] space-y-2 leading-relaxed">
                <p>📍 {contact.city}</p>
                <p>✉️ {contact.email}</p>
                <p>💬 {contact.phoneDisplay}</p>
                <p className="pt-1 text-stone-500 font-mono text-[11px]">
                  {contact.consultationHours}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
            <p>
              © {new Date().getFullYear()} Krina Shah Interiors. All rights reserved. Crafted with care for extraordinary spaces.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-xs text-[#A8A29E] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
