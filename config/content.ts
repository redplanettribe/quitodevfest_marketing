import {
  Award,
  Briefcase,
  Handshake,
  Megaphone,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react"

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
  {
    title: "Experto tech en la región",
    description:
      "Posiciónate como referente tecnológico ante la comunidad desarrolladora más activa de Ecuador y la región.",
    icon: Award,
  },
  {
    title: "Conexiones B2B tech",
    description:
      "Conecta con otras empresas del ecosistema que podrían adoptar, integrar o recomendar tus productos y servicios.",
    icon: Handshake,
  },
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
