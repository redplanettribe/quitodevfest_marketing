import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export const dynamic = "force-static"

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "services/", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "process/", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "about/", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "contact/", changeFrequency: "monthly" as const, priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "")

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${baseUrl}/${path}` : `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
