export interface NavItem {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: "Patrocinadores", href: "/sponsors/" },
  { label: "Contacto", href: "/contact/" },
]

export const SPONSORS_PAGE_PATH = "/sponsors/"
