import Link from "next/link"
import { cn } from "@/lib/utils"
import { mainNav } from "@/config/navigation"

interface NavLinksProps {
  className?: string
  onNavigate?: () => void
}

export function NavLinks({ className, onNavigate }: NavLinksProps) {
  return (
    <nav className={cn("flex items-center gap-6", className)} aria-label="Main navigation">
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:opacity-80 active:scale-95"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
