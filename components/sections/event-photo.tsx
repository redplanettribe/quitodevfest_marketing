import Image from "next/image"
import type { EventPhoto } from "@/config/event-photos"
import { cn } from "@/lib/utils"

interface EventPhotoImageProps {
  photo: EventPhoto
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
  showCaption?: boolean
}

export function EventPhotoImage({
  photo,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  showCaption = false,
}: EventPhotoImageProps) {
  return (
    <figure className={cn("group relative h-full overflow-hidden", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        priority={priority}
        sizes={sizes}
        className={cn("h-full w-full object-cover", imageClassName)}
      />
      {showCaption && photo.caption && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-devfest-black/70 to-transparent px-4 py-3 text-sm font-medium text-white">
          {photo.caption}
        </figcaption>
      )}
    </figure>
  )
}
