import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { pastSponsorLogos } from "@/config/content"

export function SponsorLogos() {
  return (
    <Section className="bg-devfest-pastel-yellow/30" id="patrocinadores-anteriores">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-devfest-yellow">* partners</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground lg:text-4xl">
            Han confiado en nosotros
          </h2>
          <p className="mt-4 text-muted-foreground">
            Empresas y organizaciones que han apoyado ediciones anteriores de DevFest Quito.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {pastSponsorLogos.map((logo) => (
            <li key={logo.name}>
              <Image
                src={logo.src}
                alt={`Logo de ${logo.name}`}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
