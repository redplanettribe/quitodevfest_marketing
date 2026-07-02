import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { processSteps } from "@/config/content"

interface ProcessStripProps {
  showLink?: boolean
}

export function ProcessStrip({ showLink = false }: ProcessStripProps) {
  return (
    <Section className="bg-muted/50" id="process">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-[var(--cta-primary)]">process</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            How we build
          </h2>
          <p className="mt-4 text-muted-foreground">
            A factory pipeline designed for continuous delivery—not waterfall handoffs. We stay with
            you past launch, into daily operations and training your team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--cta-primary)]">{step.step}</span>
                  <Icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>

        {showLink && (
          <p className="mt-8 text-center">
            <Link
              href="/process/"
              className="text-sm font-medium text-[var(--cta-primary)] transition-all duration-200 hover:opacity-80 active:scale-95"
            >
              Explore our full process &rarr;
            </Link>
          </p>
        )}
      </Container>
    </Section>
  )
}
