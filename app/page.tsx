import { generateSEO } from "@/lib/seo"
import { organizationSchema } from "@/lib/schema"
import { HomeHero } from "@/components/sections/home-hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { ProcessStrip } from "@/components/sections/process-strip"
import { BrandStory } from "@/components/sections/brand-story"
import { CtaBand } from "@/components/sections/cta-band"

export const metadata = generateSEO({
  title: "Software Factory",
  description:
    "Citus is a software factory that builds and ships product-grade software with speed and intent—from concept to production, citus.",
  url: "/",
})

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main id="main-content">
        <HomeHero />
        <ServicesGrid showViewAll />
        <ProcessStrip showLink />
        <BrandStory />
        <CtaBand />
      </main>
    </>
  )
}
