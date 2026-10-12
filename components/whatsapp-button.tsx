import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { analyticsEvents } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/site";

// Secondary contact action: opens a WhatsApp chat with a prefilled message.
export function WhatsAppButton({
  location,
  className = "",
}: {
  // Where the button sits on the page; sent with the contact click event.
  location: string;
  className?: string;
}) {
  return (
    <TrackedLink
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Dan Delivers on WhatsApp"
      event={analyticsEvents.contactClick}
      eventProperties={{ channel: "WhatsApp", location }}
      className={`inline-flex items-center justify-center gap-3 rounded-xl border-2 border-foreground px-6 py-3 font-display text-xl tracking-wide uppercase transition-colors hover:border-accent hover:text-accent focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:text-2xl ${className}`}
    >
      <WhatsAppIcon className="size-7 shrink-0" />
      Message on WhatsApp
    </TrackedLink>
  );
}
