"use client"

import { useEffect, useRef } from "react"

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Generate stars
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 3000)
    const stars: {
      x: number
      y: number
      size: number
      alpha: number
      speed: number
      color: string
    }[] = []

    const starColors = ["#ffffff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#f472b6", "#38bdf8"]

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.015 + 0.005,
        color: starColors[Math.floor(Math.random() * starColors.length)]
      })
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw starry galaxy particles
      stars.forEach((star) => {
        star.alpha += Math.sin(Date.now() * star.speed) * 0.01
        const clampedAlpha = Math.max(0.1, Math.min(1, star.alpha))

        ctx.save()
        ctx.globalAlpha = clampedAlpha
        ctx.fillStyle = star.color
        ctx.shadowBlur = star.size > 1 ? 6 : 0
        ctx.shadowColor = star.color

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030014]">
      {/* Dynamic Cosmic Nebulas (radial gradient glows) */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-transparent rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-fuchsia-900/25 via-purple-950/20 to-transparent rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-10 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-blue-900/25 via-violet-950/20 to-transparent rounded-full blur-[150px]" />
      <div className="absolute top-2/3 left-10 w-[500px] h-[500px] bg-gradient-to-r from-violet-900/20 to-pink-900/15 rounded-full blur-[130px]" />

      {/* Canvas Stars Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />
    </div>
  )
}
