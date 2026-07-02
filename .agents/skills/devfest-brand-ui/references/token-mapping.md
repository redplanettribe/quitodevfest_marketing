# DevFest 2026 CSS Token Mapping

Add or update these variables in `app/globals.css`. This keeps brand colors in one place and makes Tailwind utilities available via `@theme inline`.

## `:root` variables

```css
:root {
  /* Core */
  --devfest-blue: #4285f4;
  --devfest-green: #34a853;
  --devfest-yellow: #f9ab00;
  --devfest-red: #ea4335;

  /* Halftones */
  --devfest-halftone-blue: #57caff;
  --devfest-halftone-green: #5cdb6d;
  --devfest-halftone-yellow: #ffd427;
  --devfest-halftone-red: #ff7daf;

  /* Pastels */
  --devfest-pastel-blue: #c3ecf6;
  --devfest-pastel-green: #ccf6c5;
  --devfest-pastel-yellow: #ffe7a5;
  --devfest-pastel-red: #f8d8d8;

  /* Grayscale */
  --devfest-off-white: #f0f0f0;
  --devfest-black: #1e1e1e;

  /* Semantic aliases — map shadcn tokens to brand where appropriate */
  --background: var(--devfest-off-white);
  --foreground: var(--devfest-black);
}
```

## `@theme inline` exposure

Inside the existing `@theme inline` block in `globals.css`:

```css
@theme inline {
  --color-devfest-blue: var(--devfest-blue);
  --color-devfest-green: var(--devfest-green);
  --color-devfest-yellow: var(--devfest-yellow);
  --color-devfest-red: var(--devfest-red);
  --color-devfest-halftone-blue: var(--devfest-halftone-blue);
  --color-devfest-halftone-green: var(--devfest-halftone-green);
  --color-devfest-halftone-yellow: var(--devfest-halftone-yellow);
  --color-devfest-halftone-red: var(--devfest-halftone-red);
  --color-devfest-pastel-blue: var(--devfest-pastel-blue);
  --color-devfest-pastel-green: var(--devfest-pastel-green);
  --color-devfest-pastel-yellow: var(--devfest-pastel-yellow);
  --color-devfest-pastel-red: var(--devfest-pastel-red);
  --color-devfest-off-white: var(--devfest-off-white);
  --color-devfest-black: var(--devfest-black);
}
```

## Tailwind usage

| Intent | Class examples |
|--------|----------------|
| Primary button | `bg-devfest-blue text-white hover:bg-devfest-halftone-blue` |
| Section background | `bg-devfest-pastel-green` |
| Accent text | `text-devfest-blue` |
| Badge fill | `bg-devfest-pastel-yellow text-devfest-black` |
| Page shell | `bg-background text-foreground` (after semantic remap) |

## Migrating legacy tokens

The site may still reference `--cta-primary` (`#e8551c`) and related orange variables. When updating a component:

1. Replace CTA colors with an appropriate DevFest core color (blue for primary actions is typical).
2. Update focus rings (`--ring`) to match the new primary.
3. Remove unused `--cta-*` variables only after no references remain.

## Dark sections (optional)

For intentional dark bands (footer, hero overlay), prefer `#1e1e1e` backgrounds with white or halftone text. Do not introduce new gray hex values outside the palette.
