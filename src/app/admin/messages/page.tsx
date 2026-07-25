"use client"

import { useEffect, useState } from "react"

interface Message {
  id: string
  name: string
  email: string
  subject: string | null
  body: string
  read: boolean
  createdAt: string
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [filter, setFilter] = useState("inbox")

  const load = () => {
    fetch(`/api/messages?filter=${filter}`).then((r) => r.json()).then((d) => d.success && setMessages(d.data))
  }

  useEffect(() => { load() }, [filter]) // eslint-disable-line react-hooks/exhaustive-deps

  const toggleRead = async (msg: Message) => {
    await fetch(`/api/messages/${msg.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ read: !msg.read }),
    })
    load()
  }

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight text-eggplant">Messages</h1>
      <p className="mt-1 text-sm text-muted">Contact form submissions</p>

      <div className="mt-6 flex gap-2">
        {["inbox", "unread", "archived"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              filter === f ? "bg-coffee text-white" : "bg-cream text-muted hover:text-eggplant"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`rounded-xl border px-5 py-4 shadow-sm transition-colors ${
              msg.read ? "border-border-light/60 bg-cream" : "border-coffee-light bg-cream"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-eggplant">{msg.name}</p>
                <p className="text-xs text-muted">{msg.email}</p>
              </div>
              <button
                onClick={() => toggleRead(msg)}
                className={`rounded px-2 py-1 text-xs font-medium ${
                  msg.read ? "text-muted hover:text-eggplant" : "text-coffee"
                }`}
              >
                {msg.read ? "Mark unread" : "Mark read"}
              </button>
            </div>
            {msg.subject && <p className="mt-2 text-sm font-medium text-eggplant">{msg.subject}</p>}
            <p className="mt-1 text-sm text-muted">{msg.body}</p>
            <p className="mt-2 text-xs text-muted">{new Date(msg.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
        {messages.length === 0 && <p className="py-8 text-center text-sm text-muted">No messages.</p>}
      </div>
    </div>
  )
}
