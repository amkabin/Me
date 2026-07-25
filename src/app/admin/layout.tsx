import Link from "next/link"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: "◈" },
  { label: "Projects", href: "/admin/projects", icon: "⊞" },
  { label: "Skills", href: "/admin/skills", icon: "⚙" },
  { label: "Experience", href: "/admin/experience", icon: "⊡" },
  { label: "Education", href: "/admin/education", icon: "⊡" },
  { label: "Certificates", href: "/admin/certificates", icon: "⊡" },
  { label: "Blog", href: "/admin/blog", icon: "⊡" },
  { label: "Messages", href: "/admin/messages", icon: "⊡" },
  { label: "Settings", href: "/admin/settings", icon: "⚙" },
]

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session?.user) redirect("/login")

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-56 flex-col bg-[#1f2b1d] text-[#D9DBC2]">
        <div className="border-b border-white/10 px-5 py-5">
          <Link href="/admin" className="font-serif text-lg font-bold tracking-tight">
            Brian<span className="text-[#8FA295]">.</span>
          </Link>
          <p className="mt-0.5 text-xs text-[#8FA295]">Admin Panel</p>
        </div>
        <nav className="flex-1 space-y-0.5 px-3 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#D9DBC2]/70 transition-colors hover:bg-white/5 hover:text-[#D9DBC2]"
            >
              <span className="w-4 text-center text-xs">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-white/10 px-5 py-4">
          <Link
            href="/"
            className="text-xs text-[#8FA295] transition-colors hover:text-[#D9DBC2]"
          >
            ← View site
          </Link>
        </div>
      </aside>
      <main className="flex-1 bg-alabaster">
        <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
      </main>
    </div>
  )
}
