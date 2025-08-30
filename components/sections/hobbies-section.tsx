"use client"

export function HobbiesSection() {
  return (
    <div>
      <h2 className="mb-6 text-balance text-2xl font-semibold tracking-tight md:text-3xl">Fun Facts / Hobbies</h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <li className="rounded-lg border p-4 text-sm leading-relaxed text-muted-foreground">
          I enjoy participating in hackathons and collaborating with peers on open‑source sprints.
        </li>
        <li className="rounded-lg border p-4 text-sm leading-relaxed text-muted-foreground">
          I like reading about AI research and reproducing interesting papers in small prototypes.
        </li>
      </ul>
      <p className="text-center my-3"> Made with ❤️ by Ribhu Basu
      </p>
    </div>
  )
}
