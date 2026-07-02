# AGENTS.md

Guidance for AI agents and contributors working on this repository.

## Project overview

This is the **marketing website for DevFest 2026: Innovating Together** — the Quito edition of [Google Developer Groups DevFest](https://gdg.community.dev/events/details/google-gdg-quito-presents-devfest-2026-innovating-together/), organized by **GDG Quito**.

The site is a **fully static** Next.js frontend. It promotes the event, surfaces key information (date, venue, topics, organizers), and drives visitors toward registration and community touchpoints. There is no backend in this repo.

**Event ticketing and registration** are handled by [Multi-Track Ticketing (m3t)](https://multiticketing.com/) — an open-source event management platform built for multi-track programs. This site links out to m3t/Bevy for RSVP and attendee flow; it does not implement ticketing itself.

### Event snapshot

| | |
|---|---|
| **Name** | DevFest 2026: Innovating Together |
| **Organizer** | GDG Quito |
| **Date** | Saturday, 26 September 2026 |
| **Venue** | Universidad San Francisco de Quito (USFQ), Avenida Oswaldo Guayasamín, Quito |
| **Themes** | AI, Conference, DevFest, Google Cloud, Networking |
| **Community page** | [GDG Community event](https://gdg.community.dev/events/details/google-gdg-quito-presents-devfest-2026-innovating-together/) |
| **Ticketing platform** | [Multi-Track Ticketing (m3t)](https://multiticketing.com/) |

## Your role

Act as a **professional Next.js frontend developer**: ship polished, accessible marketing UI with strict TypeScript, static-export compatibility, and SEO best practices. Prefer small, focused diffs that match existing patterns.

## Tech stack

- **Next.js 15** (App Router) with `output: 'export'` — static HTML/CSS/JS only
- **React 18**, **TypeScript 5**
- **Tailwind CSS 4** via `@tailwindcss/postcss` (tokens in `app/globals.css`)
- **Shadcn/ui** (new-york) + Radix UI primitives
- **Lucide** icons, **Geist** / **Inter** + **JetBrains Mono** fonts
- Package manager: **pnpm**

## Static export constraints

This site **must remain fully static**. Do not introduce runtime server features.

**Forbidden:**

- `headers()`, `cookies()`, `draftMode()`
- `dynamic = 'force-dynamic'`
- Route Handlers that require a live server
- Uncached `fetch()` at build time without `generateStaticParams` for dynamic segments

**Required settings** (from `next.config.mjs`):

- `output: 'export'`
- `trailingSlash: true` — all internal links and canonical URLs end with `/`
- `images.unoptimized: true` — always set explicit `width`, `height`, and `alt` on `<Image />`

Before finishing any task, verify the build:

```bash
pnpm run build
```

## Repository layout

```
app/                  # Routes, layout, globals.css, sitemap, robots, manifest
components/           # Site chrome (header, footer) + ui/ + sections/
config/               # site.ts (single source of truth), navigation.ts
lib/                  # seo.ts, schema.ts, contact.ts, utils.ts
public/               # Static assets (favicons, OG image)
.cursor/rules/        # Detailed Cursor rules (static Next.js, SEO, UI design)
.agents/skills/       # Optional review skills (web design, writing)
```

## Key conventions

### Configuration

- **`config/site.ts`** — site name, description, URL, OG image, contact email, keywords. Update here; never hardcode site metadata in components.
- **`config/navigation.ts`** — main nav items for header and mobile nav.

### Pages and SEO

Every route under `app/` must:

1. Export `metadata` via `generateSEO()` from `@/lib/seo`
2. Include a sibling `loading.tsx` with a layout-matched skeleton
3. Be registered in `app/sitemap.ts`
4. Use one `<h1>` per page and logical heading hierarchy

### Layout primitives

```tsx
<main id="main-content">
  <Section>
    <Container>{/* content */}</Container>
  </Section>
</main>
```

Import from `@/components/ui/section` and `@/components/ui/container`.

### Components

- Default to **React Server Components** — add `'use client'` only when interactivity requires it (`useState`, Radix primitives, browser APIs).
- Merge classes with `cn()` from `@/lib/utils`.
- Path alias: `@/*` maps to project root.

### UI and brand

Follow `.cursor/rules/ui-design.mdc`: dark-first marketing UI, design tokens from `app/globals.css`, no hardcoded hex in components, no CSS modules or inline styles.

## Commands

| Command | Purpose |
|---|---|
| `pnpm dev` | Local development server |
| `pnpm build` | Production static export (required before delivery) |
| `pnpm lint` | ESLint |

## Related documentation

| File | Purpose |
|---|---|
| `.cursor/rules/static-nextjs.mdc` | Static export, RSC, images, new-page checklist |
| `.cursor/rules/seo-marketing.mdc` | Metadata, structured data, sitemap |
| `.cursor/rules/ui-design.mdc` | Brand tokens, layout, accessibility |
| `.agents/skills/web-design-guidelines/SKILL.md` | UI review against Web Interface Guidelines |
| `.agents/skills/writing-guidelines/SKILL.md` | Prose and docs voice review |

## External links

- [DevFest 2026 on GDG Community](https://gdg.community.dev/events/details/google-gdg-quito-presents-devfest-2026-innovating-together/)
- [Multi-Track Ticketing (m3t)](https://multiticketing.com/)
- [m3t on GitHub (redplanettribe)](https://github.com/redplanettribe)
