import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { CONTACT_PAGE_PATH } from "@/lib/contact"

interface CtaBandProps {
  title?: string
  description?: string
}

export function CtaBand({
  title = "Ready to set your software in motion?",
  description = "Tell us what you're building. We'll respond within one business day with next steps.",
}: CtaBandProps) {
  return (
    <Section className="bg-[var(--cta-lighter)]">
      <Container size="md">
        <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm lg:p-12">
          <h2 className="text-2xl font-semibold text-foreground lg:text-3xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton
              href={CONTACT_PAGE_PATH}
              icon={ArrowRight}
              iconPosition="right"
              size="lg"
            >
              Start a project
            </CTAButton>
            <CTAButton href="/process/" variant="outline" size="lg">
              See our process
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}
