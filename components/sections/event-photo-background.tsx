import Image from "next/image"
import type { EventPhoto } from "@/config/event-photos"
import { cn } from "@/lib/utils"

interface EventPhotoBackgroundProps {
  photo: EventPhoto
  className?: string
  overlayClassName?: string
  priority?: boolean
}

export function EventPhotoBackground({
  photo,
  className,
  overlayClassName,
  priority = false,
}: EventPhotoBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <Image
        src={photo.src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover brightness-[1.02] saturate-[1.05]"
      />
      <div className={cn("event-photo-overlay absolute inset-0", overlayClassName)} />
    </div>
  )
}
