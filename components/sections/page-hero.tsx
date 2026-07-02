import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"

interface PageHeroProps {
  label?: string
  title: string
  description: string
  className?: string
}

export function PageHero({ label, title, description, className }: PageHeroProps) {
  return (
    <Section className={cn("pb-8 pt-8 lg:pb-12 lg:pt-12", className)}>
      <Container size="md">
        <div className="space-y-4 text-center">
          {label && (
            <p className="font-mono text-sm text-devfest-blue">{label}</p>
          )}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{description}</p>
        </div>
      </Container>
    </Section>
  )
}
