# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Turbopack by default in Next 16) at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (the `next lint` command was removed in Next 16; this invokes `eslint` directly with the flat config in `eslint.config.mjs`)

There is no test framework configured.

## Architecture

Next.js **16.2.10** (App Router) + React 19.2 + TypeScript + Tailwind CSS v4. Currently a fresh `create-next-app` scaffold: routes live in `app/` (`app/layout.tsx` is the root layout, `app/page.tsx` the home page). Path alias `@/*` maps to the repo root.

- **Tailwind v4**: configured via the `@tailwindcss/postcss` plugin and CSS-based config in `app/globals.css` — there is no `tailwind.config` file.
- **Styling/theme**: dark mode is handled with `dark:` variants; fonts (Geist, Geist Mono) are loaded in `app/layout.tsx` via `next/font` and exposed as CSS variables.

## Next 16 gotchas (differs from older Next.js)

Full details: `node_modules/next/dist/docs/` (the upgrade guide at `01-app/02-guides/upgrading/version-16.md` lists all breaking changes). Key points:

- **Async request APIs are mandatory**: `params`, `searchParams`, `cookies()`, `headers()`, `draftMode()` must be `await`ed — synchronous access was removed.
- **Turbopack is the default bundler** for dev and build; Turbopack config now lives under `turbopack` in `next.config.ts`, not `experimental`.
- **`middleware` is renamed to `proxy`** (`proxy.ts`, exporting `proxy`).
- **Caching**: `revalidateTag`/`updateTag`/`refresh` and Cache Components (`cacheLife`, `cacheTag`) replace older patterns; `experimental.dynamicIO`/`experimental.useCache` were removed.
- **`next/image` defaults tightened**: `qualities` defaults to `[75]`, `minimumCacheTTL` is 4 hours, max 3 redirects, local IPs and query-string sources blocked without explicit config; `images.domains` is deprecated in favor of `remotePatterns`.
- Parallel routes require an explicit `default.js`; AMP and runtime configuration (`publicRuntimeConfig`/`serverRuntimeConfig`) were removed.
