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
      className={`inline-flex items-center justify-center gap-3 rounded-xl border border-line bg-surface px-5 py-3 text-base font-semibold text-muted transition-colors hover:border-muted hover:text-foreground focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-foreground ${className}`}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      Message on WhatsApp
    </TrackedLink>
  );
}
