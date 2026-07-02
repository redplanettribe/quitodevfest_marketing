import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { eventConfig } from "@/config/event"
import { siteConfig } from "@/config/site"
import { websiteSchema } from "@/lib/schema"
import { AccessibilitySkipLinks } from "@/components/accessibility-skip-links"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AppToaster } from "@/components/app-toaster"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  ...(siteConfig.keywords.length > 0 ? { keywords: siteConfig.keywords } : {}),
  authors: [{ name: eventConfig.organizer }],
  creator: eventConfig.organizer,
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.className} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AccessibilitySkipLinks />
        <SiteHeader />
        {children}
        <SiteFooter />
        <AppToaster />
      </body>
    </html>
  )
}
