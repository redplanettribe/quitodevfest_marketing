import { generateSEO } from "@/lib/seo"
import { PageHero } from "@/components/sections/page-hero"
import { ParticipateRegister } from "@/components/sections/participate-register"
import { ParticipateSpeakers } from "@/components/sections/participate-speakers"
import { ParticipatePlatform } from "@/components/sections/participate-platform"
import { ParticipateGallery } from "@/components/sections/participate-gallery"

export const metadata = generateSEO({
  title: "Participa en DevFest 2026",
  description:
    "Regístrate en DevFest 2026 Quito: charlas, talleres y networking en USFQ. Conoce la plataforma m3t y envía tu propuesta como ponente.",
  url: "/participa/",
  keywords: [
    "registro DevFest",
    "asistentes DevFest Quito",
    "call for speakers",
    "evento tech Ecuador",
  ],
})

export default function ParticipaPage() {
  return (
    <main id="main-content">
      <PageHero
        label="// participa"
        title="Únete a DevFest 2026"
        description="Reserva tu lugar, descubre la plataforma del evento y conoce cómo puedes compartir tu experiencia en el escenario."
        photoId="registration"
      />
      <ParticipateRegister />
      <ParticipatePlatform />
      <ParticipateSpeakers />
      <ParticipateGallery />
    </main>
  )
}
