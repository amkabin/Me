import { prisma } from "@/lib/db"
import { success } from "@/lib/api-response"
import { withAuth, withErrorHandler } from "@/lib/api-handler"

const list = withErrorHandler(
  withAuth(async () => {
    const data = await prisma.siteSetting.findMany({ orderBy: { key: "asc" } })
    return success(data)
  })
)

export const GET = list
