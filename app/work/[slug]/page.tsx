import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCallButton } from "@/components/book-call-button";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getService } from "@/content/services";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    alternates: { canonical: `/work/${caseStudy.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  const sections = [
    { id: "problem", heading: "The problem", body: caseStudy.problem },
    { id: "what-i-did", heading: "What I did", body: caseStudy.whatIDid },
    { id: "result", heading: "The result", body: caseStudy.result },
  ];
  const relatedServices = caseStudy.services
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => service !== undefined);

  return (
    <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          Case study · {caseStudy.client}
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance">
          {caseStudy.title}
        </h1>
      </header>

      <div className="mt-16 max-w-3xl space-y-14">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={`${section.id}-heading`}>
            <h2
              id={`${section.id}-heading`}
              className="font-display text-3xl font-bold tracking-tight"
            >
              {section.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed sm:text-xl">{section.body}</p>
          </section>
        ))}
      </div>

      {relatedServices.length > 0 && (
        <p className="mt-16 text-muted">
          Service:{" "}
          {relatedServices.map((service, index) => (
            <span key={service.slug}>
              {index > 0 && ", "}
              <Link
                href={`/services/${service.slug}`}
                className="font-semibold text-foreground underline underline-offset-4 hover:text-accent"
              >
                {service.seoTitle}
              </Link>
            </span>
          ))}
        </p>
      )}

      <div className="mt-16 rounded-3xl bg-foreground p-8 text-background sm:p-12">
        <p className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Got a similar problem?
        </p>
        <div className="mt-8">
          <BookCallButton location={`case-study-${caseStudy.slug}`} />
        </div>
      </div>
    </article>
  );
}
