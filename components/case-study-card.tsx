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
      className="work-card group flex h-full flex-col"
    >
      {image && (
        <div className="work-image relative mb-6 aspect-[16/10] overflow-hidden border border-line bg-surface">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1280px) 760px, (min-width: 768px) 60vw, 90vw" className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]" />
        </div>
      )}
      <p className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
        {caseStudy.client}
      </p>
      <h3 className="mt-4 font-display text-2xl leading-[1.05] tracking-normal uppercase sm:text-3xl">
        {caseStudy.title}
      </h3>
      <p className="mt-4 flex-1 text-muted">{caseStudy.summary}</p>
      <span className="mt-5 font-display text-xl tracking-wide uppercase group-hover:underline group-hover:underline-offset-4">
        See the proof <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
