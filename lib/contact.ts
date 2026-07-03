import { siteConfig } from "@/config/site"
import {
  sponsorInquiry,
  sponsorTierInquiryBody,
  sponsorTierInquirySubject,
} from "@/config/sponsors"

export const CONTACT_EMAIL = siteConfig.contactEmail
export const CONTACT_PAGE_PATH = "/contact/"
export const PARTICIPA_PAGE_PATH = "/participa/"
export const SPONSORS_PAGE_PATH = "/sponsors/"
export const SPONSOR_FORM_URL = sponsorInquiry.formUrl

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

export function sponsorInquiryMailto(): string {
  return contactMailto({
    subject: sponsorInquiry.emailSubject,
    body: sponsorInquiry.emailBody,
  })
}

export function sponsorInquiryGmailUrl(): string {
  return gmailComposeUrl({
    subject: sponsorInquiry.emailSubject,
    body: sponsorInquiry.emailBody,
  })
}

export function sponsorTierInquiryMailto(tierName: string): string {
  return contactMailto({
    subject: sponsorTierInquirySubject(tierName),
    body: sponsorTierInquiryBody(tierName),
  })
}
