export const site = {
  name: "Dan Delivers",
  // Full name everywhere, spelled without the diacritic so it matches how
  // people type it into search. JSON-LD also lists "Stoletović" as an alias.
  owner: "Danilo Stoletovic",
  url: "https://dandelivers.dev",
  headline: "Got a plan? Dan's your man.",
  email: "contact@danilostoletovic.com",
  // Cal.com username/path. The contact section opens it as a popup; every
  // other "Book a call" button links to bookingUrl.
  calLink: "danilo-stoletovic-uhxzlu",
  bookingUrl: "https://cal.com/danilo-stoletovic-uhxzlu",
  // WhatsApp username. To use a phone number instead, put the digits only
  // (country code included; no +, spaces or dashes). The only place to change.
  whatsapp: "dandelivers",
  // TODO: X/Twitter handle (e.g. "@handle") for twitter:site. Left empty,
  // the tag is omitted.
  twitterHandle: "" as string,
} as const;

// Prefilled first message for WhatsApp chats started from the site.
export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  `Hi ${site.name}, I found you via your website`,
)}`;

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
