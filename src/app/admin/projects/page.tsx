"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  published: boolean
  order: number
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => d.success && setProjects(d.data))
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-eggplant">Projects</h1>
          <p className="mt-1 text-sm text-muted">Manage your portfolio projects</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="rounded-xl bg-coffee px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-coffee-dark"
        >
          New Project
        </Link>
      </div>

      <div className="mt-8 space-y-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/admin/projects/${project.id}`}
            className="flex items-center justify-between rounded-xl border border-border-light/60 bg-cream px-5 py-4 shadow-sm transition-colors hover:border-coffee-light"
          >
            <div>
              <p className="font-medium text-eggplant">{project.title}</p>
              <p className="text-xs text-muted">Order: {project.order}</p>
            </div>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                project.published
                  ? "bg-green-100 text-green-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {project.published ? "Published" : "Draft"}
            </span>
          </Link>
        ))}
        {projects.length === 0 && (
          <p className="py-8 text-center text-sm text-muted">No projects yet.</p>
        )}
      </div>
    </div>
  )
}
