export interface NavItem {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services/" },
  { label: "Process", href: "/process/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
]
