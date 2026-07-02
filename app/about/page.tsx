import { generateSEO } from "@/lib/seo"
import { PageHero } from "@/components/sections/page-hero"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CtaBand } from "@/components/sections/cta-band"
import { values } from "@/config/content"
import { siteConfig } from "@/config/site"

export const metadata = generateSEO({
  title: "About",
  description:
    "Citus means swift—speed born from being stirred into motion. Learn how our software factory philosophy shapes everything we build and ship.",
  url: "/about/",
  keywords: ["about citus", "software factory", "engineering philosophy"],
})

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        label="about"
        title="Speed born from motion"
        description="Citus is more than a name—it's an operating philosophy for how we build software."
      />

      <Section>
        <Container size="md">
          <div className="prose prose-invert mx-auto max-w-none space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">The name</h2>
            <p>
              In Latin, <em className="text-foreground">citus</em> means swift, rapid, quick. But
              its root runs deeper. Citus is the perfect passive participle of{" "}
              <em className="font-mono text-sm">cieo</em>—to set in motion, stir up, rouse, excite.
            </p>
            <p>
              When Romans called something citus, they weren&apos;t describing passive velocity.
              They meant something that had been provoked into action—a swift horse, a fluttering
              pulse, a rapidly turning axis of the sky. Speed with a catalyst behind it.
            </p>
            <p className="font-mono text-sm text-[var(--cta-primary)]">
              cieo: I stir up &rarr; citus: having been stirred up &rarr; swift
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Our philosophy</h2>
            <p>
              {siteConfig.name} is a software factory. We don&apos;t accumulate backlog—we set
              products in motion. Every engagement starts with clarity on outcomes, moves through
              small shippable batches, and ends with software running in production.
            </p>
            <p>
              We work with founders, product teams, and engineering orgs that need senior
              technical capacity without the overhead of scaling a department from scratch. You get
              direct access to the people building your software—not account managers reading
              status updates.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              What we stand for
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="rounded-xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </main>
  )
}
