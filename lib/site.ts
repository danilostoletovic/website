export const site = {
  name: "Dan Delivers",
  // ASCII spelling for page titles, so name searches without the diacritic
  // still match.
  owner: "Danilo Stoletovic",
  // Full name for the bio, structured data and press.
  fullName: "Danilo Stoletović",
  url: "https://dandelivers.com",
  headline: "Got a plan? Dan's your man.",
  email: "contact@danilostoletovic.com",
  // TODO: real booking link (Cal.com, Calendly, ...)
  bookingUrl: "#TODO-booking-url",
  // TODO: X/Twitter handle (e.g. "@handle") for twitter:site. Left empty,
  // the tag is omitted.
  twitterHandle: "" as string,
} as const;

export type ContactLink = {
  label: string;
  href: string;
};

export const contactLinks: ContactLink[] = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "GitHub", href: "https://github.com/danilostoletovic" },
  { label: "LinkedIn", href: "https://linkedin.com/in/danilostoletovic" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/danilostoletovic" },
  { label: "Fiverr Pro", href: "https://pro.fiverr.com/freelancers/stoletovicd" },
];
