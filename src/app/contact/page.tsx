"use client"

import { useState, FormEvent } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const [cooldown, setCooldown] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setCooldown(true)
    setTimeout(() => {
      setSent(true)
      setCooldown(false)
      setTimeout(() => setSent(false), 4000)
    }, 1000)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mb-4">
        <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
          Inquiry &amp; Collaboration
        </span>
      </div>

      <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
        Ready to build something <span className="text-coffee">real</span>?
      </h1>
      <p className="mt-3 max-w-lg text-muted">
        Let&apos;s talk. I&apos;m open to internships, collaborations, and projects that
        make a difference.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-5">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 md:col-span-3"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-eggplant">
              Full name
            </label>
            <input
              id="name"
              type="text"
              required
              maxLength={100}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className="w-full rounded-xl border border-border-light bg-cream px-4 py-3 text-sm text-eggplant placeholder:text-muted/50 transition-all duration-300 focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-eggplant">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={254}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full rounded-xl border border-border-light bg-cream px-4 py-3 text-sm text-eggplant placeholder:text-muted/50 transition-all duration-300 focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-eggplant">
              Message
            </label>
            <textarea
              id="message"
              required
              minLength={10}
              maxLength={2000}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project or idea..."
              className="w-full resize-none rounded-xl border border-border-light bg-cream px-4 py-3 text-sm text-eggplant placeholder:text-muted/50 transition-all duration-300 focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
            />
            <p className="mt-1 text-right text-xs text-muted">
              {formData.message.length}/2000
            </p>
          </div>
          <button
            type="submit"
            disabled={cooldown}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-coffee px-6 py-3 text-sm font-medium text-white shadow-lg shadow-coffee/20 transition-all duration-300 hover:bg-coffee-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.97]"
          >
            {sent ? "Sent!" : cooldown ? "Sending..." : "Send message"}
            {!sent && !cooldown && (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 7h12M8 3l4 4-4 4" />
              </svg>
            )}
          </button>
        </form>

        <div className="space-y-6 md:col-span-2">
          <div className="rounded-xl border border-border-light/60 bg-cream p-6 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-coffee-dark">
              Contact details
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="mailto:fancymegir01@gmail.com"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-coffee"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="14" height="10" rx="2" />
                  <path d="M1 4l7 5 7-5" />
                </svg>
                fancymegir01@gmail.com
              </a>
              <a
                href="https://github.com/Fancy-nateku"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-coffee"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                github.com/Fancy-nateku
              </a>
              <a
                href="tel:0726379173"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-coffee"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 11.5v2a1.5 1.5 0 01-1.64 1.5 14.85 14.85 0 01-6.47-2.3 14.63 14.63 0 01-4.5-4.5A14.85 14.85 0 01.5 3.14 1.5 1.5 0 012 .5h2A1.5 1.5 0 015.5 2a9.63 9.63 0 00.53 2.11 1.5 1.5 0 01-.34 1.58l-.75.75a12 12 0 004.5 4.5l.75-.75a1.5 1.5 0 011.58-.34A9.63 9.63 0 0014 10.5a1.5 1.5 0 001.5 1.5z" />
                </svg>
                0726 379 173
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
