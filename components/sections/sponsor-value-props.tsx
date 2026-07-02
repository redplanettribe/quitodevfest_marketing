import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { sponsorValueProps } from "@/config/content"

export function SponsorValueProps() {
  return (
    <Section id="por-que-patrocinar">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-devfest-green">// por_qué_patrocinar</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            ¿Por qué patrocinar DevFest?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Más que visibilidad: una oportunidad concreta para reclutar talento, posicionar tu
            marca y conectar con la comunidad Google en Ecuador.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sponsorValueProps.map((item) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className="border-devfest-pastel-green/60 bg-devfest-pastel-green/20 transition-transform duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-devfest-pastel-green">
                    <Icon className="h-5 w-5 text-devfest-green" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
