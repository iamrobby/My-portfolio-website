"use client"

import { useEffect, useState } from "react"

type LoadingBarProps = {
  durationMs?: number
  onDone?: () => void // optional callback when loading hits 100%
}

export default function LoadingBar({ durationMs = 1200, onDone }: LoadingBarProps) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let frame: number
    let start: number | null = null

    const animate = (ts: number) => {
      if (start === null) start = ts
      const elapsed = ts - start
      const pct = Math.min(100, (elapsed / durationMs) * 100)
      // accelerate initially, slow near the end
      const eased = pct < 90 ? pct : 90 + (pct - 90) * 0.25
      setProgress(eased)
      if (pct < 100) {
        frame = requestAnimationFrame(animate)
      } else {
        setDone(true)
        setProgress(100)
        try {
          onDone?.()
        } catch (_) {
          // no-op
        }
        // hide after a moment (kept for reuse elsewhere)
        setTimeout(() => {
          setProgress(0)
          setDone(false)
        }, 500)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [durationMs, onDone])

  return (
    <div
      className="fixed inset-x-0 top-0 z-50"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Page loading"
    >
      <div className="h-0.5 w-full bg-transparent relative overflow-hidden">
        <div
          className="h-0.5 bg-primary transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%`, opacity: done ? 0 : 1 }}
        />
      </div>
    </div>
  )
}
