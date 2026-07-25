"use client"

import { useEffect, useState } from "react"

interface Education {
  id: string
  institution: string
  degree: string
  published: boolean
}

export default function AdminEducation() {
  const [items, setItems] = useState<Education[]>([])

  useEffect(() => {
    fetch("/api/education").then((r) => r.json()).then((d) => d.success && setItems(d.data))
  }, [])

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight text-eggplant">Education</h1>
      <p className="mt-1 text-sm text-muted">Manage education history</p>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-xl border border-border-light/60 bg-cream px-5 py-4 shadow-sm">
            <div>
              <p className="font-medium text-eggplant">{item.degree}</p>
              <p className="text-xs text-muted">{item.institution}</p>
            </div>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${item.published ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
              {item.published ? "Published" : "Draft"}
            </span>
          </div>
        ))}
        {items.length === 0 && <p className="py-8 text-center text-sm text-muted">No entries yet.</p>}
      </div>
    </div>
  )
}
