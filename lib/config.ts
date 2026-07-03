// ═══════════════════════════════════════════════════════════════════════
// EDIT THIS FILE TO CHANGE ANYTHING ON THE SITE.
// One file. That's it.
// ═══════════════════════════════════════════════════════════════════════

export const shop = {
  // Brand
  name: "Fadebian",
  legalName: "Fabian Torres",
  tagline: "Clean cuts. Precise lineups. Garden Grove's go-to.",
  bio:
    "Fabian Torres — known to his clients as Fadebian — is a Garden Grove " +
    "barber with a 5.0 rating for laid-back energy and razor-sharp lineups. " +
    "Patient with the kids, dialed in with the fades.",

  // Contact
  phone: "(714) 580-3797",
  email: "hello@fadebian.com",
  instagram: "@fadebian",
  instagramUrl: "https://www.instagram.com/fadebian/",

  // Location
  address: {
    line1: "13233 Harbor Blvd",
    city: "Garden Grove",
    state: "CA",
    zip: "92843"
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=13233+Harbor+Blvd+Garden+Grove+CA+92843",

  // Hours (shown on the landing page — Cal.com manages actual availability)
  hours: {
    0: null, // Sunday — closed
    1: { open: "17:30", close: "19:30" }, // Monday
    2: { open: "17:30", close: "19:30" }, // Tuesday
    3: { open: "17:30", close: "19:30" }, // Wednesday
    4: { open: "17:30", close: "19:30" }, // Thursday
    5: { open: "17:30", close: "19:30" }, // Friday
    6: { open: "10:15", close: "15:00" } //  Saturday
  } as const,

  // ───────────────────────────────────────────────────────────────────
  // Cal.com booking setup
  // ───────────────────────────────────────────────────────────────────
  // Fadebian's Cal.com username. The booking page lives at cal.com/<username>.
  // Update this to whatever username he picks when he signs up.
  calUsername: "fadebian",

  // Hero image — warm-toned atmospheric barbershop shot from Unsplash.
  // Once Fadebian sends a real photo of his shop, swap this URL for his own.
  heroImage:
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=80",

  // Fallback link — if a customer prefers to book on Booksy instead of on-site
  booksyUrl:
    "https://booksy.com/en-us/1356898_fabian-torres_barber-shop_103764_garden-grove",

  // Credentials for the stats strip
  stats: {
    sinceYear: 2022,
    cutsCount: 1000,
    rating: 5.0,
    reviewCount: 20
  },

  // Referral program terms
  referral: {
    firstDeal: "50% off next cut for both of you",
    subsequentDeal: "$5 off next cut for both of you"
  }
};

// ═══════════════════════════════════════════════════════════════════════
// SERVICES — each one maps to a Cal.com "event type"
// ═══════════════════════════════════════════════════════════════════════
// `calSlug` must match the URL slug you give the event type in Cal.com.
// e.g. if Cal.com event is at https://cal.com/fadebian/haircut, slug = "haircut"

export type Service = {
  id: string;
  name: string;
  durationMin: number;
  priceUsd: number;
  description: string;
  calSlug: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "haircut",
    name: "Haircut",
    durationMin: 30,
    priceUsd: 35,
    description: "Signature fade, taper, or scissor cut.",
    calSlug: "haircut",
    featured: true
  },
  {
    id: "haircut-beard",
    name: "Haircut & Beard",
    durationMin: 45,
    priceUsd: 45,
    description: "Full service — clean cut paired with a sharp beard.",
    calSlug: "haircut-beard",
    featured: true
  },
  {
    id: "haircut-nose-wax",
    name: "Haircut & Nose Wax",
    durationMin: 45,
    priceUsd: 40,
    description: "Haircut plus a quick nose-hair wax. Smooth finish.",
    calSlug: "haircut-nose-wax"
  },
  {
    id: "nose-wax",
    name: "Nose Hair Wax",
    durationMin: 15,
    priceUsd: 5,
    description: "Five minutes. No more nose hairs.",
    calSlug: "nose-wax"
  },
  {
    id: "highlights",
    name: "Highlights + Haircut",
    durationMin: 90,
    priceUsd: 125,
    description: "Color highlights paired with a fresh cut.",
    calSlug: "highlights"
  },
  {
    id: "house-call",
    name: "House Call",
    durationMin: 150,
    priceUsd: 100,
    description: "Mobile service — Fadebian comes to you. Starting at $100.",
    calSlug: "house-call"
  }
];

// ═══════════════════════════════════════════════════════════════════════
// REVIEWS
// ═══════════════════════════════════════════════════════════════════════

export const reviews = [
  {
    name: "Chris",
    text:
      "Fabian is the best barber you'll ever meet. Don't get a chopped cut " +
      "from a rando — go to a trusted, highly skilled barber like Fadebian.",
    rating: 5
  },
  {
    name: "Jon",
    text:
      "Highly recommend if you're looking for a laid-back barber who " +
      "delivers clean, precise lineups.",
    rating: 5
  },
  {
    name: "Andy",
    text:
      "Fabian is an amazing barber, he has patience. Thank you for the " +
      "haircut, see you soon.",
    rating: 5
  },
  {
    name: "Alexis",
    text:
      "Always gets it right! Never falls short of great customer service — " +
      "definitely coming back.",
    rating: 5
  },
  {
    name: "Armando",
    text: "Great barber, makes sure you get what you ask for. 10/10 recommend.",
    rating: 5
  },
  {
    name: "Luis",
    text: "Always gets me right.",
    rating: 5
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
