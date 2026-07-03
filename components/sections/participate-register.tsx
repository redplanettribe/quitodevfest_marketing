import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { eventConfig } from "@/config/event"

export function ParticipateRegister() {
  return (
    <Section id="registro">
      <Container size="md">
        <div className="rounded-2xl border border-devfest-pastel-blue/70 bg-devfest-pastel-blue/25 p-8 text-center shadow-sm lg:p-12">
          <p className="font-mono text-sm text-devfest-blue"># registro</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Reserva tu lugar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Únete a la edición más grande del ecosistema Google Developer Groups en Ecuador.
            Charlas, talleres, networking y una comunidad que crece edición tras edición.
          </p>

          <dl className="mx-auto mt-8 flex max-w-lg flex-col gap-4 text-left sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex gap-3">
              <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-devfest-blue" aria-hidden="true" />
              <div>
                <dt className="text-sm font-medium text-foreground">Cuándo</dt>
                <dd className="text-sm text-muted-foreground">{eventConfig.date}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-devfest-blue" aria-hidden="true" />
              <div>
                <dt className="text-sm font-medium text-foreground">Dónde</dt>
                <dd className="text-sm text-muted-foreground">{eventConfig.venue}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-10">
            <CTAButton
              href={eventConfig.registrationUrl}
              icon={ArrowRight}
              iconPosition="right"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Registrate
            </CTAButton>
            <p className="mt-4 text-sm text-muted-foreground">
              El registro se gestiona a través de{" "}
              <a
                href={eventConfig.communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-devfest-blue underline-offset-4 hover:underline"
              >
                GDG Community
              </a>
              . La experiencia del evento se potencia con{" "}
              <a
                href={eventConfig.ticketingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-devfest-blue underline-offset-4 hover:underline"
              >
                Multi-Track Ticketing (m3t)
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
