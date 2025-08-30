"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  return (
    <div>
      <h2 className="mb-6 text-balance text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <motion.div key={p.title} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 250, damping: 20 }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src="/project-preview.png"
                  alt={`${p.title} preview`}
                  className="h-40 w-full rounded-md border object-cover"
                />
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  {p.demo && (
                    <Button asChild size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  )}
                  {p.github && (
                    <Button asChild size="sm" variant="secondary">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
