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
        // Light theme with crimson accent to match the site
        theme: "light",
        styles: {
          branding: { brandColor: "#C8102E" }
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
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
