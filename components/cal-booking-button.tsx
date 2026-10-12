"use client";

import posthog from "posthog-js";
import { useEffect, useRef } from "react";
import { analyticsEvents } from "@/lib/analytics";
import { site } from "@/lib/site";

const namespace = "dan-delivers";
const calConfig = { layout: "month_view" } as const;

type CalGlobal = { ns?: Record<string, { instance?: unknown }> };

// embed.js sets `instance` on each namespace once it has actually loaded.
// Until then a click must fall through to the plain link.
function calIsReady() {
  const cal = (window as Window & { Cal?: CalGlobal }).Cal;
  return Boolean(cal?.ns?.[namespace]?.instance);
}

let loading: Promise<void> | null = null;

// Loads Cal.com's embed script once, on demand, so it never competes with
// the initial page load.
function loadCal() {
  loading ??= import("@calcom/embed-react")
    .then(({ getCalApi }) => getCalApi({ namespace }))
    .then((cal) => {
      cal("ui", {
        theme: "dark",
        layout: calConfig.layout,
        cssVarsPerTheme: {
          light: { "cal-brand": "#ff2b2b" },
          dark: { "cal-brand": "#ff2b2b" },
        },
      });
    })
    .catch(() => {
      // Blocked or offline: the button keeps working as a normal link.
      loading = null;
    });
  return loading;
}

// A real link to Cal.com (works without JavaScript, opens a new tab). Once
// the embed has loaded, embed.js opens the booking popup from the data-cal-*
// attributes instead, and the link navigation is cancelled.
export function CalBookingButton({
  location,
  label = "Book a 15-min call",
}: {
  location: string;
  label?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Start loading when the button is about to scroll into view.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void loadCal();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cal-link={site.calLink}
      data-cal-namespace={namespace}
      data-cal-config={JSON.stringify(calConfig)}
      onPointerEnter={() => void loadCal()}
      onFocus={() => void loadCal()}
      onTouchStart={() => void loadCal()}
      onClick={(event) => {
        posthog.capture(analyticsEvents.ctaClick, {
          cta: "book-call-cal",
          location,
        });
        if (calIsReady()) event.preventDefault();
      }}
      className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 font-display text-2xl tracking-wide text-accent-ink uppercase shadow-[6px_6px_0_0_var(--foreground)] transition hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[3px_3px_0_0_var(--foreground)] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:text-3xl"
    >
      {label}
    </a>
  );
}
