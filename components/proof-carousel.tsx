"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CaseStudyCard } from "@/components/case-study-card";
import type { CaseStudy } from "@/content/case-studies";

const HOLD_MS = 2000;
const SLIDE_MS = 600;

const buttonClass =
  "inline-flex items-center justify-center rounded-xl border-2 border-foreground px-5 py-2 font-display text-xl tracking-wide uppercase transition-colors hover:border-accent hover:text-accent focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-foreground";

// One card at a time: it holds for 2 seconds, slides out to the side and the
// next one takes its place. Previous, next and dot buttons pick a card by hand.
// The first card is repeated at the end so the loop wraps without a jump.
export function ProofCarousel({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const count = caseStudies.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  // Auto-advance stops only while a mouse hovers or keyboard focus is inside,
  // so clicking a button or tapping on a phone never stops it for good.
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const paused = hovered || focused;
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const next = useCallback(() => {
    if (reducedMotion.current) {
      setIndex((current) => (current + 1) % count);
      return;
    }
    setAnimate(true);
    setIndex((current) => Math.min(current + 1, count));
  }, [count]);

  const previous = useCallback(() => {
    if (reducedMotion.current) {
      setIndex((current) => (current - 1 + count) % count);
      return;
    }
    if (index === 0) {
      // Jump to the repeated first card without animating, then slide back.
      setAnimate(false);
      setIndex(count);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(count - 1);
        }),
      );
      return;
    }
    setAnimate(true);
    setIndex(index - 1);
  }, [count, index]);

  const goTo = (target: number) => {
    setAnimate(!reducedMotion.current);
    setIndex(target);
  };

  // Auto-advance after each card has been held for 2 seconds.
  useEffect(() => {
    if (paused || reducedMotion.current || index >= count) return;
    const timer = window.setTimeout(next, HOLD_MS + SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, count, next]);

  const handleTransitionEnd = () => {
    if (index === count) {
      setAnimate(false);
      setIndex(0);
    }
  };

  const active = index % count;

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Case studies"
      className="min-w-0 max-w-4xl"
      onPointerEnter={(event) => setHovered(event.pointerType === "mouse")}
      onPointerLeave={() => setHovered(false)}
      onFocus={(event) => setFocused(event.target.matches(":focus-visible"))}
      onBlur={() => setFocused(false)}
    >
      <div className="-mx-3 overflow-hidden">
        <ul
          className="flex"
          onTransitionEnd={handleTransitionEnd}
          style={{
            width: `${(count + 1) * 100}%`,
            transform: `translateX(-${(index * 100) / (count + 1)}%)`,
            transition: animate
              ? `transform ${SLIDE_MS}ms ease-in-out`
              : "none",
          }}
        >
          {[...caseStudies, caseStudies[0]].map((caseStudy, position) => {
            const isClone = position === count;
            return (
              <li
                key={isClone ? `${caseStudy.slug}-clone` : caseStudy.slug}
                aria-hidden={isClone || position !== active ? "true" : undefined}
                className="px-3 pt-1 pb-3"
                style={{ width: `${100 / (count + 1)}%` }}
              >
                <CaseStudyCard
                  caseStudy={caseStudy}
                  tabIndex={isClone || position !== active ? -1 : undefined}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4">
        <button type="button" onClick={previous} className={buttonClass}>
          <span aria-hidden="true">←&nbsp;</span>
          Prev<span className="sr-only">ious case study</span>
        </button>
        <button type="button" onClick={next} className={buttonClass}>
          Next<span className="sr-only"> case study</span>
          <span aria-hidden="true">&nbsp;→</span>
        </button>
        <ul className="flex items-center gap-2">
          {caseStudies.map((caseStudy, position) => (
            <li key={caseStudy.slug}>
              <button
                type="button"
                onClick={() => goTo(position)}
                aria-label={`Show case study ${position + 1} of ${count}`}
                aria-current={position === active ? "true" : undefined}
                className={`size-3.5 rounded-full border-2 border-foreground transition-colors hover:border-accent focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-foreground ${
                  position === active ? "bg-accent" : "bg-transparent"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
