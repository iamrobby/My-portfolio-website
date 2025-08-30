"use client"

import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <div className="grid items-start gap-8 md:grid-cols-2">
      {/* Left: existing about content */}
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">Hey, I&apos;m</p>
        <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">Ribhu Basu</h1>
        <p className="max-w-2xl text-balance text-muted-foreground leading-relaxed">
          I&apos;m a 3rd-year B.Tech student in Computer Science & Engineering at MCKV Institute of Engineering. I love
          building software and exploring intelligent systems—especially AI/ML, full‑stack development, and open‑source
          contributions.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700">Software Development</Badge>
          <Badge className="bg-teal-500 text-black/90 hover:bg-teal-500">AI & ML</Badge>
          <Badge variant="secondary">Open Source</Badge>
          <Badge variant="secondary">Full‑Stack</Badge>
        </div>
      </div>

      {/* Right: 3D model embed (stacks below on mobile) */}
      <div className="rounded-xl  overflow-hidden h-64 sm:h-80 md:h-96">
        <span className="sr-only">Interactive 3D model canvas</span>
        <iframe
          title="Interactive 3D model"
          src="https://my.spline.design/chips-ibf0Y5EDbidPFDqErrehyJKL/"
          loading="lazy"
          className="h-full w-full"
          frameBorder={3}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}
