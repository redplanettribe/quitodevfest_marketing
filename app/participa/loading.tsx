import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function ParticipaLoading() {
  return (
    <main id="main-content">
      <Section className="pb-8 pt-8 lg:pb-12 lg:pt-12">
        <Container size="md">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-4 w-24" />
            <Skeleton className="mx-auto h-12 w-80 max-w-full" />
            <Skeleton className="mx-auto h-5 w-96 max-w-full" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container size="md">
          <Skeleton className="mx-auto h-72 w-full max-w-2xl rounded-2xl" />
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <Skeleton className="mx-auto h-4 w-28" />
            <Skeleton className="mx-auto h-10 w-72 max-w-full" />
            <Skeleton className="mx-auto h-5 w-96 max-w-full" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-44 w-full rounded-xl" />
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-3 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-xl" />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
