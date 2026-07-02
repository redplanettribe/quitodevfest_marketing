import { siteConfig } from "@/config/site"

export const CONTACT_EMAIL = siteConfig.contactEmail

interface ContactMailtoOptions {
  subject?: string
  body?: string
}

export function contactMailto({ subject, body }: ContactMailtoOptions = {}): string {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)
  const query = params.toString()
  return query ? `mailto:${CONTACT_EMAIL}?${query}` : `mailto:${CONTACT_EMAIL}`
}

export function gmailComposeUrl({ subject, body }: ContactMailtoOptions = {}): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
  })
  if (subject) params.set("su", subject)
  if (body) params.set("body", body)
  return `https://mail.google.com/mail/?${params.toString()}`
}
