import Link from "next/link";
import { shop } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink-950">
      {/* Soft radial highlight behind the title */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #FFFFFF 0%, #FAFAF7 40%, #F4F1EB 100%)"
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-ink-700 text-xs tracking-[0.2em] uppercase text-ink-300">
          <span className="text-accent">★★★★★</span>
          <span>5.0 · Garden Grove</span>
        </div>

        <h1 className="font-display font-black text-7xl md:text-9xl leading-none tracking-tight text-ink-100">
          {shop.name}
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-ink-300 max-w-xl mx-auto leading-relaxed">
          {shop.tagline}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book"
            className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-full tracking-wide transition shadow-lg shadow-accent/20 w-full sm:w-auto"
          >
            Book an appointment
          </Link>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-ink-700 hover:border-ink-100 text-ink-300 hover:text-ink-100 tracking-wide transition w-full sm:w-auto"
          >
            See services
          </a>
        </div>
      </div>
    </section>
  );
}
