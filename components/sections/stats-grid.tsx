import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { audienceStats } from "@/config/content"
import { getEventPhoto } from "@/config/event-photos"
import { EventPhotoImage } from "@/components/sections/event-photo"

const audiencePhoto = getEventPhoto("audience")

export function StatsGrid() {
  return (
    <Section className="bg-devfest-pastel-blue/40" id="alcance">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <p className="font-mono text-sm text-devfest-blue"># alcance</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              Una audiencia que importa
            </h2>
            <p className="mt-4 text-muted-foreground">
              DevFest Quito reúne a desarrolladores, estudiantes y líderes técnicos del ecosistema
              tech ecuatoriano y regional.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {audienceStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="text-3xl font-semibold text-devfest-blue lg:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
                  {stat.source && (
                    <p className="mt-1 text-xs text-muted-foreground">{stat.source}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <EventPhotoImage
            photo={audiencePhoto}
            showCaption
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="aspect-[4/3] rounded-2xl border border-border shadow-md lg:aspect-auto lg:min-h-[420px]"
          />
        </div>
      </Container>
    </Section>
  )
}
