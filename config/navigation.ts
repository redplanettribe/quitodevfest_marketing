export interface NavItem {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: "Participa", href: "/participa/" },
  { label: "Patrocinadores", href: "/sponsors/" },
  { label: "Contacto", href: "/contact/" },
]

export const PARTICIPA_PAGE_PATH = "/participa/"
export const SPONSORS_PAGE_PATH = "/sponsors/"
