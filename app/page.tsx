import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/book-call-button";
import { BudgetSlider } from "@/components/budget-slider";
import { CalBookingButton } from "@/components/cal-booking-button";
import { CaseStudyCard } from "@/components/case-study-card";
import { HeroHeadline } from "@/components/hero-headline";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { caseStudies } from "@/content/case-studies";
import { press, testimonials } from "@/content/proof";
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

const featuredWork = caseStudies.filter((item) => !item.draft && ["smart-vehicle", "class-timetable", "promptui"].includes(item.slug));
const featuredTestimonial = testimonials[1];

const pressOutlets = press.filter((item) => item.kind === "Press");

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 pt-6 pb-10 sm:px-8 sm:pt-6 sm:pb-12">
          <HeroHeadline />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <p className="text-xl leading-relaxed sm:text-2xl">
                You tell me what you need. I build it, and you get back to your
                day.{" "}
                <strong className="font-bold text-foreground">
                  Happy clients, happy life.
                </strong>
              </p>
              <p className="mt-6 text-lg text-muted sm:text-xl">
                I build fast, clean websites and web apps that bring in
                clients, delivered on time.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                <BookCallButton location="hero" />
                <TrackedLink
                  href="#work"
                  event={analyticsEvents.ctaClick}
                  eventProperties={{ cta: "see-my-work", location: "hero" }}
                  className="text-base text-muted underline underline-offset-4 hover:text-foreground"
                >
                  See my work
                </TrackedLink>
              </div>
              <p className="mt-5 max-w-xl text-base text-muted">{site.callDescription}</p>
              <p className="mt-3 text-sm text-muted">No technical spec needed. Start with the problem.</p>
              <WhatsAppButton location="hero" className="mt-5" />
            </div>

            <div className="flex items-start lg:justify-end">
              <Image
                src="/dan-delivers.webp"
                alt="Illustration of Dan, a freelance developer, smiling and pointing at you in front of his code editor"
                width={1254}
                height={1254}
                preload
                sizes="(min-width: 1024px) 440px, 90vw"
                className="h-auto w-full max-w-xs -rotate-2 rounded-3xl border-4 border-accent shadow-[8px_8px_0_0_var(--accent)] transition-transform hover:rotate-0 lg:-mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <SectionHeading id="services-heading" eyebrow="What I build" title="Your problem. My job." compact />
          <ul className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug} className="border-l-4 border-accent pl-5">
                <h3 className="text-xl font-bold">{service.seoTitle}</h3>
                <p className="mt-3 text-base text-muted">{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-base underline underline-offset-4">Service details</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="press-heading"
        className="overflow-hidden border-y border-line"
      >
        <h2
          id="press-heading"
          className="reveal mx-auto max-w-7xl px-5 pt-8 text-sm font-bold tracking-[0.25em] text-muted uppercase sm:px-8"
        >
          As seen in
        </h2>
        <p className="mx-auto max-w-7xl px-5 pt-3 text-base text-muted sm:px-8">Coverage of my Smart Vehicle project at Galaksija Cup 2026. <Link href="/about#press-heading" className="underline underline-offset-4">Read the coverage and official results</Link>.</p>
        <div className="press-marquee py-6">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="press-track"
            >
              {pressOutlets.map((item) => (
                <li key={item.source}>
                  <a
                    href={item.url}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="font-display text-2xl tracking-wide whitespace-nowrap uppercase hover:text-accent sm:text-3xl"
                  >
                    {item.source}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="work-heading"
        id="work"
        className="scroll-mt-32"
      >
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <SectionHeading
            id="work-heading"
            eyebrow="Case studies"
            title="Proof, not promises."
            compact
          />
          <p className="mb-8 max-w-2xl text-lg text-muted">See what I built: working software, real screens, and the problem each project solves. These are my own projects; client feedback is below.</p>
          <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredWork.map((caseStudy) => (
              <li key={caseStudy.slug}><CaseStudyCard caseStudy={caseStudy} /></li>
            ))}
          </ul>
          <details className="mt-10 border-y border-line py-5">
            <summary className="cursor-pointer text-lg font-bold">More projects: AI tools and Windows apps</summary>
            <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.filter((item) => !item.draft && !featuredWork.some((featured) => featured.slug === item.slug)).map((caseStudy) => (
                <li key={caseStudy.slug}><CaseStudyCard caseStudy={caseStudy} /></li>
              ))}
            </ul>
          </details>
          <figure className="mt-10 max-w-3xl border-l-8 border-accent pl-6">
            <blockquote className="text-xl">&ldquo;The finished site looks great on both desktop and mobile and, importantly, is easy for us to actually use.&rdquo;</blockquote>
            <figcaption className="mt-4 text-base text-muted">{featuredTestimonial.name} &middot; {featuredTestimonial.role} &middot; {featuredTestimonial.country} <a href="#testimonials-heading" className="ml-2 underline underline-offset-4">Read the full feedback</a></figcaption>
          </figure>
          <div className="mt-10">
            <BookCallButton location="after-proof" />
            <p className="mt-4 text-base text-muted">Got something like this in mind? Tell me on a call.</p>
          </div>
        </div>
      </section>

      <section id="budget" aria-label="Optional budget guidance" className="scroll-mt-32 border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <h2 className="text-2xl font-bold">Want a rough idea of scope before the call?</h2>
            <p className="mt-4 max-w-2xl text-base text-muted">Explore the budget guide if it helps. You can book a call without choosing a budget first.</p>
            <div className="mt-6 max-w-3xl"><BudgetSlider /></div>
        </div>
      </section>

      <section aria-labelledby="testimonials-heading" className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Client words"
            title="Don't take my word for it."
            compact
          />
            <ul className="mt-6 grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <li key={testimonial.name}>
                  <figure>
                    <blockquote className="text-lg leading-relaxed">{testimonial.quote}</blockquote>
                    <figcaption className="mt-5 border-t border-line pt-4 text-base text-muted">
                      <span className="block font-bold text-foreground">{testimonial.name}</span>
                      {testimonial.role} &middot; {testimonial.country}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          <p className="mt-6 max-w-3xl border-l-8 border-accent pl-6 text-lg text-muted sm:text-xl">
            Some of my work is covered by NDAs, and a few clients simply asked
            to stay anonymous without one. I respect both, so those names and
            projects won&apos;t show up on this page.
          </p>
        </div>
      </section>

      <section aria-labelledby="about-heading" className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading id="about-heading" eyebrow="About" title="One developer. No handoffs." compact />
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

      <section aria-labelledby="cta-heading" id="contact" className="scroll-mt-32">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center sm:px-8 sm:py-14">
          <h2
            id="cta-heading"
            className="font-display text-[clamp(2.75rem,8vw,6rem)] leading-[1.02] tracking-normal uppercase"
          >
            Got a plan?{" "}
            <span className="block text-accent">Let&apos;s build it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Tell me the problem. No technical spec needed. I&apos;ll tell you
            straight whether I can fix it.
          </p>
          <div className="mt-6 flex flex-col items-center">
            <CalBookingButton location="final-cta" />
            <p className="mt-5 max-w-xl text-base text-muted">{site.callDescription}</p>
            <p className="mt-5 text-sm font-bold tracking-[0.2em] text-muted uppercase">
              Pick a time, no signup needed.
            </p>
            <WhatsAppButton location="final-cta" className="mt-6" />

            <p className="mt-8 text-sm text-muted">
              Prefer to write?{" "}
              <TrackedLink href={`mailto:${site.email}`} event={analyticsEvents.contactClick} eventProperties={{ channel: "Email", location: "final-cta" }} className="underline underline-offset-4 hover:text-foreground">Email me</TrackedLink>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
