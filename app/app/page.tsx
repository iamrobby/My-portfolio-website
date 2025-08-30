"use client"

import { useEffect, useState } from "react"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { ContactSection } from "@/components/sections/contact-section"
import { HobbiesSection } from "@/components/sections/hobbies-section"
import { BackToTop } from "@/components/back-to-top"
import { motion } from "framer-motion"

export default function HomePage() {
  // Enable reduced motion preference
  const [prefersReduced, setPrefersReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener?.("change", handler)
    return () => mq.removeEventListener?.("change", handler)
  }, [])

  const sectionVariant = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.section
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="pt-28 md:pt-32"
        >
          <AboutSection />
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="py-16 md:py-20"
        >
          <SkillsSection />
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="py-16 md:py-20"
        >
          <ProjectsSection />
        </motion.section>

        <motion.section
          id="experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="py-16 md:py-20"
        >
          <ExperienceSection />
        </motion.section>

        <motion.section
          id="achievements"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="py-16 md:py-20"
        >
          <AchievementsSection />
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="py-16 md:py-20"
        >
          <ContactSection />
        </motion.section>

        <motion.section
          id="hobbies"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="py-16 md:py-20"
        >
          <HobbiesSection />
        </motion.section>
      </div>

      <BackToTop />
      <Toaster />
    </main>
  )
}
