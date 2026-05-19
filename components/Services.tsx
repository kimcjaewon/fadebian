import Link from "next/link";
import { services } from "@/lib/config";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-5 sm:px-6 bg-ink-900 border-y border-ink-700">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 sm:mb-16 text-center">
          <span className="gold-rule" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl text-ink-100">
            The Menu
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-300 max-w-md mx-auto px-2">
            Pick your service. Pick your time. Show up looking sharp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-ink-900 p-5 sm:p-8 flex flex-col justify-between hover:bg-ink-800/60 transition group"
            >
              <div>
                <div className="flex items-baseline justify-between gap-3 sm:gap-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-100">
                    {s.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-accent shrink-0">
                    ${s.priceUsd}
                  </span>
                </div>
                <p className="mt-2 sm:mt-3 text-sm text-ink-300 leading-relaxed">
                  {s.description}
                </p>
                <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-ink-500">
                  {formatDuration(s.durationMin)}
                </p>
              </div>
              <Link
                href={`/book?event=${s.calSlug}`}
                className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-100 group-hover:text-accent transition"
              >
                Book this <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatDuration(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}
