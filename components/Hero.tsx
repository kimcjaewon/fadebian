import Link from "next/link";
import { shop } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${shop.heroImage}")` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/60 to-ink-950" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="mb-6 inline-block px-4 py-1.5 rounded-full bg-ink-100/5 backdrop-blur-sm border border-ink-100/10 text-xs tracking-[0.2em] uppercase text-ink-300">
          ★★★★★ &nbsp;5.0 · Garden Grove
        </div>
        <h1 className="font-display font-black text-6xl md:text-8xl leading-none tracking-tight">
          {shop.name}<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-ink-300 max-w-xl mx-auto">{shop.tagline}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book"
            className="bg-accent hover:bg-accent-dark text-ink-950 font-semibold px-8 py-4 rounded-full tracking-wide transition w-full sm:w-auto"
          >
            Book an appointment
          </Link>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-ink-700 hover:border-ink-500 text-ink-300 hover:text-ink-100 tracking-wide transition w-full sm:w-auto"
          >
            See services
          </a>
        </div>
        <div className="mt-16 text-xs tracking-[0.3em] uppercase text-ink-500 animate-pulse">Scroll</div>
      </div>
    </section>
  );
}
