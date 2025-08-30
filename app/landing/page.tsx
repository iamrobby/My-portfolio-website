"use client"

import TextPressure from "@/components/TextPressure"
import LoadingBar from "@/components/loading-bar"
import Link from "next/link"
import { useRouter } from "next/navigation" // for redirect

export default function LandingPage() {
  const router = useRouter() // for redirect

  return (
    <main className="min-h-dvh bg-background text-foreground">
      {/* redirect when 100% */}
      <LoadingBar durationMs={1200} onDone={() => router.replace("/")} />{" "}
      {/* moved the inline comment above the component to avoid a possible JSX parse issue */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {/* Hero with TextPressure */}
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

        {/* Supporting copy + feature highlights */}
        
      </section>
    </main>
  )
}
