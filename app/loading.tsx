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
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-72" />
              <Skeleton className="h-5 w-full max-w-md" />
              <div className="grid gap-4 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-32 w-full rounded-xl" />
                ))}
              </div>
            </div>
            <Skeleton className="aspect-[4/3] w-full rounded-2xl lg:min-h-[420px]" />
          </div>
        </Container>
      </Section>
      <Section className="bg-devfest-pastel-yellow/25">
        <Container>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:grid-rows-[1fr_1fr_auto_auto] sm:gap-3">
            <Skeleton className="min-h-[220px] rounded-xl sm:col-span-2 sm:row-span-2" />
            <Skeleton className="min-h-[180px] rounded-xl sm:col-start-3 sm:row-start-1" />
            <Skeleton className="min-h-[180px] rounded-xl sm:col-start-3 sm:row-start-2" />
            <Skeleton className="min-h-[220px] rounded-xl sm:col-span-3 sm:row-start-3" />
            <Skeleton className="min-h-[220px] rounded-xl sm:col-span-3 sm:row-start-4" />
          </div>
        </Container>
      </Section>
    </main>
  )
}
