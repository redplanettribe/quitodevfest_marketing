import { generateSEO } from "@/lib/seo"
import { eventSchema } from "@/lib/schema"
import { DevFestHero } from "@/components/sections/devfest-hero"
import { StatsGrid } from "@/components/sections/stats-grid"
import { SponsorValueProps } from "@/components/sections/sponsor-value-props"
import { SponsorLogos } from "@/components/sections/sponsor-logos"
import { CtaBand } from "@/components/sections/cta-band"
import { siteConfig } from "@/config/site"

export const metadata = generateSEO({
  title: "Patrocina DevFest 2026 Quito",
  description: siteConfig.description,
  url: "/",
  keywords: ["patrocinio DevFest", "sponsors Ecuador", "evento tech Quito"],
})

export default function HomePage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <DevFestHero />
      <StatsGrid />
      <SponsorValueProps />
      <SponsorLogos />
      <CtaBand />
    </main>
  )
}
