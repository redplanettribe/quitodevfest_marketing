import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { Container } from "@/components/ui/container"
import { mainNav } from "@/config/navigation"
import { CONTACT_EMAIL, CONTACT_PAGE_PATH } from "@/lib/contact"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container>
        <div className="grid gap-12 py-12 md:grid-cols-3 lg:py-16">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm text-muted-foreground">{siteConfig.description}</p>
            <p className="font-mono text-xs text-muted-foreground">
              citus — swift, stirred into motion
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground">Navigation</h2>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-all duration-200 hover:text-foreground hover:opacity-80 active:scale-95"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-foreground">Contact</h2>
            <a
              href={CONTACT_PAGE_PATH}
              className="block text-sm text-muted-foreground transition-all duration-200 hover:text-foreground hover:opacity-80 active:scale-95"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="text-sm text-muted-foreground">
              Tell us what you&apos;re building. We typically respond within one business day.
            </p>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
