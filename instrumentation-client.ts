import posthog from "posthog-js";
import { posthogProxyPath, posthogUiHost } from "@/lib/posthog";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

// Without a key (local dev, forks) analytics stays off and capture() is a no-op.
if (key) {
  try {
    posthog.init(key, {
      api_host: posthogProxyPath,
      ui_host: posthogUiHost,
      defaults: "2026-08-30",
    });
  } catch (error) {
    console.error("PostHog failed to initialise", error);
  }
}
