import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { ticketingFeatures } from "@/config/content"
import { eventConfig } from "@/config/event"

const m3tPartner = eventConfig.poweredBy[0]

export function ParticipatePlatform() {
  return (
    <Section id="plataforma">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-devfest-green"># plataforma</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Tu experiencia, potenciada por m3t
          </h2>
          <p className="mt-4 text-muted-foreground">
            DevFest 2026 usa{" "}
            <a
              href={eventConfig.ticketingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-devfest-blue underline-offset-4 hover:underline"
            >
              Multi-Track Ticketing (m3t)
            </a>
            , la plataforma open source para eventos multi-track. Desde el registro hasta el
            último escaneo, todo en un solo lugar.
          </p>
          <a
            href={m3tPartner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devfest-blue focus-visible:ring-offset-2"
            aria-label="Multi-Track Ticketing (m3t) — abre en una pestaña nueva"
          >
            <Image
              src={m3tPartner.logo}
              alt="Logo de Multi-Track Ticketing (m3t)"
              width={m3tPartner.logoWidth}
              height={m3tPartner.logoHeight}
              className="h-7 w-auto object-contain"
              style={{ maxWidth: m3tPartner.logoDisplay?.maxWidth }}
            />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ticketingFeatures.map((item) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className="border-devfest-pastel-green/60 bg-devfest-pastel-green/15 transition-transform duration-300 hover:-translate-y-1"
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
