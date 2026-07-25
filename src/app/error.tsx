"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="inline-block rounded-full border border-coffee-light px-4 py-1 text-xs font-medium uppercase tracking-wider text-coffee-dark">
        Error
      </span>
      <h1 className="mt-6 font-serif text-5xl font-bold tracking-tight md:text-6xl">
        Something went <span className="text-coffee">wrong</span>
      </h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-coffee px-6 py-3 text-sm font-medium text-white shadow-lg shadow-coffee/20 transition-all duration-300 hover:bg-coffee-dark hover:shadow-xl active:scale-[0.97]"
      >
        Try again
      </button>
    </div>
  )
}
