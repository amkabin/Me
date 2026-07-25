"use client"

import { useState, FormEvent } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const result = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: false,
    })

    setLoading(false)

    if (result?.error) {
      setError("Invalid email or password")
    } else {
      router.push("/admin")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-alabaster px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-eggplant">
            Admin<span className="text-coffee">.</span>
          </h1>
          <p className="mt-2 text-sm text-muted">Sign in to manage your portfolio</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-border-light/60 bg-cream p-6 shadow-sm"
        >
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-eggplant">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-border-light bg-alabaster px-4 py-3 text-sm text-eggplant placeholder:text-muted/50 transition-all duration-300 focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-eggplant">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-xl border border-border-light bg-alabaster px-4 py-3 text-sm text-eggplant placeholder:text-muted/50 transition-all duration-300 focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/10"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-coffee px-6 py-3 text-sm font-medium text-white shadow-lg shadow-coffee/20 transition-all duration-300 hover:bg-coffee-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  )
}
