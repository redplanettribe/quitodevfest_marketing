import { generateSEO } from "@/lib/seo"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { siteConfig } from "@/config/site"

export const metadata = generateSEO({
  title: "Home",
  description: siteConfig.description,
  url: "/",
})

export default function HomePage() {
  return (
    <main id="main-content">
      <Section>
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </h1>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Your content goes here.
          </p>
        </Container>
      </Section>
    </main>
  )
}
