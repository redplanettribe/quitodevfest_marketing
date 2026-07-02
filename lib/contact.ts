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

export const projectInquiryMailto = contactMailto({ subject: "Project inquiry" })

export const projectInquiryWithTemplateMailto = contactMailto({
  subject: "Project inquiry",
  body: [
    "Hi Citus team,",
    "",
    "I'd like to discuss:",
    "",
    "- What I'm building: ",
    "- Current stage: ",
    "- Timeline: ",
    "- Budget range: ",
    "",
    "Thanks!",
  ].join("\n"),
})

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

export const projectInquiryGmailUrl = gmailComposeUrl({ subject: "Project inquiry" })

export const CONTACT_PAGE_PATH = "/contact/"
