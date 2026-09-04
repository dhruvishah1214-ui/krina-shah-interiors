export interface Project {
  id: string;
  title: string;
  category: "Estates" | "Living" | "Kitchen & Dining" | "Master Suites";
  area: string;
  location: string;
  year: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  funNote?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  deliverables: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  projectType: string;
  quote: string;
  rating: number;
  highlight: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "Krina Shah Interiors",
    shortName: "Krina Shah",
    title: "Interior Architecture & Luxury Living Design",
    tagline: "Spaces so good, you'll cancel your weekend plans to stay in.",
    subtagline: "High-end residential design infused with warmth, bold architectural flow, and zero boring rooms.",
    founder: {
      name: "Krina Shah",
      role: "Lead Interior Designer & Founder",
      bio: "Interior designer, spatial storyteller, and certified stone-and-lighting obsessive. I believe a luxury home shouldn't feel like an untouchable museum—it should be effortlessly warm, deeply personal, and designed for real life, belly laughs, and unforgettable dinners.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      funFacts: [
        { emoji: "☕", label: "Render Fuel", value: "3 iced coffees per room design" },
        { emoji: "📐", label: "Superpower", value: "Spotting 1mm tile misalignment across a hall" },
        { emoji: "✨", label: "Design Rule", value: "Lighting makes or breaks everything" },
        { emoji: "🏡", label: "Current Focus", value: "Orchestrating a massive 12,000 sq.ft. dream estate" }
      ],
      quote: "My goal is simple: the moment you walk into your home at the end of a long day, you exhale and think 'I never want to leave'."
    }
  },

  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneRaw: "919876543210", // Used for WhatsApp API
    email: "krina@krinashahinteriors.com",
    city: "Mumbai & Global Projects",
    instagramHandle: "@krinashahinteriors",
    instagramUrl: "https://instagram.com",
    pinterestUrl: "https://pinterest.com",
    linkedinUrl: "https://linkedin.com",
    consultationHours: "Mon - Sat: 10:00 AM - 7:00 PM",
    getWhatsAppLink: (customMessage?: string) => {
      const msg = customMessage || "Hi Krina! I just saw your interior design website and would love to chat about a project for my space.";
      return `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    }
  },

  stats: [
    { value: "12k+", label: "Sq. Ft. In Active Progress", note: "Massive estate currently underway" },
    { value: "100%", label: "Bespoke Curation", note: "No cookie-cutter templates" },
    { value: "5★", label: "Client Love", note: "Turning construction stress into pure fun" },
    { value: "0", label: "Boring Rooms Allowed", note: "Every corner has a personality" }
  ],

  // Flagship In-Progress Massive House Showcase
  flagshipProject: {
    badge: "Flagship Project • Currently In Development",
    title: "The Grand Pavilion Estate",
    scale: "12,500 Sq. Ft. Luxury Residence",
    location: "Private Enclave",
    overview: "A sprawling private residence undergoing a top-to-bottom architectural and interior renaissance. From tearing down structural barriers for dramatic double-height light wells to sourcing custom fluted travertine and concealed architectural lighting.",
    vibe: "Warm Minimalist Luxury meets Dramatic European Millwork",
    primaryImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    sneakPeekImages: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
        caption: "The Grand Double-Height Great Room (Concept & Framing)"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
        caption: "Bespoke Chef's Kitchen & Fluted Oak Breakfast Island"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
        caption: "Master Wing Sanctuary with Calacatta Stone & Private Courtyard"
      }
    ],
    phases: [
      {
        number: "01",
        name: "Demolition & Spatial Flow",
        status: "COMPLETED",
        emoji: "🔨",
        desc: "Tore down dividing walls to unlock 14-ft double-height natural light & seamless indoor-outdoor sightlines."
      },
      {
        number: "02",
        name: "Custom Millwork & Stone Sourcing",
        status: "IN PROGRESS",
        emoji: "📐",
        desc: "Currently hand-selecting slabs of Italian travertine and engineering concealed acoustic oak paneling."
      },
      {
        number: "03",
        name: "Bespoke Furniture & Atmospheric Lighting",
        status: "UP NEXT",
        emoji: "🛋️",
        desc: "Curating custom curved sofas, architectural brass pendants, and layered organic textiles."
      },
      {
        number: "04",
        name: "White-Glove Styling & Champagne Reveal",
        status: "UPCOMING",
        emoji: "🍾",
        desc: "The final reveal when the owners step into their fully styled, sensory-rich forever home."
      }
    ]
  },

  // Portfolio
  portfolio: [
    {
      id: "the-serene-villa",
      title: "The Warm Stone Villa",
      category: "Estates",
      area: "6,800 sq.ft.",
      location: "Bespoke Residence",
      year: "2024",
      description: "A sanctuary of grounded neutrals, brushed brass accents, and soft curved architecture that invites quiet contemplation.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Custom Travertine Fireplace", "Curved Plaster Walls", "Hidden Sound System"],
      funNote: "The clients haven't left their sofa on a Sunday in 6 months."
    },
    {
      id: "the-skyline-penthouse",
      title: "The Horizon Sky Penthouse",
      category: "Living",
      area: "4,200 sq.ft.",
      location: "Skyline Tower",
      year: "2024",
      description: "Moody, cosmopolitan elegance engineered to frame panoramic city views through floor-to-ceiling glass.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Fluted Glass Partitions", "Charcoal Quartzite Island", "Automated Ambient Lighting"],
      funNote: "Guests regularly mistake it for a 5-star boutique hotel."
    },
    {
      id: "the-culinary-atrium",
      title: "The Culinary & Wine Atrium",
      category: "Kitchen & Dining",
      area: "1,600 sq.ft.",
      location: "Private Residence",
      year: "2023",
      description: "Designed for entertaining: an expansive chef's island, concealed butler's pantry, and temperature-controlled wine gallery.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Handcrafted Brass Hardware", "Bookmatched Marble Splashback", "Integrated Wine Display"],
      funNote: "Dinner parties here go until 3 AM guaranteed."
    },
    {
      id: "the-oasis-suite",
      title: "The Cloud Master Suite",
      category: "Master Suites",
      area: "1,200 sq.ft.",
      location: "Bespoke Residence",
      year: "2024",
      description: "A private retreat wrapped in acoustic bouclé upholstery, soft warm cove lighting, and an ensuite spa bath with private green terrace.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Custom Upholstered Headboard Wall", "Freestanding Soaking Tub", "Walk-In Dressing Room"],
      funNote: "Warning: Your morning alarm will feel like a personal insult."
    },
    {
      id: "the-modernist-manor",
      title: "The Courtyard Manor",
      category: "Estates",
      area: "8,500 sq.ft.",
      location: "Private Grounds",
      year: "2023",
      description: "Where contemporary clean lines embrace warm organic materials, indoor planters, and natural skylights.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Internal Olive Tree Courtyard", "Custom Bronze Handrails", "Double-Height Library"],
      funNote: "Sunlight hits this living room like a Renaissance painting."
    },
    {
      id: "the-sculptural-lounge",
      title: "The Sculptural Sunlit Lounge",
      category: "Living",
      area: "2,200 sq.ft.",
      location: "Suburban Villa",
      year: "2024",
      description: "A playful harmony of tactile linen sofas, sculptural organic coffee tables, and commissioned modern art.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
      ],
      features: ["Custom Sectional Seating", "Microcement Finish", "Curated Art Direction"],
      funNote: "Zero coasters required—we choose durable, gorgeous materials."
    }
  ] as Project[],

  // Design Services
  services: [
    {
      id: "full-home",
      title: "Full-Scale Interior Architecture",
      tagline: "From bare concrete to your dream reveal",
      description: "End-to-end luxury transformation for entire homes, villas, and expansive apartments. We handle spatial planning, demolition, contractor coordination, material sourcing, and final white-glove styling.",
      icon: "Home",
      deliverables: [
        "Complete 2D Spatial Layouts & 3D Photorealistic Renders",
        "Custom Electrical, Plumbing & HVAC Coordination",
        "Flooring, Stone & Bespoke Millwork Detailing",
        "Complete Project Management & Contractor Supervision"
      ],
      idealFor: "Homeowners building or renovating their primary dream home or estate."
    },
    {
      id: "single-space",
      title: "Signature Space Reimagining",
      tagline: "Elevate your favorite room into an experience",
      description: "Dedicated focus on your high-impact areas: a jaw-dropping living room, a chef-grade kitchen, or a luxury master bedroom retreat.",
      icon: "Sparkles",
      deliverables: [
        "Concept Moodboards & Material Palette Selection",
        "Custom Joinery & Lighting Blueprints",
        "Furniture Sourcing & Art Direction",
        "On-Site Styling & Final Accessorizing"
      ],
      idealFor: "Clients wanting to transform key focal spaces with maximum impact."
    },
    {
      id: "virtual-concept",
      title: "3D Visualization & Design Blueprint",
      tagline: "See your dream home before spending a single dollar on construction",
      description: "Ultra-high-definition 3D renders, moodboards, and exact material schedules that give you total confidence before breaking any walls.",
      icon: "Layers",
      deliverables: [
        "Hyper-realistic 4K 3D Architectural Renders",
        "Full Material, Paint & Finish Specifications",
        "Furniture Shopping List with Direct Vendor Links",
        "Step-by-step Execution Guide for your contractors"
      ],
      idealFor: "Clients managing their own builders or living internationally."
    },
    {
      id: "styling-curation",
      title: "White-Glove Furniture & Art Curation",
      tagline: "The magic layer that turns a house into a soulful home",
      description: "Access to private artisan makers, custom upholstery, antique European lighting, and curated art pieces you won't find in big-box stores.",
      icon: "Palette",
      deliverables: [
        "Custom Furniture Commissioning & Fabric Selection",
        "Art, Sculpture & Decorative Accessory Curation",
        "Rug, Drapery & Soft Furnishing Tailoring",
        "Full Day White-Glove Installation & Reveal"
      ],
      idealFor: "Completed spaces that feel empty, cold, or need that magazine-worthy polish."
    }
  ] as ServiceItem[],

  // 4-Step Journey
  processSteps: [
    {
      step: "01",
      title: "The Vision & Vibe Chat",
      emoji: "☕",
      tagline: "We listen, brainstorm & dream big together",
      description: "No stiff interrogations. We grab a coffee (or jump on a quick video call), explore your lifestyle, how you move through your home, and pinpoint your exact aesthetic soulmate."
    },
    {
      step: "02",
      title: "The 3D Magic & Material Lab",
      emoji: "📐",
      tagline: "You'll see your future home in photorealistic 3D",
      description: "We bring your space to life with 4K renders, stone slabs, rich wood samples, and fabric swatches so you can touch, feel, and approve every detail before construction begins."
    },
    {
      step: "03",
      title: "The Zero-Headache Execution",
      emoji: "🔨",
      tagline: "We tackle the dust, contractors & site logistics",
      description: "While Krina and her team obsess over millimeters, structural joinery, and site deadlines, you get to sit back and watch your vision turn into reality without the construction headaches."
    },
    {
      step: "04",
      title: "The Champagne Reveal 🍾",
      emoji: "✨",
      tagline: "Step into a home that feels 100% uniquely yours",
      description: "The music is playing, the ambient lights are dimmed, the scent is perfect, and every cushion is hand-fluffed. Welcome home to a space you'll never want to leave."
    }
  ],

  // Interactive Vibe Quiz Data
  vibeQuiz: {
    title: "What's Your Interior Vibe?",
    subtitle: "Take this fun 30-second quiz to uncover your design soulmate aesthetic!",
    questions: [
      {
        id: "vibe-weekend",
        question: "How does your ideal Sunday at home look?",
        options: [
          {
            text: "Reading in a sunlit corner with smooth jazz and fresh linen.",
            vibe: "Quiet Luxury Minimalist"
          },
          {
            text: "Hosting 8 friends for an intimate candlelit dinner and natural wine.",
            vibe: "Warm Earthy Entertaining"
          },
          {
            text: "Lounging in a plush velvet robe in a mood-lit, boutique suite.",
            vibe: "Moody Cosmopolitan Glam"
          },
          {
            text: "Surrounded by leafy indoor plants, artisan pottery, and sunlight.",
            vibe: "Organic Biophilic Modern"
          }
        ]
      },
      {
        id: "vibe-materials",
        question: "Which material makes your heart beat faster?",
        options: [
          {
            text: "Brushed travertine, ribbed oak, and warm neutral bouclé.",
            vibe: "Quiet Luxury Minimalist"
          },
          {
            text: "Terracotta, zellige tiles, olive wood, and woven cane.",
            vibe: "Warm Earthy Entertaining"
          },
          {
            text: "Smoked glass, dark quartzite stone, and brushed brass fixtures.",
            vibe: "Moody Cosmopolitan Glam"
          },
          {
            text: "Raw microcement, pale linen, living trees, and lime-wash plaster.",
            vibe: "Organic Biophilic Modern"
          }
        ]
      },
      {
        id: "vibe-lighting",
        question: "What is your lighting philosophy?",
        options: [
          {
            text: "Never use the 'big overhead light'—only soft, warm architectural glows.",
            vibe: "Quiet Luxury Minimalist"
          },
          {
            text: "Flickering taper candles, warm table lamps, and amber glass pendants.",
            vibe: "Warm Earthy Entertaining"
          },
          {
            text: "Sculptural statement chandeliers that double as modern art.",
            vibe: "Moody Cosmopolitan Glam"
          },
          {
            text: "Dappled sunlight through sheer drapes and hidden cove lights.",
            vibe: "Organic Biophilic Modern"
          }
        ]
      }
    ],
    results: {
      "Quiet Luxury Minimalist": {
        title: "Quiet Luxury Minimalist ✨",
        description: "You appreciate understated elegance, subtle textures, uncluttered serenity, and materials that speak for themselves. Your home is a peaceful sanctuary from the noisy world.",
        palette: ["#F6F4F0", "#E3DCCF", "#B5A795", "#3A352F"],
        recommendedSpace: "Open living hall with custom travertine fireplace & curved bouclé seating."
      },
      "Warm Earthy Entertaining": {
        title: "Warm Earthy & Soulful Modern 🍷",
        description: "You love hospitality, rich natural textures, intimate dining tables, and spaces that invite people to stay for hours. Warmth and conversation are your north stars.",
        palette: ["#FAF7F2", "#DF9B77", "#9E6D53", "#2C221D"],
        recommendedSpace: "Open-concept culinary kitchen with waterfall island & atmospheric dining bar."
      },
      "Moody Cosmopolitan Glam": {
        title: "Moody Cosmopolitan Glam 🍸",
        description: "Sophisticated, bold, and unapologetically chic. You adore dark stones, ambient cove lighting, brass accents, and spaces that feel like a private member's club.",
        palette: ["#1E1E1E", "#3A3835", "#C5A880", "#EAE6E1"],
        recommendedSpace: "Bespoke speakeasy lounge with fluted oak walls & smoked glass bar."
      },
      "Organic Biophilic Modern": {
        title: "Organic Sunlit Haven 🌿",
        description: "You crave connection with nature: lime-wash walls, raw microcement, living greenery, skylights, and breezy linen drapery. Relaxed, effortless, and grounded.",
        palette: ["#F7F8F5", "#C8D1C3", "#82947B", "#374134"],
        recommendedSpace: "Courtyard-facing master suite with sunken garden & skylight bathroom."
      }
    }
  },

  testimonials: [
    {
      id: "t1",
      clientName: "Ananya & Rishabh M.",
      projectType: "Full Villa Interior (7,500 sq.ft.)",
      quote: "Working with Krina was honestly the most fun part of our entire year. We had heard horror stories about renovations, but Krina made every single decision feel exciting and stress-free. And the final house? Our friends literally gasped when they walked in.",
      rating: 5,
      highlight: "Turned renovation stress into pure fun & delivered a masterpiece."
    },
    {
      id: "t2",
      clientName: "Dev & Priya K.",
      projectType: "Luxury Sky Penthouse (4,200 sq.ft.)",
      quote: "Krina's eye for lighting and stone is on another level. She insisted on a curved ceiling detail we weren't sure about—and it turned out to be the absolute highlight of the whole residence. She is a true visionary with infectious energy.",
      rating: 5,
      highlight: "Incredible eye for detail, spatial flow and lighting."
    },
    {
      id: "t3",
      clientName: "Siddharth S.",
      projectType: "Duplex Residence & Private Office",
      quote: "What sets Krina apart is that she designs spaces you actually want to live in. Everything is gorgeous, but it's also incredibly comfortable and functional. Plus, she stayed on schedule! 10/10 recommend.",
      rating: 5,
      highlight: "Functional luxury on schedule and zero boring design."
    }
  ]
};
