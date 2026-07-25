import { prisma } from "@/lib/db"
import { success } from "@/lib/api-response"
import { withAuth, withErrorHandler } from "@/lib/api-handler"
import type { NextRequest } from "next/server"

const update = withErrorHandler(
  withAuth(async (req: NextRequest, context: { params: Promise<Record<string, string>> }) => {
    const { id } = await context.params
    const body = await req.json()
    const item = await prisma.message.update({ where: { id }, data: body })
    return success(item)
  })
)

const remove = withErrorHandler(
  withAuth(async (_req: NextRequest, context: { params: Promise<Record<string, string>> }) => {
    const { id } = await context.params
    await prisma.message.delete({ where: { id } })
    return success({ ok: true })
  })
)

export const PATCH = update
export const DELETE = remove
