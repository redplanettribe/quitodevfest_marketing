import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 transition-all duration-200 hover:opacity-80 active:scale-95",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/isotipo.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8"
        aria-hidden="true"
      />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight text-foreground">{siteConfig.name}</span>
      )}
    </Link>
  )
}
