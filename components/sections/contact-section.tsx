"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // In a real app, POST to an API route here.
      await new Promise((r) => setTimeout(r, 700))
      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." })
      setForm({ name: "", email: "", message: "" })
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2 className="mb-6 text-balance text-2xl font-semibold tracking-tight md:text-3xl">Contact Me</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <form onSubmit={submit} className="space-y-3 md:col-span-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <Input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Message</label>
            <Textarea
              required
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="How can I help?"
              rows={5}
            />
          </div>
          <Button type="submit" disabled={loading} className="bg-blue-600 text-white hover:bg-blue-700">
            {loading ? "Sending…" : "Send message"}
          </Button>
        </form>

        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Email</p>
            <a
              className="mt-1 inline-flex items-center gap-2 text-sm hover:underline"
              href="mailto:basuribhu24@gmail.com"
            >
              <Mail className="h-4 w-4" /> basuribhu24@gmail.com
            </a>
          </div>
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Social</p>
            <div className="mt-1 flex items-center gap-3">
              <a
                href="https://github.com/iamrobby"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ribhu-basu-03268628b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
