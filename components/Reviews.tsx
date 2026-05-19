import { reviews } from "@/lib/config";

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 px-5 sm:px-6 bg-ink-950">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 sm:mb-16 text-center">
          <span className="gold-rule" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-6xl text-ink-100">
            What clients say
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-300">
            <span className="text-accent">★★★★★</span> &nbsp;5.0 average · 20+ reviews on Booksy
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="bg-ink-900 border border-ink-700 rounded-2xl p-5 sm:p-6 shadow-sm"
            >
              <div className="text-accent mb-2 sm:mb-3 text-sm">
                {"★".repeat(r.rating)}
              </div>
              <blockquote className="text-sm sm:text-base text-ink-300 leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-3 sm:mt-4 text-sm font-semibold text-ink-100">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
