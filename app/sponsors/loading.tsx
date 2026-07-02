import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function SponsorsLoading() {
  return (
    <main id="main-content">
      <Section className="pb-8 pt-8 lg:pb-12 lg:pt-12">
        <Container size="md">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-4 w-32" />
            <Skeleton className="mx-auto h-12 w-80 max-w-full" />
            <Skeleton className="mx-auto h-5 w-96 max-w-full" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-80 w-full rounded-xl" />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
