import { generateSEO } from "@/lib/seo"
import { PageHero } from "@/components/sections/page-hero"
import { SponsorTiers } from "@/components/sections/sponsor-tiers"
import { SponsorFaq } from "@/components/sections/sponsor-faq"
import { CtaBand } from "@/components/sections/cta-band"

export const metadata = generateSEO({
  title: "Paquetes de patrocinio",
  description:
    "Conoce los paquetes de patrocinio de DevFest 2026 Quito: Platino, Oro, Plata y Comunidad. Visibilidad, activaciones y acceso a la audiencia tech de Ecuador.",
  url: "/sponsors/",
  keywords: ["paquetes patrocinio", "sponsorship DevFest", "patrocinar evento tech"],
})

export default function SponsorsPage() {
  return (
    <main id="main-content">
      <PageHero
        label="// patrocinadores"
        title="Paquetes de patrocinio"
        description="Elige el nivel de visibilidad y activación que mejor se alinee con los objetivos de tu empresa. Todos los paquetes son personalizables."
      />
      <SponsorTiers />
      <SponsorFaq />
      <CtaBand
        title="¿Quieres una propuesta a medida?"
        description="Cuéntanos tus objetivos y armamos un paquete personalizado para tu marca."
      />
    </main>
  )
}
