import { prisma } from "@/lib/db"
import { paginated } from "@/lib/api-response"
import { withAuth, withErrorHandler } from "@/lib/api-handler"
import type { NextRequest } from "next/server"

const list = withErrorHandler(
  withAuth(async (req: NextRequest) => {
    const url = new URL(req.url)
    const page = parseInt(url.searchParams.get("page") || "1")
    const pageSize = parseInt(url.searchParams.get("pageSize") || "50")
    const filter = url.searchParams.get("filter")

    const where: Record<string, unknown> = {}
    if (filter === "unread") where.read = false
    else if (filter === "archived") where.archived = true
    else where.archived = false

    const [data, total] = await Promise.all([
      prisma.message.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.message.count({ where }),
    ])

    return paginated(data, total, page, pageSize)
  })
)

export const GET = list
