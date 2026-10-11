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
      className="group flex h-full flex-col border-2 border-line bg-surface p-7 transition-colors hover:border-accent"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-display text-5xl text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
          {service.seoTitle}
        </span>
      </div>
      <p className="mt-6 font-display text-3xl leading-none tracking-tight uppercase">
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
