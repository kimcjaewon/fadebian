import Link from "next/link";
import { shop } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${shop.heroImage}")` }}
      />
      {/* Dark gradient overlay so text remains readable on the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs tracking-[0.2em] uppercase text-white/90">
          <span className="text-accent">★★★★★</span>
          <span>5.0 · Garden Grove</span>
        </div>

        <h1 className="font-display font-black text-7xl md:text-9xl leading-none tracking-tight text-white">
          {shop.name}
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-white/85 max-w-xl mx-auto leading-relaxed">
          {shop.tagline}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-full tracking-wide transition shadow-lg shadow-accent/30 w-full sm:w-auto"
          >
            Book an appointment
          </Link>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-white/30 hover:border-white/70 text-white/85 hover:text-white tracking-wide transition w-full sm:w-auto"
          >
            See services
          </a>
        </div>
      </div>
    </section>
  );
}
