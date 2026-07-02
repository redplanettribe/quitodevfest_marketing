import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { sponsorValueProps } from "@/config/content"
import { getEventPhoto } from "@/config/event-photos"
import { EventPhotoImage } from "@/components/sections/event-photo"

const valuePropPhotos = [
  getEventPhoto("speaker"),
  getEventPhoto("registration"),
  getEventPhoto("community-group"),
] as const

export function SponsorValueProps() {
  return (
    <Section id="por-que-patrocinar">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="font-mono text-sm text-devfest-green">// por_qué_patrocinar</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
              ¿Por qué patrocinar DevFest?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Más que visibilidad: una oportunidad concreta para reclutar talento, posicionar tu
              marca y conectar con la comunidad Google en Ecuador.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {valuePropPhotos.map((photo, index) => (
              <EventPhotoImage
                key={photo.id}
                photo={photo}
                sizes="(max-width: 1024px) 33vw, 15vw"
                className={cnPhotoCell(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sponsorValueProps.map((item) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className="border-devfest-pastel-green/60 bg-devfest-pastel-green/20 transition-transform duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-devfest-pastel-green">
                    <Icon className="h-5 w-5 text-devfest-green" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

function cnPhotoCell(index: number) {
  const heights = ["aspect-[3/4]", "aspect-[4/5] mt-6", "aspect-[3/4]"]
  return `rounded-xl border border-border shadow-sm ${heights[index]}`
}
