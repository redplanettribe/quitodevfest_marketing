import Image from "next/image"
import { cn } from "@/lib/utils"
import { eventConfig } from "@/config/event"

export interface BackedByProps {
  variant?: "light" | "dark"
  layout?: "strip" | "grid"
  className?: string
}

interface PartnerLogoDisplay {
  maxHeight: number
  maxWidth: number
}

interface PartnerLogoSet {
  name: string
  url?: string
  logo: string
  logoInverse: string
  logoWidth: number
  logoHeight: number
  logoInverseWidth?: number
  logoInverseHeight?: number
  logoDisplay?: PartnerLogoDisplay
}

interface PartnerLogoProps {
  partner: PartnerLogoSet
  variant: "light" | "dark"
}

interface PartnerGroup {
  label: string
  partners: PartnerLogoSet[]
}

const LOGO_ROW_HEIGHT_PX = 52
const STRIP_LOGO_ROW_HEIGHT_PX = 40

const defaultLogoDisplay: PartnerLogoDisplay = {
  maxHeight: 38,
  maxWidth: 120,
}

const stripLogoGapClass = "gap-x-3 sm:gap-x-4"
const gridLogoGapClass = "gap-x-5 sm:gap-x-6"

const labelClass = (variant: "light" | "dark") =>
  cn(
    "text-center font-mono text-[10px] font-semibold uppercase tracking-wider sm:text-[11px]",
    variant === "dark" ? "text-white/55" : "text-muted-foreground",
  )

function PartnerLogo({ partner, variant }: PartnerLogoProps) {
  const focusRingClass =
    variant === "dark"
      ? "focus-visible:ring-white focus-visible:ring-offset-devfest-black"
      : "focus-visible:ring-devfest-blue focus-visible:ring-offset-devfest-off-white"

  const useInverse = variant === "dark"
  const src = useInverse ? partner.logoInverse : partner.logo
  const width = useInverse ? (partner.logoInverseWidth ?? partner.logoWidth) : partner.logoWidth
  const height = useInverse ? (partner.logoInverseHeight ?? partner.logoHeight) : partner.logoHeight
  const display = partner.logoDisplay ?? defaultLogoDisplay

  const image = (
    <div
      className="flex h-full items-center justify-center"
      style={{ width: display.maxWidth }}
    >
      <Image
        src={src}
        alt={`Logo de ${partner.name}`}
        width={width}
        height={height}
        className="max-h-full max-w-full object-contain object-center"
        style={{
          maxHeight: display.maxHeight,
          maxWidth: display.maxWidth,
        }}
      />
    </div>
  )

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex h-full items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          focusRingClass,
        )}
        aria-label={`${partner.name} — abre en una pestaña nueva`}
      >
        {image}
      </a>
    )
  }

  return <div className="flex h-full items-center justify-center rounded-md">{image}</div>
}

function PartnerLogoRow({
  partners,
  variant,
  layout = "grid",
}: {
  partners: PartnerLogoSet[]
  variant: "light" | "dark"
  layout?: BackedByProps["layout"]
}) {
  const rowHeight = layout === "strip" ? STRIP_LOGO_ROW_HEIGHT_PX : LOGO_ROW_HEIGHT_PX
  const gapClass = layout === "strip" ? stripLogoGapClass : gridLogoGapClass

  return (
    <div
      className={cn("flex items-center justify-center", partners.length > 1 ? gapClass : "")}
      style={{ height: rowHeight }}
    >
      {partners.map((partner) => (
        <PartnerLogo key={partner.name} partner={partner} variant={variant} />
      ))}
    </div>
  )
}

function cellDivider(variant: "light" | "dark", index: number) {
  if (index === 0) return ""

  return variant === "dark"
    ? "sm:border-l sm:border-white/10"
    : "sm:border-l sm:border-devfest-black/8"
}

function PartnerSectionLayout({
  groups,
  variant,
  layout = "grid",
  mobileDividerClass,
}: {
  groups: PartnerGroup[]
  variant: "light" | "dark"
  layout?: BackedByProps["layout"]
  mobileDividerClass?: string
}) {
  const mobileDivider =
    mobileDividerClass ??
    (variant === "dark" ? "border-t border-white/10" : "border-t border-devfest-black/8")

  const desktopGridClass =
    layout === "strip"
      ? "hidden gap-y-2 sm:grid sm:grid-cols-3 sm:grid-rows-[auto_auto] sm:items-center"
      : "hidden gap-y-3 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] sm:grid-rows-[auto_auto] sm:items-center"

  const cellPaddingClass = layout === "strip" ? "px-2.5" : "px-4"

  return (
    <>
      <div className="flex flex-col gap-4 sm:hidden">
        {groups.map((group, index) => (
          <div key={group.label} className={cn(index > 0 && mobileDivider, index > 0 && "pt-4")}>
            <p className={labelClass(variant)}>{group.label}</p>
            <div className="mt-2">
              <PartnerLogoRow partners={group.partners} variant={variant} layout={layout} />
            </div>
          </div>
        ))}
      </div>

      <div className={desktopGridClass}>
        {groups.map((group, index) => (
          <p
            key={`${group.label}-label`}
            className={cn(labelClass(variant), cellPaddingClass, cellDivider(variant, index))}
          >
            {group.label}
          </p>
        ))}

        {groups.map((group, index) => (
          <div
            key={`${group.label}-logos`}
            className={cn("flex justify-center", cellPaddingClass, cellDivider(variant, index))}
          >
            <PartnerLogoRow partners={group.partners} variant={variant} layout={layout} />
          </div>
        ))}
      </div>
    </>
  )
}

function PartnerStrip({
  groups,
  variant,
  layout,
}: {
  groups: PartnerGroup[]
  variant: "light" | "dark"
  layout: BackedByProps["layout"]
}) {
  return (
    <div
      className={cn(
        "w-full rounded-xl border px-3 py-3.5 sm:px-4 sm:py-4",
        variant === "dark"
          ? "border-white/10 bg-white/5"
          : "hero-partners-strip border-devfest-black/8",
      )}
    >
      <PartnerSectionLayout groups={groups} variant={variant} layout={layout} />
    </div>
  )
}

function PartnerGrid({
  groups,
  variant,
  layout,
}: {
  groups: PartnerGroup[]
  variant: "light" | "dark"
  layout: BackedByProps["layout"]
}) {
  return (
    <div
      className={cn(
        variant === "dark"
          ? "sm:rounded-xl sm:border sm:border-white/10 sm:bg-white/5 sm:px-5 sm:py-4"
          : "sm:rounded-xl sm:border sm:border-devfest-black/8 sm:px-5 sm:py-4",
      )}
    >
      <PartnerSectionLayout groups={groups} variant={variant} layout={layout} />
    </div>
  )
}

export function BackedBy({ variant = "light", layout = "grid", className }: BackedByProps) {
  const { backers, allies, poweredBy } = eventConfig

  const groups: PartnerGroup[] = [
    { label: "Respaldado por", partners: backers },
    { label: "En alianza con", partners: allies },
    { label: "Powered by", partners: poweredBy },
  ]

  return (
    <div className={className}>
      {layout === "strip" ? (
        <PartnerStrip groups={groups} variant={variant} layout={layout} />
      ) : (
        <PartnerGrid groups={groups} variant={variant} layout={layout} />
      )}
    </div>
  )
}
