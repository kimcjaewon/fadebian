import { shop } from "@/lib/config";

// Placeholder tiles that link to Fadebian's real Instagram. To show actual
// live posts, sign up for SnapWidget or LightWidget (free tier) and replace
// this section with an iframe embed. For now, this creates a clean CTA that
// drives traffic to his real feed.
const tileGradients = [
  "from-ink-700 via-ink-800 to-ink-900",
  "from-ink-800 via-ink-900 to-ink-800",
  "from-ink-700 via-ink-800 to-ink-700",
  "from-ink-800 via-ink-700 to-ink-800",
  "from-ink-700 via-ink-800 to-ink-900",
  "from-ink-800 via-ink-900 to-ink-700"
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
          {tileGradients.map((g, i) => (
            <a
              key={i}
              href={shop.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className={`aspect-square rounded-lg sm:rounded-xl bg-gradient-to-br ${g} border border-ink-700 hover:border-accent/60 transition group relative overflow-hidden`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-accent/10 backdrop-blur-sm transition">
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
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
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base tracking-wide transition shadow-sm shadow-accent/20"
          >
            <span>Follow {shop.instagram} on Instagram</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
