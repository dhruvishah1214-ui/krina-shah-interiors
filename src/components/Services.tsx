"use client";

import React from "react";
import { SITE_CONFIG, ServiceItem } from "@/data/siteConfig";
import { Home, Sparkles, Layers, Palette, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

export default function Services() {
  const { services, contact } = SITE_CONFIG;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home className="w-6 h-6 text-[#C5A880]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-[#C5A880]" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-rose-400" />;
      default:
        return <Home className="w-6 h-6 text-[#C5A880]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
            Our Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] mt-1">
            Tailored Design Offerings
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] mt-3 font-light">
            Whether you are building a multi-acre residence from the ground up or breathing soul into a key room, our studio provides turnkey architectural luxury.
          </p>
        </div>

        {/* Services 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv: ServiceItem) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-[#E7E5E4] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E7E5E4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(srv.icon)}
                </div>

                <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                  {srv.tagline}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#1C1917] mt-1 mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-[#57534E] font-light leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                    What's Included:
                  </p>
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-[#44403C]">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="pt-6 border-t border-[#E7E5E4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-[11px] text-[#78716C]">
                  <strong className="text-[#1C1917]">Best For:</strong> {srv.idealFor}
                </div>
                <a
                  href={contact.getWhatsAppLink(`Hi Krina! I am interested in your "${srv.title}" service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-[#1C1917] hover:text-[#C5A880] transition-colors shrink-0"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Footer Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-white/80 border border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">☕</span>
            <p className="text-xs sm:text-sm text-[#57534E]">
              <strong className="text-[#1C1917]">Not 100% sure what your home needs yet?</strong> That's completely normal. Let’s talk it through over a friendly video call or coffee.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-xs font-semibold hover:bg-[#C5A880] hover:text-[#1C1917] transition-all shrink-0"
          >
            Start With A Free Chat
          </a>
        </div>
      </div>
    </section>
  );
}
