import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

interface SEOProps {
  title?: string
  description?: string
  url?: string
  noIndex?: boolean
  keywords?: string[]
}

export function generateSEO({
  title,
  description = siteConfig.description,
  url,
  noIndex = false,
  keywords = [],
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const seoUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const allKeywords = [...siteConfig.keywords, ...keywords]

  return {
    title: seoTitle,
    description,
    ...(allKeywords.length > 0 ? { keywords: allKeywords } : {}),
    openGraph: {
      type: "website",
      locale: "es_EC",
      url: seoUrl,
      title: seoTitle,
      description,
      siteName: siteConfig.name,
    },
    alternates: {
      canonical: seoUrl,
    },
    twitter: {
      card: "summary",
      title: seoTitle,
      description,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
