import { Logo } from "@/components/ui/logo"
import { NavLinks } from "@/components/nav-links"
import { MobileNav } from "@/components/mobile-nav"
import { Container } from "@/components/ui/container"
import { mainNav } from "@/config/navigation"

export function SiteHeader() {
  const hasNav = mainNav.length > 0

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />
          {hasNav && <NavLinks className="hidden md:flex" />}
          {hasNav && <MobileNav />}
        </div>
      </Container>
    </header>
  )
}
