"use client"

import { Menu } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { NavLinks } from "@/components/nav-links"
import { Button } from "@/components/ui/button"
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
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-8">
          <Logo />
          <NavLinks className="flex-col items-start gap-4" />
        </div>
      </SheetContent>
    </Sheet>
  )
}
