import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { sponsorFaq } from "@/config/sponsors"

export function SponsorFaq() {
  return (
    <Section className="bg-devfest-pastel-blue/30" id="preguntas-frecuentes">
      <Container size="md">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-devfest-blue">? faq</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Respuestas a las consultas más comunes sobre patrocinio en DevFest 2026.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {sponsorFaq.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  )
}
