import { CONTACT_EMAIL } from "@/lib/contact"
import { eventConfig } from "@/config/event"
import { siteConfig } from "@/config/site"

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "es",
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: eventConfig.organizer,
  url: eventConfig.social.gdgCommunity,
  description: siteConfig.description,
  email: CONTACT_EMAIL,
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    contactType: "patrocinios",
    availableLanguage: "Spanish",
  },
}

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: eventConfig.name,
  description: siteConfig.description,
  startDate: eventConfig.dateIso,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: eventConfig.venue,
    address: {
      "@type": "PostalAddress",
      streetAddress: eventConfig.address,
      addressLocality: eventConfig.city,
      addressCountry: "EC",
    },
  },
  organizer: {
    "@type": "Organization",
    name: eventConfig.organizer,
    url: eventConfig.social.gdgCommunity,
  },
  image: `${siteConfig.url.replace(/\/$/, "")}${siteConfig.ogImage}`,
  url: siteConfig.url,
  inLanguage: "es",
}
