"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import confetti from "canvas-confetti";
import { Sparkles, MessageCircle, RotateCcw, ArrowRight, Check } from "lucide-react";

export default function VibeQuiz() {
  const { vibeQuiz, contact } = SITE_CONFIG;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [finalResultKey, setFinalResultKey] = useState<string>("");

  const handleSelectOption = (vibe: string) => {
    const updatedAnswers = [...answers, vibe];
    setAnswers(updatedAnswers);

    if (currentQuestion + 1 < vibeQuiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate most frequent vibe
      const frequency: Record<string, number> = {};
      updatedAnswers.forEach((item) => {
        frequency[item] = (frequency[item] || 0) + 1;
      });

      let highestCount = 0;
      let winningVibe = "Quiet Luxury Minimalist";
      Object.keys(frequency).forEach((key) => {
        if (frequency[key] > highestCount) {
          highestCount = frequency[key];
          winningVibe = key;
        }
      });

      setFinalResultKey(winningVibe);
      setQuizCompleted(true);

      // Trigger Celebration Confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C5A880", "#E3DCCF", "#1C1917", "#D97757"],
        });
      } catch (err) {
        // Fallback silently if canvas is not ready
      }
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizCompleted(false);
    setFinalResultKey("");
  };

  const currentQ = vibeQuiz.questions[currentQuestion];
  const resultData = finalResultKey
    ? vibeQuiz.results[finalResultKey as keyof typeof vibeQuiz.results]
    : null;

  return (
    <section id="vibe-quiz" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Fun • 30 Seconds</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1917]">
            {vibeQuiz.title}
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] mt-3 font-light max-w-xl mx-auto">
            {vibeQuiz.subtitle}
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E7E5E4] relative overflow-hidden">
          {!quizCompleted ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E7E5E4]">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                    Question {currentQuestion + 1} of {vibeQuiz.questions.length}
                  </span>
                </div>
                <div className="flex space-x-1.5">
                  {vibeQuiz.questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx <= currentQuestion
                          ? "w-8 bg-[#C5A880]"
                          : "w-2 bg-[#E7E5E4]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#1C1917] mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.vibe)}
                    className="p-5 text-left rounded-2xl border border-[#E7E5E4] hover:border-[#C5A880] hover:bg-[#FAF8F5] transition-all group duration-200 flex flex-col justify-between hover:shadow-md"
                  >
                    <span className="text-sm sm:text-base text-[#292524] font-medium group-hover:text-[#1C1917] leading-relaxed">
                      {option.text}
                    </span>
                    <div className="mt-4 flex items-center justify-end">
                      <span className="text-xs text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity font-semibold flex items-center space-x-1">
                        <span>Select</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Quiz Result Screen */
            <div className="text-center py-4 sm:py-6 animate-fadeIn">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-3xl mb-4">
                ✨
              </div>

              <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880] block mb-1">
                Your Aesthetic Soulmate
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#1C1917] mb-4">
                {resultData?.title}
              </h3>

              <p className="text-sm sm:text-base text-[#57534E] max-w-xl mx-auto leading-relaxed mb-6 font-light">
                {resultData?.description}
              </p>

              {/* Recommended Signature Element */}
              <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E7E5E4] max-w-lg mx-auto mb-6 text-left">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78716C]">
                  Your Signature Space Match:
                </span>
                <p className="text-sm font-medium text-[#1C1917] mt-1">
                  {resultData?.recommendedSpace}
                </p>

                {/* Color Palette Chips */}
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-xs text-[#78716C] mr-2">Color Soul:</span>
                  {resultData?.palette.map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border border-stone-300 shadow-inner"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Actions: Send to Krina on WhatsApp & Retake */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={contact.getWhatsAppLink(
                    `Hi Krina! I just took your site's Interior Vibe Quiz and matched with "${resultData?.title}". I'd love to chat about bringing this aesthetic to my home!`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-sm font-semibold hover:bg-[#C5A880] hover:text-[#1C1917] transition-all shadow-md group"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Send My Vibe To Krina On WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full border border-[#E7E5E4] text-[#44403C] hover:bg-[#FAF8F5] text-sm font-medium transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
