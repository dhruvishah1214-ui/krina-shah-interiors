import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krina Shah Interiors | Luxury Residential Architecture & Interior Design",
  description:
    "Elevated interior architecture and luxury living spaces by Krina Shah. Discover our flagship estate projects, take the style vibe quiz, and book a consultation.",
  keywords: [
    "Krina Shah",
    "Krina Shah Interiors",
    "Interior Designer",
    "Luxury Interior Design",
    "Residential Architecture",
    "Home Renovation",
    "Bespoke Interiors",
    "Villas",
    "Estate Design"
  ],
  authors: [{ name: "Krina Shah" }],
  openGraph: {
    title: "Krina Shah Interiors | Luxury Interior Architecture",
    description: "Spaces so good, you'll cancel your weekend plans to stay in. Bespoke interior design & architecture.",
    url: "https://krinashahinteriors.com",
    siteName: "Krina Shah Interiors",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Krina Shah Interiors Flagship Residence"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Krina Shah Interiors",
    description: "Luxury interior architecture and playful design by Krina Shah.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#1C1917] antialiased selection:bg-[#C5A880]/30 selection:text-[#1C1917]">
        {children}
      </body>
    </html>
  );
}
