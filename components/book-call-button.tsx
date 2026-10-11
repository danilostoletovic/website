import { site } from "@/lib/site";

type BookCallButtonProps = {
  // Where the button sits on the page; used for analytics.
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
    size === "sm" ? "px-4 py-2 text-sm" : "px-7 py-4 text-base sm:text-lg";

  return (
    <a
      href={site.bookingUrl}
      data-location={location}
      className={`inline-flex items-center justify-center rounded-full bg-accent font-semibold text-accent-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground ${sizing}`}
    >
      {label}
    </a>
  );
}
