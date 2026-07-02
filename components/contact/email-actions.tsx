"use client"

import { Copy, ExternalLink, Mail } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { CTAButton } from "@/components/ui/cta-button"
import {
  CONTACT_EMAIL,
  projectInquiryGmailUrl,
  projectInquiryWithTemplateMailto,
} from "@/lib/contact"

export function ContactEmailActions() {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      toast.success("Email copied", { description: CONTACT_EMAIL })
    } catch {
      toast.error("Could not copy email", {
        description: `Copy it manually: ${CONTACT_EMAIL}`,
      })
    }
  }

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
        <CTAButton
          href={projectInquiryGmailUrl}
          icon={ExternalLink}
          iconPosition="right"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full justify-center sm:w-auto"
        >
          Compose in Gmail
        </CTAButton>
        <CTAButton
          href={projectInquiryWithTemplateMailto}
          icon={Mail}
          size="lg"
          variant="outline"
          className="w-full justify-center sm:w-auto"
        >
          Open email app
        </CTAButton>
      </div>

      <Button
        type="button"
        variant="ghost"
        onClick={copyEmail}
        className="gap-2 transition-all duration-200 hover:opacity-80 active:scale-95"
      >
        <Copy className="h-4 w-4" aria-hidden="true" />
        Copy {CONTACT_EMAIL}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        No mail app configured? Use Gmail or copy the address above.
      </p>
    </div>
  )
}
