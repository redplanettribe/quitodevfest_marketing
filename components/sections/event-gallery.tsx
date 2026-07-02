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
    id: "speaker",
    className:
      "min-h-[220px] sm:col-span-2 sm:row-span-2 sm:col-start-1 sm:row-start-1 sm:min-h-0",
    sizes: "(max-width: 768px) 100vw, 42vw",
  },
  {
    id: "community-group",
    className: "min-h-[180px] sm:col-start-3 sm:row-start-1 sm:min-h-0",
    sizes: "(max-width: 768px) 100vw, 28vw",
  },
  {
    id: "registration",
    className: "min-h-[180px] sm:col-start-3 sm:row-start-2 sm:min-h-0",
    sizes: "(max-width: 768px) 100vw, 28vw",
  },
  {
    id: "group-photo",
    className: "min-h-[200px] sm:col-span-3 sm:row-start-3 sm:min-h-[220px]",
    sizes: "100vw",
  },
  {
    id: "audience",
    className: "min-h-[200px] sm:col-span-3 sm:row-start-4 sm:min-h-[220px]",
    sizes: "100vw",
  },
]

export function EventGallery() {
  return (
    <Section className="bg-devfest-pastel-yellow/25" id="experiencia">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-devfest-yellow"># experiencia</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Así se vive DevFest Quito
          </h2>
          <p className="mt-4 text-muted-foreground">
            Charlas, talleres, networking y una comunidad que crece edición tras edición. Tu marca
            puede ser parte de esta experiencia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:grid-rows-[1fr_1fr_auto_auto] sm:gap-3">
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
