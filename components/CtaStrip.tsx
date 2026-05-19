import Link from "next/link";

export default function CtaStrip() {
  return (
    <section className="py-14 sm:py-20 px-5 sm:px-6 bg-ink-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ink-100">
          Ready for a fresh cut?
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-300">Open spots fill fast. Lock yours in below.</p>
        <Link
          href="/book"
          className="inline-block mt-6 sm:mt-8 bg-accent hover:bg-accent-dark text-white font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full tracking-wide transition shadow-lg shadow-accent/20"
        >
          Book now
        </Link>
      </div>
    </section>
  );
}
