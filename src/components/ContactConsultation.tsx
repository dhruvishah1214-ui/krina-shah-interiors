"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, Phone } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactConsultation() {
  const { contact } = SITE_CONFIG;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    projectType: "Full Estate / Villa",
    timeline: "Ready within 1-3 Months",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#C5A880", "#1C1917", "#D97757"],
      });
    } catch (err) {}
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct studio contact & WhatsApp highlight */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880]">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917] mt-1">
                Let’s Build Something Extraordinary.
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] mt-4 font-light leading-relaxed">
                Whether you're starting a new architectural build, redesigning an estate, or wanting a fresh perspective on your space, we'd love to connect.
              </p>
            </div>

            {/* Direct WhatsApp Action Box */}
            <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
              <div className="flex items-center space-x-2.5">
                <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  Fastest Response
                </span>
              </div>
              <h3 className="font-serif text-xl font-medium text-emerald-950">
                Direct WhatsApp Consultation
              </h3>
              <p className="text-xs text-emerald-800/80 font-light leading-relaxed">
                Skip the formalities! Shoot Krina a quick text or voice note directly to brainstorm your space.
              </p>
              <a
                href={contact.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs font-semibold tracking-wide transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat ({contact.phoneDisplay})</span>
              </a>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3 text-sm text-[#44403C]">
                <div className="w-9 h-9 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center text-[#C5A880] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#78716C] uppercase tracking-wider">Email Inquiry</p>
                  <a href={`mailto:${contact.email}`} className="font-medium hover:text-[#C5A880]">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-sm text-[#44403C]">
                <div className="w-9 h-9 rounded-full bg-white border border-[#E7E5E4] flex items-center justify-center text-[#C5A880] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#78716C] uppercase tracking-wider">Studio Base</p>
                  <p className="font-medium text-[#1C1917]">{contact.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E7E5E4]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl font-medium text-[#1C1917]">
                  Tell Us About Your Project
                </h3>
                <p className="text-xs text-[#78716C] font-light">
                  Fill in a few details and Krina will get back to you within 24 hours.
                </p>

                <div>
                  <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 text-sm text-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1.5">
                    Email or Phone / WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. radhika@example.com or +91 98765 00000"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 text-sm text-[#1C1917]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1.5">
                      Project Scale / Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 text-sm text-[#1C1917] bg-white"
                    >
                      <option>Full Estate / Villa</option>
                      <option>Apartment / Penthouse</option>
                      <option>Signature Single Room</option>
                      <option>3D Visualization Only</option>
                      <option>Commercial / Studio Space</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 text-sm text-[#1C1917] bg-white"
                    >
                      <option>Ready within 1-3 Months</option>
                      <option>3-6 Months</option>
                      <option>6-12 Months</option>
                      <option>Just Planning Ahead</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1.5">
                    What are your dreams or challenges for the space?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about the property, your favorite styles, or any specific ideas you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E7E5E4] focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 text-sm text-[#1C1917]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-sm font-semibold tracking-wide hover:bg-[#C5A880] hover:text-[#1C1917] transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Consultation Request</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1C1917]">
                  Thank You, {formData.name || "Friend"}!
                </h3>
                <p className="text-sm text-[#57534E] max-w-md mx-auto font-light leading-relaxed">
                  Your project details have been received. Krina is reviewing your inquiry and will connect with you shortly!
                </p>
                <div className="pt-2">
                  <a
                    href={contact.getWhatsAppLink(`Hi Krina! I just submitted the inquiry form for ${formData.name}. Excited to chat!`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-semibold text-[#128C7E] hover:underline"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Want an immediate reply? Ping Krina on WhatsApp →</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
