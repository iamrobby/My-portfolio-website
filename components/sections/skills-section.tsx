"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  return (
    <div>
      <h2 className="mb-6 text-balance text-2xl font-semibold tracking-tight md:text-3xl">Skills</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <motion.div
            key={s.category}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <Card className="h-full border-border">
              <CardHeader>
                <CardTitle className="text-base">{s.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border/70 bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
