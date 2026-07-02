import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { getEventPhoto } from "@/config/event-photos"
import { EventPhotoBackground } from "@/components/sections/event-photo-background"

interface PageHeroProps {
  label?: string
  title: string
  description: string
  className?: string
  photoId?: string
}

export function PageHero({ label, title, description, className, photoId }: PageHeroProps) {
  const photo = photoId ? getEventPhoto(photoId) : null

  return (
    <Section
      className={cn(
        "relative overflow-hidden pb-8 pt-8 lg:pb-12 lg:pt-12",
        photo && "pb-10 lg:pb-14",
        className,
      )}
    >
      {photo && <EventPhotoBackground photo={photo} priority />}

      <Container size="md" className="relative">
        <div
          className={cn(
            "space-y-4 text-center",
            photo &&
              "mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card/90 px-6 py-8 shadow-sm backdrop-blur-sm sm:px-10",
          )}
        >
          {label && (
            <p className="font-mono text-sm text-devfest-blue">{label}</p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{description}</p>
        </div>
      </Container>
    </Section>
  )
}
