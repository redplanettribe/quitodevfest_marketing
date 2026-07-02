import { generateSEO } from "@/lib/seo"
import { CONTACT_EMAIL } from "@/lib/contact"
import { PageHero } from "@/components/sections/page-hero"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactEmailActions } from "@/components/contact/email-actions"
import { contactTopics } from "@/config/content"

export const metadata = generateSEO({
  title: "Contact",
  description: `Start a project with Citus. Email ${CONTACT_EMAIL} with your idea, timeline, and constraints—we respond within one business day.`,
  url: "/contact/",
  keywords: ["contact citus", "start a project", "software development inquiry"],
})

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        label="contact"
        title="Start a project"
        description="Tell us what you're building. We'll respond within one business day with next steps."
      />

      <Section>
        <Container size="md">
          <ContactEmailActions />
        </Container>
      </Section>

      <Section className="bg-muted/50">
        <Container size="md">
          <Card className="rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">What to include</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {contactTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cta-primary)]" />
                    {topic}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            No forms, no friction—just an email. We&apos;ll schedule a call if there&apos;s a fit.
          </p>
        </Container>
      </Section>
    </main>
  )
}
