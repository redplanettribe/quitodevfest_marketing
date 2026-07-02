import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <main id="main-content">
      <Section className="pb-8 pt-8 lg:pb-12 lg:pt-12">
        <Container size="md">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <Skeleton className="mx-auto h-4 w-20" />
            <Skeleton className="mx-auto h-10 w-80" />
            <Skeleton className="mx-auto h-5 w-96" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container size="md">
          <div className="space-y-4">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </Container>
      </Section>
    </main>
  )
}
