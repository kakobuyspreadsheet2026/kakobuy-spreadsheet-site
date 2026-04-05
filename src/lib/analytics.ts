type TrackPayload = {
  href: string;
  label: string;
  location: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackCtaClick({ href, label, location }: TrackPayload) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "select_content", {
    content_type: "cta",
    item_id: href,
    item_name: label,
    location_id: location,
  });
}
