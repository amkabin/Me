import Link from "next/link"
import { prisma } from "@/lib/db"
import { getSetting } from "@/lib/settings"
import { projects as fallbackProjects, skills as fallbackSkills, getCategoryLabel } from "@/lib/data"

interface SkillItem {
  name: string
  description?: string | null
  category: string
}

export default async function Home() {
  let projects = fallbackProjects as (typeof fallbackProjects[number] & { id?: string })[]
  let skills: SkillItem[] = []
  let skillsFetched = false
  let heroTagline = "Aspiring Software Engineer | Full-Stack Web Developer"
  let heroBio = "I am an aspiring software engineer passionate about building modern, responsive, and user-focused web applications."

  try {
    const dbProjects = await prisma.project.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    })
    if (dbProjects.length > 0) projects = dbProjects as typeof projects
  } catch {}

  try {
    const dbSkills = await prisma.skill.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    })
    if (dbSkills.length > 0) {
      skills = dbSkills as unknown as SkillItem[]
      skillsFetched = true
    }
  } catch {}

  if (!skillsFetched) {
    skills = Object.entries(fallbackSkills).flatMap(([category, items]) =>
      items.map((item) => ({ ...item, category }))
    )
  }

  try {
    heroTagline = await getSetting("hero_tagline")
    heroBio = await getSetting("hero_bio")
  } catch {}

  const featured = projects.slice(0, 3)

  const grouped = skills.reduce<Record<string, SkillItem[]>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {})

  return (
    <>
      <section className="flex flex-col items-center gap-12 py-20 md:flex-row md:py-32">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
            Aspiring Software Engineer
          </span>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Brian{" "}
            <span className="text-coffee">Philip</span>
          </h1>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-muted md:mx-0 md:text-lg">
            {heroTagline}
          </p>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted md:mx-0">
            {heroBio}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link
              href="/projects"
              className="rounded-xl bg-coffee px-6 py-3 text-sm font-medium text-white shadow-lg shadow-coffee/20 transition-all duration-300 hover:bg-coffee-dark hover:shadow-xl hover:shadow-coffee-dark/20 active:scale-[0.97]"
            >
              View Projects
            </Link>
            <a
              href="https://github.com/amkabin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-coffee-light px-6 py-3 text-sm font-medium text-coffee-dark transition-all duration-300 hover:border-coffee hover:text-coffee active:scale-[0.97]"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-xl border border-coffee-light px-6 py-3 text-sm font-medium text-coffee-dark transition-all duration-300 hover:border-coffee hover:text-coffee active:scale-[0.97]"
            >
              Download CV
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-coffee-light px-6 py-3 text-sm font-medium text-coffee-dark transition-all duration-300 hover:border-coffee hover:text-coffee active:scale-[0.97]"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto h-80 w-64 sm:h-96 sm:w-72">
            <div className="h-full w-full overflow-hidden rounded-[2rem] border-2 border-coffee-light/50 bg-gradient-to-br from-coffee-light/20 to-sand shadow-xl">
              <div className="flex h-full items-center justify-center">
                <span className="font-serif text-4xl text-coffee-light/40">B</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
            Featured Projects
          </span>
        </div>
        <h2 className="text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
          A selection of recent work
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Built with modern tools and best practices across different domains.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border-light/60 bg-cream p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-coffee-light hover:shadow-lg"
            >
              <div className="mb-4 flex h-44 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-coffee-light/30 to-sand">
                <span className="font-serif text-xl font-bold text-coffee-light/50">
                  {project.title}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold tracking-tight text-eggplant">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-md bg-coffee-light/15 px-2.5 py-1 text-[11px] font-medium text-coffee-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium text-coffee transition-colors hover:text-coffee-dark"
                  >
                    Live
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 1H1v10h10V7M7 1h4v4M5 7l6-6" />
                    </svg>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium text-coffee transition-colors hover:text-coffee-dark"
                  >
                    Code
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M6 0C2.69 0 0 2.69 0 6c0 2.65 1.72 4.9 4.1 5.7.3.05.41-.13.41-.29v-1.02c-1.67.36-2.02-.8-2.02-.8-.27-.7-.67-.88-.67-.88-.55-.38.04-.37.04-.37.61.04.93.63.93.63.54.93 1.42.66 1.77.5.05-.4.21-.66.38-.81-1.35-.15-2.77-.68-2.77-3.02 0-.67.24-1.22.63-1.65-.06-.15-.27-.78.06-1.63 0 0 .52-.17 1.7.63A5.86 5.86 0 016 2.9c.52.01 1.04.07 1.53.21 1.18-.8 1.7-.63 1.7-.63.33.85.12 1.48.06 1.63.39.43.63.98.63 1.65 0 2.34-1.42 2.87-2.77 3.02.22.19.41.56.41 1.13v1.68c0 .16.11.35.42.29A6.01 6.01 0 0012 6c0-3.31-2.69-6-6-6z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {Object.keys(grouped).length > 0 && (
        <section className="py-20 md:py-28">
          <div className="mb-4 text-center">
            <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
              Technologies & Tools
            </span>
          </div>
          <h2 className="text-center font-serif text-3xl font-bold tracking-tight md:text-4xl">
            My tech <span className="text-coffee">stack</span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
                  {Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <div className="rounded-xl border border-border-light/60 bg-cream p-6 shadow-sm">
                  <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-coffee-dark">
                    {getCategoryLabel(category)}
                  </h3>
                  <div className="space-y-4">
                    {items.map((item, i) => (
                      <div key={i}>
                        <p className="text-sm font-medium text-eggplant">{item.name}</p>
                        {item.description && <p className="text-xs text-muted">{item.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="py-20 text-center md:py-28">
        <div className="mb-4">
          <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
            Let&apos;s work together
          </span>
        </div>
        <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
          Ready to build something <span className="text-coffee">real</span>?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          I&apos;m open to internships, collaborations, and interesting projects.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-coffee px-8 py-3 text-sm font-medium text-white shadow-lg shadow-coffee/20 transition-all duration-300 hover:bg-coffee-dark hover:shadow-xl active:scale-[0.97]"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 7h12M8 3l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
