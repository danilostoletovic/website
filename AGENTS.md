<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dan Delivers — dandelivers.dev

Sales and portfolio site for "Dan Delivers", the brand and social handle of Danilo "Dan" Stoletovic, a solo freelance developer. Its job: get Dan hired and rank for what clients actually search. Content and SEO beat perfect Lighthouse scores. English only.

## Brand and voice

- Brand everywhere a visitor sees a name (header, footer, metadata, `og:site_name`): **Dan Delivers**. Full name **Danilo Stoletovic** (`site.owner`), always without the diacritic, so it matches how people search. JSON-LD keeps "Danilo Stoletović" only as an `alternateName`.
- Headline, exact wording: **"Got a plan? Dan's your man."** Defined once in `lib/site.ts` (`site.headline`); never retype it.
- The headline will later vary by traffic source (`?src=`), resolved on the server. Cache Components is on, so read `searchParams` only inside `components/hero-headline.tsx`, wrap it in `<Suspense>` with the default headline as the fallback, and keep the rest of the page in the static shell. See `node_modules/next/dist/docs/01-app/02-guides/optimizing-the-static-shell.md`.
- Solo freelancer, not an agency: first person ("I"), never "we" or "our team". Direct access, no handoffs.
- Tone: the energy of a late-night direct-response ad. Big, blunt, confident, a little theatrical, funny without being a joke site. Proof over adjectives.
- Never borrow from Morgan & Morgan or Better Call Saul: no logos, slogans, wordmarks, characters or likenesses, and nothing that suggests law or legal services. Dan is clearly a developer.
- Only promises Dan can keep. No guarantees of rankings, revenue or fixed prices or deadlines that haven't been agreed.

## Content rules

- Never invent clients, testimonials, results, prizes, or numbers. Mark unknown content with `TODO:`.
- Fact source: Dan's old portfolio (`C:\Users\danil\Projects\portfolio`). Take only facts the current pages need. Never port its pages, features or design, and never link to danilostoletovic.com pages. Its email address is fine. `data/testimonial-samples.md` there is fictional: never use it.
- Write about the client's problem, not the tech stack. Case study titles state the problem and the result.

## Design

- Dark only. Tokens in `app/globals.css`: ink `#000000` (AMOLED black), surface `#0E0E0E`, text `#F7F5F0`, muted `#C8C8C8`, accent red `#FF2B2B`.
- The accent fails contrast as small text: use it for large type, buttons, rules and badges. Button text on the accent is ink, never white.
- Display type: Lilita One (`font-display`), uppercase, cartoon 3D edge on `h1`/`h2`. Body: Source Sans 3 (`font-sans`).

## Stack

- Next.js 16.4 (App Router, TypeScript strict), React 19.3. `cacheComponents` and `partialPrefetching` are enabled in `next.config.ts`.
- Bun is only the package manager and script runner. Next.js runs on Node, so don't use Bun-only runtime APIs.
- Tailwind v4 is loaded through the `@tailwindcss/turbopack` loader in `next.config.ts` (`turbopack.rules`). There is no PostCSS config, so don't add one.
- ESLint 9 flat config (`eslint.config.mjs`). PostHog (`posthog-js`) for analytics. Deployed on Vercel.

## Commands

```sh
bun install                      # install deps
bun run dev                      # dev server (next dev)
bun run build                    # production build
bun run start                    # serve the production build
bun run lint --max-warnings 0    # lint; plain `bun run lint` exits 0 even with warnings
```

Before every commit, `bun run lint --max-warnings 0` and `bun run build` must both pass with zero warnings.

## Structure

`@/*` maps to the repo root. Nothing uses a `src/` directory.

- `app/`: routes (`/`, `/about`, `/services/[slug]`, `/work/[slug]`), root layout, `globals.css`, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`.
- `lib/site.ts`: name, URL, headline, booking URL, contact links. `lib/metadata.ts`: `pageMetadata()`; every page builds metadata with it, because Next replaces nested `openGraph`/`robots` objects instead of merging them, and a page that sets `openGraph` loses the root OG image.
- `lib/json-ld.tsx`, `lib/analytics.ts` (event names), `lib/posthog.ts` (proxy hosts).
- `content/`: typed data (`services.ts`, `case-studies.ts`, `proof.ts`). Pages, the sitemap and JSON-LD all read from it.
- `components/`: shared UI. Client components are only the small interactive leaves (`tracked-link.tsx`, `track-case-study-view.tsx`, `proof-carousel.tsx`, `budget-slider.tsx`).
- To add a service or case study, add an entry to its `content/` file; it renders through `generateStaticParams`. `draft: true` entries render but are noindexed and left out of the sitemap.

## SEO

- `metadataBase` is `https://dandelivers.dev` (`app/layout.tsx`). Unique `title` and `description` per page through `pageMetadata()`.
- One `<h1>` per page, semantic HTML, descriptive `alt` text, `next/image` and `next/font`.
- JSON-LD: `Person` on About, `Service` on service pages. See `node_modules/next/dist/docs/01-app/02-guides/json-ld.md`.

## PostHog

- Keys come from `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` in `.env.local`. Never hardcode or commit them.
- Events: `contact_clicked`, `cta_clicked`, `case_study_viewed`. Keep the `/ingest` rewrite proxy in `next.config.ts`; client setup is in `instrumentation-client.ts`.

## Code conventions

- Prefer Server Components and static generation. Add `"use client"` only when needed, on the smallest leaf.
- No unused dependencies. Match the existing style: double quotes, semicolons, Tailwind utilities, global `PageProps`/`LayoutProps` types.

## Git and deploy

- Conventional commits (`feat:`, `fix:`, `docs:`, `chore:`...). Dan currently works directly on `master`.
- Never run `vercel deploy` or any other Vercel deploy command.
- Never commit `.env` files or secrets. When an env var is needed, tell Dan which one to add in the Vercel dashboard.

## Boundaries

- Ask before adding a dependency, changing the stack, restructuring folders, or deleting files.
- Don't modify anything outside this repo (the old portfolio and `secretary` repos stay as they are).
