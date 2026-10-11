import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookCallButton } from "@/components/book-call-button";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/content/case-studies";
import { getService, services } from "@/content/services";
import { JsonLd, personJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.seoTitle,
    description: service.summary,
    path: `/services/${service.slug}`,
    draft: service.draft,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = caseStudies.filter((caseStudy) =>
    caseStudy.services.includes(service.slug),
  );

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.seoTitle,
          description: service.summary,
          url: `${site.url}/services/${service.slug}`,
          serviceType: service.seoTitle,
          areaServed: "Worldwide",
          provider: personJsonLd(),
        }}
      />

      <header className="mx-auto max-w-7xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20">
        <p className="inline-block bg-accent px-2 py-1 text-sm font-bold tracking-[0.2em] text-accent-ink uppercase">
          {service.seoTitle}
        </p>
        <p className="mt-6 font-display text-3xl tracking-wide text-muted uppercase sm:text-4xl">
          &ldquo;{service.audience}&rdquo;
        </p>
        <h1 className="mt-3 font-display text-[clamp(3rem,10vw,8rem)] leading-[0.85] tracking-tight uppercase">
          {service.title}
        </h1>
        <p className="mt-10 max-w-3xl border-l-8 border-accent pl-6 text-xl leading-relaxed sm:text-2xl">
          {service.problem}
        </p>
        <p className="mt-6 max-w-3xl text-lg text-muted italic">{service.quip}</p>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <section aria-labelledby="included-heading">
          <h2
            id="included-heading"
            className="font-display text-4xl tracking-tight uppercase sm:text-5xl"
          >
            What you get
          </h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {service.included.map((item) => (
              <li key={item} className="flex gap-4 py-4 text-lg">
                <span aria-hidden="true" className="font-display text-accent">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <aside
          aria-label="Timeline and price"
          className="h-fit border-4 border-accent bg-surface p-8"
        >
          <dl className="space-y-6">
            <div>
              <dt className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
                Timeline
              </dt>
              <dd className="mt-2 text-lg">{service.timeline}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
                How it&apos;s priced
              </dt>
              <dd className="mt-2 text-lg">{service.price}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <BookCallButton location={`service-${service.slug}`} />
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <h2
              id="related-heading"
              className="font-display text-4xl tracking-tight uppercase sm:text-5xl"
            >
              Proof I&apos;ve done this
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {related.map((caseStudy) => (
                <li key={caseStudy.slug}>
                  <CaseStudyCard caseStudy={caseStudy} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
