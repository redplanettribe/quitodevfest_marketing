# DevFest 2026 Component Patterns

Reusable patterns for this Next.js site. Adapt spacing to context; keep brand rules fixed.

## Hero with wordmark + location badge

```tsx
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"

export function DevFestHero() {
  return (
    <Section className="relative overflow-hidden bg-devfest-off-white">
      {/* Decorative glyphs — behind content */}
      <div
        className="pointer-events-none absolute inset-0 font-mono text-[clamp(3rem,12vw,8rem)] font-bold leading-none text-devfest-pastel-blue/40 select-none"
        aria-hidden="true"
      >
        <span className="absolute left-[8%] top-[12%]">{`{ }`}</span>
        <span className="absolute right-[10%] top-[20%]">{`//`}</span>
        <span className="absolute bottom-[15%] left-[15%]">{`< >`}</span>
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Logo clear space: py-8+ around artwork */}
          <div className="py-8">
            <Image
              src="/devfest-logo.svg"
              alt="DevFest 2026: Innovating Together"
              width={320}
              height={96}
              priority
            />
            <span className="mt-3 inline-block rounded-full bg-devfest-pastel-blue px-5 py-1.5 text-sm font-semibold tracking-wide text-devfest-black">
              Quito
            </span>
          </div>

          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-devfest-black sm:text-4xl lg:text-5xl">
            Innovating Together
          </h1>
          <p className="mt-4 max-w-prose text-lg text-devfest-black/80">
            Saturday, 26 September 2026 · USFQ, Quito
          </p>
          <div className="mt-8">
            <CTAButton href="https://example.com/register" size="lg">
              Get your ticket
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}
```

## Speaker card

Target **2 lines** for the name/title; never exceed **5 lines** combined for title + subtitle.

```tsx
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface SpeakerCardProps {
  name: string
  talkTitle: string
  photoSrc: string
}

export function SpeakerCard({ name, talkTitle, photoSrc }: SpeakerCardProps) {
  return (
    <Card className="border-devfest-pastel-green bg-devfest-pastel-green/30">
      <CardContent className="p-6">
        <Image
          src={photoSrc}
          alt=""
          width={80}
          height={80}
          className="rounded-full"
          aria-hidden="true"
        />
        <h3 className="mt-4 text-lg font-semibold leading-snug text-devfest-black line-clamp-2">
          {name}
        </h3>
        <p className="mt-1 text-sm text-devfest-black/70 line-clamp-3">{talkTitle}</p>
      </CardContent>
    </Card>
  )
}
```

Use `line-clamp` only as a last resort when content is CMS-driven and may vary; prefer editorial limits first.

## Agenda item row

```tsx
<li className="flex gap-4 border-l-4 border-devfest-blue bg-devfest-off-white px-4 py-3">
  <time className="shrink-0 font-mono text-sm font-medium text-devfest-blue">09:00</time>
  <div>
    <h3 className="font-semibold leading-snug text-devfest-black line-clamp-2">
      Keynote: Building with AI
    </h3>
    <p className="mt-1 text-sm text-devfest-black/70">Main hall</p>
  </div>
</li>
```

## Glyph section divider

```tsx
<div
  className="flex items-center justify-center gap-6 py-6 font-mono text-2xl font-bold text-devfest-halftone-yellow"
  aria-hidden="true"
>
  <span>#</span>
  <span>;</span>
  <span>*</span>
</div>
```

## Logo component extension

When updating `components/ui/logo.tsx`, add an optional `location` prop that renders the pill below the wordmark instead of inline:

```tsx
interface LogoProps {
  className?: string
  showWordmark?: boolean
  location?: string
}
```

Keep `p-4` minimum clear space around the logo link wrapper.
