"use client";

import React, { useState } from "react";
import { SITE_CONFIG, Project } from "@/data/siteConfig";
import { X, Sparkles, MapPin, Maximize2, MessageCircle, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const { portfolio, contact } = SITE_CONFIG;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Estates", "Living", "Kitchen & Dining", "Master Suites"];

  const filteredProjects =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
            Curated Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] mt-1">
            Selected Works & Sanctuaries
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] mt-3 font-light">
            Every home tells an intimate story. Explore how we balance raw materiality, bespoke joinery, and tailored spatial warmth.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#1C1917] text-[#FAF8F5] shadow-sm"
                    : "bg-white text-[#57534E] border border-[#E7E5E4] hover:border-[#C5A880] hover:text-[#1C1917]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E7E5E4] hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category & Area Badge */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#1C1917]">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-light text-white">
                    {project.area}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#1C1917] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#1C1917] group-hover:text-[#C5A880] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#78716C] mt-1 font-light flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#C5A880]" />
                    <span>{project.location} • {project.year}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-[#57534E] mt-3 font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Playful Fun Note */}
                {project.funNote && (
                  <div className="mt-4 pt-3 border-t border-[#E7E5E4] flex items-start space-x-2 text-[11px] text-[#78716C] italic">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>"{project.funNote}"</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E7E5E4] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 text-[#1C1917] hover:bg-white shadow-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-3 py-1 rounded-full bg-stone-100 text-xs font-medium text-stone-800">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-stone-500">
                      {selectedProject.area} • {selectedProject.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#57534E] mt-3 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Architectural Features */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#78716C] mb-3">
                    Key Architectural & Design Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map((feat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-[#E7E5E4] text-xs font-medium text-[#44403C]"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-4 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-[#78716C]">
                    Inspired by this aesthetic?
                  </span>
                  <div className="flex space-x-3 w-full sm:w-auto">
                    <a
                      href={contact.getWhatsAppLink(
                        `Hi Krina! I was looking at "${selectedProject.title}" on your portfolio and love this design style for my home.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-xs font-semibold hover:bg-[#C5A880] hover:text-[#1C1917] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Chat About This Style</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
