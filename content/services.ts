export type Service = {
  slug: string;
  // Card heading and page H1.
  title: string;
  // Used in the <title> tag, so phrase it the way clients search.
  seoTitle: string;
  // Card text and meta description.
  summary: string;
  // The client's problem, in their words.
  problem: string;
  included: string[];
  timeline: string;
  price: string;
  // Drafts render but are noindexed and left out of the sitemap.
  draft: boolean;
};

export const services: Service[] = [
  {
    slug: "website-design-and-development",
    title: "A website that brings in clients",
    seoTitle: "Website design and development",
    summary:
      "Your site looks fine but the phone doesn't ring. I build a fast, clear website that turns visitors into enquiries.",
    problem:
      "You've got a business worth talking about, but your website is slow, dated or hard to use, so people leave before they ever get in touch.",
    included: [
      "TODO: confirm: page design and copy structure",
      "TODO: confirm: build, launch and hosting setup",
      "TODO: confirm: basic SEO so people can find you",
      "TODO: confirm: contact form or booking link",
    ],
    timeline: "TODO: typical timeline",
    price: "TODO: starting price or range",
    draft: true,
  },
  {
    slug: "web-app-development",
    title: "A web app that does the work for you",
    seoTitle: "Web app development",
    summary:
      "Spreadsheets and copy-paste are eating your week. I build the web app that handles it, so you can get back to the actual job.",
    problem:
      "Part of your business runs on spreadsheets, email threads and manual steps. It works, until it doesn't, and it eats hours every week.",
    included: [
      "TODO: confirm: scoping call to map the workflow",
      "TODO: confirm: design and build of the app",
      "TODO: confirm: accounts, data and integrations you need",
      "TODO: confirm: launch and handover",
    ],
    timeline: "TODO: typical timeline",
    price: "TODO: starting price or range",
    draft: true,
  },
  {
    slug: "website-redesign",
    title: "A redesign that fixes what's not working",
    seoTitle: "Website redesign",
    summary:
      "Your current site is holding you back. I rebuild it around what your clients need, without losing what already works.",
    problem:
      "Your site was built a while ago. It's slow on phones, hard to update and doesn't reflect what you do now.",
    included: [
      "TODO: confirm: review of the current site",
      "TODO: confirm: new design and rebuild",
      "TODO: confirm: content and redirects carried over",
      "TODO: confirm: launch without losing search rankings",
    ],
    timeline: "TODO: typical timeline",
    price: "TODO: starting price or range",
    draft: true,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
