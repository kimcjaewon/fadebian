"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { shop } from "@/lib/config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink-950/95 backdrop-blur-md border-b border-ink-700" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
        <Link
          href="/"
          className={`font-display text-xl sm:text-2xl font-black tracking-tight transition-colors ${
            scrolled ? "text-ink-100" : "text-white"
          }`}
        >
          {shop.name}<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <a href="/#services" className={`transition ${scrolled ? "text-ink-300 hover:text-ink-100" : "text-white/85 hover:text-white"}`}>Services</a>
          <a href="/#reviews"  className={`transition ${scrolled ? "text-ink-300 hover:text-ink-100" : "text-white/85 hover:text-white"}`}>Reviews</a>
          <a href="/#visit"    className={`transition ${scrolled ? "text-ink-300 hover:text-ink-100" : "text-white/85 hover:text-white"}`}>Visit</a>
        </div>
        <Link
          href="/book"
          className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm tracking-wide transition shadow-sm shadow-accent/20"
        >
          Book now
        </Link>
      </div>
    </nav>
  );
}
