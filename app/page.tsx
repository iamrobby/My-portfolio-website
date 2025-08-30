"use client"

import TextPressure from "@/components/TextPressure"
import LoadingBar from "@/components/loading-bar"
import { useRouter } from "next/navigation"

export default function LandingHome() {
  const router = useRouter()

  return (
    <main className="min-h-dvh bg-background text-foreground">
      {/* Top loading bar: slower duration, redirect to /app on completion */}
      <LoadingBar durationMs={3500} onDone={() => router.replace("/app")} />

      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div style={{ position: "relative", height: "300px" }} className="rounded-xl border bg-card/50 p-3">
          <TextPressure
            text="*R1BHU"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#CAFA28"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
      </section>
    </main>
  )
}
