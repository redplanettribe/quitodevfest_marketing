import { Mic } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { getEventPhoto } from "@/config/event-photos"
import { EventPhotoImage } from "@/components/sections/event-photo"
import { eventConfig } from "@/config/event"

const speakerPhoto = getEventPhoto("speaker")

export function ParticipateSpeakers() {
  return (
    <Section className="bg-devfest-pastel-yellow/20" id="call-for-speakers">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="font-mono text-sm text-devfest-yellow"># call_for_speakers</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              ¿Quieres compartir en el escenario?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Buscamos ponentes con historias, demos y aprendizajes sobre IA, Google Cloud,
              desarrollo de producto y emprendimiento tech. Envía tu propuesta antes del cierre
              de la convocatoria.
            </p>
            <div className="mt-8">
              <CTAButton
                href={eventConfig.callForSpeakersUrl}
                icon={Mic}
                size="lg"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar propuesta en Sessionize
              </CTAButton>
            </div>
          </div>

          <EventPhotoImage
            photo={speakerPhoto}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="aspect-[4/3] rounded-xl border border-border shadow-sm"
          />
        </div>
      </Container>
    </Section>
  )
}
