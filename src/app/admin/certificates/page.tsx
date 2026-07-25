"use client"

import { useEffect, useState } from "react"

interface Certificate {
  id: string
  title: string
  issuer: string
  published: boolean
}

export default function AdminCertificates() {
  const [items, setItems] = useState<Certificate[]>([])

  useEffect(() => {
    fetch("/api/certificates").then((r) => r.json()).then((d) => d.success && setItems(d.data))
  }, [])

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight text-eggplant">Certificates</h1>
      <p className="mt-1 text-sm text-muted">Manage certifications</p>
      <div className="mt-8 space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-xl border border-border-light/60 bg-cream px-5 py-4 shadow-sm">
            <div>
              <p className="font-medium text-eggplant">{item.title}</p>
              <p className="text-xs text-muted">{item.issuer}</p>
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
