import { reviews } from "@/lib/config";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-ink-950">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="gold-rule" />
          <h2 className="font-display font-black text-4xl md:text-6xl text-ink-100">
            What clients say
          </h2>
          <p className="mt-4 text-ink-300">
            <span className="text-accent">★★★★★</span> &nbsp;5.0 average · 20+ reviews on Booksy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="bg-ink-900 border border-ink-700 rounded-2xl p-6 shadow-sm"
            >
              <div className="text-accent mb-3">
                {"★".repeat(r.rating)}
              </div>
              <blockquote className="text-ink-300 leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink-100">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
