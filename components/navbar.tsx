"use client"

import type React from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
]

function Navbar() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="fixed inset-x-0 top-5 z-40">
      <nav className="mx-auto max-w-5xl px-4 md:px-6" aria-label="Primary">
        <div className="rounded-full border border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 shadow-sm">
          <div className="grid grid-cols-3 items-center gap-2 px-3 py-2 text-sm">
            {/* Brand */}
            <Link href="#about" aria-label="Go to About" onClick={(e) => onClick(e, "#about")}>
              <span className="font-semibold tracking-tight">Ribhu Basu</span>
            </Link>

            {/* Desktop links (md and up) */}
            <div className="hidden items-center justify-center gap-5 md:flex">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => onClick(e, l.href)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="col-start-3 justify-self-end flex items-center gap-2">
              <span className="md:hidden">
                <ModeToggle />
              </span>

              <div className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Open menu">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open navigation menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {LINKS.map((l) => (
                      <DropdownMenuItem key={l.href} asChild>
                        <a href={l.href} onClick={(e) => onClick(e, l.href)}>
                          {l.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <a
                        href="https://drive.google.com/file/d/1ratf5DLRE_tjdnlhoE5JwZwKt2mO1nff/view?usp=sharing"
                        download
                      >
                        Download Resume
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="hidden items-center gap-2 md:flex">
                <ModeToggle />
                <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                  <a href="https://drive.google.com/file/d/1ratf5DLRE_tjdnlhoE5JwZwKt2mO1nff/view?usp=sharing" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Navbar }
export default Navbar
