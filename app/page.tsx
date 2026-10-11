import Link from "next/link";
import { BookCallButton } from "@/components/book-call-button";
import { CaseStudyCard } from "@/components/case-study-card";
import { HeroHeadline } from "@/components/hero-headline";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";

const proofPoints = [
  {
    label: "Competition",
    // TODO: one line on what Galaksija Kup is.
    value: "4th at Galaksija Kup, with a special prize",
    note: "TODO: name of the special prize",
  },
  {
    label: "Upwork",
    value: "TODO: Upwork rating and job success score",
    note: "TODO: link to the Upwork profile",
  },
  {
    label: "Client words",
    value: "TODO: a real testimonial quote",
    note: "TODO: client name, role and company",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-28 sm:pb-32">
        <HeroHeadline />
        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <p className="border-l-4 border-accent pl-5 text-lg leading-relaxed sm:text-xl">
            Three team breakups. A mentor who stepped away 10 days before the
            finals. I still delivered my client work and finished 4th at
            Galaksija Kup, with a special prize. When things fall apart, I
            keep shipping.
          </p>
          <div>
            <p className="font-display text-2xl leading-snug font-bold tracking-tight sm:text-3xl">
              I build fast, clean websites and web apps that bring in clients,
              delivered on time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <BookCallButton location="hero" />
              <a
                href="#work"
                className="font-semibold underline decoration-2 underline-offset-8 hover:text-accent"
              >
                See my work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="services-heading"
        id="services"
        className="scroll-mt-8 border-t border-line"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="What I can do for you"
          />
          <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
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
        className="scroll-mt-8 border-t border-line"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            id="work-heading"
            eyebrow="Case studies"
            title="Problems in, results out"
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

      <section aria-labelledby="proof-heading" className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 id="proof-heading" className="sr-only">
            Proof
          </h2>
          <ul className="grid gap-10 md:grid-cols-3">
            {proofPoints.map((point) => (
              <li key={point.label}>
                <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
                  {point.label}
                </p>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  {point.value}
                </p>
                <p className="mt-2 text-sm opacity-70">{point.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="about-heading" className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading id="about-heading" eyebrow="About" title="Just me. On purpose." />
          <div className="text-lg leading-relaxed sm:text-xl">
            <p>
              No agency overhead, no handoffs. You work directly with me from
              first call to launch. The person you talk to is the person who
              builds it.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block font-semibold underline decoration-2 underline-offset-8 hover:text-accent"
            >
              More about me
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-heading">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-36">
          <h2
            id="cta-heading"
            className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.95] font-extrabold tracking-[-0.04em]"
          >
            Got a plan? <span className="text-accent">Call Dan.</span>
          </h2>
          <div className="mt-10">
            <BookCallButton location="final-cta" />
          </div>
        </div>
      </section>
    </>
  );
}
