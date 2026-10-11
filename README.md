# Dan Delivers

**Got a plan? Dan's your man.**

Source for [dandelivers.dev](https://dandelivers.dev), the sales and portfolio site of Dan Delivers: freelance developer Danilo Stoletovic building websites, custom web apps, AI integrations and Android apps for clients in Serbia and internationally.

The site's job is to get Dan hired: show the services, prove them with case studies, press and client words, and make contact effortless. Visitors can book a call through Cal.com, message on WhatsApp, or send an email.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, TypeScript, Cache Components), React 19
- Tailwind CSS v4, fonts via `next/font` (Anton for display, Geist for body)
- [Bun](https://bun.sh) as package manager and script runner (Next.js itself runs on Node)
- [PostHog](https://posthog.com) analytics through a same-origin `/ingest` proxy
- [Cal.com](https://cal.com) booking popup (`@calcom/embed-react`), loaded on demand
- Hosted on [Vercel](https://vercel.com)

## Getting started

```sh
bun install
bun run dev        # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `bun run dev` | Development server |
| `bun run build` | Production build |
| `bun run start` | Serve the production build |
| `bun run lint --max-warnings 0` | Lint; must pass with zero warnings |

`bun run lint --max-warnings 0` and `bun run build` must both pass before every commit.

## Environment variables

Analytics stays off unless these are set. Add them to `.env.local` for local work and in the Vercel dashboard for deployments. Never commit them.

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key (`phc_…`) |
| `NEXT_PUBLIC_POSTHOG_HOST` | `https://us.i.posthog.com` or `https://eu.i.posthog.com` |

## Where things live

| Path | Contents |
| --- | --- |
| `lib/site.ts` | Brand name, headline, URL, email, Cal.com link, WhatsApp handle, social links |
| `content/services.ts` | Services (each becomes `/services/<slug>`) |
| `content/case-studies.ts` | Case studies (each becomes `/work/<slug>`) |
| `content/proof.ts` | Testimonials, press and awards |
| `app/` | Pages, layout, theme (`globals.css`), sitemap, robots and OG image |
| `components/` | Shared UI |

To add a service or case study, add an entry to its `content/` file. The page, sitemap entry and structured data follow automatically. Entries with `draft: true` render but are hidden from search engines.

## SEO

- `app/sitemap.ts` generates `/sitemap.xml` from `content/`, so it always matches the published pages.
- `app/robots.ts` generates `/robots.txt`. Only the Vercel production deployment (`VERCEL_ENV=production`) can be indexed; preview deployments and local builds block all crawlers.
- Every page has its own title, description and canonical URL, plus a generated social card (`app/opengraph-image.tsx`). Structured data: `Person` on About, `Service` on service pages.

## Deployment

Vercel builds every push. The production branch deploys to dandelivers.dev; other branches get preview URLs.

## Working with AI coding agents

Project rules for agents (brand, voice, content and design rules) live in [`AGENTS.md`](AGENTS.md). `CLAUDE.md` imports it.
