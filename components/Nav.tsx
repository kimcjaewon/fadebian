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
        scrolled ? "bg-ink-950/90 backdrop-blur-md border-b border-ink-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-black tracking-tight text-ink-100">
          {shop.name}<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide text-ink-300">
          <a href="/#services" className="hover:text-ink-100 transition">Services</a>
          <a href="/#reviews" className="hover:text-ink-100 transition">Reviews</a>
          <a href="/#visit" className="hover:text-ink-100 transition">Visit</a>
        </div>
        <Link
          href="/book"
          className="bg-accent hover:bg-accent-dark text-ink-950 font-semibold px-5 py-2.5 rounded-full text-sm tracking-wide transition"
        >
          Book now
        </Link>
      </div>
    </nav>
  );
}
