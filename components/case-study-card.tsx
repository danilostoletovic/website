import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({
  caseStudy,
  tabIndex,
}: {
  caseStudy: CaseStudy;
  tabIndex?: number;
}) {
  const image = caseStudy.images?.[0];
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      tabIndex={tabIndex}
      className="group flex h-full flex-col rounded-2xl border-2 border-foreground bg-surface p-7 shadow-[6px_6px_0_0_var(--accent)] transition hover:-translate-y-1 hover:shadow-[9px_9px_0_0_var(--accent)] sm:p-7"
    >
      {image && (
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-lg border border-line bg-background">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 560px, (min-width: 768px) 45vw, 90vw" className="object-contain p-3" />
        </div>
      )}
      <p className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
        {caseStudy.client}
      </p>
      <h3 className="mt-4 font-display text-2xl leading-[1.05] tracking-normal uppercase sm:text-3xl">
        {caseStudy.title}
      </h3>
      <p className="mt-4 flex-1 text-muted">{caseStudy.summary}</p>
      <span className="mt-5 font-display text-xl tracking-wide uppercase group-hover:text-accent">
        See the proof <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
