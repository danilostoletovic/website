import type { Metadata } from "next";
import { BookCallButton } from "@/components/book-call-button";
import { ContactLinks } from "@/components/contact-links";
import { JsonLd, personJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const ensureStatic = "navigation";

export const metadata: Metadata = pageMetadata({
  title: { absolute: `About ${site.owner} | ${site.name}` },
  description:
    "I'm Danilo Stoletovic, a freelance web developer. No agency overhead, no handoffs: you work directly with me from first call to launch.",
  path: "/about",
});

const principles = [
  {
    title: "You talk to the person doing the work",
    body: "No account managers and no handoffs. Questions go straight to me, and so do the answers.",
  },
  {
    title: "Your problem comes first",
    body: "I start with what's costing you clients or time, then pick the simplest build that fixes it.",
  },
  {
    title: "I ship",
    body: "Plans change and things break. My job is to deliver anyway, and to tell you early if something moves.",
  },
];

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <JsonLd data={{ "@context": "https://schema.org", ...personJsonLd() }} />

      <header className="max-w-4xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          About
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance">
          I&apos;m {site.owner}. Most people call me Dan.
        </h1>
        <p className="mt-8 border-l-4 border-accent pl-5 text-xl leading-relaxed sm:text-2xl">
          No agency overhead, no handoffs. You work directly with me from first
          call to launch.
        </p>
      </header>

      <div className="mt-16 max-w-3xl space-y-6 text-lg leading-relaxed sm:text-xl">
        <p>
          I&apos;m a freelance web developer. I build websites and web apps for
          people who need them to bring in clients, not just look nice.
        </p>
        <p>
          Three team breakups. A mentor who stepped away 10 days before the
          finals. I still delivered my client work and finished 4th at
          Galaksija Kup, with a special prize. When things fall apart, I keep
          shipping.
        </p>
        <p>TODO: where I&apos;m based and which time zones I work with.</p>
        <p>TODO: a short line on my background and how I got into web development.</p>
      </div>

      <section aria-labelledby="principles-heading" className="mt-20">
        <h2 id="principles-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          How I work
        </h2>
        <ul className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
          {principles.map((principle) => (
            <li key={principle.title} className="border-t-2 border-foreground pt-6">
              <h3 className="font-display text-2xl font-bold tracking-tight">
                {principle.title}
              </h3>
              <p className="mt-3 text-muted">{principle.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="contact-heading"
        className="mt-20 rounded-3xl bg-foreground p-8 text-background sm:p-12"
      >
        <h2 id="contact-heading" className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {site.headline}
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <BookCallButton location="about" />
          <ContactLinks
            location="about"
            className="flex flex-wrap gap-x-5 gap-y-2 font-medium"
            linkClassName="underline underline-offset-4 hover:text-accent"
          />
        </div>
      </section>
    </article>
  );
}
