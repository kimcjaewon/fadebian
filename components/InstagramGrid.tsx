"use client";

import { useEffect } from "react";
import { shop } from "@/lib/config";

// Real Instagram posts from @fadebian. Instagram's official embed loads the
// actual photo, likes, caption, and a "View on Instagram" CTA for each.
//
// To swap in a new post: go to instagram.com/fadebian, open a post, copy its
// URL, and paste it in this array. That's it — the embed refreshes on next
// page load.
const posts = [
  "https://www.instagram.com/fadebian/p/DDvnod9pfVd/",
  "https://www.instagram.com/fadebian/p/C8r_Y4SPMRw/",
  "https://www.instagram.com/fadebian/p/C5OyHzVScLF/"
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramGrid() {
  useEffect(() => {
    // Load Instagram's embed script once, then reprocess on remount so the
    // blockquotes turn into real embeds.
    const scriptId = "instagram-embed-script";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!existing) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      script.onload = () => window.instgrm?.Embeds.process();
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-start">
          {posts.map((permalink) => (
            <blockquote
              key={permalink}
              className="instagram-media"
              data-instgrm-permalink={permalink}
              data-instgrm-version="14"
              style={{
                background: "#FFFFFF",
                border: 0,
                margin: 0,
                minWidth: 0,
                width: "100%"
              }}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href={shop.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base tracking-wide transition"
          >
            <span>Follow {shop.instagram} on Instagram</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
