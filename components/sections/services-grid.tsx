import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTAButton } from "@/components/ui/cta-button"
import { services } from "@/config/content"

interface ServicesGridProps {
  showViewAll?: boolean
}

export function ServicesGrid({ showViewAll = false }: ServicesGridProps) {
  return (
    <Section id="services">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-[var(--cta-primary)]">services</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            What we build
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end product engineering for teams that need to ship fast without cutting corners.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="rounded-xl shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-[var(--cta-lighter)]">
                    <Icon className="h-5 w-5 text-[var(--cta-primary)]" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cta-primary)]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <CTAButton href="/services/" variant="outline" icon={ArrowRight} iconPosition="right">
              View all services
            </CTAButton>
          </div>
        )}
      </Container>
    </Section>
  )
}
