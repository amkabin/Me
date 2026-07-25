import { prisma } from "@/lib/db"
import { getSettingJson } from "@/lib/settings"
import { skills as fallbackSkills, getCategoryLabel } from "@/lib/data"

export default async function About() {
  let skills: { name: string; description?: string; category: string }[] = []
  let fetchedFromDb = false

  try {
    const dbSkills = await prisma.skill.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    })
    if (dbSkills.length > 0) {
      skills = dbSkills as unknown as typeof skills
      fetchedFromDb = true
    }
  } catch {}

  if (!fetchedFromDb) {
    skills = Object.entries(fallbackSkills).flatMap(([category, items]) =>
      items.map((item) => ({ ...item, category }))
    )
  }

  let aboutContent: string[] | null = null
  try {
    aboutContent = await getSettingJson<string[]>("about_content")
  } catch {}

  const grouped = skills.reduce<Record<string, typeof skills>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {})

  return (
    <section className="py-16 md:py-24">
      <div className="mb-4">
        <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
          About
        </span>
      </div>

      <div className="grid gap-16 md:grid-cols-5">
        <div className="md:col-span-3">
          <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Aspiring software engineer with a passion for <span className="text-coffee">building modern web apps</span>
          </h1>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            {aboutContent && aboutContent.length > 0 ? (
              aboutContent.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <>
                <p>
                  Hello, I&apos;m Brian Philip, an aspiring software engineer passionate about building modern web applications and solving real-world problems through technology. I enjoy developing full-stack applications using React, Node.js, Express, MongoDB, and MySQL. I focus on writing clean, maintainable code and creating intuitive user experiences while continually learning new technologies.
                </p>
                <p>
                  My journey into software started with curiosity about how websites and applications work behind the scenes. That curiosity led me to explore frontend design, backend logic, and database management — eventually building full-stack projects from the ground up.
                </p>
                <p>
                  I believe the best software solves real problems for real people. Whether it&apos;s a trading journal for tracking investments, an anonymous discussion platform, or a simple expense tracker, I enjoy creating tools that make everyday tasks easier and more efficient.
                </p>
                <p>
                  I&apos;m currently focused on deepening my understanding of full-stack development, exploring new technologies, and building projects that challenge me to grow as a developer.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="sticky top-28">
            <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-2 border-coffee-light/50 bg-gradient-to-br from-coffee-light/20 to-sand shadow-xl md:mx-0">
              <div className="flex h-full items-center justify-center">
                <span className="font-serif text-5xl text-coffee-light/40">B</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {Object.keys(grouped).length > 0 && (
        <div className="mt-24">
          <h2 className="mb-4 text-center">
            <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
              Technologies & Tools
            </span>
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
                  {Object.entries(grouped).map(([category, items]) => (
              <div key={category} className="rounded-xl border border-border-light/60 bg-cream p-6 shadow-sm">
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
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
