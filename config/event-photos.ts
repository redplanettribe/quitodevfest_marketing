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
]

const photoMap = new Map(eventPhotos.map((photo) => [photo.id, photo]))

export function getEventPhoto(id: string): EventPhoto {
  const photo = photoMap.get(id)
  if (!photo) {
    throw new Error(`Unknown event photo id: ${id}`)
  }
  return photo
}
