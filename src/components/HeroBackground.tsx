import React, { useEffect, useRef } from 'react'

export const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Grid points with subtle floating motion
    const cols = 18
    const rows = 12
    const points: { x: number; y: number; originX: number; originY: number; vx: number; vy: number; phase: number }[] = []

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = (width / (cols - 1)) * i
        const y = (height / (rows - 1)) * j
        points.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    let t = 0

    const render = () => {
      t += 0.008
      ctx.clearRect(0, 0, width, height)

      // Base subtle ambient gradient
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.4,
        20,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.7
      )
      grad.addColorStop(0, 'rgba(163, 230, 53, 0.035)')
      grad.addColorStop(0.6, 'rgba(13, 15, 18, 0.2)')
      grad.addColorStop(1, 'rgba(8, 9, 11, 0.8)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      // Draw subtle connective geometric lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 1

      // Subtle shifting nodes
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        p.x = p.originX + Math.sin(t + p.phase) * 12
        p.y = p.originY + Math.cos(t * 0.8 + p.phase) * 10

        // Draw dot
        const isAccent = (i * 7) % 23 === 0
        ctx.fillStyle = isAccent ? 'rgba(163, 230, 53, 0.45)' : 'rgba(255, 255, 255, 0.12)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, isAccent ? 2 : 1.2, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw horizontal & vertical wave lines
      for (let row = 0; row < rows; row++) {
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)'
        for (let col = 0; col < cols; col++) {
          const pt = points[col * rows + row]
          if (col === 0) ctx.moveTo(pt.x, pt.y)
          else ctx.lineTo(pt.x, pt.y)
        }
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08090b]/80 via-transparent to-[#08090b]/80" />
    </div>
  )
}
