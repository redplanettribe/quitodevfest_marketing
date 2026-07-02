import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { stats } from "@/config/content"

export function BrandStory() {
  return (
    <Section className="bg-[var(--cta-lighter)]" id="why-citus">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-sm text-[var(--cta-primary)]">why citus</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              Speed with an attitude
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                <em className="text-foreground">Citus</em> is Latin for swift—but it means more
                than velocity. It comes from <em className="font-mono text-sm">cieo</em>: to stir
                up, rouse, excite. Something citus has been provoked into motion.
              </p>
              <p>
                That is how we work. We do not wait for perfect conditions. We set software in
                motion—with clear direction, tight feedback loops, and the energy to ship.
              </p>
              <p className="font-mono text-sm text-[var(--cta-primary)]">
                cieo &rarr; citus &rarr; swift
              </p>
            </div>
            <Link
              href="/about/"
              className="mt-6 inline-block text-sm font-medium text-[var(--cta-primary)] transition-all duration-200 hover:opacity-80 active:scale-95"
            >
              Read our story &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <p className="text-2xl font-semibold text-[var(--cta-primary)] lg:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
