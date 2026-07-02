import { ArrowRight, FileText } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { CONTACT_PAGE_PATH, SPONSORS_PAGE_PATH } from "@/lib/contact"

interface CtaBandProps {
  title?: string
  description?: string
}

export function CtaBand({
  title = "¿Listo para impulsar tu marca en DevFest 2026?",
  description = "Conversemos sobre el paquete ideal para tu empresa. Te respondemos en un máximo de 2 días hábiles.",
}: CtaBandProps) {
  return (
    <Section className="bg-devfest-pastel-green/30">
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
              Solicitar información
            </CTAButton>
            <CTAButton href={SPONSORS_PAGE_PATH} variant="outline" icon={FileText} size="lg">
              Ver paquetes
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}
