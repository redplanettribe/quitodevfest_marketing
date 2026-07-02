import { generateSEO } from "@/lib/seo"
import { PageHero } from "@/components/sections/page-hero"
import { ProcessStrip } from "@/components/sections/process-strip"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CtaBand } from "@/components/sections/cta-band"
import { principles, engagementModels } from "@/config/content"

export const metadata = generateSEO({
  title: "Process",
  description:
    "Discover, build, ship, iterate—the Citus factory pipeline for continuous software delivery. Small batches, transparent collaboration, owned outcomes.",
  url: "/process/",
  keywords: ["software development process", "agile delivery", "continuous deployment"],
})

export default function ProcessPage() {
  return (
    <main id="main-content">
      <PageHero
        label="process"
        title="The factory pipeline"
        description="A repeatable methodology for shipping software continuously—not a waterfall playbook with a trendy label."
      />
      <ProcessStrip />

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              How we operate
            </h2>
            <p className="mt-4 text-muted-foreground">
              Principles that keep momentum high and waste low.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <Card key={principle.title} className="rounded-xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              Engagement models
            </h2>
            <p className="mt-4 text-muted-foreground">
              Flexible ways to work together, depending on where you are and what you need.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementModels.map((model) => (
              <Card key={model.title} className="rounded-xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{model.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </main>
  )
}
