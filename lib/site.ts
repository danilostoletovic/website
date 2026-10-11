export const site = {
  name: "Dan Delivers",
  owner: "Danilo Stoletovic",
  url: "https://dandelivers.com",
  headline: "Got a plan? Dan's your man.",
  // TODO: real booking link (Cal.com, Calendly, ...)
  bookingUrl: "#TODO-booking-url",
} as const;

export type ContactLink = {
  label: string;
  href: string;
};

// TODO: replace every href with the real profile or address.
export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:TODO@dandelivers.com" },
  { label: "GitHub", href: "#TODO-github-url" },
  { label: "LinkedIn", href: "#TODO-linkedin-url" },
  { label: "Upwork", href: "#TODO-upwork-url" },
];
