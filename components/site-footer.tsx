import { Container } from "@/components/ui/container"
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container>
        <div className="py-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
