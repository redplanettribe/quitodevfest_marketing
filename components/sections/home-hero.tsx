import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { ParticleField } from "@/components/ui/particle-field"
import { CONTACT_PAGE_PATH } from "@/lib/contact"
import { siteConfig } from "@/config/site"

export function HomeHero() {
  return (
    <Section className="relative overflow-hidden pb-16 pt-12 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-glow absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-75" />
        <ParticleField className="absolute inset-0" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[var(--cta-primary)]/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[var(--cta-secondary)]/10 blur-3xl" />
        </div>
      </div>

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm text-[var(--cta-primary)]">
            <span aria-hidden="true">&gt; </span>
            citus build --ship
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground lg:text-xl">
            {siteConfig.name} is a software factory that builds and ships product-grade software
            with speed and intent—from concept to production, citus.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton
              href={CONTACT_PAGE_PATH}
              icon={ArrowRight}
              iconPosition="right"
              size="lg"
            >
              Start a project
            </CTAButton>
            <CTAButton href="/services/" variant="outline" size="lg">
              Explore services
            </CTAButton>
          </div>
        </div>

        <div
          className="relative mx-auto mt-16 max-w-2xl rounded-xl border border-border bg-card p-6 shadow-sm"
          aria-hidden="true"
        >
          <div className="font-mono text-sm">
            <p className="text-muted-foreground">
              <span className="text-[var(--cta-primary)]">$</span> citus init my-product
            </p>
            <p className="mt-2 text-muted-foreground">
              <span className="text-[var(--cta-primary)]">&gt;</span> Discovering scope...
            </p>
            <p className="mt-1 text-muted-foreground">
              <span className="text-[var(--cta-primary)]">&gt;</span> Building in small batches...
            </p>
            <p className="mt-1 text-foreground">
              <span className="text-[var(--cta-primary)]">&gt;</span> Shipped to production.{" "}
              <span className="text-[var(--cta-accent)]">citus.</span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
