import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group flex h-full flex-col rounded-3xl bg-surface p-7 ring-1 ring-line transition hover:ring-2 hover:ring-foreground sm:p-10"
    >
      <p className="text-sm font-semibold text-muted">{caseStudy.client}</p>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
        {caseStudy.title}
      </h3>
      <p className="mt-4 flex-1 text-muted">{caseStudy.summary}</p>
      <span className="mt-8 font-semibold group-hover:text-accent">
        Read the case study <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
