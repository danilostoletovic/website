export type Service = {
  slug: string;
  // The visitor's situation, in their words. Card eyebrow.
  audience: string;
  // Card heading and page H1.
  title: string;
  // Used in the <title> tag, so phrase it the way clients search.
  seoTitle: string;
  // Card text and meta description.
  summary: string;
  // The client's problem.
  problem: string;
  // One honest, slightly funny line.
  quip: string;
  included: string[];
  timeline: string;
  price: string;
  // Drafts render but are noindexed and left out of the sitemap.
  draft: boolean;
};

export const services: Service[] = [
  {
    slug: "website-design-and-development",
    audience: "I just need a website.",
    title: "A website that does its job",
    seoTitle: "Website design and development",
    summary:
      "A fast, responsive site that explains what you do and makes the next step easy: an enquiry, a booking or a purchase.",
    problem:
      "You need a first website, a redesign or a landing page. It should explain what you do and make getting in touch easy, without turning into a huge software project.",
    quip: "Your opening hours probably don't need their own engineering department.",
    included: [
      "Responsive build for phones, tablets and desktop",
      "Clear navigation, readable content and accessible interactions",
      "Fast pages and performance-conscious images",
      "SEO foundations: titles, descriptions, canonical URLs, internal links and a sitemap",
      "Contact forms, booking services and API connections",
      "Domain, DNS, hosting and business email setup",
      "Deployment, source handover and maintenance guidance",
    ],
    timeline:
      "Agreed before I start, based on pages, content and integrations.",
    price:
      "Quoted per project. It depends on content, number of pages, integrations and support.",
    draft: false,
  },
  {
    slug: "web-app-development",
    audience: "I run a business.",
    title: "Software that fits the way you work",
    seoTitle: "Custom web apps and AI integrations",
    summary:
      "Spreadsheets, disconnected tools or an off-the-shelf product getting in the way? I build the app, integration or AI feature around the job you actually do.",
    problem:
      "Part of your business runs on spreadsheets, copy-paste and tools that don't talk to each other. An internal tool can organise information, connect APIs or remove repeated data entry. First I compare an existing product, a small integration and a custom build, and only build what solves the actual problem.",
    quip: "You probably didn't start a business because you love configuring DNS.",
    included: [
      "Web interfaces and backend APIs for a defined workflow",
      "Integrations with services you're authorised to use",
      "Practical AI features: assistants, API integrations and automation",
      "A scoped prototype, a testable release and source handover",
    ],
    timeline:
      "The smallest useful first release, with checkpoints where you see working software.",
    price:
      "Depends on scope. I review the fit before we agree on price and timing.",
    draft: false,
  },
  {
    slug: "mobile-app-development",
    audience: "I have an idea.",
    title: "From idea to Play Store",
    seoTitle: "Android and Flutter app development",
    summary:
      "You have a product in mind. I take it from prototype or MVP through development, integration and Google Play preparation.",
    problem:
      "You have a product in mind and need someone to turn it into software people can actually use, from the first prototype to a release.",
    quip: "The idea is the easy part. Annoyingly, the app still needs building.",
    included: [
      "Flutter and native Android apps",
      "Multiplatform applications",
      "APIs and backend integration",
      "Practical AI features",
      "Deployment and Google Play preparation (store approval is up to the store)",
    ],
    timeline:
      "Agreed up front, from prototype or MVP to release, with checkpoints along the way.",
    price:
      "Depends on scope. I review the idea before we agree on price and timing.",
    draft: false,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
