import { TrackedLink } from "@/components/tracked-link";
import { analyticsEvents } from "@/lib/analytics";
import { site } from "@/lib/site";

type BookCallButtonProps = {
  // Where the button sits on the page; sent with the CTA click event.
  location: string;
  size?: "sm" | "lg";
  label?: string;
};

export function BookCallButton({
  location,
  size = "lg",
  label = "Book a call",
}: BookCallButtonProps) {
  const sizing =
    size === "sm"
      ? "px-4 py-2 text-base"
      : "px-8 py-4 text-2xl shadow-[6px_6px_0_0_var(--foreground)] hover:shadow-[3px_3px_0_0_var(--foreground)] hover:translate-x-0.75 hover:translate-y-0.75 sm:text-3xl";

  return (
    <TrackedLink
      href={site.bookingUrl}
      event={analyticsEvents.ctaClick}
      eventProperties={{ cta: "book-call", location }}
      className={`inline-flex items-center justify-center rounded-xl bg-accent font-display tracking-wide text-accent-ink uppercase transition focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-foreground ${sizing}`}
    >
      {label}
    </TrackedLink>
  );
}
