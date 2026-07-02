import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <main id="main-content">
      <Section>
        <Container>
          <Skeleton className="h-10 w-48" />
          <Skeleton className="mt-4 h-5 w-64" />
        </Container>
      </Section>
    </main>
  )
}
