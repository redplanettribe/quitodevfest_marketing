import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { NavLinks } from "@/components/nav-links"
import { MobileNav } from "@/components/mobile-nav"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { mainNav, SPONSORS_PAGE_PATH } from "@/config/navigation"

export function SiteHeader() {
  const hasNav = mainNav.length > 0

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo showBadge={false} />
          <div className="flex items-center gap-4">
            {hasNav && <NavLinks className="hidden md:flex" />}
            <CTAButton href={SPONSORS_PAGE_PATH} size="sm" className="hidden sm:inline-flex">
              Patrocinar
            </CTAButton>
            {hasNav && <MobileNav />}
          </div>
        </div>
      </Container>
    </header>
  )
}
