"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { shop } from "@/lib/config";

type Props = {
  // The Cal.com event slug, e.g. "haircut" or "haircut-beard".
  // If undefined, shows Fadebian's main Cal page (all event types listed).
  eventSlug?: string;
};

export default function CalEmbed({ eventSlug }: Props) {
  const calLink = eventSlug
    ? `${shop.calUsername}/${eventSlug}`
    : shop.calUsername;
  const namespace = eventSlug ?? "main";

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        // Match the dark, gold-accent vibe of the rest of the site
        theme: "dark",
        styles: {
          branding: { brandColor: "#d4af37" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", minHeight: 680, overflow: "scroll" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
