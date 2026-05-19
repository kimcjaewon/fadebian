import Link from "next/link";
import { shop } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${shop.heroImage}")` }}
      />
      {/* Lighter gradient since the image itself is brighter — still keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/65" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center animate-fade-in">
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white">
          <span className="text-accent">★★★★★</span>
          <span>5.0 · Garden Grove</span>
        </div>

        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight text-white">
          {shop.name}
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed px-2">
          {shop.tagline}
        </p>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto">
          <Link
            href="/book"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full tracking-wide transition shadow-lg shadow-accent/30 text-center"
          >
            Book an appointment
          </Link>
          <a
            href="#services"
            className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/35 hover:border-white/70 text-white/90 hover:text-white tracking-wide transition text-center"
          >
            See services
          </a>
        </div>
      </div>
    </section>
  );
}
