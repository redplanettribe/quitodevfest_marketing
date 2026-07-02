"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { eventConfig } from "@/config/event"
import { cn } from "@/lib/utils"

interface HeroVideoBackgroundProps {
  className?: string
}

export function HeroVideoBackground({ className }: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [preferReducedMotion, setPreferReducedMotion] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPreferReducedMotion(mediaQuery.matches)

    function handleChange(event: MediaQueryListEvent) {
      setPreferReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (preferReducedMotion || videoFailed) return
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {
      setVideoFailed(true)
    })
  }, [preferReducedMotion, videoFailed])

  const showVideo = !preferReducedMotion && !videoFailed

  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden="true">
      {showVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover brightness-[1.04] saturate-[1.12] contrast-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          poster={eventConfig.assets.heroPoster}
          onError={() => setVideoFailed(true)}
        >
          <source src={eventConfig.assets.heroVideo} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={eventConfig.assets.heroPoster}
          alt=""
          fill
          className="object-cover brightness-[1.04] saturate-[1.12] contrast-[1.02]"
          priority
          sizes="100vw"
        />
      )}
      <div className="hero-video-overlay absolute inset-0" />
      <div className="hero-glow absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-25" />
    </div>
  )
}
