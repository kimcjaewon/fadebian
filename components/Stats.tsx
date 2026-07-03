import { shop } from "@/lib/config";

export default function Stats() {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - shop.stats.sinceYear;

  const items = [
    { value: `${yearsActive}+`, label: `Years cutting hair` },
    { value: `${shop.stats.cutsCount.toLocaleString()}+`, label: "Clean cuts delivered" },
    { value: `${shop.stats.rating.toFixed(1)}★`, label: `Rating · ${shop.stats.reviewCount}+ reviews` },
    { value: "0", label: "Bad reviews. Ever." }
  ];

  return (
    <section className="py-12 sm:py-16 px-5 sm:px-6 bg-ink-950 border-b border-ink-700">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 text-center">
        {items.map((item) => (
          <div key={item.label}>
            <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-accent leading-none">
              {item.value}
            </div>
            <div className="mt-2 text-[10px] sm:text-xs tracking-[0.15em] uppercase text-ink-500">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
