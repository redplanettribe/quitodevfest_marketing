import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { getEventPhoto } from "@/config/event-photos"
import { EventPhotoImage } from "@/components/sections/event-photo"
import { cn } from "@/lib/utils"

interface GalleryItem {
  id: string
  className: string
  sizes: string
}

const galleryLayout: GalleryItem[] = [
  {
    id: "community-celebration",
    className:
      "min-h-[220px] sm:col-span-2 sm:row-span-2 sm:col-start-1 sm:row-start-1 sm:min-h-0",
    sizes: "(max-width: 768px) 100vw, 42vw",
  },
  {
    id: "bwai-attendees",
    className: "min-h-[180px] sm:col-start-3 sm:row-start-1 sm:min-h-0",
    sizes: "(max-width: 768px) 100vw, 28vw",
  },
  {
    id: "keynote-stage",
    className: "min-h-[180px] sm:col-start-3 sm:row-start-2 sm:min-h-0",
    sizes: "(max-width: 768px) 100vw, 28vw",
  },
  {
    id: "workshop-audience",
    className: "min-h-[200px] sm:col-span-2 sm:col-start-1 sm:row-start-3 sm:min-h-[220px]",
    sizes: "(max-width: 768px) 100vw, 55vw",
  },
  {
    id: "session-hall",
    className: "min-h-[200px] sm:col-start-3 sm:row-start-3 sm:min-h-[220px]",
    sizes: "(max-width: 768px) 100vw, 28vw",
  },
  {
    id: "hallway-networking",
    className: "min-h-[200px] sm:col-span-2 sm:col-start-1 sm:row-start-4 sm:min-h-[220px]",
    sizes: "(max-width: 768px) 100vw, 55vw",
  },
  {
    id: "outdoor-networking",
    className: "min-h-[200px] sm:col-start-3 sm:row-start-4 sm:min-h-[220px]",
    sizes: "(max-width: 768px) 100vw, 28vw",
  },
  {
    id: "panel-discussion",
    className: "min-h-[240px] sm:col-span-3 sm:row-start-5 sm:min-h-[280px]",
    sizes: "100vw",
  },
]

export function ParticipateGallery() {
  return (
    <Section className="bg-devfest-pastel-blue/20" id="galeria">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-devfest-blue"># galería</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Lo que te espera
          </h2>
          <p className="mt-4 text-muted-foreground">
            Momentos reales de ediciones anteriores: charlas, talleres, comunidad y networking en
            el campus USFQ.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:grid-rows-[1fr_1fr_auto_auto_auto] sm:gap-3">
          {galleryLayout.map((item, index) => {
            const photo = getEventPhoto(item.id)
            return (
              <EventPhotoImage
                key={photo.id}
                photo={photo}
                priority={index === 0}
                showCaption
                sizes={item.sizes}
                className={cn(
                  "h-full rounded-xl border border-border shadow-sm",
                  item.className,
                )}
              />
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
