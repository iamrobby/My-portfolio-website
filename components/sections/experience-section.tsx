"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <div>
      <h2 className="mb-6 text-balance text-2xl font-semibold tracking-tight md:text-3xl">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" aria-hidden="true" />
        <ul className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.li
              key={exp.title + idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="absolute left-4 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-500 md:left-1/2" />
              <Card className="md:mx-auto md:max-w-xl">
                <CardContent className="p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-medium">{exp.title}</h3>
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
