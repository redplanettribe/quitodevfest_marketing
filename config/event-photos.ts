export interface EventPhoto {
  id: string
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export const eventPhotos: EventPhoto[] = [
  {
    id: "community-group",
    src: "/event-photos/K7400610_result.jpg",
    alt: "Comunidad de DevFest Quito posando con props del logo de GDG frente al campus USFQ",
    width: 1616,
    height: 1080,
    caption: "Comunidad GDG Quito",
  },
  {
    id: "group-photo",
    src: "/event-photos/K7400577_result.jpg",
    alt: "Asistentes de DevFest Quito en foto grupal frente al campus USFQ",
    width: 1616,
    height: 1080,
    caption: "DevFest en USFQ",
  },
  {
    id: "registration",
    src: "/event-photos/K7400567_result.jpg",
    alt: "Equipo de registro entregando credenciales en el check-in de DevFest Quito",
    width: 1616,
    height: 1080,
    caption: "Registro y bienvenida",
  },
  {
    id: "audience",
    src: "/event-photos/K7400599_result.jpg",
    alt: "Audiencia atenta durante una charla en el auditorio de DevFest Quito",
    width: 1616,
    height: 1080,
    caption: "Charlas y talleres",
  },
  {
    id: "speaker",
    src: "/event-photos/Archivo%203.jpg",
    alt: "Ponente compartiendo en el escenario durante DevFest Quito",
    width: 2776,
    height: 2003,
    caption: "Ponencias en vivo",
  },
  {
    id: "networking",
    src: "/event-photos/Archivo%2015.jpg",
    alt: "Asistentes conversando y haciendo networking entre sesiones de DevFest Quito",
    width: 2914,
    height: 1782,
    caption: "Networking entre sesiones",
  },
  {
    id: "bwai-attendees",
    src: "/event-photos/bwai_attendees2.jpg",
    alt: "Asistentes participando en una edición Build with AI de DevFest Quito",
    width: 4000,
    height: 2667,
    caption: "Build with AI",
  },
  {
    id: "keynote-stage",
    src: "/event-photos/7IV05083.jpg",
    alt: "Ponente en el escenario principal durante una keynote de DevFest Quito",
    width: 4000,
    height: 2667,
    caption: "Keynotes en vivo",
  },
  {
    id: "workshop-audience",
    src: "/event-photos/7IV05087%20(1).jpg",
    alt: "Asistentes siguiendo un taller práctico en DevFest Quito",
    width: 4000,
    height: 2667,
    caption: "Talleres hands-on",
  },
  {
    id: "community-celebration",
    src: "/event-photos/IMG20260425111132.jpg",
    alt: "Comunidad celebrando al cierre de una jornada de DevFest Quito",
    width: 4096,
    height: 2304,
    caption: "Comunidad en acción",
  },
  {
    id: "hallway-networking",
    src: "/event-photos/IMG-20240803-WA0078.jpg",
    alt: "Asistentes conversando en los pasillos entre sesiones de DevFest Quito",
    width: 1600,
    height: 1200,
    caption: "Conexiones entre charlas",
  },
  {
    id: "session-hall",
    src: "/event-photos/7IV05017.jpg",
    alt: "Audiencia atenta en el auditorio durante una sesión de DevFest Quito",
    width: 4000,
    height: 2667,
    caption: "Sesiones técnicas",
  },
  {
    id: "panel-discussion",
    src: "/event-photos/7IV05100.jpg",
    alt: "Panel de expertos compartiendo en el escenario de DevFest Quito",
    width: 2667,
    height: 4000,
    caption: "Paneles y conversaciones",
  },
  {
    id: "outdoor-networking",
    src: "/event-photos/IMG-20240803-WA0034.jpg",
    alt: "Asistentes haciendo networking en los espacios al aire libre del campus USFQ",
    width: 1280,
    height: 960,
    caption: "Networking en campus",
  },
  {
    id: "attendee-moment",
    src: "/event-photos/7IV05075.jpg",
    alt: "Asistente disfrutando la experiencia en los pasillos de DevFest Quito",
    width: 2667,
    height: 4000,
    caption: "La experiencia DevFest",
  },
]

const photoMap = new Map(eventPhotos.map((photo) => [photo.id, photo]))

export function getEventPhoto(id: string): EventPhoto {
  const photo = photoMap.get(id)
  if (!photo) {
    throw new Error(`Unknown event photo id: ${id}`)
  }
  return photo
}
