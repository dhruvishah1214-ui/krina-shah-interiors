"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { CheckCircle2, Clock, Sparkles, Hammer, MessageCircle, ArrowRight, Eye } from "lucide-react";

export default function OngoingProject() {
  const { flagshipProject } = SITE_CONFIG;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section id="flagship" className="py-20 md:py-28 bg-[#F5F2EC] relative overflow-hidden">
      {/* Background architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#1C1917 1px, transparent 1px), radial-gradient(#1C1917 1px, #F5F2EC 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-semibold mb-3">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{flagshipProject.badge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917]">
              {flagshipProject.title}
            </h2>
            <p className="text-[#57534E] text-base sm:text-lg mt-2 font-light max-w-xl">
              {flagshipProject.scale} • {flagshipProject.overview}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.contact.getWhatsAppLink(`Hi Krina! I saw the ${flagshipProject.title} on your site. I'd love to learn more about your process for large residential projects!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-xs font-semibold hover:bg-[#C5A880] hover:text-[#1C1917] transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Ask Krina About This Project</span>
            </a>
          </div>
        </div>

        {/* Interactive Main Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Sneak Peek Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Active Highlight Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-stone-200 border-2 border-white group">
              <img
                src={flagshipProject.sneakPeekImages[activeImageIndex].url}
                alt={flagshipProject.sneakPeekImages[activeImageIndex].caption}
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              {/* Caption Card */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold">
                    Sneak Peek #{activeImageIndex + 1}
                  </span>
                  <p className="text-sm sm:text-base font-medium drop-shadow-sm">
                    {flagshipProject.sneakPeekImages[activeImageIndex].caption}
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-light border border-white/20">
                  <Eye className="w-3.5 h-3.5 text-amber-300" />
                  <span>On-Site Concept</span>
                </span>
              </div>
            </div>

            {/* Thumbnail Pickers */}
            <div className="grid grid-cols-3 gap-3">
              {flagshipProject.sneakPeekImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all ${
                    activeImageIndex === idx
                      ? "border-[#C5A880] ring-2 ring-[#C5A880]/30 scale-[1.02]"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </button>
              ))}
            </div>

            {/* Fun Fact Callout Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#E7E5E4] flex items-center space-x-3 text-xs text-[#57534E]">
              <span className="text-2xl">✨</span>
              <p>
                <strong className="text-[#1C1917] font-semibold">The Inside Story:</strong>{" "}
                We sourced 3 custom slabs of hand-cut Italian travertine specifically for this Great Room's 18-foot suspended fireplace. Zero compromise on grandeur.
              </p>
            </div>
          </div>

          {/* Right Column: "Trust the Process" Interactive Phase Timeline (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#E7E5E4]/80">
            <div className="flex items-center justify-between pb-5 border-b border-[#E7E5E4]">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
                  Project Roadmap
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] mt-0.5">
                  The Trust The Process Tracker
                </h3>
              </div>
              <span className="text-2xl">🚧</span>
            </div>

            <p className="text-xs text-[#78716C] mt-4 mb-6 leading-relaxed">
              Transforming a massive home takes precision, passion, and keeping the journey exciting for the homeowner every week. Here is where we stand:
            </p>

            {/* Phase steps */}
            <div className="space-y-4">
              {flagshipProject.phases.map((phase) => {
                const isCompleted = phase.status === "COMPLETED";
                const isInProgress = phase.status === "IN PROGRESS";

                return (
                  <div
                    key={phase.number}
                    className={`relative p-4 rounded-2xl border transition-all ${
                      isInProgress
                        ? "bg-[#FAF8F5] border-[#C5A880] shadow-sm ring-1 ring-[#C5A880]/20"
                        : isCompleted
                        ? "bg-stone-50/70 border-stone-200"
                        : "bg-white border-dashed border-stone-200 opacity-80"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{phase.emoji}</span>
                        <span className="text-xs font-mono font-bold text-[#78716C]">
                          PHASE {phase.number}
                        </span>
                        <h4 className="text-sm font-semibold text-[#1C1917]">
                          {phase.name}
                        </h4>
                      </div>

                      {/* Status Tag */}
                      {isCompleted && (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Done</span>
                        </span>
                      )}
                      {isInProgress && (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold animate-pulse">
                          <Clock className="w-3 h-3 text-amber-600" />
                          <span>Active Now</span>
                        </span>
                      )}
                      {!isCompleted && !isInProgress && (
                        <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 text-[10px] font-medium">
                          {phase.status}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#57534E] mt-2 ml-7 leading-relaxed font-light">
                      {phase.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Action */}
            <div className="mt-6 pt-5 border-t border-[#E7E5E4] flex items-center justify-between">
              <span className="text-xs font-medium text-[#44403C]">
                Have an ambitious estate project?
              </span>
              <a
                href="#contact"
                className="text-xs font-semibold text-[#C5A880] hover:text-[#1C1917] flex items-center space-x-1 transition-colors"
              >
                <span>Let's talk scale</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
