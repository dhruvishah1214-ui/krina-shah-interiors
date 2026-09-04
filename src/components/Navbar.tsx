"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Flagship", href: "#flagship" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "The Process", href: "#process" },
    { name: "Vibe Quiz 🔮", href: "#vibe-quiz" },
    { name: "Meet Krina", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-sm border-b border-[#E7E5E4]/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-widest font-medium text-[#1C1917] group-hover:text-[#C5A880] transition-colors">
              KRINA SHAH
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#78716C] font-light -mt-1 group-hover:tracking-[0.3em] transition-all">
              Interiors & Architecture
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#44403C] hover:text-[#1C1917] hover:text-[#C5A880] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* WhatsApp Quick Link */}
            <a
              href={SITE_CONFIG.contact.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-full border border-[#25D366]/30 text-[#128C7E] bg-[#25D366]/5 hover:bg-[#25D366]/15 transition-all text-xs font-medium"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Book Consultation CTA */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-xs font-semibold tracking-wide hover:bg-[#C5A880] hover:text-[#1C1917] transition-all duration-200 shadow-sm group"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={SITE_CONFIG.contact.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366]/10 text-[#25D366]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1C1917] hover:bg-[#E7E5E4]/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-[#E7E5E4] px-5 pt-3 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#292524] hover:text-[#C5A880] py-1 border-b border-[#E7E5E4]/40"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col space-y-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#1C1917] text-[#FAF8F5] text-sm font-semibold tracking-wide"
            >
              Book Consultation
            </a>
            <a
              href={SITE_CONFIG.contact.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-full border border-[#25D366]/40 text-[#128C7E] bg-[#25D366]/10 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
