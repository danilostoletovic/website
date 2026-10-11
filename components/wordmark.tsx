import { site } from "@/lib/site";

// Type-only logo: "DAN" plain, "DELIVERS" stamped on the accent.
export function Wordmark({ size = "md" }: { size?: "md" | "lg" }) {
  const text = size === "lg" ? "text-4xl sm:text-5xl" : "text-2xl";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-display leading-none tracking-wide uppercase ${text}`}
    >
      <span className="sr-only">{site.name}</span>
      <span aria-hidden="true">Dan</span>
      <span
        aria-hidden="true"
        className="-rotate-2 bg-accent px-1.5 pt-1 pb-0.5 text-accent-ink"
      >
        Delivers
      </span>
    </span>
  );
}
