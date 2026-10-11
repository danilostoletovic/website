import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCallButton } from "@/components/book-call-button";
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
    <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.seoTitle,
          description: service.summary,
          url: `${site.url}/services/${service.slug}`,
          serviceType: service.seoTitle,
          provider: personJsonLd(),
        }}
      />
      <header className="max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          {service.seoTitle}
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance">
          {service.title}
        </h1>
        <p className="mt-8 border-l-4 border-accent pl-5 text-lg leading-relaxed sm:text-xl">
          {service.problem}
        </p>
      </header>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <section aria-labelledby="included-heading">
          <h2 id="included-heading" className="font-display text-3xl font-bold tracking-tight">
            What&apos;s included
          </h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {service.included.map((item) => (
              <li key={item} className="py-4 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <aside aria-label="Timeline and price" className="h-fit rounded-3xl bg-surface p-8 ring-1 ring-line">
          <dl className="space-y-6">
            <div>
              <dt className="text-sm font-semibold tracking-[0.2em] text-muted uppercase">
                Typical timeline
              </dt>
              <dd className="mt-2 font-display text-2xl font-bold">{service.timeline}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold tracking-[0.2em] text-muted uppercase">
                Starting price
              </dt>
              <dd className="mt-2 font-display text-2xl font-bold">{service.price}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <BookCallButton location={`service-${service.slug}`} />
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-20">
          <h2 id="related-heading" className="font-display text-3xl font-bold tracking-tight">
            Related work
          </h2>
          <ul className="mt-6 space-y-3">
            {related.map((caseStudy) => (
              <li key={caseStudy.slug}>
                <Link
                  href={`/work/${caseStudy.slug}`}
                  className="text-lg font-semibold underline decoration-2 underline-offset-8 hover:text-accent"
                >
                  {caseStudy.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
