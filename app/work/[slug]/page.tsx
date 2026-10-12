import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrackCaseStudyView } from "@/components/track-case-study-view";
import { TrackedLink } from "@/components/tracked-link";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { getService } from "@/content/services";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

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

  return pageMetadata({
    title: caseStudy.seoTitle,
    description: caseStudy.summary,
    path: `/work/${caseStudy.slug}`,
    draft: caseStudy.draft,
  });
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
    <article>
      <TrackCaseStudyView slug={caseStudy.slug} />
      <header className="mx-auto max-w-7xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20">
        <p className="inline-block bg-accent px-2 py-1 text-sm font-bold tracking-[0.2em] text-accent-ink uppercase">
          Case study
        </p>
        <p className="mt-6 text-sm font-bold tracking-[0.2em] text-muted uppercase">
          {caseStudy.client}
        </p>
        <h1 className="mt-3 max-w-6xl font-display text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-normal uppercase">
          {caseStudy.title}
        </h1>
      </header>

      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <ol className="max-w-4xl space-y-16">
          {sections.map((section, index) => (
            <li key={section.id}>
              <section
                aria-labelledby={`${section.id}-heading`}
                className="grid gap-4 sm:grid-cols-[5rem_1fr]"
              >
                <span aria-hidden="true" className="font-display text-6xl leading-none text-accent">
                  {index + 1}
                </span>
                <div>
                  <h2
                    id={`${section.id}-heading`}
                    className="font-display text-4xl tracking-normal uppercase"
                  >
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed sm:text-xl">{section.body}</p>
                </div>
              </section>
            </li>
          ))}
        </ol>

        {caseStudy.images && caseStudy.images.length > 0 && (
          <section aria-labelledby="screens-heading" className="mt-16">
            <h2
              id="screens-heading"
              className="text-xs font-bold tracking-[0.2em] text-muted uppercase"
            >
              Screenshots
            </h2>
            <ul className="mt-4 flex flex-wrap items-start gap-6">
              {caseStudy.images.map((image, index) => (
                <li
                  key={image.src}
                  className="reveal"
                  style={{ "--i": index } as React.CSSProperties}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className={`h-auto rounded-2xl border-2 border-foreground shadow-[6px_6px_0_0_var(--accent)] ${
                      image.height > image.width
                        ? "w-64 sm:w-72"
                        : "w-full max-w-3xl"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}

        {caseStudy.links.length > 0 && (
          <section aria-labelledby="evidence-heading" className="mt-16 max-w-4xl sm:pl-20">
            <h2
              id="evidence-heading"
              className="text-xs font-bold tracking-[0.2em] text-muted uppercase"
            >
              Check it yourself
            </h2>
            <ul className="mt-4 flex flex-wrap gap-4">
              {caseStudy.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block border-2 border-foreground px-4 py-2 font-semibold hover:border-accent hover:text-accent"
                  >
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {relatedServices.length > 0 && (
          <p className="mt-12 text-muted sm:pl-20">
            Related service:{" "}
            {relatedServices.map((service, index) => (
              <span key={service.slug}>
                {index > 0 && ", "}
                <Link
                  href={`/services/${service.slug}`}
                  className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                >
                  {service.seoTitle}
                </Link>
              </span>
            ))}
          </p>
        )}
      </div>

      <section aria-labelledby="similar-heading" className="bg-accent text-accent-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <h2
            id="similar-heading"
            className="font-display text-5xl leading-none tracking-normal uppercase sm:text-6xl"
          >
            Got a similar problem?
          </h2>
          <TrackedLink
            href={site.bookingUrl}
            event={analyticsEvents.ctaClick}
            eventProperties={{ cta: "book-call", location: `case-study-${caseStudy.slug}` }}
            className="inline-flex items-center justify-center bg-accent-ink px-8 py-4 font-display text-2xl tracking-wide text-foreground uppercase hover:bg-surface sm:text-3xl"
          >
            Book a call
          </TrackedLink>
        </div>
      </section>
    </article>
  );
}
