import Link from "next/link";
import type { Service } from "@/content/services";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col border-t-2 border-foreground pt-6 transition-colors hover:border-accent"
    >
      <span className="font-display text-sm font-bold text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
        {service.title}
      </h3>
      <p className="mt-4 flex-1 text-muted">{service.summary}</p>
      <span className="mt-6 font-semibold group-hover:text-accent">
        {service.seoTitle} <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
