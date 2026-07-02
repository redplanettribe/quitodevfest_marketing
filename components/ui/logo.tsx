import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center text-lg font-semibold tracking-tight text-foreground transition-all duration-200 hover:opacity-80 active:scale-95",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      {siteConfig.name}
    </Link>
  )
}
