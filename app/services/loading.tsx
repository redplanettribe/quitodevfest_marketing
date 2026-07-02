import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function ServicesLoading() {
  return (
    <main id="main-content">
      <Section className="pb-8 pt-8 lg:pb-12 lg:pt-12">
        <Container size="md">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <Skeleton className="mx-auto h-4 w-24" />
            <Skeleton className="mx-auto h-10 w-64" />
            <Skeleton className="mx-auto h-5 w-96" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
