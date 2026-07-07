"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-border-light/40 bg-alabaster/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-tight text-eggplant"
        >
          Fancy<span className="text-coffee">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-coffee ${
                pathname === link.href
                  ? "text-coffee after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-coffee"
                  : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-sand/50 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="flex flex-col items-center gap-[5px]">
            <span className={`block h-[2px] w-5 rounded-full bg-eggplant transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 rounded-full bg-eggplant transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 rounded-full bg-eggplant transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 top-[57px] z-40 flex flex-col items-center gap-8 bg-alabaster/95 pt-16 backdrop-blur-2xl transition-all duration-400 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-2xl font-medium transition-colors hover:text-coffee ${
              pathname === link.href ? "text-coffee" : "text-muted"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
