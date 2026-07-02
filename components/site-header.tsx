import { Logo } from "@/components/ui/logo"
import { NavLinks } from "@/components/nav-links"
import { MobileNav } from "@/components/mobile-nav"
import { CTAButton } from "@/components/ui/cta-button"
import { Container } from "@/components/ui/container"
import { CONTACT_PAGE_PATH } from "@/lib/contact"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <NavLinks className="hidden md:flex" />
          <div className="flex items-center gap-2">
            <CTAButton
              href={CONTACT_PAGE_PATH}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Start a project
            </CTAButton>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  )
}
