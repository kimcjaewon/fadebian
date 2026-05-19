import { shop } from "@/lib/config";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}

export default function Visit() {
  return (
    <section id="visit" className="py-16 sm:py-24 px-5 sm:px-6 bg-ink-900 border-t border-ink-700">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
        <div>
          <span className="gold-rule" />
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ink-100">
            Visit the shop
          </h2>
          <p className="mt-3 sm:mt-4 text-ink-300 leading-relaxed">
            {shop.address.line1}<br />
            {shop.address.city}, {shop.address.state} {shop.address.zip}
          </p>
          <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
            <a
              href={shop.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm tracking-wide transition shadow-sm shadow-accent/20"
            >
              Get directions
            </a>
            <a
              href={`tel:${shop.phone.replace(/[^\d+]/g, "")}`}
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-ink-700 hover:border-ink-100 text-ink-300 hover:text-ink-100 text-sm tracking-wide transition"
            >
              {shop.phone}
            </a>
            <a
              href={shop.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-ink-700 hover:border-ink-100 text-ink-300 hover:text-ink-100 text-sm tracking-wide transition"
            >
              {shop.instagram}
            </a>
          </div>
        </div>

        <div className="bg-ink-950 border border-ink-700 rounded-2xl p-5 sm:p-8">
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-ink-100">Hours</h3>
          <dl className="divide-y divide-ink-700">
            {dayNames.map((name, i) => {
              const h = shop.hours[i as 0 | 1 | 2 | 3 | 4 | 5 | 6];
              return (
                <div key={name} className="flex items-center justify-between py-2.5 sm:py-3 text-sm">
                  <dt className="text-ink-300">{name}</dt>
                  <dd className={h ? "text-ink-100 font-medium" : "text-ink-500 italic"}>
                    {h ? `${formatTime(h.open)} – ${formatTime(h.close)}` : "Closed"}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
