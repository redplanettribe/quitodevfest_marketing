export interface SponsorTier {
  id: string
  name: string
  description: string
  highlighted?: boolean
  deliverables: string[]
}

export interface DeliverableRow {
  id: string
  label: string
  tiers: Record<string, boolean | string>
}

export interface SponsorFaqItem {
  question: string
  answer: string
}

export const sponsorInquiry = {
  emailSubject: "Consulta de patrocinio — DevFest 2026 Quito",
  inquiryCtaLabel: "Solicitar información",
  emailBody: `Hola equipo de GDG Quito,

Me interesa patrocinar DevFest 2026. A continuación los detalles de mi empresa:

Empresa:
Persona de contacto:
Correo:
Teléfono:
Paquete de interés (Platino / Oro / PYME):
Objetivo del patrocinio:

Quedo atento/a a su respuesta.

Saludos,`,
  formUrl: "https://forms.gle/MnK7cZqhGF3QszT67",
  responseTime: "Respondemos en un máximo de 2 días hábiles.",
}

export function sponsorTierInquiryBody(tierName: string): string {
  return `Hola equipo de GDG Quito,

Me interesa el paquete ${tierName} para patrocinar DevFest 2026. A continuación los detalles de mi empresa:

Empresa:
Persona de contacto:
Correo:
Teléfono:
Paquete de interés: ${tierName}
Objetivo del patrocinio:

Quedo atento/a a su respuesta.

Saludos,`
}

export function sponsorTierInquirySubject(tierName: string): string {
  return `Consulta de patrocinio — Paquete ${tierName} — DevFest 2026 Quito`
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: "platino",
    name: "Platino",
    description: "Máxima visibilidad y presencia exclusiva en el evento.",
    highlighted: true,
    deliverables: [
      "Logo destacado en web, app y materiales impresos",
      "Mención en apertura y cierre del evento",
      "Stand premium en zona de alto tráfico",
      "Charla o workshop patrocinado (30 min)",
      "4 entradas VIP para tu equipo",
      "Campaña dedicada en redes sociales de GDG Quito",
      "Distribución de swag en registro",
    ],
  },
  {
    id: "oro",
    name: "Oro",
    description: "Alta visibilidad con espacio para activaciones de marca.",
    deliverables: [
      "Logo en web, app y señalética del evento",
      "Mención en apertura del evento",
      "Stand estándar en área de patrocinadores",
      "Lightning talk patrocinado (15 min)",
      "2 entradas VIP para tu equipo",
      "Publicación destacada en redes sociales",
    ],
  },
  {
    id: "pyme",
    name: "PYME",
    description: "Presencia de marca accesible para pequeñas y medianas empresas.",
    deliverables: [
      "Logo en web y materiales digitales",
      "Logo en señalética del evento",
      "Mesa compartida en área de patrocinadores",
      "4 entradas estándar gratuitas para tu equipo",
      "Mención en newsletter pre-evento",
    ],
  },
]

export const deliverableMatrix: DeliverableRow[] = [
  {
    id: "web-logo",
    label: "Logo en sitio web",
    tiers: { platino: true, oro: true, pyme: true },
  },
  {
    id: "stage-mention",
    label: "Mención en escenario principal",
    tiers: { platino: true, oro: true, pyme: false },
  },
  {
    id: "booth",
    label: "Stand en evento",
    tiers: {
      platino: "Premium",
      oro: "Estándar",
      pyme: "Compartido",
    },
  },
  {
    id: "talk",
    label: "Sesión patrocinada",
    tiers: {
      platino: "Workshop 30 min",
      oro: "Lightning 15 min",
      pyme: false,
    },
  },
  {
    id: "tickets",
    label: "Entradas para equipo",
    tiers: { platino: "4 VIP", oro: "2 VIP", pyme: "4 estándar" },
  },
  {
    id: "social",
    label: "Campaña en redes sociales",
    tiers: { platino: "Dedicada", oro: "Destacada", pyme: "Mención" },
  },
]

export const sponsorFaq: SponsorFaqItem[] = [
  {
    question: "¿Hasta cuándo puedo confirmar mi patrocinio?",
    answer:
      "Recomendamos confirmar antes del 15 de agosto de 2026 para incluir tu logo en materiales impresos y señalética. Los paquetes digitales pueden confirmarse hasta dos semanas antes del evento, sujeto a disponibilidad.",
  },
  {
    question: "¿Puedo personalizar un paquete según mis objetivos?",
    answer:
      "Sí. Los paquetes son una base de referencia. Podemos armar una propuesta a medida si buscas exclusividad por categoría, activaciones específicas o integración con tu programa de reclutamiento.",
  },
  {
    question: "¿Qué perfil de asistentes puedo esperar?",
    answer:
      "Desarrolladores de software, estudiantes de ingeniería, líderes técnicos, emprendedores tech y profesionales de producto interesados en IA, Google Cloud y desarrollo moderno.",
  },
  {
    question: "¿Cómo se factura el patrocinio?",
    answer:
      "Emitimos factura según los requisitos de tu empresa en Ecuador. Los detalles de pago y términos se comparten al confirmar el paquete seleccionado.",
  },
  {
    question: "¿Qué materiales necesitan de mi empresa?",
    answer:
      "Logo en formato vectorial (SVG o AI), guía de marca si aplica, y copy corto para web y redes. Te enviamos especificaciones técnicas al confirmar el patrocinio.",
  },
]
