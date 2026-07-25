"use client"

import { useEffect, useState } from "react"

interface Skill {
  id: string
  name: string
  category: string
  published: boolean
}

export default function AdminSkills() {
  const [skills, setSkills] = useState<Skill[]>([])

  useEffect(() => {
    fetch("/api/skills").then((r) => r.json()).then((d) => d.success && setSkills(d.data))
  }, [])

  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight text-eggplant">Skills</h1>
      <p className="mt-1 text-sm text-muted">Manage your technical skills</p>

      <div className="mt-8 space-y-6">
        {categories.map((cat) => (
          <div key={cat}>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-coffee-dark">{cat}</h2>
            <div className="space-y-2">
              {skills.filter((s) => s.category === cat).map((skill) => (
                <div key={skill.id} className="flex items-center justify-between rounded-xl border border-border-light/60 bg-cream px-5 py-3 shadow-sm">
                  <p className="text-sm font-medium text-eggplant">{skill.name}</p>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${skill.published ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                    {skill.published ? "Published" : "Draft"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
