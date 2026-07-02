import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <main id="main-content">
      <Section className="pb-16 pt-12 lg:pb-24 lg:pt-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Skeleton className="mx-auto h-4 w-32" />
            <Skeleton className="mx-auto h-12 w-full max-w-lg" />
            <Skeleton className="mx-auto h-6 w-full max-w-md" />
            <div className="flex justify-center gap-4 pt-4">
              <Skeleton className="h-12 w-36" />
              <Skeleton className="h-12 w-36" />
            </div>
          </div>
          <Skeleton className="mx-auto mt-16 h-32 max-w-2xl rounded-xl" />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <Skeleton className="mx-auto h-4 w-24" />
            <Skeleton className="mx-auto h-10 w-64" />
            <Skeleton className="mx-auto h-5 w-96" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
