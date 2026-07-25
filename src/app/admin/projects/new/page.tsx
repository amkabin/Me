"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

export default function NewProject() {
  const router = useRouter()
  const [form, setForm] = useState({ title: "", description: "", tags: "", liveUrl: "", githubUrl: "", published: false })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        slug: form.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
        tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      }),
    })
    if (res.ok) router.push("/admin/projects")
  }

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight text-eggplant">New Project</h1>
      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium text-eggplant">Title</label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-xl border border-border-light bg-cream px-4 py-3 text-sm text-eggplant focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-eggplant">Description</label>
          <textarea
            required
            rows={4}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full rounded-xl border border-border-light bg-cream px-4 py-3 text-sm text-eggplant focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-eggplant">Tags (comma-separated)</label>
          <input
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="w-full rounded-xl border border-border-light bg-cream px-4 py-3 text-sm text-eggplant focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-eggplant">Live URL</label>
            <input
              value={form.liveUrl}
              onChange={(e) => setForm({ ...form, liveUrl: e.target.value })}
              className="w-full rounded-xl border border-border-light bg-cream px-4 py-3 text-sm text-eggplant focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-eggplant">GitHub URL</label>
            <input
              value={form.githubUrl}
              onChange={(e) => setForm({ ...form, githubUrl: e.target.value })}
              className="w-full rounded-xl border border-border-light bg-cream px-4 py-3 text-sm text-eggplant focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
            />
          </div>
        </div>
        <label className="flex items-center gap-3 text-sm text-eggplant">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
            className="h-4 w-4 rounded border-border-light text-coffee focus:ring-coffee"
          />
          Published
        </label>
        <button
          type="submit"
          className="rounded-xl bg-coffee px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-coffee-dark"
        >
          Create Project
        </button>
      </form>
    </div>
  )
}
