import Link from "next/link";
import { shop } from "@/lib/config";

export default function ReferralProgram() {
  return (
    <section
      id="refer"
      className="py-16 sm:py-24 px-5 sm:px-6 bg-ink-950 border-y border-ink-700"
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="gold-rule" />
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-ink-100">
          Refer a friend.<br className="sm:hidden" /> Both of you save.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-300 max-w-md mx-auto">
          Send a friend to Fadebian and get rewarded — every single time.
        </p>

        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
          <div className="bg-ink-900 border border-ink-700 rounded-2xl p-6 shadow-sm">
            <div className="text-xs tracking-[0.2em] uppercase text-ink-500 mb-2">
              Your first referral
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-accent leading-tight">
              50% off next cut
            </div>
            <p className="mt-2 text-sm text-ink-300">
              For both you AND the friend you brought in. One-time bonus for
              being the first to spread the word.
            </p>
          </div>

          <div className="bg-ink-900 border border-ink-700 rounded-2xl p-6 shadow-sm">
            <div className="text-xs tracking-[0.2em] uppercase text-ink-500 mb-2">
              Every referral after that
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-accent leading-tight">
              $5 off next cut
            </div>
            <p className="mt-2 text-sm text-ink-300">
              For both of you. Keep the referrals coming — every friend you send
              in earns you $5 off your next visit.
            </p>
          </div>
        </div>

        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-ink-500 max-w-md mx-auto leading-relaxed">
          When booking, just enter the name of whoever referred you. Discount
          applied at checkout — no codes to remember.
        </p>

        <Link
          href="/book"
          className="inline-block mt-6 sm:mt-8 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-full tracking-wide transition shadow-lg shadow-accent/20"
        >
          Book & refer someone
        </Link>
      </div>
    </section>
  );
}
