import { prisma } from "@/lib/db"

export default async function Footer() {
  let socialLinks: { id: string; platform: string; url: string }[] = []

  try {
    socialLinks = await prisma.socialLink.findMany({
      orderBy: { order: "asc" },
    }) as typeof socialLinks
  } catch {
    // DB not available yet — render without social links
  }

  return (
    <footer className="border-t border-border-light/40 py-8 text-center text-sm text-muted">
      {socialLinks.length > 0 && (
        <div className="mb-3 flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-coffee"
            >
              {link.platform}
            </a>
          ))}
        </div>
      )}
      <p>&copy; {new Date().getFullYear()} Brian Philip. All rights reserved.</p>
    </footer>
  )
}
