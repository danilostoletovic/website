import type { MetadataRoute } from "next";
import { posthogProxyPath } from "@/lib/posthog";
import { site } from "@/lib/site";

// Vercel sets VERCEL_ENV at build time. Only the production deployment may
// be indexed; preview and local builds tell crawlers to stay out, so preview
// URLs never compete with dandelivers.com in search.
const isProduction = process.env.VERCEL_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Analytics proxy, not content.
      disallow: `${posthogProxyPath}/`,
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
