"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

interface ParticleFieldProps {
  className?: string
  density?: number
  color?: string
}

const CONNECTION_DISTANCE = 120
const MAX_VELOCITY = 0.35

function getParticleCount(width: number, density?: number): number {
  if (density !== undefined) {
    return density
  }
  return width < 640 ? 28 : width < 1024 ? 38 : 48
}

function createParticles(count: number, width: number, height: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * MAX_VELOCITY,
    vy: (Math.random() - 0.5) * MAX_VELOCITY,
    radius: Math.random() * 1.2 + 0.8,
    alpha: Math.random() * 0.35 + 0.15,
  }))
}

function resolveColor(color?: string): string {
  if (color) {
    return color
  }
  if (typeof window === "undefined") {
    return "#e8551c"
  }
  return (
    getComputedStyle(document.documentElement).getPropertyValue("--cta-primary").trim() ||
    "#e8551c"
  )
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  width: number,
  height: number,
  color: string,
  animate: boolean,
) {
  ctx.clearRect(0, 0, width, height)

  if (animate) {
    for (const particle of particles) {
      particle.x += particle.vx
      particle.y += particle.vy

      if (particle.x < 0) particle.x = width
      if (particle.x > width) particle.x = 0
      if (particle.y < 0) particle.y = height
      if (particle.y > height) particle.y = 0
    }
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i]
      const b = particles[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const distance = Math.hypot(dx, dy)

      if (distance < CONNECTION_DISTANCE) {
        const lineAlpha = (1 - distance / CONNECTION_DISTANCE) * 0.08
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.globalAlpha = lineAlpha
        ctx.lineWidth = 0.5
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }
  }

  for (const particle of particles) {
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.globalAlpha = particle.alpha
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.globalAlpha = 1
}

export function ParticleField({ className, density, color }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) {
      return
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      return
    }

    const resolvedColor = resolveColor(color)
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let animationFrameId = 0
    let particles: Particle[] = []
    let width = 0
    let height = 0

    const resize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      width = rect.width
      height = rect.height

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = getParticleCount(width, density)
      particles = createParticles(count, width, height)
    }

    const animate = () => {
      drawFrame(ctx, particles, width, height, resolvedColor, true)
      animationFrameId = window.requestAnimationFrame(animate)
    }

    resize()
    drawFrame(ctx, particles, width, height, resolvedColor, false)

    if (!prefersReducedMotion) {
      animate()
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [density, color])

  return (
    <div ref={containerRef} className={cn("pointer-events-none", className)} aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
