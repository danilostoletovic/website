import type { Metadata } from "next";
import Link from "next/link";
import { BookCallButton } from "@/components/book-call-button";
import { CalBookingButton } from "@/components/cal-booking-button";
import { CaseStudyCard } from "@/components/case-study-card";
import { HeroHeadline } from "@/components/hero-headline";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { caseStudies } from "@/content/case-studies";
import { award, press, testimonials } from "@/content/proof";
import { services } from "@/content/services";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: { absolute: `${site.name} | Web development by ${site.owner}` },
  description:
    "Freelance developer Danilo Stoletovic builds fast, clean websites, web apps and Android apps that bring in clients, delivered on time. Book a call.",
  path: "/",
});

const pressOutlets = press.filter((item) => item.kind === "Press");

const ticker = ["Websites", "Web apps", "Android apps", "AI integrations"];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 pt-12 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
          <p className="mb-6 text-sm font-bold tracking-[0.25em] text-muted uppercase">
            Freelance developer · Websites · Apps · AI integrations
          </p>
          <HeroHeadline />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className="text-xl leading-relaxed sm:text-2xl">
                Three team breakups. A mentor who stepped away 10 days before
                the finals. I still delivered my client work and finished 4th
                at Galaksija Kup, with a special prize.{" "}
                <strong className="font-bold text-accent">
                  When things fall apart, I keep shipping.
                </strong>
              </p>
              <p className="mt-6 text-lg text-muted sm:text-xl">
                I build fast, clean websites and web apps that bring in
                clients, delivered on time.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
                <BookCallButton location="hero" />
                <TrackedLink
                  href="#work"
                  event={analyticsEvents.ctaClick}
                  eventProperties={{ cta: "see-my-work", location: "hero" }}
                  className="font-display text-2xl tracking-wide uppercase underline decoration-accent decoration-4 underline-offset-8 hover:text-accent"
                >
                  See my work
                </TrackedLink>
              </div>
              <WhatsAppButton location="hero" className="mt-8" />
              <p className="mt-4 text-sm text-muted">Usually replies within a few hours.</p>
            </div>

            <div className="flex items-start lg:justify-end">
              <Link
                href="/work/smart-vehicle"
                className="block w-full max-w-sm rotate-2 border-4 border-accent p-6 text-center transition-transform hover:rotate-0"
              >
                <span className="block text-xs font-bold tracking-[0.3em] text-muted uppercase">
                  Galaksija Cup {award.year}
                </span>
                <span className="mt-2 block font-display text-5xl leading-none text-accent uppercase">
                  {award.short}
                </span>
                <span className="mt-3 block text-sm text-muted">
                  10th National STEM Championship. Read how{" "}
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="overflow-hidden bg-accent py-3 text-accent-ink">
        <p className="font-display text-2xl tracking-wide whitespace-nowrap uppercase sm:text-3xl">
          {[...ticker, ...ticker, ...ticker].map((item, index) => (
            <span key={index} className="mx-4">
              {item} <span className="mx-4">★</span>
            </span>
          ))}
        </p>
      </div>

      <section aria-labelledby="press-heading" className="border-b border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:gap-10">
          <h2
            id="press-heading"
            className="shrink-0 text-sm font-bold tracking-[0.25em] text-muted uppercase"
          >
            As seen in
          </h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {pressOutlets.map((item) => (
              <li key={item.source}>
                <a
                  href={item.url}
                  className="font-display text-2xl tracking-wide uppercase hover:text-accent sm:text-3xl"
                >
                  {item.source}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="services-heading" id="services" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="Pick your problem."
          />
          <ul className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <li key={service.slug}>
                <ServiceCard service={service} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="work-heading"
        id="work"
        className="scroll-mt-20 border-t border-line"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            id="work-heading"
            eyebrow="Case studies"
            title="Proof, not promises."
          />
          <ul className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <li key={caseStudy.slug}>
                <CaseStudyCard caseStudy={caseStudy} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="testimonials-heading" className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Client words"
            title="Don't take my word for it."
          />
          <ul className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <figure className="flex h-full flex-col">
                  <span aria-hidden="true" className="font-display text-7xl leading-none text-accent">
                    &ldquo;
                  </span>
                  <blockquote className="flex-1 text-lg leading-relaxed">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <span className="block font-bold">{testimonial.name}</span>
                    <span className="text-sm text-muted">
                      {testimonial.role} · {testimonial.country}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="about-heading" className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading id="about-heading" eyebrow="About" title="One developer. No handoffs." />
          <div className="text-xl leading-relaxed">
            <p>
              No agency overhead, no handoffs. You work directly with me from
              first call to launch. The person you talk to is the person who
              builds it.
            </p>
            <p className="mt-6 text-muted">
              If your business needs a five-page website, I won&apos;t sell you
              a distributed microservice architecture.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block font-display text-2xl tracking-wide uppercase underline decoration-accent decoration-4 underline-offset-8 hover:text-accent"
            >
              Who is this guy?
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-heading" id="contact" className="scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 sm:py-36">
          <h2
            id="cta-heading"
            className="font-display text-[clamp(3.25rem,12vw,10rem)] leading-[0.85] tracking-tight uppercase"
          >
            Got a plan?{" "}
            <span className="block text-accent">Let&apos;s build it.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted">
            Tell me the problem. No technical spec needed. I&apos;ll tell you
            straight whether I can fix it.
          </p>
          <div className="mt-10 flex flex-col items-center">
            <CalBookingButton location="final-cta" />
            <p className="mt-5 text-sm font-bold tracking-[0.2em] text-muted uppercase">
              Pick a time, no signup needed.
            </p>
            <WhatsAppButton location="final-cta" className="mt-10" />
            <p className="mt-4 text-sm text-muted">Usually replies within a few hours.</p>
            <p className="mt-10 text-lg">
              Prefer to write?{" "}
              <TrackedLink
                href={`mailto:${site.email}`}
                event={analyticsEvents.contactClick}
                eventProperties={{ channel: "Email", location: "final-cta" }}
                className="font-semibold wrap-anywhere underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
              >
                Email me at {site.email}
              </TrackedLink>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
