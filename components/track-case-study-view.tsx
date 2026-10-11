"use client";

import posthog from "posthog-js";
import { useEffect } from "react";
import { analyticsEvents } from "@/lib/analytics";

export function TrackCaseStudyView({ slug }: { slug: string }) {
  useEffect(() => {
    posthog.capture(analyticsEvents.caseStudyView, { slug });
  }, [slug]);

  return null;
}
