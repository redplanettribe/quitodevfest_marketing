import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <main id="main-content">
      <Section className="relative min-h-[85vh] overflow-hidden pb-16 pt-8">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Skeleton className="h-24 w-64" />
            <Skeleton className="mt-6 h-4 w-40" />
            <Skeleton className="mt-4 h-14 w-96 max-w-full" />
            <Skeleton className="mt-4 h-6 w-80 max-w-full" />
            <div className="mt-10 flex gap-4">
              <Skeleton className="h-12 w-48 rounded-md" />
              <Skeleton className="h-12 w-40 rounded-md" />
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-devfest-pastel-blue/40">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-32 w-full rounded-xl" />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  )
}
