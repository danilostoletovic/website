import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group flex h-full flex-col border-l-8 border-accent bg-surface p-7 transition-colors hover:bg-line sm:p-10"
    >
      <p className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
        {caseStudy.client}
      </p>
      <h3 className="mt-4 font-display text-3xl leading-[0.95] tracking-tight uppercase sm:text-4xl">
        {caseStudy.title}
      </h3>
      <p className="mt-5 flex-1 text-muted">{caseStudy.summary}</p>
      <span className="mt-8 font-display text-xl tracking-wide uppercase group-hover:text-accent">
        See the proof <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
