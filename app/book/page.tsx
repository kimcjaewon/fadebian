import { Suspense } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CalEmbed from "@/components/CalEmbed";
import { services, shop } from "@/lib/config";

export const metadata = { title: "Book — Fadebian" };

export default function BookPage({
  searchParams
}: {
  searchParams: { event?: string };
}) {
  const requested = searchParams.event;
  const service = requested
    ? services.find((s) => s.calSlug === requested)
    : undefined;

  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-28 pb-12 min-h-screen bg-ink-950">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="mb-6 sm:mb-8">
            <span className="gold-rule" />
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ink-100">
              {service ? `Book ${service.name}` : "Book your cut"}
            </h1>
            {service && (
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-ink-300">
                ${service.priceUsd} · {service.durationMin} min
              </p>
            )}
          </div>

          <div className="bg-ink-900 border border-ink-700 rounded-2xl overflow-hidden shadow-sm">
            <Suspense fallback={<div className="p-8 text-ink-500">Loading…</div>}>
              <CalEmbed eventSlug={service?.calSlug} />
            </Suspense>
          </div>

          <p className="mt-5 sm:mt-6 text-xs text-ink-500 text-center px-4">
            Payment is collected in person at the shop.
          </p>

          {/* Booksy fallback for anyone who prefers the app they already use */}
          <div className="mt-10 sm:mt-14 pt-8 border-t border-ink-700 text-center">
            <p className="text-xs sm:text-sm text-ink-500 mb-3">
              Prefer to book through Booksy?
            </p>
            <a
              href={shop.booksyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-accent transition font-medium"
            >
              <span>Book on Booksy instead</span>
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
