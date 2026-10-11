import type { Metadata } from "next";
import Image from "next/image";
import { BookCallButton } from "@/components/book-call-button";
import { ContactLinks } from "@/components/contact-links";
import { award, press } from "@/content/proof";
import { JsonLd, personJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const ensureStatic = "navigation";

export const metadata: Metadata = pageMetadata({
  title: { absolute: `About ${site.owner} | ${site.name}` },
  description:
    "I'm Danilo Stoletovic, the freelance developer behind Dan Delivers. No agency overhead, no handoffs: you work directly with me from first call to launch.",
  path: "/about",
});

const facts = [
  { value: "3+ years", label: "taking software from idea to release" },
  { value: award.short, label: "10th Galaksija Cup National STEM Championship" },
  { value: "2nd place", label: "AI assistant competition, Make IT Day @ MET 2026" },
  { value: "5.00 GPA", label: "Electrical & Computer Science, ETŠ Nikola Tesla" },
];

const principles = [
  {
    title: "You talk to the builder",
    body: "No account managers and no handoffs. Questions go straight to me, and so do the answers.",
  },
  {
    title: "No spec? No problem",
    body: "Tell me the problem in plain words. I explain the approach, and we agree on scope before I build.",
  },
  {
    title: "Working delivery, clear handover",
    body: "You get the agreed result running, plus a handover you can understand. Maintenance is part of the conversation, not a surprise.",
  },
];

export default function AboutPage() {
  return (
    <article>
      <JsonLd data={{ "@context": "https://schema.org", ...personJsonLd() }} />

      <header className="mx-auto max-w-7xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20">
        <p className="inline-block bg-accent px-2 py-1 text-sm font-bold tracking-[0.2em] text-accent-ink uppercase">
          About
        </p>
        <h1 className="mt-5 font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85] tracking-tight uppercase">
          I&apos;m {site.owner}.{" "}
          <span className="block text-accent">Call me Dan.</span>
        </h1>
        <p className="mt-10 max-w-3xl border-l-8 border-accent pl-6 text-2xl leading-snug sm:text-3xl">
          No agency overhead, no handoffs. You work directly with me from first
          call to launch.
        </p>
      </header>

      <section aria-label="Background" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="space-y-6 text-lg leading-relaxed sm:text-xl">
            <p>
              I&apos;m a full-stack developer who builds across platforms:
              websites, web apps, Android and Windows apps, and the servers
              they run on. Dan Delivers is the name I work under.
            </p>
            <p>
              For 3+ years I&apos;ve taken software from an idea through
              architecture, implementation and release, including publishing
              on Google Play and the Microsoft Store.
            </p>
            <p>
              Three team breakups. A mentor who stepped away 10 days before the
              finals. I still delivered my client work and finished 4th at
              Galaksija Kup, with a special prize. When things fall apart, I
              keep shipping.
            </p>
            <p className="text-muted">
              I work remotely with clients in Serbia and internationally, in
              English or Serbian. And if your business needs a five-page
              website, I won&apos;t sell you a distributed microservice
              architecture.
            </p>
          </div>
          <div className="space-y-6">
            <Image
              src="/dan-delivers.webp"
              alt="Illustration of Dan pointing at the viewer in front of his code editor, next to the slogan “Got a plan? Dan’s your man.”"
              width={1254}
              height={1254}
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 42vw, 100vw"
              className="h-auto w-full border-4 border-accent"
            />
            <dl className="grid h-fit grid-cols-1 gap-px bg-line sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse bg-surface p-6">
                  <dt className="mt-2 text-sm text-muted">{fact.label}</dt>
                  <dd className="font-display text-3xl leading-none text-accent uppercase">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2
            id="principles-heading"
            className="font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl"
          >
            How I work
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map((principle, index) => (
              <li key={principle.title} className="border-2 border-line p-6">
                <span className="font-display text-5xl text-accent">{index + 1}</span>
                <h3 className="mt-3 text-xl font-bold">{principle.title}</h3>
                <p className="mt-2 text-muted">{principle.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="press-heading" className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <h2
            id="press-heading"
            className="font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-6xl"
          >
            Press &amp; recognition
          </h2>
          <p className="mt-4 text-muted">
            Coverage and official results for {site.owner}. Not endorsements.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {press.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="w-56 shrink-0 font-display text-2xl tracking-wide uppercase group-hover:text-accent">
                    {item.source}
                  </span>
                  <span className="flex-1">{item.headline}</span>
                  <span className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
                    {item.kind} · {item.year}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <h2
            id="contact-heading"
            className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.85] tracking-tight uppercase"
          >
            {site.headline}
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            <BookCallButton location="about" />
            <ContactLinks
              location="about"
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold tracking-wide uppercase"
              linkClassName="hover:text-accent"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
