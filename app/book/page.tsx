import { Suspense } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CalEmbed from "@/components/CalEmbed";
import { getServiceById, services } from "@/lib/config";

export const metadata = { title: "Book — Fadebian" };

export default function BookPage({
  searchParams
}: {
  searchParams: { event?: string };
}) {
  // Look up the selected service by Cal slug (passed via ?event=...)
  const requested = searchParams.event;
  const service = requested
    ? services.find((s) => s.calSlug === requested)
    : undefined;

  return (
    <>
      <Nav />
      <main className="pt-28 pb-12 min-h-screen bg-ink-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="gold-rule" />
            <h1 className="font-display font-black text-4xl md:text-5xl">
              {service ? `Book ${service.name}` : "Book your cut"}
            </h1>
            {service && (
              <p className="mt-2 text-ink-300">
                ${service.priceUsd} · {service.durationMin} min
              </p>
            )}
          </div>

          <div className="bg-ink-900 border border-ink-800 rounded-2xl overflow-hidden">
            <Suspense fallback={<div className="p-8 text-ink-500">Loading…</div>}>
              <CalEmbed eventSlug={service?.calSlug} />
            </Suspense>
          </div>

          <p className="mt-6 text-xs text-ink-500 text-center">
            Bookings are powered by Cal.com. Payment is collected in person at the shop.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
