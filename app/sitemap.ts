import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about"];
  const servicePages = services
    .filter((service) => !service.draft)
    .map((service) => `/services/${service.slug}`);
  const caseStudyPages = caseStudies
    .filter((caseStudy) => !caseStudy.draft)
    .map((caseStudy) => `/work/${caseStudy.slug}`);

  return [...pages, ...servicePages, ...caseStudyPages].map((path) => ({
    url: `${site.url}${path}`,
  }));
}
