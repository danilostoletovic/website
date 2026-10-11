// Ingestion host, e.g. https://us.i.posthog.com or https://eu.i.posthog.com.
// Shared by the rewrite proxy in next.config.ts and instrumentation-client.ts.
export const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

// Static assets live on a sibling host: us.i.posthog.com -> us-assets.i.posthog.com
export const posthogAssetsHost = posthogHost.replace(
  /\/\/(\w+)\.i\.posthog\.com/,
  "//$1-assets.i.posthog.com",
);

// PostHog app links (toolbar etc.): us.i.posthog.com -> us.posthog.com
export const posthogUiHost = posthogHost.replace(".i.posthog.com", ".posthog.com");

// Same-origin path that next.config.ts rewrites to PostHog, so ad blockers
// don't drop events.
export const posthogProxyPath = "/ingest";
