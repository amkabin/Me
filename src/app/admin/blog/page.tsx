"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  published: boolean
  createdAt: string
}

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    fetch("/api/blog").then((r) => r.json()).then((d) => d.success && setPosts(d.data))
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-eggplant">Blog</h1>
          <p className="mt-1 text-sm text-muted">Manage blog posts</p>
        </div>
        <Link href="/admin/blog/new" className="rounded-xl bg-coffee px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-coffee-dark">New Post</Link>
      </div>
      <div className="mt-8 space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="flex items-center justify-between rounded-xl border border-border-light/60 bg-cream px-5 py-4 shadow-sm">
            <div>
              <p className="font-medium text-eggplant">{post.title}</p>
              <p className="text-xs text-muted">{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${post.published ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
              {post.published ? "Published" : "Draft"}
            </span>
          </div>
        ))}
        {posts.length === 0 && <p className="py-8 text-center text-sm text-muted">No posts yet.</p>}
      </div>
    </div>
  )
}
