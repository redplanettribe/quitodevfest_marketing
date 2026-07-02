"use client"

import { Menu } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { NavLinks } from "@/components/nav-links"
import { CTAButton } from "@/components/ui/cta-button"
import { Button } from "@/components/ui/button"
import { SPONSORS_PAGE_PATH } from "@/config/navigation"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menú de navegación"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-8">
          <Logo />
          <NavLinks className="flex-col items-start gap-4" />
          <CTAButton href={SPONSORS_PAGE_PATH} className="w-full justify-center">
            Patrocinar
          </CTAButton>
        </div>
      </SheetContent>
    </Sheet>
  )
}
