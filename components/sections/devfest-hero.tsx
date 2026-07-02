import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { BackedBy } from "@/components/sections/backed-by"
import { HeroVideoBackground } from "@/components/sections/hero-video-background"
import { eventConfig } from "@/config/event"
import { siteConfig } from "@/config/site"
import { CONTACT_PAGE_PATH, SPONSORS_PAGE_PATH } from "@/lib/contact"

export function DevFestHero() {
  return (
    <Section className="relative min-h-[85vh] overflow-hidden pb-16 pt-8 lg:pb-24 lg:pt-12">
      <HeroVideoBackground className="pointer-events-none absolute inset-0" />

      <div
        className="pointer-events-none absolute inset-0 font-mono text-[clamp(2.5rem,10vw,7rem)] font-bold leading-none text-devfest-pastel-blue/15 select-none"
        aria-hidden="true"
      >
        <span className="absolute left-[6%] top-[14%]">{`{ }`}</span>
        <span className="absolute right-[8%] top-[22%]">{`//`}</span>
        <span className="absolute bottom-[18%] left-[12%]">{`< >`}</span>
        <span className="absolute bottom-[28%] right-[14%]">#</span>
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="py-6 sm:py-8">
            <Image
              src={eventConfig.assets.logoWithLocation}
              alt={siteConfig.name}
              width={3800}
              height={1096}
              priority
              className="mx-auto h-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[360px]"
            />
          </div>

          <div className="hero-copy-panel w-full max-w-3xl rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
            <p className="font-mono text-sm font-semibold text-devfest-blue">
              <span aria-hidden="true">&gt; </span>
              {eventConfig.organizer} presenta
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-devfest-black sm:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>

            <p className="mt-5 text-base font-medium text-devfest-black/90 sm:text-lg lg:text-xl">
              {eventConfig.date}
              <span className="mx-2 text-devfest-black/40" aria-hidden="true">
                ·
              </span>
              {eventConfig.venue}
            </p>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-devfest-black/75">
              Conecta tu marca con la comunidad de desarrolladores más activa de Ecuador.
              Patrocina el evento tech del ecosistema Google.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CTAButton href={SPONSORS_PAGE_PATH} icon={ArrowRight} iconPosition="right" size="lg">
                Conviértete en patrocinador
              </CTAButton>
              <CTAButton
                href={CONTACT_PAGE_PATH}
                variant="outline"
                icon={Mail}
                size="lg"
                className="border-devfest-black/15 bg-white/95 text-devfest-black shadow-sm hover:border-devfest-blue/40 hover:bg-white"
              >
                Contactar al equipo
              </CTAButton>
            </div>
          </div>

          <BackedBy layout="strip" className="mt-6 w-full max-w-4xl sm:mt-8" />
        </div>
      </Container>
    </Section>
  )
}
