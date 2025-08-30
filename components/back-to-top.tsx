"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full",
        "bg-blue-600 text-white shadow-md transition hover:bg-blue-700",
      )}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
