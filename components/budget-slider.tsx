"use client";

import { useState } from "react";
import { BookCallButton } from "@/components/book-call-button";
import { TrackedLink } from "@/components/tracked-link";
import { analyticsEvents } from "@/lib/analytics";
import { site } from "@/lib/site";

const MIN = 100;
const MAX = 2500;
const STEP = 50;

// Budget levels are what a visitor might have in mind, not quotes. Nothing here
// is a price or a promise: scope, timeline and cost are agreed with me directly.
const levels = [
  {
    from: 100,
    title: "A quick fix",
    site: "A bug fix, or a style or text tweak on an existing site.",
    app: "A small fix to an app you already have, or an honest second opinion on your app idea.",
    integration: "Check why one connection is failing, like a form that doesn't send or an embed that doesn't load.",
    tradeoff: "Small and fast. No new pages, no new features.",
  },
  {
    from: 250,
    title: "One focused job",
    site: "A single section, or a simple one-page site built from content you already have.",
    app: "One small screen or fix in an existing app.",
    integration: "Wire one thing into your site: a contact form to your inbox, a booking link or an analytics setup.",
    tradeoff: "I'll keep the scope tight and say plainly what has to wait.",
  },
  {
    from: 500,
    title: "A tidy one-pager",
    site: "A clear landing page with a contact form that works well on a phone.",
    app: "A tiny single-purpose app or tool, or a clickable prototype of your idea.",
    integration: "Connect one outside service to your site, like a payment link, a newsletter or a calendar.",
    tradeoff: "Copywriting, custom illustration and extras are usually out of scope.",
  },
  {
    from: 1000,
    title: "A small business site",
    site: "A few pages, a booking or contact form, and a layout that looks good on every screen.",
    app: "A simple app with a few screens, or the first rough version of a bigger one.",
    integration: "Two or three connections working together, like forms, email and a spreadsheet or CRM.",
    tradeoff: "Custom features and large content jobs are best agreed separately.",
  },
  {
    from: 1800,
    title: "A fuller site or a first app slice",
    site: "A bigger website with several pages and a few custom touches.",
    app: "The first working version of one core idea for Android or the web.",
    integration: "A simple API or AI feature added to your existing site or tool, with sensible limits.",
    tradeoff: "You get the heart of the idea first. More comes in later rounds.",
  },
];

const euro = (value: number) => `€${value.toLocaleString("en-US")}`;

const clamp = (number: number) =>
  Math.min(MAX, Math.max(MIN, Math.round(number / STEP) * STEP));

export function BudgetSlider() {
  const [project, setProject] = useState<"site" | "app" | "integration">("site");
  const [value, setValue] = useState(500);
  // What is typed in the number box; may be mid-edit, so it is kept apart.
  const [draft, setDraft] = useState("500");
  const level = [...levels].reverse().find((item) => value >= item.from)!;
  const fill = ((value - MIN) / (MAX - MIN)) * 100;
  const atMax = value === MAX;
  const projectLabel = project === "site" ? "Website" : project === "app" ? "App" : "Integration";
  const enquiry = `Hi Dan, I'd like to discuss a ${projectLabel.toLowerCase()} project. My budget is ${euro(value)}${atMax ? " or more" : ""}. The guidance I saw was: ${level[project]}\n\nThe problem I need to solve is: `;

  return (
    <div className="rounded-3xl border-2 border-foreground bg-surface p-5 shadow-[8px_8px_0_0_var(--accent)] sm:p-7">
      <fieldset className="mb-6">
        <legend className="mb-3 text-base font-bold">First, what do you need?</legend>
        <div className="flex flex-wrap gap-3">
          {([{ value: "site", label: "Website" }, { value: "app", label: "App" }, { value: "integration", label: "Integration" }] as const).map((option) => (
            <label key={option.value} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-3 text-base ${project === option.value ? "border-foreground bg-background" : "border-line"}`}>
              <input type="radio" name="project-type" value={option.value} checked={project === option.value} onChange={() => setProject(option.value)} className="accent-foreground" />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label
        htmlFor="budget"
        className="block text-sm font-bold tracking-[0.2em] text-muted uppercase"
      >
        Drag to set your budget
      </label>

      <p
        aria-hidden="true"
        className="budget-number mt-2 font-display text-[clamp(3rem,8vw,4.5rem)] leading-none"
      >
        {euro(value)}
        {atMax && <span className="text-accent">+</span>}
      </p>

      <div className="mt-5 flex items-center gap-5">
        <input
          id="budget"
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={value}
          onChange={(event) => {
            const next = Number(event.target.value);
            setValue(next);
            setDraft(String(next));
          }}
          aria-valuetext={`${euro(value)}${atMax ? " or more" : ""}`}
          style={{ "--fill": `${fill}%` } as React.CSSProperties}
          className="budget-range"
        />
        <div className="flex shrink-0 items-center gap-2 rounded-xl border-2 border-foreground px-3 py-2 focus-within:border-accent">
          <label htmlFor="budget-number" className="font-display text-2xl">
            <span className="sr-only">Type your budget in euros</span>
            <span aria-hidden="true">€</span>
          </label>
          <input
            id="budget-number"
            type="number"
            inputMode="numeric"
            min={MIN}
            max={MAX}
            step={STEP}
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value);
              const typed = Number(event.target.value);
              if (event.target.value !== "" && typed >= MIN) {
                setValue(clamp(typed));
              }
            }}
            onBlur={() => {
              const next = clamp(Number(draft) || MIN);
              setValue(next);
              setDraft(String(next));
            }}
            className="w-20 bg-transparent font-display text-2xl outline-none"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="mt-3 flex justify-between text-sm font-bold text-muted"
      >
        <span>{euro(MIN)}</span>
        <span>{euro(1000)}</span>
        <span>{euro(MAX)}</span>
      </div>

      <div aria-live="polite" className="mt-5 border-t-4 border-accent pt-4">
        <p className="inline-block -rotate-1 rounded-md bg-accent px-3 py-1 font-display text-2xl tracking-wide text-accent-ink uppercase">
          {level.title}
        </p>
        <dl className="mt-4 space-y-3 text-base sm:text-lg">
            <div className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-4">
              <dt className="text-base font-bold text-foreground">
                {projectLabel}
              </dt>
              <dd>{level[project]}</dd>
            </div>
        </dl>
        <p className="mt-3 text-base text-muted sm:text-lg">{level.tradeoff}</p>
        {atMax && (
          <p className="mt-3 text-lg font-bold sm:text-xl">
            Bigger than this? That&apos;s a call, not a slider.
          </p>
        )}
      </div>

      <p className="mt-5 text-sm text-muted">
        These are budget levels, not quotes. Scope, timeline and price are agreed
        with me directly before any work starts.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-5">
        <BookCallButton location="budget" />
        <TrackedLink href={`mailto:${site.email}?subject=${encodeURIComponent(`${projectLabel} project enquiry`)}&body=${encodeURIComponent(enquiry)}`} event={analyticsEvents.contactClick} eventProperties={{ channel: "Email", location: "budget", project: projectLabel, budget: String(value) }} className="inline-flex items-center rounded-xl border border-line bg-background px-5 py-3 text-base font-semibold text-muted hover:border-muted hover:text-foreground">
          Email this scope
        </TrackedLink>
      </div>
      <p className="mt-3 text-sm text-muted">Bring the problem and any budget you have in mind. I&apos;ll help you work out the scope.</p>
    </div>
  );
}
