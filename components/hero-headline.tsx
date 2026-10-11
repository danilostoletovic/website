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
    <h1 className="font-display text-[clamp(3.75rem,15vw,12rem)] leading-[0.85] tracking-tight uppercase">
      <span className="block">{question}</span>{" "}
      <span className="block text-accent">{answer}</span>
    </h1>
  );
}
