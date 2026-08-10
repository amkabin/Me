import { prisma } from "@/lib/db"
import { projects as fallbackProjects } from "@/lib/data"

export default async function Projects() {
  let projects = fallbackProjects

  try {
    const dbProjects = await prisma.project.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    })
    if (dbProjects.length > 0) projects = dbProjects as unknown as typeof fallbackProjects
  } catch {}

  return (
    <section className="py-16 md:py-24">
      <div className="mb-4">
        <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
          My Work
        </span>
      </div>
      <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
        Projects &amp; <span className="text-coffee">Architecture</span>
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        A collection of projects I&apos;ve built — from trading dashboards to
        discussion platforms. Each project reflects my focus on clean code,
        user experience, and practical problem-solving.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
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
                  className="flex items-center gap-1 font-medium text-coffee-dark transition-colors hover:text-eggplant"
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
                  className="flex items-center gap-1 font-medium text-coffee-dark transition-colors hover:text-eggplant"
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
  )
}
