import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { site } from "@/lib/site";

// Pages that aren't driven by content/. Bump updatedAt when their copy
// changes, so lastModified stays truthful.
const staticPages = [
  { path: "", updatedAt: "2026-10-12" },
  { path: "/about", updatedAt: "2026-10-12" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services
    .filter((service) => !service.draft)
    .map((service) => ({
      path: `/services/${service.slug}`,
      updatedAt: service.updatedAt,
    }));
  const caseStudyPages = caseStudies
    .filter((caseStudy) => !caseStudy.draft)
    .map((caseStudy) => ({
      path: `/work/${caseStudy.slug}`,
      updatedAt: caseStudy.updatedAt,
    }));

  return [...staticPages, ...servicePages, ...caseStudyPages].map(
    ({ path, updatedAt }) => ({
      url: `${site.url}${path}`,
      lastModified: updatedAt,
    }),
  );
}
