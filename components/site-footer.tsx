import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { BackedBy } from "@/components/sections/backed-by"
import { Container } from "@/components/ui/container"
import { eventConfig } from "@/config/event"
import { siteConfig } from "@/config/site"
import { CONTACT_EMAIL } from "@/lib/contact"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-devfest-black text-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">{siteConfig.shortName}</p>
            <p className="mt-2 text-sm text-white/70">{siteConfig.tagline}</p>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {eventConfig.date}
                <br />
                {eventConfig.venue}
              </span>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Enlaces</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/sponsors/"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Paquetes de patrocinio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href={eventConfig.communityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Evento en GDG Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Patrocinios
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-4 text-sm text-white/50">
              Organizado por {eventConfig.organizer}
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <BackedBy variant="dark" className="mb-6" />
          <p className="text-center text-sm text-white/50">
            &copy; {currentYear} {eventConfig.organizer}. DevFest es una marca registrada de Google
            Developers.
          </p>
        </div>
      </Container>
    </footer>
  )
}
