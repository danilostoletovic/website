export type CaseStudy = {
  slug: string;
  // States the client's problem and the result.
  title: string;
  client: string;
  // Card text and meta description.
  summary: string;
  problem: string;
  whatIDid: string;
  result: string;
  // Slugs from content/services.ts.
  services: string[];
  // Drafts render but are noindexed and left out of the sitemap.
  draft: boolean;
};

// TODO: replace these placeholders with real projects. Rename the slugs too,
// since they become the URLs.
export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-one",
    title: "TODO: title that states the client's problem and the result",
    client: "TODO: client name and what they do",
    summary: "TODO: one or two sentences on the problem and the result.",
    problem: "TODO: what was going wrong for the client, in their words.",
    whatIDid: "TODO: what I did about it, framed around their problem.",
    result: "TODO: the result, with real numbers if the client agrees.",
    services: ["website-design-and-development"],
    draft: true,
  },
  {
    slug: "case-study-two",
    title: "TODO: title that states the client's problem and the result",
    client: "TODO: client name and what they do",
    summary: "TODO: one or two sentences on the problem and the result.",
    problem: "TODO: what was going wrong for the client, in their words.",
    whatIDid: "TODO: what I did about it, framed around their problem.",
    result: "TODO: the result, with real numbers if the client agrees.",
    services: ["web-app-development"],
    draft: true,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
