import { site } from "@/lib/site";

// Kept separate so a ?src= variant can be read here later behind
// <Suspense>, with this default as the fallback. See AGENTS.md.
export function HeroHeadline() {
  return (
    <h1 className="font-display text-[clamp(3rem,11vw,8.5rem)] leading-[0.92] font-extrabold tracking-[-0.04em] text-balance">
      {site.headline}
    </h1>
  );
}
