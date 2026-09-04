"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function Process() {
  const { processSteps } = SITE_CONFIG;

  return (
    <section id="process" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
            The Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] mt-1">
            From Blueprints to Champagne
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] mt-3 font-light">
            Renovating or building should be one of the most exciting milestones of your life, not a source of sleepless nights. Here is how we make it effortless.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E5E4] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{step.emoji}</span>
                  <span className="font-mono text-xs font-bold text-[#C5A880] px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E7E5E4]">
                    STEP {step.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-medium text-[#1C1917] mb-1 group-hover:text-[#C5A880] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#78716C] mb-3">
                  {step.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E5E4]/60 flex items-center justify-between text-[11px] text-[#A8A29E]">
                <span>Stage {idx + 1} of 4</span>
                <span className="group-hover:translate-x-1 transition-transform text-[#C5A880] font-semibold">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
