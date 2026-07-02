export interface SponsorTier {
  id: string
  name: string
  description: string
  highlighted?: boolean
  priceLabel?: string
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
  emailBody: `Hola equipo de GDG Quito,

Me interesa patrocinar DevFest 2026. A continuación los detalles de mi empresa:

Empresa:
Persona de contacto:
Correo:
Teléfono:
Paquete de interés (Platino / Oro / Plata / Comunidad):
Objetivo del patrocinio:

Quedo atento/a a su respuesta.

Saludos,`,
  formUrl: "https://forms.gle/devfest2026-patrocinios",
  responseTime: "Respondemos en un máximo de 2 días hábiles.",
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: "platino",
    name: "Platino",
    description: "Máxima visibilidad y presencia exclusiva en el evento.",
    highlighted: true,
    priceLabel: "Consultar",
    deliverables: [
      "Logo destacado en web, app y materiales impresos",
      "Mención en apertura y cierre del evento",
      "Stand premium en zona de alto tráfico",
      "Charla o workshop patrocinado (30 min)",
      "10 entradas VIP para tu equipo",
      "Campaña dedicada en redes sociales de GDG Quito",
      "Distribución de swag en registro",
    ],
  },
  {
    id: "oro",
    name: "Oro",
    description: "Alta visibilidad con espacio para activaciones de marca.",
    priceLabel: "Consultar",
    deliverables: [
      "Logo en web, app y señalética del evento",
      "Mención en apertura del evento",
      "Stand estándar en área de patrocinadores",
      "Lightning talk patrocinado (15 min)",
      "6 entradas para tu equipo",
      "Publicación destacada en redes sociales",
    ],
  },
  {
    id: "plata",
    name: "Plata",
    description: "Presencia de marca visible ante la comunidad tech.",
    priceLabel: "Consultar",
    deliverables: [
      "Logo en web y materiales digitales",
      "Logo en señalética del evento",
      "Mesa compartida en área de patrocinadores",
      "4 entradas para tu equipo",
      "Mención en newsletter pre-evento",
    ],
  },
  {
    id: "comunidad",
    name: "Comunidad",
    description: "Apoya el ecosistema y conecta con desarrolladores locales.",
    priceLabel: "Consultar",
    deliverables: [
      "Logo en página de patrocinadores",
      "Mención en redes sociales",
      "2 entradas para tu equipo",
      "Distribución de material en registro (según disponibilidad)",
    ],
  },
]

export const deliverableMatrix: DeliverableRow[] = [
  {
    id: "web-logo",
    label: "Logo en sitio web",
    tiers: { platino: true, oro: true, plata: true, comunidad: true },
  },
  {
    id: "stage-mention",
    label: "Mención en escenario principal",
    tiers: { platino: true, oro: true, plata: false, comunidad: false },
  },
  {
    id: "booth",
    label: "Stand en evento",
    tiers: {
      platino: "Premium",
      oro: "Estándar",
      plata: "Compartido",
      comunidad: false,
    },
  },
  {
    id: "talk",
    label: "Sesión patrocinada",
    tiers: {
      platino: "Workshop 30 min",
      oro: "Lightning 15 min",
      plata: false,
      comunidad: false,
    },
  },
  {
    id: "tickets",
    label: "Entradas para equipo",
    tiers: { platino: "10", oro: "6", plata: "4", comunidad: "2" },
  },
  {
    id: "social",
    label: "Campaña en redes sociales",
    tiers: { platino: "Dedicada", oro: "Destacada", plata: "Mención", comunidad: "Mención" },
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
