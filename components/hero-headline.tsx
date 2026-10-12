import { site } from "@/lib/site";

// Kept separate so a ?src= variant can be read here later behind
// <Suspense>, with this default as the fallback. See AGENTS.md.
export function HeroHeadline() {
  // Split after the question so the answer can carry the accent; the text
  // itself still comes from site.headline.
  const splitAt = site.headline.indexOf("?") + 1;
  const question = site.headline.slice(0, splitAt);
  const answer = site.headline.slice(splitAt).trim();

  return (
    <h1 className="font-display text-[clamp(2.75rem,7.5vw,6.25rem)] leading-none tracking-normal uppercase">
      <span className="block">{question}</span>{" "}
      <span className="paint-outline block">{answer}</span>
    </h1>
  );
}
