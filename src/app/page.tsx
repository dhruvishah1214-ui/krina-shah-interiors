import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OngoingProject from "@/components/OngoingProject";
import VibeQuiz from "@/components/VibeQuiz";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import RoomEstimator from "@/components/RoomEstimator";
import AboutFounder from "@/components/AboutFounder";
import Testimonials from "@/components/Testimonials";
import ContactConsultation from "@/components/ContactConsultation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#C5A880]/30 selection:text-[#1C1917]">
      <Navbar />
      <Hero />
      <OngoingProject />
      <VibeQuiz />
      <Portfolio />
      <Services />
      <Process />
      <RoomEstimator />
      <AboutFounder />
      <Testimonials />
      <ContactConsultation />
      <Footer />
    </main>
  );
}
