import { generateSEO } from "@/lib/seo"
import { PageHero } from "@/components/sections/page-hero"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { SponsorInquiryActions } from "@/components/contact/sponsor-inquiry-actions"
import { contactTopics } from "@/config/content"
import { siteConfig } from "@/config/site"

export const metadata = generateSEO({
  title: "Contacto de patrocinios",
  description:
    "Contacta al equipo de patrocinios de DevFest 2026 Quito. Solicita información sobre paquetes, propuestas personalizadas y disponibilidad.",
  url: "/contact/",
  keywords: ["contacto patrocinio", "sponsorship inquiry DevFest"],
})

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        label="// contacto"
        title="Hablemos de patrocinio"
        description="Completa el formulario o escríbenos directamente. Te ayudamos a encontrar el paquete ideal para tu empresa."
      />
      <Section>
        <Container size="md">
          <SponsorInquiryActions />

          <div className="mx-auto mt-16 max-w-lg">
            <h2 className="text-center text-lg font-semibold text-foreground">
              Qué incluir en tu mensaje
            </h2>
            <ul className="mt-6 space-y-3">
              {contactTopics.map((topic) => (
                <li
                  key={topic}
                  className="flex gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
                >
                  <span className="font-mono text-devfest-blue" aria-hidden="true">
                    &gt;
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              También puedes escribirnos a{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-medium text-devfest-blue underline-offset-4 hover:underline"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </main>
  )
}
