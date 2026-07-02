---
name: devfest-brand-ui
description: Official DevFest 2026 brand and UI guide for this marketing site. Use whenever generating, modifying, or reviewing UI components, styling, colors, typography, developer glyphs, location badges, speaker cards, agenda items, hero sections, or visual assets — even if the user only says "make it on-brand", "style this section", "match DevFest", or "use the event colors". Also use when migrating legacy styling to DevFest 2026 tokens or auditing components for brand compliance.
---

# DevFest 2026 Brand & UI Guide

You are an expert frontend developer and UI/UX designer working on the **DevFest 2026: Innovating Together** marketing site (GDG Quito edition). Whenever you generate, modify, or review UI, styling, or visual assets, follow the official DevFest 2026 brand rules below. Do not fall back to generic Shadcn defaults or legacy site colors when they conflict with these rules.

For **accessibility and interaction audits** (focus states, touch targets, animation), also consult the `web-design-guidelines` skill. Brand rules take precedence for color, typography, and visual motifs; WIG rules take precedence for interaction patterns.

## When to read bundled references

| Reference | Read when |
|-----------|-----------|
| `references/token-mapping.md` | Adding or changing colors, theming `globals.css`, or mapping Tailwind utilities |
| `references/components.md` | Building hero, location badge, speaker/agenda cards, glyph decorations, or logo placement |

## Color palette

Use **only** these hex codes. Do not approximate, blend to new shades, or invent alternates. Bind them to CSS custom properties in `app/globals.css` before using them in components — never scatter raw hex in JSX except during a one-off migration you immediately tokenize.

### Core (primary UI elements)

| Name | Hex |
|------|-----|
| Blue | `#4285f4` |
| Green | `#34a853` |
| Yellow | `#f9ab00` |
| Red | `#ea4335` |

### Halftones (accents & highlights)

| Name | Hex |
|------|-----|
| Blue | `#57caff` |
| Green | `#5cdb6d` |
| Yellow | `#ffd427` |
| Red | `#ff7daf` |

### Pastels (backgrounds & low-contrast areas)

| Name | Hex |
|------|-----|
| Blue | `#c3ecf6` |
| Green | `#ccf6c5` |
| Yellow | `#ffe7a5` |
| Red | `#f8d8d8` |

### Grayscale (text & base surfaces)

| Name | Hex | Role |
|------|-----|------|
| Off White | `#f0f0f0` | Default page background |
| Black 02 | `#1e1e1e` | Primary text |

### Contrast pairings

Pair each **core** color with its matching **pastel** or Off White (`#f0f0f0`) for backgrounds, badges, and section fills. Primary body text stays on `#1e1e1e` or white on saturated core fills. Check WCAG contrast when placing text on halftone or pastel surfaces.

The default visual direction for this event is **light-first**: Off White base, Black 02 text. Dark sections are allowed for emphasis but should still use the official palette — not ad-hoc grays.

## Visual motifs

### Developer glyphs

Proactively weave **bold, monoline coding syntax** into backgrounds, section dividers, and decorative layers. Permitted glyphs: `{ }`, `;`, `//`, `< >`, `*`, `#`.

- Use `font-mono` (JetBrains Mono is loaded in this project) for glyph text.
- Keep glyphs `aria-hidden="true"` when purely decorative.
- Scale stroke weight and size responsively; glyphs should not dominate readable content.

### Location badge

When showing the event city (this site: **Quito**), render it in a **pill-shaped container** (`rounded-full`) directly **below** the DevFest wordmark — not inline with the logo text. See `references/components.md` for markup.

### Logo clear space

Surround the primary DevFest logo artwork with generous padding/margin on all sides. Do not crowd the mark with glyphs, badges, or adjacent CTAs.

## Typography & layout

| Element | Rule |
|---------|------|
| Section titles / subheads | Design for **max 3 lines** at target breakpoints |
| Speaker cards / agenda titles | Target **2 lines**; hard cap **4–5 lines** |
| Body copy | Use `text-foreground` on light surfaces; keep comfortable line length (`max-w-prose` or similar) |

Titles that overflow these limits need shorter copy or smaller type — do not clip with `line-clamp` as a default workaround.

## Implementation (this repository)

This is a **static Next.js 15** site with **Tailwind CSS v4** and tokens in `app/globals.css`.

### Token-first styling

1. Define DevFest colors as `--devfest-*` variables in `:root` (see `references/token-mapping.md`).
2. Expose them through `@theme inline` so Tailwind utilities like `bg-devfest-blue` work.
3. Reference tokens in components: `bg-devfest-blue`, `text-devfest-black`, `border-devfest-pastel-green`, or `var(--devfest-blue)` inside arbitrary values.
4. Merge classes with `cn()` from `@/lib/utils`.

Do **not** leave legacy orange CTA tokens (`--cta-primary`, etc.) on new DevFest-branded surfaces. Migrate them when touching a component.

### Layout primitives

Use existing structure:

```tsx
<main id="main-content">
  <Section>
    <Container>{/* content */}</Container>
  </Section>
</main>
```

Import from `@/components/ui/section` and `@/components/ui/container`.

### Components & images

- Default to **React Server Components**; add `'use client'` only for interactivity.
- `<Image />` requires explicit `width`, `height`, and meaningful `alt` (empty `alt` only for decorative images with `aria-hidden`).
- Reuse `CTAButton`, `Card`, `Badge` from `components/ui/` but re-theme variants to DevFest core colors.

### Responsiveness

SVG glyphs and pill badges must scale across breakpoints without losing monoline weight or `rounded-full` shape. Prefer relative units (`text-sm` → `text-base`, `px-4` → `px-6`) over fixed pixel sizes.

## Brand review workflow

When asked to review UI for brand compliance:

1. Read the target files.
2. Check colors against the palette (flag any non-token hex).
3. Check typography line budgets on titles and cards.
4. Check for location badge placement, logo clear space, and glyph usage.
5. Output findings in terse `file:line` format:

```
file.tsx:42 - uses #e8551c (legacy) — should use devfest-blue or mapped token
components/sections/home-hero.tsx:28 - section title may exceed 3 lines at lg breakpoint
```

If no files are specified, ask which routes or components to review.

## Building new UI

When implementing a new section or component:

1. Read `references/token-mapping.md` and confirm tokens exist (add missing ones to `globals.css`).
2. Read `references/components.md` if the work involves hero, badges, cards, or glyphs.
3. Pick a **core + pastel** pair for the section's color story (e.g., blue core on pastel-blue background).
4. Apply typography and motif rules before polishing spacing.
5. Run `pnpm run build` after substantive styling changes.

## Examples

**Good — tokenized button:**

```tsx
<CTAButton className="bg-devfest-blue hover:bg-devfest-halftone-blue text-white">
  Register
</CTAButton>
```

**Bad — arbitrary hex in component:**

```tsx
<button className="bg-[#4285f4]">Register</button>
```

**Good — location badge under wordmark:**

```tsx
<div className="flex flex-col items-center gap-3">
  <Image src="/devfest-logo.svg" alt="DevFest 2026" width={240} height={80} />
  <span className="rounded-full bg-devfest-pastel-blue px-4 py-1 text-sm font-medium text-devfest-black">
    Quito
  </span>
</div>
```

**Bad — city inline with logo:**

```tsx
<span>DevFest Quito</span>
```
