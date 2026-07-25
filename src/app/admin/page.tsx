import { prisma } from "@/lib/db"

export default async function AdminDashboard() {
  const [projectCount, skillCount, messageCount, unreadCount] = await Promise.all([
    prisma.project.count(),
    prisma.skill.count(),
    prisma.message.count(),
    prisma.message.count({ where: { read: false } }),
  ])

  const stats = [
    { label: "Projects", value: projectCount },
    { label: "Skills", value: skillCount },
    { label: "Messages", value: messageCount },
    { label: "Unread", value: unreadCount },
  ]

  return (
    <div>
      <h1 className="font-serif text-3xl font-bold tracking-tight text-eggplant">Dashboard</h1>
      <p className="mt-1 text-sm text-muted">Overview of your portfolio</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border-light/60 bg-cream p-5 shadow-sm"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted">{stat.label}</p>
            <p className="mt-2 font-serif text-3xl font-bold text-eggplant">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
