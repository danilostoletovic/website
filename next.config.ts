import type { NextConfig } from "next";
import { posthogAssetsHost, posthogHost, posthogProxyPath } from "./lib/posthog";

const nextConfig: NextConfig = {
  // PostHog reverse proxy: keeps analytics requests same-origin so ad
  // blockers don't drop them. Its API paths rely on trailing slashes.
  async rewrites() {
    return [
      {
        source: `${posthogProxyPath}/static/:path*`,
        destination: `${posthogAssetsHost}/static/:path*`,
      },
      {
        source: `${posthogProxyPath}/:path*`,
        destination: `${posthogHost}/:path*`,
      },
    ];
  },
  skipTrailingSlashRedirect: true,
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
