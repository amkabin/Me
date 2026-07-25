import { prisma } from "@/lib/db"
import { success, error, paginated } from "@/lib/api-response"
import { withAuth, withErrorHandler } from "@/lib/api-handler"
import type { NextRequest } from "next/server"

type ModelName = "project" | "skill" | "experience" | "education" | "certificate" | "blogPost"

type PrismaDelegate = {
  findMany: (args: Record<string, unknown>) => Promise<unknown[]>
  findUnique: (args: Record<string, unknown>) => Promise<unknown>
  create: (args: Record<string, unknown>) => Promise<unknown>
  update: (args: Record<string, unknown>) => Promise<unknown>
  delete: (args: Record<string, unknown>) => Promise<unknown>
  count: (args?: Record<string, unknown>) => Promise<number>
}

const prismaModels: Record<ModelName, PrismaDelegate> = {
  project: prisma.project as unknown as PrismaDelegate,
  skill: prisma.skill as unknown as PrismaDelegate,
  experience: prisma.experience as unknown as PrismaDelegate,
  education: prisma.education as unknown as PrismaDelegate,
  certificate: prisma.certificate as unknown as PrismaDelegate,
  blogPost: prisma.blogPost as unknown as PrismaDelegate,
}

export function createCrudHandlers(model: ModelName) {
  const delegate = prismaModels[model]

  const list = withErrorHandler(
    withAuth(async (req: NextRequest) => {
      const url = new URL(req.url)
      const page = parseInt(url.searchParams.get("page") || "1")
      const pageSize = parseInt(url.searchParams.get("pageSize") || "50")
      const published = url.searchParams.get("published")

      const where: Record<string, unknown> = {}
      if (published !== null) where.published = published === "true"

      const [data, total] = await Promise.all([
        delegate.findMany({
          where,
          orderBy: { order: "asc" },
          skip: (page - 1) * pageSize,
          take: pageSize,
        }),
        delegate.count({ where }),
      ])

      return paginated(data, total, page, pageSize)
    })
  )

  const getById = withErrorHandler(
    withAuth(async (_req: NextRequest, context: { params: Promise<Record<string, string>> }) => {
      const { id } = await context.params
      const item = await delegate.findUnique({
        where: { id },
      })
      if (!item) return error("Not found", 404)
      return success(item)
    })
  )

  const create = withErrorHandler(
    withAuth(async (req: NextRequest) => {
      const body = await req.json()
      const item = await delegate.create({ data: body })
      return success(item, 201)
    })
  )

  const update = withErrorHandler(
    withAuth(async (req: NextRequest, context: { params: Promise<Record<string, string>> }) => {
      const { id } = await context.params
      const body = await req.json()
      const item = await delegate.update({ where: { id }, data: body })
      return success(item)
    })
  )

  const remove = withErrorHandler(
    withAuth(async (_req: NextRequest, context: { params: Promise<Record<string, string>> }) => {
      const { id } = await context.params
      await delegate.delete({ where: { id } })
      return success({ ok: true })
    })
  )

  return { list, getById, create, update, remove }
}
