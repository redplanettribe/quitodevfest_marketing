import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <main id="main-content">
      <Section className="pb-8 pt-8 lg:pb-12 lg:pt-12">
        <Container size="md">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-4 w-24" />
            <Skeleton className="mx-auto h-12 w-72 max-w-full" />
            <Skeleton className="mx-auto h-5 w-96 max-w-full" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container size="md">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
            <Skeleton className="h-12 w-full max-w-sm rounded-md" />
            <Skeleton className="h-12 w-full max-w-sm rounded-md" />
            <Skeleton className="h-12 w-full max-w-sm rounded-md" />
          </div>
        </Container>
      </Section>
    </main>
  )
}
