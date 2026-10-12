import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/book-call-button";
import { BudgetSlider } from "@/components/budget-slider";
import { CalBookingButton } from "@/components/cal-booking-button";
import { ProofCarousel } from "@/components/proof-carousel";
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

const pressOutlets = press.filter((item) => item.kind === "Press");

const expectations = [
  {
    title: "A real answer, fast",
    body: "I usually reply within a few hours, and you talk to me, not an account manager.",
  },
  {
    title: "Scope before work",
    body: "We agree what you get, when, and for how much before I write a line of code.",
  },
  {
    title: "Honest trade-offs",
    body: "If your budget can't cover everything, I'll say what to do first and what can wait.",
  },
  {
    title: "No miracles",
    body: "I can build a site that's fast and easy to find. I can't promise rankings, traffic or revenue.",
  },
];

// Red line with end ticks under a group of testimonials, labelled with how
// those clients found me. Decorative: each card also names its channel for
// small screens and assistive tech.
function ChannelBracket({ label, span }: { label: string; span: string }) {
  return (
    <div className={`${span} relative h-6 border-x-4 border-b-4 border-accent`}>
      <span className="absolute top-full left-1/2 -translate-1/2 bg-surface px-4 font-display text-2xl tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

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
                <strong className="font-bold text-accent">
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
                  className="font-display text-2xl tracking-wide uppercase underline decoration-accent decoration-4 underline-offset-8 hover:text-accent"
                >
                  See my work
                </TrackedLink>
              </div>
              <WhatsAppButton location="hero" className="mt-5" />
              <p className="mt-4 text-sm text-muted">Usually replies within a few hours.</p>
            </div>

            <div className="flex items-start lg:justify-end">
              <Image
                src="/dan-delivers.webp"
                alt="Illustration of Dan, a freelance developer, smiling and pointing at you in front of his code editor"
                width={1254}
                height={1254}
                priority
                sizes="(min-width: 1024px) 440px, 90vw"
                className="h-auto w-full max-w-xs -rotate-2 rounded-3xl border-4 border-accent shadow-[8px_8px_0_0_var(--accent)] transition-transform hover:rotate-0 lg:-mt-4"
              />
            </div>
          </div>
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
        className="scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <SectionHeading
            id="work-heading"
            eyebrow="Case studies"
            title="Proof, not promises."
            compact
          />
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <ProofCarousel caseStudies={caseStudies} />
            <div className="-rotate-2 lg:pl-4">
              <p className="extrude font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.02] uppercase">
                Don&apos;t trust me.
                <span className="block text-accent">Check the code.</span>
              </p>
              <p className="mt-6 max-w-sm text-lg text-muted sm:text-xl">
                Every project here is open source. Read it, run it, judge it
                yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="budget-heading" id="budget" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <SectionHeading
            id="budget-heading"
            eyebrow="Budget"
            title="What fits your budget."
            compact
          />
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <BudgetSlider />
            <div>
              <h3 className="font-display text-3xl uppercase sm:text-4xl">
                What to expect
              </h3>
              <ul className="mt-6 space-y-5 text-lg sm:text-xl">
                {expectations.map((item) => (
                  <li key={item.title} className="border-l-8 border-accent pl-5">
                    <strong className="block font-bold">{item.title}</strong>
                    <span className="text-muted">{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-lg text-muted sm:text-xl">
            Not sure what you need? Read about{" "}
            {services.slice(0, 3).map((service, index) => (
              <span key={service.slug}>
                {index > 0 && (index === 2 ? ", or " : ", ")}
                <Link
                  href={`/services/${service.slug}`}
                  className="font-bold text-foreground underline decoration-accent decoration-4 underline-offset-4 hover:text-accent"
                >
                  {service.seoTitle}
                </Link>
              </span>
            ))}
            .
          </p>
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
          <ul className="grid gap-8 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial) => (
              <li key={testimonial.name} className="reveal">
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
                <p className="mt-4 border-t-4 border-accent pt-2 font-display text-xl tracking-wide uppercase lg:hidden">
                  {testimonial.channel}
                </p>
              </li>
            ))}
          </ul>
          <div aria-hidden="true" className="mt-8 hidden grid-cols-3 gap-8 lg:grid">
            <ChannelBracket label="Direct outreach" span="col-span-2" />
            <ChannelBracket label="Referral" span="col-span-1" />
          </div>
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

      <section aria-labelledby="cta-heading" id="contact" className="scroll-mt-20">
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
            <p className="mt-5 text-sm font-bold tracking-[0.2em] text-muted uppercase">
              Pick a time, no signup needed.
            </p>
            <WhatsAppButton location="final-cta" className="mt-6" />
            <p className="mt-4 text-sm text-muted">Usually replies within a few hours.</p>
            <p className="mt-6 text-lg">
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
