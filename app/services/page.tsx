import { generateSEO } from "@/lib/seo"
import { PageHero } from "@/components/sections/page-hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { CtaBand } from "@/components/sections/cta-band"

export const metadata = generateSEO({
  title: "Services",
  description:
    "Product engineering, AI & data, cloud & DevOps, and design & UX—end-to-end software development from Citus, your software factory.",
  url: "/services/",
  keywords: ["product engineering", "AI development", "cloud devops", "UX design"],
})

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        label="services"
        title="What we build"
        description="Full-stack product engineering for teams that need to ship fast without sacrificing quality. From architecture to production, we cover the entire stack."
      />
      <ServicesGrid />
      <CtaBand
        title="Need something custom?"
        description="Every project starts with a conversation. Tell us your constraints and we'll propose the right approach."
      />
    </main>
  )
}
