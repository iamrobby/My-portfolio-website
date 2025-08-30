"use client"

import { motion } from "framer-motion"
import { achievements } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function AchievementsSection() {
  return (
    <div>
      <h2 className="mb-6 text-balance text-2xl font-semibold tracking-tight md:text-3xl">Achievements</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {achievements.map((a, idx) => (
          <motion.div
            key={a.title + idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <Card>
              <CardContent className="flex items-start gap-3 p-4">
                <Badge className="bg-blue-600 text-white hover:bg-blue-700">{a.type}</Badge>
                <div>
                  <p className="font-medium">{a.title}</p>
                  <p className="text-sm text-muted-foreground">{a.org}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
