import { TrackedLink } from "@/components/tracked-link";
import { analyticsEvents } from "@/lib/analytics";
import { contactLinks } from "@/lib/site";

type ContactLinksProps = {
  // Where the list sits on the page; sent with the contact click event.
  location: string;
  className?: string;
  linkClassName?: string;
};

export function ContactLinks({ location, className, linkClassName }: ContactLinksProps) {
  return (
    <ul className={className}>
      {contactLinks.map((link) => (
        <li key={link.label}>
          <TrackedLink
            href={link.href}
            event={analyticsEvents.contactClick}
            eventProperties={{ channel: link.label, location }}
            className={linkClassName}
          >
            {link.label}
          </TrackedLink>
        </li>
      ))}
    </ul>
  );
}
