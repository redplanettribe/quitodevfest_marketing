import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { eventConfig } from "@/config/event"
import { siteConfig } from "@/config/site"

interface LogoProps {
  className?: string
  showBadge?: boolean
}

export function Logo({ className, showBadge = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex flex-col items-start gap-1 transition-all duration-200 hover:opacity-80 active:scale-95",
        className,
      )}
      aria-label={`${siteConfig.shortName} — inicio`}
    >
      <Image
        src={eventConfig.assets.logo}
        alt={siteConfig.shortName}
        width={140}
        height={42}
        className="h-8 w-auto sm:h-9"
        priority
      />
      {showBadge && (
        <span className="rounded-full bg-devfest-pastel-blue px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-devfest-black sm:text-xs">
          {eventConfig.city}
        </span>
      )}
    </Link>
  )
}
