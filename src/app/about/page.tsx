import { skills } from "@/lib/data"

export default function About() {
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
            Software engineer with a passion for <span className="text-coffee">solving real problems</span>
          </h1>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              I&apos;m Fancy Nateku Megiri, a software engineering student at
              Kisii University. I build full-stack applications that solve
              practical problems — from financial management tools for farmers
              to community platforms for student organizations.
            </p>
            <p>
              My journey into software started with a simple observation: the
              people around me — farmers, small business owners, student groups
              — were managing everything on paper or scattered spreadsheets.
              Building AgriTrack for my family&apos;s farming operation showed me
              how the right tools can change how people work.
            </p>
            <p>
              Later, taking over the KSUCU-MC platform taught me something
              different. I learned that great code means nothing if it ships
              broken. A deployment failure early on made me obsess over
              client-server communication, error handling, and systems that
              don&apos;t surprise you at 2 AM.
            </p>
            <p>
              I&apos;m currently exploring machine learning, IoT, and big data —
              looking for ways to connect the physical and digital worlds.
              I believe the best software is the kind that quietly makes
              people&apos;s lives better, without them having to think about it.
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="sticky top-28">
            <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-2 border-coffee-light/50 bg-gradient-to-br from-coffee-light/20 to-sand shadow-xl md:mx-0">
              <div className="flex h-full items-center justify-center">
                <span className="font-serif text-5xl text-coffee-light/40">F</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="mb-4 text-center">
          <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
            Technologies & Tools
          </span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-border-light/60 bg-cream p-6 shadow-sm">
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-coffee-dark">
                {category === "frontend" ? "Frontend" : category === "backend" ? "Backend" : "Tools & Workflow"}
              </h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.name}>
                    <p className="text-sm font-medium text-eggplant">{item.name}</p>
                    <p className="text-xs text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
