"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Sparkles, MessageCircle, Check, ArrowRight } from "lucide-react";

export default function RoomEstimator() {
  const [selectedRooms, setSelectedRooms] = useState<string[]>(["Living Room & Lounge"]);
  const [selectedVibe, setSelectedVibe] = useState<string>("Quiet Luxury Minimalist");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Ready within 1-3 Months");

  const roomOptions = [
    { name: "Entire Estate / Mansion", icon: "🏛️" },
    { name: "Living Room & Lounge", icon: "🛋️" },
    { name: "Chef's Kitchen & Dining", icon: "🍷" },
    { name: "Master Suite & Walk-In", icon: "🛏️" },
    { name: "Spa Bathroom & Powder", icon: "🛁" },
    { name: "Private Office / Library", icon: "📚" }
  ];

  const vibeOptions = [
    "Quiet Luxury Minimalist",
    "Warm Earthy Modern",
    "Moody Cosmopolitan Glam",
    "Sunlit Organic Haven"
  ];

  const timelineOptions = [
    "Ready within 1-3 Months",
    "Planning for 3-6 Months",
    "Just Gathering Ideas & Exploring"
  ];

  const toggleRoom = (room: string) => {
    if (selectedRooms.includes(room)) {
      if (selectedRooms.length > 1) {
        setSelectedRooms(selectedRooms.filter((r) => r !== room));
      }
    } else {
      setSelectedRooms([...selectedRooms, room]);
    }
  };

  const generateWhatsAppMessage = () => {
    const roomsText = selectedRooms.join(", ");
    return `Hi Krina! I just used your website's Dream Space Builder.\n\n🏡 Spaces: ${roomsText}\n✨ Desired Vibe: ${selectedVibe}\n⏱️ Timeline: ${selectedTimeline}\n\nI'd love to discuss bringing this to life with your studio!`;
  };

  return (
    <section className="py-20 md:py-28 bg-[#F5F2EC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-[#E7E5E4] text-[#1C1917] text-xs font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Interactive Project Builder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917]">
            Build Your Dream Project
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] mt-3 font-light max-w-lg mx-auto">
            Select your spaces and design vibe below to craft an instant tailored project brief for Krina.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E7E5E4] space-y-8">
          {/* Step 1: Spaces */}
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5A880] block mb-2">
              Step 1 • Which spaces are we transforming?
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {roomOptions.map((room) => {
                const isSelected = selectedRooms.includes(room.name);
                return (
                  <button
                    key={room.name}
                    onClick={() => toggleRoom(room.name)}
                    className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-[#FAF8F5] border-[#C5A880] ring-1 ring-[#C5A880]/30 shadow-sm"
                        : "bg-white border-[#E7E5E4] hover:border-stone-300"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-xl">{room.icon}</span>
                      <span className="text-xs sm:text-sm font-medium text-[#1C1917]">
                        {room.name}
                      </span>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#C5A880] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Vibe */}
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5A880] block mb-2">
              Step 2 • What's your desired aesthetic vibe?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {vibeOptions.map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => setSelectedVibe(vibe)}
                  className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all ${
                    selectedVibe === vibe
                      ? "bg-[#1C1917] text-[#FAF8F5] border-[#1C1917]"
                      : "bg-white text-[#44403C] border-[#E7E5E4] hover:border-[#C5A880]"
                  }`}
                >
                  {vibe}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Timeline */}
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#C5A880] block mb-2">
              Step 3 • Project Timeline
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {timelineOptions.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTimeline(time)}
                  className={`p-3 rounded-2xl border text-center text-xs font-medium transition-all ${
                    selectedTimeline === time
                      ? "bg-[#FAF8F5] border-[#C5A880] text-[#1C1917] font-semibold"
                      : "bg-white text-[#57534E] border-[#E7E5E4] hover:border-stone-300"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Live Brief Output Box */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#78716C]">
                Your Custom Brief
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#1C1917] mt-0.5">
                {selectedRooms.length} Space(s) • {selectedVibe}
              </p>
              <p className="text-[11px] text-[#78716C]">
                Target: {selectedTimeline}
              </p>
            </div>

            <a
              href={SITE_CONFIG.contact.getWhatsAppLink(generateWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-xs sm:text-sm font-semibold hover:bg-[#C5A880] hover:text-[#1C1917] transition-all shadow-md group shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Send Brief to Krina via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
