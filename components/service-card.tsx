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
      className="group flex h-full flex-col rounded-2xl border-2 border-foreground bg-surface p-7 shadow-[6px_6px_0_0_var(--accent)] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_0_var(--accent)]"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-display text-5xl text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
          {service.seoTitle}
        </span>
      </div>
      <p className="mt-6 font-display text-3xl leading-none tracking-normal uppercase">
        &ldquo;{service.audience}&rdquo;
      </p>
      <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
      <p className="mt-3 flex-1 text-muted">{service.summary}</p>
      <span className="mt-8 font-display text-xl tracking-wide uppercase group-hover:text-accent">
        That&apos;s me <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
