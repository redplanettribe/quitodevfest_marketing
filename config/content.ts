import { Briefcase, Megaphone, Rocket, Users, type LucideIcon } from "lucide-react"

export interface StatItem {
  value: string
  label: string
  source?: string
}

export interface ValuePropItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface PartnerLogo {
  name: string
  src: string
  width: number
  height: number
}

export const audienceStats: StatItem[] = [
  { value: "900+", label: "Asistentes en ediciones anteriores", source: "DevFest Quito" },
  { value: "70%", label: "Profesionales de la industria tech" },
  { value: "50+", label: "Empresas representadas" },
  { value: "15K+", label: "Impresiones en redes sociales" },
]

export const sponsorValueProps: ValuePropItem[] = [
  {
    title: "Reclutamiento de talento",
    description:
      "Accede a desarrolladores senior, líderes técnicos y estudiantes de alto potencial que buscan su próximo reto profesional.",
    icon: Users,
  },
  {
    title: "Visibilidad de marca",
    description:
      "Tu logo y mensaje ante cientos de profesionales tech en el evento más visible del ecosistema Google en Ecuador.",
    icon: Megaphone,
  },
  {
    title: "Adopción de producto",
    description:
      "Demuestra tus herramientas, APIs y plataformas en charlas, workshops y activaciones directas con la audiencia.",
    icon: Rocket,
  },
  {
    title: "Comunidad Google",
    description:
      "Asóciate al ecosistema GDG y DevFest: la red global de desarrolladores respaldada por Google Developer Groups.",
    icon: Briefcase,
  },
]

export const pastSponsorLogos: PartnerLogo[] = [
  { name: "Google", src: "/sponsors/google.svg", width: 120, height: 40 },
  { name: "Google Cloud", src: "/sponsors/google-cloud.svg", width: 140, height: 40 },
  { name: "USFQ", src: "/sponsors/usfq.svg", width: 100, height: 40 },
  { name: "JetBrains", src: "/sponsors/jetbrains.svg", width: 120, height: 40 },
]

export const contactTopics: string[] = [
  "Nombre de tu empresa y sector",
  "Paquete de patrocinio de interés",
  "Objetivos del patrocinio (reclutamiento, marca, producto)",
  "Persona de contacto y datos de facturación",
]

/** @deprecated Legacy Citus template exports — kept for unused section components */
export const stats = audienceStats

/** @deprecated Legacy Citus template exports — kept for unused section components */
export const services: { title: string; description: string; icon: LucideIcon; highlights: string[] }[] = []

/** @deprecated Legacy Citus template exports — kept for unused section components */
export const processSteps: { step: string; title: string; description: string; icon: LucideIcon }[] = []
