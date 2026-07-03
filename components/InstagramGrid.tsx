import { shop } from "@/lib/config";

// Placeholder tiles that link to Fadebian's Instagram. Real photo integration
// via SnapWidget or LightWidget (both free tier) is a good v2 upgrade.
const tileTones = [
  "bg-ink-800",
  "bg-ink-700",
  "bg-ink-800",
  "bg-ink-700",
  "bg-ink-800",
  "bg-ink-700"
];

export default function InstagramGrid() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 bg-ink-900 border-y border-ink-700">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <span className="gold-rule" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ink-100">
            See the work
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-300">
            Fresh cuts every day. Follow along on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8">
          {tileTones.map((tone, i) => (
            <a
              key={i}
              href={shop.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={`aspect-square rounded-lg sm:rounded-xl ${tone} border border-ink-700 hover:border-accent transition group relative overflow-hidden`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-ink-100 text-xs sm:text-sm font-medium tracking-wide">
                  View →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={shop.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base tracking-wide transition"
          >
            <span>Follow {shop.instagram} on Instagram</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
