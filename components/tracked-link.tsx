"use client";

import posthog from "posthog-js";
import type { ComponentProps } from "react";
import type { AnalyticsEvent } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<"a"> & {
  event: AnalyticsEvent;
  eventProperties?: Record<string, string>;
};

// A plain <a> that sends a PostHog event on click.
export function TrackedLink({
  event,
  eventProperties,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        posthog.capture(event, eventProperties);
        onClick?.(clickEvent);
      }}
    />
  );
}
